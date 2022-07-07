const P = new Pokedex.Pokedex();
(async () => {
    const golduck = await P.getPokemonByName("golduck");
    console.log(golduck);
    const theList = await P.getPokemonsList();
    
})();

