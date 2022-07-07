const P = new Pokedex.Pokedex();
(async () => {
    const golduck = await P.getPokemonByName("golduck");
    console.log(golduck);
    const theList = await P.getPokemonsList();
    console.log(theList)
})();

function download(source){
    const fileName = source.split('/').pop();
	var el = document.createElement("a");
	el.setAttribute("href", source);
	el.setAttribute("download", fileName);
	document.body.appendChild(el);
 	el.click();
	el.remove();
}

let htmlTemplate =``;

for (let index = 1; index <1154 ; index++) {
    // download(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`)
    htmlTemplate += `<a class='btn btn-link' href='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg' download>
    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg' /></a>`
}

document.querySelector('#display').innerHTML = htmlTemplate;