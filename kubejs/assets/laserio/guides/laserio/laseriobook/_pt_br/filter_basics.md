---
navigation:
  title: "Mecânicas Básicas"
  icon: "laserio:logic_chip"
  parent: laserio:filters.md
---

# Mecânicas Básicas

Clique com o botão direto para abrir sua interface. Como alternativa, a interface também está disponível quando os filtros estão dentro de cartões.

Os filtros permitem restringir quais itens podem ser inseridos, extraídos ou estocados.

1. Permitir vs Negar
2. Comparar tags NBT
3. Slots do Filtro

## Interface do Filtro

Interface do Filtro Básico

TODO: Unsupported flag 'border'
![](filter_basic.png)

Permitir vs Negar

No modo de Permitir, os itens no filtro serão permitidos pelo filtro. O que significa que os insersores podem aceitar pedras ou os extratores podem extrair pedras.

No modo de Negar, será o oposto.

Comparar tags NBT

Quando a comparação de tags NBT estiver ativa, as tags NBT dos itens serão consideradas pelo filtro. Por exemplo, uma espada armazena a quantidade de dano sofrida em uma tag NBT. Com o modo 'Comparar tags NBT' estiver ativo, uma espada de diamante sem nenhum dano é diferente de uma já danificada, ou de uma encantada.

Com a Comparação de tags NBT desativada, todas as espadas de diamante serão aceitas, independente dos status.

