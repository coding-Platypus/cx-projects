let currentPokemonId = null;

document.addEventListener("DOMContentLoaded", () => {
    const maxPokemons = 151;
    const pokemonID = newURLSearchParams(window.location.search).get("id");
    const id = parseInt(pokemonID, 10);

    if(id < 1 || id > maxPokemons) {
        return (window.location.href = "./index.html");
    }

    currentPokemonId = id;
    loadPokemon(id);
})

async function loadPokemon(id) {
    try{
        const [pokemon, pokemonSpecies] = await Promise.all([fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => 
        res.json()
    ), 
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => 
        res.json()
    )])
       return true;
    } catch (error) {
        console.error("An error occured whule fetching Pokemon data:", error);
    }
}