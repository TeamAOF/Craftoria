ServerEvents.recipes((e) => {
  e.shaped('craftoria:blaze_block', ['AAA', 'AAA', 'AAA'], {
    A: 'minecraft:blaze_rod',
  });

  e.shapeless('9x minecraft:blaze_rod', ['craftoria:blaze_block']);

  e.shaped('8x craftoria:smokey_bricks', ['AAA', 'ABA', 'AAA'], {
    A: 'minecraft:bricks',
    B: 'minecraft:black_dye',
  });

  e.shaped('4x craftoria:smokey_bricks_stairs', ['A  ', 'AA ', 'AAA'], {
    A: 'craftoria:smokey_bricks',
  });

  e.shaped('6x craftoria:smokey_bricks_slab', ['AAA'], {
    A: 'craftoria:smokey_bricks',
  });

  e.shaped('6x craftoria:smokey_bricks_wall', ['AAA', 'AAA'], {
    A: 'craftoria:smokey_bricks',
  });

  e.shapeless('craftoria:smokey_bricks_button', ['craftoria:smokey_bricks']);

  e.shaped('minecraft:name_tag', ['  n', ' ps', 'p  '], {
    n: '#c:nuggets/iron',
    p: 'minecraft:paper',
    s: '#c:slimeballs',
  }).id('craftoria:name_tag');

  e.smelting('irons_spellbooks:mithril_scrap', 'irons_spellbooks:raw_mithril').xp(40).cookingTime(400).id('craftoria:irons/mithril_scrap_from_raw');

  e.shaped('phantoms_utilities:spray_can', [' T ', 'SPS', 'SDS'], {
    T: 'pneumaticcraft:pressure_tube',
    S: 'modern_industrialization:steel_curved_plate',
    P: 'mekanism:painting_machine',
    D: 'industrialforegoing:dye_mixer',
  }).id('phantoms_utilities:spray_can');

  e.replaceOutput(
    { id: 'modern_industrialization:guide_book' },
    'modern_industrialization:guidebook',
    'guideme:guide[guideme:guide_id="modern_industrialization:guide"]'
  );

  e.shapeless('guideme:guide[guideme:guide_id="craftoria:guide"]', ['minecraft:book', 'minecraft:dirt']).id('craftoria:guide');

  e.shapeless(
    'akashictome:tome[akashictome:tool_content=[{components:{"akashictome:defined_mod":"actuallyadditions"},count:1,id:"actuallyadditions:booklet"},{components:{"akashictome:defined_mod":"justdirethings","patchouli:book":"justdirethings:justdirethingsbook"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"laserio","patchouli:book":"laserio:laseriobook"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"pneumaticcraft","patchouli:book":"pneumaticcraft:book"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"twilightdelight","patchouli:book":"twilightdelight:twilight_guide"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"irons_spellbooks","patchouli:book":"irons_spellbooks:iss_guide_book"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"mffs","patchouli:book":"mffs:handbook"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"industrialforegoing","patchouli:book":"industrialforegoing:industrial_foregoing"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"sushigocrafting","patchouli:book":"sushigocrafting:sushigocrafting"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"advancedperipherals","patchouli:book":"advancedperipherals:manual"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"buildinggadgets2","patchouli:book":"buildinggadgets2:buildinggadgets2book"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"modularrouters","patchouli:book":"modularrouters:book"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"apotheosis","akashictome:is_morphed":1b,"akashictome:og_display_name":\'{"translate":"book.apotheosis.name"}\',"minecraft:custom_name":\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Chronicle of Shadows"}]}\',"patchouli:book":"apotheosis:apoth_chronicle"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"powah"},count:1,id:"powah:book"},{components:{"akashictome:defined_mod":"ars_nouveau","akashictome:is_morphed":1b,"akashictome:og_display_name":\'{"translate":"item.ars_nouveau.worn_notebook"}\',"minecraft:custom_name":\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Worn Notebook"}]}\'},count:1,id:"ars_nouveau:worn_notebook"},{components:{"akashictome:defined_mod":"occultism"},count:1,id:"occultism:dictionary_of_spirits"},{components:{"akashictome:defined_mod":"guideme","akashictome:is_morphed":1b,"akashictome:og_display_name":\'{"translate":"modern_industrialization.guide_name"}\',"guideme:guide_id":"modern_industrialization:guide","minecraft:custom_name":\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"MI Guidebook"}]}\'},count:1,id:"guideme:guide"},{components:{"akashictome:defined_mod":"guideme_0","akashictome:is_morphed":1b,"akashictome:og_display_name":\'{"translate":"craftoria.guide_name"}\',"guideme:guide_id":"craftoria:guide","minecraft:custom_name":\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Craftoria Guidebook"}]}\'},count:1,id:"guideme:guide"},{components:{"akashictome:defined_mod":"modonomicon","akashictome:is_morphed":1b,"akashictome:og_display_name":\'{"translate":"book.theurgy.the_hermetica.name"}\',"minecraft:custom_name":\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The Hermetica"}]}\',"modonomicon:book_id":"theurgy:the_hermetica"},count:1,id:"modonomicon:modonomicon"},{components:{"akashictome:defined_mod":"ae2","akashictome:is_morphed":1b,"akashictome:og_display_name":\'{"translate":"item.ae2.guide"}\',"minecraft:custom_name":\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Guide"}]}\'},count:1,id:"ae2:guide"}],akashictome:is_morphed=true]',
    ['akashictome:tome', 'minecraft:book']
  ).id('craftoria:prefilled_tome');
});
