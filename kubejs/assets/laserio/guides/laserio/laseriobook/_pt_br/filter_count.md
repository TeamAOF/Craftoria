---
navigation:
  title: "Filtro de Contagem"
  icon: "laserio:filter_count"
  position: 2
  parent: laserio:filters.md
---

# Filtro de Contagem

O Filtro de Contagem pode designar um número específico de itens e desempenha um papel diferente com base no modo do cartão.

O tamanho da stack de itens pode ir de 1 a 4096. Clicar com o botão esquerdo aumentará o tamanho da stack, enquanto clicar com o botão direito o diminuirá. Segurar Shift ou Ctrl modificará este valor em 10 ou 64 respectivamente.

Se um Filtro de Contagem for usado em um cartão de modo de estoque, ele tentará manter a quantidade especificada de recursos em estoque. Por exemplo, para manter 64 pedras em um baú basta usar um filtro de contagem com 64 pedras.

Se um Filtro de Contagem for usado em um cartão de inserção, ele limitará quantos itens podem ser enviados para esse inventário por cartões de extração.

Se um Filtro de Contagem for usado em um cartão de modo extrator, ele deixará o número designado de itens para trás. Por exemplo, se você definir um cartão de extração com um filtro de 8 pedras, ele retirará todos, exceto os últimos 8, de um baú.

Os Filtros de Contagem não têm um botão Permitir vs Negar - pois o modo Negar não faria sentido para um filtro de contagem. Todos os filtros de contagem estão no 'Modo Permitir'. A integração com o JEI funciona da mesma forma que um [Filtro Básico](./filter_basic.md).

