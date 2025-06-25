[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$secretsFile = "secrets.ps1"
$outputFolder = "$PSScriptRoot/exports"  # Output folder for generated files

function Validate-SecretsFile {
    if (!(Test-Path "$PSScriptRoot/$secretsFile")) {
        Write-Host "You need a valid CurseForge API Token in a $secretsFile file" -ForegroundColor Red
        Write-Host "Creating $secretsFile" -ForegroundColor Cyan

        $secretsContent = @"
# To generate an API token go to: https://authors.curseforge.com/account/api-tokens
`$CURSEFORGE_TOKEN = "your-curseforge-token-here"
"@

        New-Item -Path $PSScriptRoot -ItemType File -Name $secretsFile -Value $secretsContent
    }
}

. "$PSScriptRoot/settings.ps1"
. "$PSScriptRoot/$secretsFile"


function Get-GitHubRelease {
    param(
        [parameter(Mandatory = $true)]
        [string]
        $repo,
        [parameter(Mandatory = $true)]
        [string]
        $file
    )

    $response = Invoke-RestMethod -Uri "https://api.github.com/repos/$repo/releases"

    $matchingRelease = $response.assets -match $file
    if ($matchingRelease) {
        $downloadUrl = $matchingRelease.browser_download_url

        Remove-Item $file -ErrorAction SilentlyContinue

        Write-Host "Dowloading $file..."

        Invoke-RestMethod $downloadUrl -Out $file
    }
    else {
        Write-Error "Found no files matching '$file' in the repository '$repo'"
    }
}

function Test-ForDependencies {
    $isPackwizAvailable = Get-Command packwiz -ErrorAction SilentlyContinue
    if (-not $isPackwizAvailable) {
        Clear-Host
        Write-Host
        Write-Host "Install packwiz and add its folder to the environment variable 'Path'`n" -ForegroundColor Red
        Write-Host "packwiz can be downloaded here: " -NoNewline
        Write-Host "https://github.com/WhitePhant0m/packwiz/releases" -ForegroundColor Blue
        Write-Host
        Write-Host "When you're done, rerun this script.`n"

        throw "packwiz not available. Please follow the instructions above."
    }

    $is7zAvailable = Get-Command 7z -ErrorAction SilentlyContinue
    if (-not $is7zAvailable) {
        Clear-Host
        Write-Host
        Write-Host "Install 7zip and add its folder to the environment variable 'Path'`n" -ForegroundColor Red
        Write-Host "7zip can be downloaded here: " -NoNewline
        Write-Host "https://www.7-zip.org/download.html" -ForegroundColor Blue
        Write-Host "Note: 7zip is required for server file creation."
        Write-Host
        Write-Host "When you're done, rerun this script.`n"

        throw "7zip not available. Please follow the instructions above."
    }

    $isCurlAvailable = Get-Command $curl -ErrorAction SilentlyContinue

    if (-not $isCurlAvailable) {
        Clear-Host
        Write-Host
        Write-Host "Install Curl and add its folder to the environment variable 'Path'`n" -ForegroundColor Red
        Write-Host "Curl can be downloaded here: " -NoNewline
        Write-Host "https://curl.se/download.html" -ForegroundColor Blue
        Write-Host "To install it, simply unzip the folder somewhere and point path to it."
        Write-Host
        Write-Host "When you're done, rerun this script.`n"

        throw "curl not available. Please follow the instructions above."
    }
}

function New-ClientFiles {
    if ($ENABLE_CLIENT_FILE_MODULE) {
        Write-Host
        Write-Host "Creating Client Files using packwiz..." -ForegroundColor Cyan
        Write-Host

        # Create output folder if it doesn't exist
        if (!(Test-Path $outputFolder)) {
            New-Item -ItemType Directory -Path $outputFolder | Out-Null
            Write-Host "Created output folder: $outputFolder" -ForegroundColor Cyan
        }

        $clientZip = "$outputFolder/$CLIENT_ZIP_NAME.zip"

        Remove-Item $clientZip -Recurse -Force -ErrorAction SilentlyContinue

        Write-Host "Running packwiz cf export..." -ForegroundColor Cyan

        try {
            # Run packwiz cf export to create the CurseForge-compatible zip file
            & packwiz cf export --output $clientZip

            if (Test-Path $clientZip) {
                Write-Host "Client files $clientZip created successfully using packwiz!" -ForegroundColor Green
            } else {
                throw "packwiz cf export did not create the expected output file"
            }
        }
        catch {
            Write-Host "Error running packwiz cf export: $_" -ForegroundColor Red
            throw "Failed to create client files using packwiz: $_"
        }
    }
}

function New-Changelog {
    if ($ENABLE_CHANGELOG_GENERATOR_MODULE `
            -and $null -ne $MODPACK_VERSION `
            -and $null -ne $LAST_MODPACK_VERSION `
            -and (Test-Path "$outputFolder/$LAST_MODPACK_ZIP_NAME.zip") `
            -and (Test-Path "$outputFolder/$CLIENT_ZIP_NAME.zip")
    ) {
        if (-not (Test-Path $CHANGELOG_GENERATOR_JAR) -or $ENABLE_ALWAYS_UPDATE_JARS) {
            Remove-Item $CHANGELOG_GENERATOR_JAR -Recurse -Force -ErrorAction SilentlyContinue
            Get-GitHubRelease -repo "ModdingX/ModListCreator" -file $CHANGELOG_GENERATOR_JAR
        }
        Write-Host
        Write-Host "Generating mod changelog..." -ForegroundColor Cyan
        Write-Host

        Remove-Item $CHANGELOG_PATH -ErrorAction SilentlyContinue

        java -jar $CHANGELOG_GENERATOR_JAR `
            changelog `
            --output $CHANGELOG_PATH `
            --new "$outputFolder/$CLIENT_ZIP_NAME.zip" `
            --old "$outputFolder/$LAST_MODPACK_ZIP_NAME.zip"

        Write-Host "Mod changelog generated!" -ForegroundColor Green
    }
}

function Push-ClientFiles {
    if ($ENABLE_MODPACK_UPLOADER_MODULE) {
        # Note: When using packwiz, file inclusion/exclusion is handled through ".packwizignore"

        # This ugly json seems to be a necessity,
        # I have yet to get @{} and ConvertTo-Json to work with the CurseForge Upload API
        $CLIENT_METADATA =
        "{
            changelog: `'$CLIENT_CHANGELOG`',
            changelogType: `'$CLIENT_CHANGELOG_TYPE`',
            displayName: `'$CLIENT_FILE_DISPLAY_NAME`',
            gameVersions: [$GAME_VERSIONS],
            releaseType: `'$CLIENT_RELEASE_TYPE`'
        }"

        Write-Host
        Write-Host "Client Metadata:" -ForegroundColor Cyan
        Write-Host
        Write-Host $CLIENT_METADATA -ForegroundColor Blue

        Write-Host
        Write-Host "Uploading client files to https://minecraft.curseforge.com/api/projects/$CURSEFORGE_PROJECT_ID/upload-file" -ForegroundColor Green
        Write-Host

        $response = & $curl `
            --url "https://minecraft.curseforge.com/api/projects/$CURSEFORGE_PROJECT_ID/upload-file" `
            --user "$CURSEFORGE_USER`:$CURSEFORGE_TOKEN" `
            -H "Accept: application/json" `
            -H X-Api-Token:$CURSEFORGE_TOKEN `
            -F metadata=$CLIENT_METADATA `
            -F file=@"$outputFolder/$CLIENT_ZIP_NAME.zip" `
            --progress-bar | ConvertFrom-Json


        $clientFileReturnId = $response.id

        if (-not $response.id) {
            Write-Host "Failed to upload client files: $response" -ForegroundColor Red
            throw "Failed to upload client files: $response"
        }

        Write-Host
        Write-Host "Uploaded modpack!" -ForegroundColor Green
        Write-Host
        Write-Host "Return Id: $clientFileReturnId" -ForegroundColor Cyan
        Write-Host

        if ($ENABLE_SERVERSTARTER_MODULE) {
            Update-FileLinkInServerFiles -ClientFileReturnId $clientFileReturnId
        }
    }
}

function Update-FileLinkInServerFiles {
    param(
        [int]$ClientFileReturnId
    )
    if ($clientFileReturnId) {
        $clientFileIdString = $clientFileReturnId.toString()
        $idPart1 = $clientFileIdString.Substring(0, 4)
        $idPart1 = Remove-LeadingZero -text $idPart1
        $idPart2 = $clientFileIdString.Substring(4, $clientFileIdString.length - 4)
        $idPart2 = Remove-LeadingZero -text $idPart2
        # CurseForge replaces whitespace in filenames with + in their CDN urls
        $sanitizedClientZipName = $CLIENT_ZIP_NAME.Replace(" ", "+")
        $curseForgeCdnUrl = "https://mediafilez.forgecdn.net/files/$idPart1/$idPart2/$sanitizedClientZipName.zip"
        $content = (Get-Content -Path $SERVER_SETUP_CONFIG_PATH) -replace "https://mediafilez.forgecdn.net/files/\d+/\d+/.*.zip", $curseForgeCdnUrl
        [System.IO.File]::WriteAllLines(($SERVER_SETUP_CONFIG_PATH | Resolve-Path), $content)

        if ($ENABLE_SERVER_FILE_MODULE) {
            New-ServerFiles -ClientFileReturnId $clientFileReturnId
        }
    }
}

function New-ServerFiles {
    param(
        [int]$ClientFileReturnId
    )
    if ($ENABLE_SERVER_FILE_MODULE) {
        # Create output folder if it doesn't exist
        if (!(Test-Path $outputFolder)) {
            New-Item -ItemType Directory -Path $outputFolder | Out-Null
        }

        $serverZip = "$outputFolder/$SERVER_ZIP_NAME.zip"
        Remove-Item $serverZip -Force -ErrorAction SilentlyContinue
        Write-Host
        Write-Host "Creating server files..." -ForegroundColor Cyan
        Write-Host
        7z a -tzip $serverZip "$SERVER_FILES_FOLDER/*"
        Write-Host "Server files created: $serverZip" -ForegroundColor Green

        if ($ENABLE_MODPACK_UPLOADER_MODULE) {
            Push-ServerFiles -clientFileReturnId $clientFileReturnId
        }
    }
}

function Push-ServerFiles {
    param(
        [int]$clientFileReturnId
    )
    if ($ENABLE_SERVER_FILE_MODULE -and $ENABLE_MODPACK_UPLOADER_MODULE) {
        $serverFilePath = "$outputFolder/$SERVER_ZIP_NAME.zip"

        $SERVER_METADATA =
        "{
        'changelog': `'$SERVER_CHANGELOG`',
        'changelogType': `'$SERVER_CHANGELOG_TYPE`',
        'displayName': `'$SERVER_FILE_DISPLAY_NAME`',
        'parentFileId': $clientFileReturnId,
        'releaseType': `'$SERVER_RELEASE_TYPE`'
        }"

        Write-Host
        Write-Host "Uploading server files..." -ForegroundColor Cyan
        Write-Host

        $serverFileResponse = & $curl `
            --url "https://minecraft.curseforge.com/api/projects/$CURSEFORGE_PROJECT_ID/upload-file" `
            --user "$CURSEFORGE_USER`:$CURSEFORGE_TOKEN" `
            -H "Accept: application/json" `
            -H X-Api-Token:$CURSEFORGE_TOKEN `
            -F metadata=$SERVER_METADATA `
            -F file=@$serverFilePath `
            --progress-bar | ConvertFrom-Json

        if ($serverFileResponse.errorCode) {
            throw "Failed to upload server files: $serverFileResponse"
        }

        if ($serverFileResponse.id) {
            Write-Host "Uploaded server files!" -ForegroundColor Green
        }
    }
}

function New-GitHubRelease {
    if ($ENABLE_GITHUB_RELEASE_MODULE) {

        $Base64Token = [System.Convert]::ToBase64String([char[]]$GITHUB_TOKEN);
        $Uri = "https://api.github.com/repos/$GITHUB_NAME/$GITHUB_REPOSITORY/releases?access_token=$GITHUB_TOKEN"

        $Headers = @{
            Authorization = 'Basic {0}' -f $Base64Token;
        };

        $Body = @{
            tag_name         = $MODPACK_VERSION
            target_commitish = 'master'
            name             = $MODPACK_VERSION
            body             = ''
            draft            = $false
            prerelease       = $false
        } | ConvertTo-Json


        Write-Host
        Write-Host "Making GitHub Release..." -ForegroundColor Green
        Write-Host

        Invoke-RestMethod -Headers $Headers -Uri $Uri -Body $Body -Method Post

        Start-Process Powershell.exe -Argument "-NoProfile -Command github_changelog_generator"
    }
}

function Update-PackToml {
  if ($UPDATE_PACK_TOML) {
    Write-Host
    Write-Host "Updating pack.toml with settings..." -ForegroundColor Cyan
    Write-Host

    $packTomlPath = "$INSTANCE_ROOT/pack.toml"

    if (!(Test-Path $packTomlPath)) {
        Write-Host "pack.toml not found at $packTomlPath" -ForegroundColor Red
        throw "pack.toml file is required for packwiz operation"
    }

    # Read the current pack.toml content
    $packTomlContent = Get-Content $packTomlPath -Raw

    # Update name, version, and author using regex replacement
    $packTomlContent = $packTomlContent -replace '(?m)^name\s*=\s*".*"', "name = `"$MODPACK_NAME`""
    $packTomlContent = $packTomlContent -replace '(?m)^author\s*=\s*".*"', "author = `"$CLIENT_FILE_AUTHOR`""
    $packTomlContent = $packTomlContent -replace '(?m)^version\s*=\s*".*"', "version = `"$MODPACK_VERSION`""

    # Update modloader version in the [versions] section
    $modloaderLower = $MODLOADER.ToLower()
    $packTomlContent = $packTomlContent -replace "(?m)^$modloaderLower\s*=\s*`".*`"", "$modloaderLower = `"$MODLOADER_VERSION`""

    # Write the updated content back to pack.toml
    [System.IO.File]::WriteAllText($packTomlPath, $packTomlContent)

    Write-Host "Updated pack.toml:" -ForegroundColor Green
    Write-Host "  name = `"$MODPACK_NAME`"" -ForegroundColor Cyan
    Write-Host "  author = `"$CLIENT_FILE_AUTHOR`"" -ForegroundColor Cyan
    Write-Host "  version = `"$MODPACK_VERSION`"" -ForegroundColor Cyan
    Write-Host "  $modloaderLower = `"$MODLOADER_VERSION`"" -ForegroundColor Cyan

    Write-Host
    Write-Host "Running packwiz refresh..." -ForegroundColor Cyan

    try {
        & packwiz refresh
        Write-Host "packwiz refresh completed successfully!" -ForegroundColor Green
    }
    catch {
        Write-Host "Error running packwiz refresh: $_" -ForegroundColor Red
        throw "Failed to run packwiz refresh: $_"
    }
  }
}

function Update-Modlist {
    if ($ENABLE_MODLIST_CREATOR_MODULE) {
        if (-not (Test-Path $MODLIST_CREATOR_JAR) -or $ENABLE_ALWAYS_UPDATE_JARS) {
            Remove-Item $MODLIST_CREATOR_JAR -Recurse -Force -ErrorAction SilentlyContinue
            Get-GitHubRelease -repo "ModdingX/ModListCreator" -file $MODLIST_CREATOR_JAR
        }

        Write-Host
        Write-Host "Generating Modlist..."
        Write-Host

        Remove-Item $MODLIST_PATH -ErrorAction SilentlyContinue
        java -jar $MODLIST_CREATOR_JAR modlist --output $MODLIST_PATH --detailed "$outputFolder/$CLIENT_ZIP_NAME.zip"
        Copy-Item -Path $MODLIST_PATH -Destination "$INSTANCE_ROOT/MODLIST.md"
    }
}

function Remove-LeadingZero {
    param(
        [string]$text
    )
    return [int]$text
}

function Update-VersionFiles {
    Write-Host
    Write-Host "Updating version information in config files..." -ForegroundColor Cyan
    Write-Host

    # Update version_info.json
    $versionInfoPath = "$INSTANCE_ROOT/version_info.json"
    if (Test-Path $versionInfoPath) {
        $versionInfo = Get-Content $versionInfoPath | ConvertFrom-Json
        $versionInfo.version = $MODPACK_VERSION
        $versionInfoJson = $versionInfo | ConvertTo-Json -Depth 3
        [System.IO.File]::WriteAllLines($versionInfoPath, $versionInfoJson)
        Write-Host "Updated version_info.json: version = `"$MODPACK_VERSION`"" -ForegroundColor Green
    }

    # Update bcc-common.toml
    $bccConfigPath = "$INSTANCE_ROOT/config/bcc-common.toml"
    if (Test-Path $bccConfigPath) {
        $bccContent = Get-Content $bccConfigPath -Raw
        $bccContent = $bccContent -replace '(?m)^(\s*)modpackName\s*=\s*".*"', "`$1modpackName = `"$MODPACK_NAME`""
        $bccContent = $bccContent -replace '(?m)^(\s*)modpackVersion\s*=\s*".*"', "`$1modpackVersion = `"$MODPACK_VERSION`""
        [System.IO.File]::WriteAllText($bccConfigPath, $bccContent)
        Write-Host "Updated bcc-common.toml: modpackName = `"$MODPACK_NAME`", modpackVersion = `"$MODPACK_VERSION`"" -ForegroundColor Green
    }

    # Update FancyMenu craftoria.txt
    $fancyMenuPath = "$INSTANCE_ROOT/config/fancymenu/customization/craftoria.txt"
    if (Test-Path $fancyMenuPath) {
        $fancyMenuContent = Get-Content $fancyMenuPath -Raw
        $displayModloader = $MODLOADER
        # Update the version text in the FancyMenu layout
        $newVersionText = "$MODPACK_NAME - $MODPACK_VERSION%n%Minecraft $MINECRAFT_VERSION/$displayModloader"
        $fancyMenuContent = $fancyMenuContent -replace '(?m)^(\s*)source\s*=\s*.*%n%.*', "`$1source = $newVersionText"
        [System.IO.File]::WriteAllText($fancyMenuPath, $fancyMenuContent)
        Write-Host "Updated craftoria.txt: source = `"$newVersionText`"" -ForegroundColor Green
    }

    Write-Host "Version file updates completed!" -ForegroundColor Green
}

$startLocation = Get-Location
Set-Location $INSTANCE_ROOT

if ($null -eq $IsWindows -or $IsWindows) {
    # The script is running on Windows, use curl.exe
    $curl = "curl.exe"
}
else {
    $curl = "curl"
}

Test-ForDependencies
Validate-SecretsFile
Update-VersionFiles
Update-PackToml
New-ClientFiles
Push-ClientFiles
if ($ENABLE_SERVER_FILE_MODULE -and -not $ENABLE_MODPACK_UPLOADER_MODULE) {
    New-ServerFiles
}
New-GitHubRelease
New-Changelog
Update-Modlist

Write-Host "Modpack Upload Complete!" -ForegroundColor Green
Set-Location $startLocation

pause