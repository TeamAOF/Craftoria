---
navigation:
  title: "Modo Sensor"
  icon: "laserio:textures/gui/buttons/modesensor.png"
  position: 12
  parent: laserio:mechanics.md
---

# Modo Sensor

O Modo Sensor, ao invés de outros modos dos cartões, não movem objetos por ai. Ao invés disso, ele procura em inventários/tanques/células adjacentes pelo filtro configurado. Se a busca encontrar algo, então ele emitirá um sinal de redstone com força 15 no canal de redstone configurado.

Cartões no Modo Sensor exigem um filtro para funcionar - sem eles nada será feito.

Com um Filtro Básico, o sensor irá procurar por qualquer quantidade de objetos. Por exemplo, um Filtro Básico com uma pedra configurada, ele irá verificar se existe alguma pedra nos baús em volta. Se sim, ele emitirá um sinal de redstone no canal de redstone configurado.

Isso será verdadeiro caso exista 1 pedra ou 1000.

Com um Filtro de Contagem, o sensor irá procurar por uma quantidade maior ou igual ao valor especificado. Por exemplo, se o Filtro de Contagem estiver configurado para 32 peças de pedra, será verdadeiro para 32, 33, 34 pedrar e por ai vai.

Contudo, o botão do Modo Exato está disponível para os Filtros de Contagem. Se ativado, somente será verdadeiro para as 32 pedras, nada mais e nada menos.

Um novo botão está disponível no Modo Sensor - o botão E/Ou. No modo 'Ou', somente um dos filtros precisam ser verdadeiros, seguindo as regras anteriores.

Por exemplo, com 32 pedras e 16 vidros no filtro, com o modo 'Ou', o baú precisa ter 32 pedras para emitir um sinal. Ou 16 vidros. Ou ambos.

No modo 'E', todos os filtros precisam ser verdadeiros, por exemplo, o baú precisa ter 32 pedras E 16 vidros.

Os Filtros de Tags e de Mods funcionam conforme o esperado. Para os Filtros de Tags no modo 'E', o conteúdo do baú precisa combinar para todas as tags configuradas, independente se for 1 item ou vários itens.

É recomendado somente 1 Cartão no Modo Sensor por lado e por canal de redstone, caso existam multiplos, poderá ocorrer concorrência e causas comportamentos inesperados.

