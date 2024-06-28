ServerEvents.recipes((event) => {

    const id = [

    ];

    const output = [
       
    ];

    id.forEach((id) => {
        event.remove({ id: id });
    });

    output.forEach((output) => {
        event.remove({ output: output });
    });
});
