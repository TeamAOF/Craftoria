---
navigation:
  title: "Modos"
  icon: "laserio:textures/gui/buttons/modestocker.png"
  position: 1
  parent: laserio:mechanics.md
---

# Modos

Os Modos determinam o que um cartão faz fundamentalmente. As páginas a seguir definem cada tipo de modo atualmente disponível.

Cada tipo de cartão (Item/Fluido/Energia) suporta os três modos a seguir. Os Cartões de Item serão utilizados como exemplo.

Os Cartões de Redstone suportarão um conjunto diferente de modos.

<ItemImage id="laserio:card_item{channel:0b" />
<ItemImage id="exact:0b" />
<ItemImage id="inv:{Items:[]" />
<ItemImage id="Size:2}" />
<ItemImage id="itemextractamt:1b" />
<ItemImage id="itemextractspeed:20" />
<ItemImage id="mode:0b" />
<ItemImage id="priority:0s" />
<ItemImage id="regulate:0b" />
<ItemImage id="roundRobin:0" />
<ItemImage id="sneaky:-1b}" />

Os Cartões no Modo de Inserção são um destino de validação para objetos que estão sendo extraídos por Cartões no Modo de Extração.

Os Cartões no Modo de Estoque tentarão extrair dos Cartões do modo de Inserção.

<ItemImage id="laserio:card_item{channel:0b" />
<ItemImage id="exact:0b" />
<ItemImage id="inv:{Items:[]" />
<ItemImage id="Size:2}" />
<ItemImage id="itemextractamt:1b" />
<ItemImage id="itemextractspeed:20" />
<ItemImage id="mode:1b" />
<ItemImage id="priority:0s" />
<ItemImage id="regulate:0b" />
<ItemImage id="roundRobin:0" />
<ItemImage id="sneaky:-1b}" />

Os Cartões no Modo de Extração tentam remover objetos do bloco adjacente. Itens, por exemplo, serão removidos de um baú adjacente e enviados para um Cartão de Inserção.

<ItemImage id="laserio:card_item{channel:0b" />
<ItemImage id="exact:0b" />
<ItemImage id="inv:{Items:[]" />
<ItemImage id="Size:2}" />
<ItemImage id="itemextractamt:1b" />
<ItemImage id="itemextractspeed:20" />
<ItemImage id="mode:2b" />
<ItemImage id="priority:0s" />
<ItemImage id="regulate:0b" />
<ItemImage id="roundRobin:0" />
<ItemImage id="sneaky:-1b}" />

Os Cartões no Modo de Estoque tentam encontrar os itens designados em seu filtro e os extraem de outros Nós de Inserção na mesma rede.

Os Cartões no Modo de Estoque exigem um filtro definido como Permitir.

<ItemImage id="laserio:card_item{channel:0b" />
<ItemImage id="exact:0b" />
<ItemImage id="inv:{Items:[]" />
<ItemImage id="Size:2}" />
<ItemImage id="itemextractamt:1b" />
<ItemImage id="itemextractspeed:20" />
<ItemImage id="mode:3b" />
<ItemImage id="priority:0s" />
<ItemImage id="regulate:0b" />
<ItemImage id="roundRobin:0" />
<ItemImage id="sneaky:-1b}" />

Os Cartões no Modo de Sensor não movem objetos por ai, ao invés disso eles procuram nos inventários adjacentes, e emitem um sinal de redstone no canal de redstone se o filtro for verdadeiro.
Os Cartões no Modo de Sensor precisam de um filtro.

