---
navigation:
  title: "Cartão de Energia"
  icon: "laserio:card_energy"
  position: 3
  parent: laserio:cards.md
item_ids:
  - laserio:card_energy
---

# Cartão de Energia

Os Cartões de Energia são usados para enviar Energia entre inventários, como máquinas e baterias.

Os Cartões de Energia têm algumas mecânicas ligeiramente diferentes dos outros cartões e serão documentadas nas páginas seguintes.

Ao contrário dos Cartões de Item ou Fluidos que exigem que os overclockers operem mais rápido do que uma vez a cada 20 ticks, os Cartões de Energia podem operar a cada tick por padrão.

Valores (max) de FE/T para os Overclockers:

- 0 Overclockers: 1.000fe/t
- 1 Overclocker:  4.000fe/t
- 2 Overclockers: 16.000fe/t
- 3 Overclockers: 32.000fe/t
- 4 Overclockers: 100.000fe/t

Os Cartões de Energia também possuem uma configuração de '% de Limite de Energia' -- Por padrão, no modo de inserção/estoque o valor é de 100%, e no modo de extração é de 0%. No modo de inserção/estoque é especificado o quanto se deseja encher o receptor de energia especificado. 

Por exemplo: Se o bloco pode armazenar 1.000.000 FE, e você especificar 50%, será preenchido em até 500.000 FE.

No modo de extração, é desiginado a porcentagem que será deixada para trás.

Por exemplo: Se você está extraindo FE de uma célula de energia que consegue armazenar 1.000.000 FE, e especifiar um limite de 25%, não será extraído abaixo de 250.000 FE.

Nota Técnica: O sistema Energia Forge (Forge Energy/FE) suporta armazenar energia até MAX_INT o que é aproximadamente 2.14 bilhões de FE. Se você está utilizando um mod como o Draconic Evolution ou Mekanism, as células de energia deles podem armazenar além dessa quantidade 'hackeando' como a Energia Forge funciona. Como resultado, o indicador de % não funcionará em células de armazenamento maiores que 2.14 bilhões de FE. Desculpa! :)

## Cartão de Energia



<Recipe id="laserio:card_energy" />

