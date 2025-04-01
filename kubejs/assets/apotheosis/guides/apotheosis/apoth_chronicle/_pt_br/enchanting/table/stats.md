---
navigation:
  title: 'Status de encantamento'
  icon: 'minecraft:bookshelf'
  parent: apotheosis:enchanting/table.md
---

# Status de encantamento

Com o Apotheosis, o encantamento depende de mais do que apenas níveis.

Atualmente, existem cinco novos status de encantamento.

Blocos que fornecem status de encantamento os exibirão em suas descrições.

## Eterna

<Color id="green">Eterna</Color> é o status principal do encantamento.

Cada ponto de <Color id="green">Eterna</Color> aumenta o nível máximo de encantamento em dois.

Alguns blocos só podem fornecer <Color id="green">Eterna</Color> até um certo valor máximo.

<a name="quanta"></a>

## Quanta

<Color id="red">Quanta</Color> é um status secundário. Ela controla a variação dos encantamentos.

Durante o encantamento, você tem um <Color id="gold">poder base</Color>, que é o nível que você gastou para encantar, e então um <Color id="dark_purple">poder final</Color>, após todas as modificações.

<Color id="red">Quanta</Color> é um dos fatores do processo de modificação.

Um valor é selecionado entre <Color id="dark_red">1 - Quanta</Color> e <Color id="blue">1 + Quanta</Color>.

Seu <Color id="dark_purple">poder final</Color> é igual a esse valor multiplicado pelo seu <Color id="gold">poder base</Color>.

Valores mais altos de <Color id="red">Quanta</Color> aumentam a faixa de poder, o que significa que seus encantamentos são menos consistentes em seu <Color id="dark_purple">poder final</Color>.

## Arcana

<Color id="dark_purple">Arcana</Color> é um status secundário. Ela controla os pesos de raridade e, em certos níveis, garantirá encantamentos adicionais.

Com 25% de <Color id="dark_purple">Arcana</Color>, você sempre receberá pelo menos dois encantamentos. Com 75%, você sempre receberá três.

Por padrão, as raridades têm os seguintes pesos:

Comum: 10
Incomum: 5
Raro: 3
Muito Raro: 1

A cada 10% de <Color id="dark_purple">Arcana</Color>, os pesos mudam, eventualmente se invertendo completamente.

Ao passar o mouse sobre a barra de <Color id="dark_purple">Arcana</Color>, você verá os pesos atuais.

<a name="rectification"></a>

## Retificação

Retificação é um status terciário. Ela afeta diretamente o limite inferior das modificações de <Color id="red">Quanta</Color>.

Lembre-se de que seu <Color id="dark_red">poder mínimo</Color> é igual a <Color id="dark_red">1 - Quanta</Color>.

Com retificação (R), seu <Color id="dark_red">poder mínimo</Color> é igual a <Color id="dark_red">1 - (1 - R) \* Quanta</Color>.

Se isso não faz muito sentido, não se preocupe com isso.

Saiba apenas que valores mais altos de retificação são sempre bons.

Você também pode ter retificação negativa, o que é sempre ruim.

## Pistas

As pistas são outro status terciário.

Cada pista permite que você veja um item adicional na janela de visualização.

Quando você pode ver todos os encantamentos disponíveis, o texto mudará ligeiramente.

Você também pode ter zero pistas e não conseguir ver nada.
