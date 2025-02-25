---
navigation:
  title: "Rodízio"
  icon: "laserio:textures/gui/buttons/roundrobintrue.png"
  position: 5
  parent: laserio:mechanics.md
---

# Rodízio

O modo Rodízio está somente disponível no Modo de Extração.

O Rodízio instrui um Extrator a distribuir os itens uniformemente entre vários insersores.

Existem três modos disponíveis:
1. Falso
2. Verdadeiro
3. Forçado

Quando configurado para **Falso**, o Rodízio é desativado, e o sistema de [prioridade](./priority.md) é seguido. O primeiro inventário será preenchido completamente antes dos objetos serem enviados para o próximo inventário.

Quando configurado para **Verdadeiro**, os itens serão enviados para os baús em ordem de prioridade e distribuídos uniformemente.

Se houverem 3 baús em uma rede, o primeiro conjunto de itens irá para o primeiro baú, o 2º conjunto para o 2º baú, etc..

Quando configurado para **Forçado**, as mesmas regras do modo 'Verdadeiro' serão seguidas. No entanto, se um dos destinos ficar cheio, o extrator deixará de funcionar até ficar disponível novamente.

Nota: O descarregamento de chunks pode causar uma mudança na mecânica do rodízio, especialmente se alguns Nós forem descarregados quando outros não forem.

