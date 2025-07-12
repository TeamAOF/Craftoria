---
navigation:
  title: "Redstone Cards"
  icon: "laserio:card_redstone"
  position: 4
  parent: laserio:cards.md
item_ids:
  - laserio:card_redstone
---

# Redstone Cards

Redstone cards are used to transmit redstone signals across the entire LaserIO network. 

Redstone cards have a dedicated 'redstone channel', separate from the channels that other cards use. 

Redstone cards have 2 modes:

**Input**
Input mode will accept a redstone signal from something like redstone dust, a lever, or a button, and transmit it across the network on the redstone channel configured on the card.

**Output**
Output will emit a redstone signal to blocks like redstone dust, lamp, or repeaters.

Output mode has a toggle for Weak vs Strong. In weak mode, only directly adjacent blocks like redstone will get the signal, similar to how redstone dust works.

In strong mode the redstone signal can transmit through an adjacent block and affect the block on the other side, like how levers work.

All cards have a redstone mode toggle, which defaults to ignored, meaning the cards will always operate.

If set to low, the cards will only function when there is NOT a redstone signal on the redstone channel (the channel button is to the right of the redstone toggle).

On redstone high mode, the cards will only operate when there IS a redstone signal on the redstone channel.

## Redstone Card



<Recipe id="laserio:card_redstone" />

