PlayerEvents.loggedIn(event => {
        if (!event.player.stages.has('first_join')) {

        event.player.give(Item.of('ftbquests:book'));

        event.player.stages.add('first_join')
  }
});