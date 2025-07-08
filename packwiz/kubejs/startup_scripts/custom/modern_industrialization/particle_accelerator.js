// ignored: true
MITweaksMachineEvents.registerBatchMultiblocks(e => {
  const particleAcceleratorHatch = e.hatchOf('energy_input', 'fluid_input', 'fluid_output');
  const quantumMachineCasing = e.memberOfBlock('modern_industrialization:plasma_handling_iridium_machine_casing');
  const stainlessSteelMachineCasingPipe = e.memberOfBlock('modern_industrialization:stainless_steel_machine_casing_pipe');
  const cleanStainlessSteelMachineCasing = e.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing');
  const neodymiumBlock = e.memberOfBlock('modern_industrialization:neodymium_block');
  const platinumBlock = e.memberOfBlock('modern_industrialization:platinum_block');

  const particleAcceleratorShape = e.layeredShape('stainless_steel_machine_casing_pipe', [
    ['                                 ', '             QQQQQQQ             ', '            QQQQQQQQQ            ', '             QQQQQQQ             ', '                                 '],
    ['             SSSSSSS             ', '          QQQ   P   QQQ          ', '          QQ   N N   QQ          ', '          QQQ   P   QQQ          ', '             SSSSSSS             '],
    ['          SSSCCCCCCCSSS          ', '        QQ     N N     QQ        ', '        QQ             QQ        ', '        QQ     N N     QQ        ', '          SSSCCCCCCCSSS          '],
    ['        SSCCCSSSSSSSCCCSS        ', '       Q        P        Q       ', '      QQ       N N       QQ      ', '       Q        P        Q       ', '        SSCCCSSSSSSSCCCSS        '],
    ['       SCCCSS       SSCCCS       ', '     QQ      QQQQQQQ      QQ     ', '     Q       QQQQQQQ       Q     ', '     QQ      QQQQQQQ      QQ     ', '       SCCCSS       SSCCCS       '],
    ['      SCCSS           SSCCS      ', '    QQ    QQQ       QQQ    QQ    ', '    Q      QQ       QQ      Q    ', '    QQ    QQQ       QQQ    QQ    ', '      SCCSS           SSCCS      '],
    ['     SCCS               SCCS     ', '    Q    Q             Q    Q    ', '   Q    NQQ           QQN    Q   ', '    Q    Q             Q    Q    ', '     SCCS               SCCS     '],
    ['    SCCS                 SCCS    ', '   Q    Q               Q    Q   ', '   Q   NQ               QN   Q   ', '   Q    Q               Q    Q   ', '    SCCS                 SCCS    '],
    ['   SCCS                   SCCS   ', '  Q    Q                 Q    Q  ', '  Q   NQ                 QN   Q  ', '  Q    Q                 Q    Q  ', '   SCCS                   SCCS   '],
    ['   SCS                     SCS   ', '  Q   Q                   Q   Q  ', '  Q   Q                   Q   Q  ', '  Q   Q                   Q   Q  ', '   SCS                     SCS   '],
    ['  SCCS                     SCCS  ', ' Q   Q                     Q   Q ', ' Q    Q                   Q    Q ', ' Q   Q                     Q   Q ', '  SCCS                     SCCS  '],
    ['  SCS                       SCS  ', ' Q   Q                     Q   Q ', ' Q   Q                     Q   Q ', ' Q   Q                     Q   Q ', '  SCS                       SCS  '],
    ['  SCS                       SCS  ', ' Q   Q                     Q   Q ', 'Q    Q                     Q    Q', ' Q   Q                     Q   Q ', '  SCS                       SCS  '],
    [' SCS                         SCS ', 'Q   Q                       Q   Q', 'Q   Q                       Q   Q', 'Q   Q                       Q   Q', ' SCS                         SCS '],
    [' SCS                         SCS ', 'Q   Q                       Q   Q', 'Q   Q                       Q   Q', 'Q   Q                       Q   Q', ' SCS                         SCS '],
    [' SCS                         SCS ', 'Q N Q                       Q N Q', 'QN NQ                       QN NQ', 'Q N Q                       Q N Q', ' SCS                         SCS '],
    [' SCS                         SCS ', 'QP PQ                       QP PQ', 'Q   Q                       Q   Q', 'QP PQ                       QP PQ', ' SCS                         SCS '],
    [' SCS                         SCS ', 'Q N Q                       Q N Q', 'QN NQ                       QN NQ', 'Q N Q                       Q N Q', ' SCS                         SCS '],
    [' SCS                         SCS ', 'Q   Q                       Q   Q', 'Q   Q                       Q   Q', 'Q   Q                       Q   Q', ' SCS                         SCS '],
    [' SCS                         SCS ', 'Q   Q                       Q   Q', 'Q   Q                       Q   Q', 'Q   Q                       Q   Q', ' SCS                         SCS '],
    ['  SCS                       SCS  ', ' Q   Q                     Q   Q ', 'Q    Q                     Q    Q', ' Q   Q                     Q   Q ', '  SCS                       SCS  '],
    ['  SCS                       SCS  ', ' Q   Q                     Q   Q ', ' Q   Q                     Q   Q ', ' Q   Q                     Q   Q ', '  SCS                       SCS  '],
    ['  SCCS                     SCCS  ', ' Q   Q                     Q   Q ', ' Q    Q                   Q    Q ', ' Q   Q                     Q   Q ', '  SCCS                     SCCS  '],
    ['   SCS                     SCS   ', '  Q   Q                   Q   Q  ', '  Q   Q                   Q   Q  ', '  Q   Q                   Q   Q  ', '   SCS                     SCS   '],
    ['   SCCS                   SCCS   ', '  Q    Q                 Q    Q  ', '  Q   NQ                 QN   Q  ', '  Q    Q                 Q    Q  ', '   SCCS                   SCCS   '],
    ['    SCCS                 SCCS    ', '   Q    Q               Q    Q   ', '   Q   NQ               QN   Q   ', '   Q    Q               Q    Q   ', '    SCCS                 SCCS    '],
    ['     SCCS               SCCS     ', '    Q    Q             Q    Q    ', '   Q    NQQ           QQN    Q   ', '    Q    Q             Q    Q    ', '     SCCS               SCCS     '],
    ['      SCCSS           SSCCS      ', '    QQ    QQQ       QQQ    QQ    ', '    Q      QQ       QQ      Q    ', '    QQ    QQQ       QQQ    QQ    ', '      SCCSS           SSCCS      '],
    ['       SCCCSS       SSCCCS       ', '     QQ      QQQQQQQ      QQ     ', '     Q       QQQQQQQ       Q     ', '     QQ      QQQQQQQ      QQ     ', '       SCCCSS       SSCCCS       '],
    ['        SSCCCSSSSSSSCCCSS        ', '       Q        P        Q       ', '      QQ       N N       QQ      ', '       Q        P        Q       ', '        SSCCCSSSSSSSCCCSS        '],
    ['          SSSCCCCCCCSSS          ', '        QQ     N N     QQ        ', '        QQ             QQ        ', '        QQ     N N     QQ        ', '          SSSCCCCCCCSSS          '],
    ['             SSSSSSS             ', '          QQQ   P   QQQ          ', '          QQ   N N   QQ          ', '          QQQ   P   QQQ          ', '             SSSSSSS             '],
    ['                                 ', '             QQQQQQQ             ', '            QQQQ#QQQQ            ', '             QQQQQQQ             ', '                                 '],
  ])
    .key('Q', quantumMachineCasing, e.noHatch())
    .key('S', stainlessSteelMachineCasingPipe, particleAcceleratorHatch)
    .key('C', cleanStainlessSteelMachineCasing, e.noHatch())
    .key('N', neodymiumBlock, e.noHatch())
    .key('P', platinumBlock, e.noHatch())
    .build();

  e.electric(
    'Particle Accelerator', 'particle_accelerator',
    e.getRecipeType('modern_industrialization:fusion_reactor'), particleAcceleratorShape,
    workStations => workStations.add('modern_industrialization:fusion_reactor'),
    'plasma_handling_iridium_machine_casing', 'particle_accelerator', true, false, false,
    128, 0.5
  );
});
