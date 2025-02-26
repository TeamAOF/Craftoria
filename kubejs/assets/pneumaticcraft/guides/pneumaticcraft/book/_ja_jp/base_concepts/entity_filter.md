---
navigation:
  title: "エンティティフィルター"
  icon: "minecraft:player_head"
  parent: pneumaticcraft:base_concepts.md
---

# エンティティフィルター

*エンティティフィルター*は<Color hex="#228">PneumaticCraft: Repressurized</Color>内のいくつかの場所で使用され、機械またはツールが何らかの方法で影響を与える必要がある*エンティティ*を指定する必要があります。

フィルターを入力できるほとんどの場所では*F1*キーを押したままにするとポップアップヘルプが表示されます。

エンティティをエンティティタイプで一致させるにはタイプ名を指定するだけです(例: <Color hex="#800">creeper</Color>は *minecraft:creeper*と一致します)。カスタム名(プレイヤーを含む)を持つエンティティを一致させるにはエンティティ名を引用符で囲みます(例: <Color hex="#800">'Minemaarten'</Color> または <Color hex="#800">'desht'</Color>)。

特定のエンティティ*タイプ*(例: 動物、攻撃的なMob、一般的なプレイヤー)を指定する場合は先頭に'@'を付けます。受け入れられる*@ 指定子*を含む例の完全なリストは次のとおりです。

## 例


- <Color hex="#800">@player</Color>は全てのプレイヤーに一致します
- <Color hex="#800">@mob</Color>はすべての攻撃的な生物に一致します
- <Color hex="#800">@animal</Color>はすべての受動的な生物に一致します(動物)
- <Color hex="#800">@animal(age=adult)</Color>はすべての成体動物に一致します
- <Color hex="#800">@animal(age=baby)</Color>はすべての幼体動物に一致します
- <Color hex="#800">@animal(breedable=yes)</Color>は現在繁殖できるすべての動物に一致します
- <Color hex="#800">sheep(shearable=yes)</Color>は毛刈りができる全てのヒツジに一致します

## 例(続き)


- <Color hex="#800">sheep(shearable=yes,color=black)</Color>は毛刈りができるすべての黒色の羊に一致します
- <Color hex="#800">wolf(color=blue)</Color>は青色の首輪をつけたすべてのオオカミ/イヌに一致します
- <Color hex="#800">cat(color=white)</Color>は白色の首輪をつけたすべてのネコに一致します
- <Color hex="#800">@minecart</Color>はトロッコに一致します
- <Color hex="#800">@boat</Color>はボートに一致します
- <Color hex="#800">@living</Color>は全ての生きているエンティティに一致します
- <Color hex="#800">@item</Color>はアイテムエンティティに一致します
- <Color hex="#800">@orb</Color>は経験値オーブに一致します

## 例(続き)


- <Color hex="#800">@drone</Color>は[ドローン](../tools/drone.md)に一致します
- <Color hex="#800">@mob(mod=minecraft)</Color>はMobに一致しますが、名前空間*minecraft*からのみに一致します
- <Color hex="#800">クリーパー</Color>はクリーパーに一致します
- <Color hex="#800">'MineMaarten'</Color> (or <Color hex="#800">"Minemaarten"</Color>)は'MineMaarten'と名付けられたエンティティに一致します
- <Color hex="#800">c*</Color>は「c」で始まる文字のエンティティに一致します(クリーパー(creeper)や牛(cow)のように) 
- <Color hex="#800">*pig*</Color>は「pig」を名前に含むエンティティに一致します(豚(pig)やゾンビピグリン(zombified_piglin)のように)


- <Color hex="#800">@player(team=team1)</Color>はバニラのスコアボードチーム「team1」のプレイヤーに一致します
- <Color hex="#800">@player(holding=stick)</Color>は現在棒を持っているプレイヤーに一致します
- <Color hex="#800">@player(holding=#minecraft:planks)</Color>はアイテムタグ*minecraft:planks*のアイテムを持っているプレイヤーに一致します


- <Color hex="#800">@player(ftbteam=<uuid>|<shortname>)</Color>は指定されてuuidまたはshortnameを持つ[FTB Teams](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge)のチームメンバーであるプレイヤーに一致します

また、プレイヤー修飾子<Color hex="#800">ftbteam_officer</Color>、<Color hex="#800">ftbteam_owner</Color>、<Color hex="#800">ftbteam_ally</Color>を使用して、チームの(少なくとも)役員、オーナー、または味方であるプレイヤーを一致させることもできます。また、<Color hex="#800">ftbteam_enemy</Color>を使用してチームの敵として明示的にマークされているプレイヤーを一致させることもできます。

すべての一致は大文字と小文字を区別しません。たとえば、<Color hex="#800">zombie</Color>と<Color hex="#800">Zombie</Color>は両方ともゾンビに一致します。

';'(セミコロン)区切り文字を使用してフィルターの*シーケンス*を指定できます。これは*match any*関数です。
- <Color hex="#800">creeper;zombie</Color>はクリーパー*と*ゾンビの両方に一致します。

フィルターを否定するにはフィルターの前に'!'を付けます:
- <Color hex="#800">!@player</Color>はプレーヤーでないものに一致します。*
- <Color hex="#800">!Creeper;Zombie</Color>*はCreeperでもZombieでもないものに一致します。*
- <Color hex="#800">Creeper;!Zombie</Color>*は<Color hex="#f00">無効です。</Color>: '!'はフィルターの先頭にのみ使用できます。

**注:** プログラミングウィジェットを使用した[ドローン](../tools/drone.md)のエンティティフィルターでは、'!'はサポートされていません。通常どおり左側のテキストウィジェットを接続します。

## Related Chapters

- [TODO](../tools/micromissiles.md)
- [TODO](../tubes/air_grate_module.md)
- [TODO](../armor/pneumatic_helmet.md)
- [TODO](../machines/sentry_turret.md)
- [TODO](../machines/universal_sensor.md)
- [TODO](../programming/text.md)

*エンティティフィルタリングを使用する機械とツール*

