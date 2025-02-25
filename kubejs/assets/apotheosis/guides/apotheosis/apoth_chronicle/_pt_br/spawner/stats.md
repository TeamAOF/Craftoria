---
navigation:
  title: "Status de gerador"
  icon: "minecraft:writable_book"
  parent: apotheosis:spawner/spawner.md
---

# Status de gerador

Cada gerador tem <Color id="blue">status</Color>, que ditam sua operação.

Quanto tempo entre as gerações, quantos mobs são gerados, etc.

Este capítulo detalha todos eles.

## Atraso na geração

Após um gerador gerar uma entidade, há um atraso até a próxima geração.

Esse atraso é um número aleatório entre o <Color id="blue">atraso mínimo de geração</Color> e o <Color id="blue">atraso máximo de geração$( ).

Se o atraso máximo estiver sempre abaixo do atraso mínimo, o atraso mínimo é usado.

## Contagem de geração

A <Color id="blue">contagem de geração</Color>$(/ )</Color> determina quantos mobs são gerados de uma vez.

Nem todas as gerações serão bem-sucedidas, então, às vezes, menos entidades irão aparecer.

A geração é contada como bem-sucedida (e marcada como a reinicialização do atraso) desde que uma entidade apareça.

## Entidades máximas

Geradores rastreiam o número de entidades próximas.

Se esse número exceder o <Color id="blue">máximo de entidades</Color>, a geração para.

Apenas entidades do mesmo tipo que a gerada são contadas.

## Alcance de ativação

Geradores requerem um jogador próximo para operar.

Esse jogador deve estar dentro do <Color id="blue">alcance de ativação</Color>, que é um raio em blocos, para a geração correr.

## Alcance de geração

O <Color id="blue">alcance de geração</Color> é um raio em blocos de quão longe as entidades podem aparecer.

Tente certificar-se de que esta área seja adequada para entidades, caso contrário, algumas gerações podem falhar.

## Ignora jogadores

Um gerador que <Color id="blue">ignora jogadores</Color> não precisa de um jogador dentro do <Color id="blue">alcance de ativação</Color>.

Ele funcionará com ou sem um jogador próximo.

## Ignora condições

Um gerador que <Color id="blue">ignora condições</Color> não exigirá mais certas condições de desova específicas da criatura.

Isso inclui coisas como a exigência de grama para animais.

Ele só precisará de espaço suficiente e uma falta de entidades próximas.

## Controle de Redstone

Um gerador com <Color id="blue">controle de redstone</Color> requer um sinal redstone para operar.

Isso permite que você controle quando o gerador estára operando.

## Ignora a luz

Um gerador que <Color id="blue">ignora a luz</Color> funcionará em todos os níveis de luz.

Isso significa que os mobs podem aparecer à luz do dia.

Se já <Color id="blue">ignorar condições</Color>, então este modificador não fará nada.

## Sem IA

Um gerador <Color id="blue">sem IA</Color> habilitado gerará mobs sem qualquer IA.

Normalmente, essas criaturas irão simplesmente ficar lá, imóveis, sem fazer nada.

No entanto, os criados pelo Apotheosis ainda pode ser movidos.

Se você estiver fazendo grandes fazendas de mobs, você deve sempre utilizar a melhoria <Color id="blue">sem IA</Color>.

Isso reduz significativamente a carga do servidor e torna as criaturas mais fáceis de controlar.

