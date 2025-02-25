---
navigation:
  title: "Cartão de Redstone"
  icon: "laserio:card_redstone"
  position: 4
  parent: laserio:cards.md
item_ids:
  - laserio:card_redstone
---

# Cartão de Redstone

Os Cartões de Redstone são utilizados para transmitir sinais de redstone para toda a rede LaserIO. 

Os Cartões de Redstone tem um 'canal de redstone' dedicado, separado dos canais utilizados pelos outros cartões.

Os Cartões de Redstone possuem 2 modos:

**Entrada**
O modo de Entrada aceitará um sinal de redstone de algo como um pó de redstone, uma alavanca, ou um botão, e transmitirá através de toda a rede do canal configurado no cartão.

**Saída**
O modo de Saída emitirá um sinal de redstone para blocos como um pó de redstone, lâmpadas ou repetidores.

O modo de Saída tem um chaveamento para Fraco vs Forte. No modo Fraco, somente blocos diretamente adjacentes receberão o sinal, similar ao funcionamento do pó de redstone.

No modo Forte o sinal de redstone pode ser transmitido através de um bloco adjacente e afetar o outro lado, semelhante ao funcionamento de uma alavanca.

Todos os cartões tem um modo para alternar a ação da redstone, por padrão irá ignorar, significando que os cartões sempre funcionarão.

Se definido como baixo, os cartões somente funcionarão se NÃO houver um sinal de redstone no canal (o botão para o canal é o da direita do alternador de redstone).

No modo de operação alto, os cartões somente funcionarão se HOUVER um sinal de redstone no canal.

## Cartão de Redstone



<Recipe id="laserio:card_redstone" />

