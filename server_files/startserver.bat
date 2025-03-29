@ECHO OFF
SETLOCAL


:BEGIN
CLS
COLOR 3F >nul 2>&1
SET MC_SYS32=%SYSTEMROOT%\SYSTEM32
REM Make batch directory the same as the directory it's being called from
REM For example, if "run as admin" the batch starting dir could be system32
CD "%~dp0" >nul 2>&1


:CHECKJAVA
ECHO INFO: Checking java installation...
ECHO.

REM If no Java is installed this line will catch it simply
java -version 2>&1 || GOTO JAVAERROR

ECHO.
IF %ERRORLEVEL% EQU 0 (
	ECHO INFO: Found 64-bit Java
	GOTO CHECK_JAVA_VERSION
) ELSE (
    GOTO JAVAERROR
)


:CHECK_JAVA_VERSION
REM Check actual Java version.
FOR /f tokens^=2-5^ delims^=.-_^" %%j in ('java -fullversion 2^>^&1') do set "jver=%%j%%k%%l%%m"
IF %jver% LSS 2100 ( GOTO JAVA_VERSION_ERROR )
IF %jver% GEQ 2200 ( GOTO JAVA_VERSION_ERROR )
GOTO CHECK


:MAIN
java -jar serverstarter-2.4.1.jar
GOTO EOF

:CHECK
REM Check if serverstarter JAR is already downloaded
IF NOT EXIST "%cd%\serverstarter-2.4.1.jar" (
	ECHO serverstarter binary not found, downloading serverstarter...
	%SYSTEMROOT%\SYSTEM32\bitsadmin.exe /rawreturn /nowrap /transfer starter /dynamic /download /priority foreground https://github.com/TeamAOF/ServerStarter/releases/download/v2.4.1/serverstarter-2.4.1.jar "%cd%\serverstarter-2.4.1.jar"
   GOTO MAIN
) ELSE (
   GOTO MAIN
)


:JAVAERROR
COLOR CF
ECHO ERROR: Could not find 64-bit Java installed or in PATH
GOTO EOF

:JAVA_VERSION_ERROR
COLOR CF
ECHO ERROR: Must use Java 21


:EOF
pause
