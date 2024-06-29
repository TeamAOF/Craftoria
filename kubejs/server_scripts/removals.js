ServerEvents.recipes((event) => {

    const id = [
        'modern_industrialization:quarry/bronze',
        'modern_industrialization:quarry/gold',
        'modern_industrialization:quarry/steel',
        'modern_industrialization:quarry/stainless_steel',
        'modern_industrialization:quarry/titanium'
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
