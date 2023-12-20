import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    (async () =>{
      await loadPokemons();
    })();
  
    // Cleaning up funciton
    return () => {
      setPokemons([]);
      setNextUrl(null);
    };
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl)
      setNextUrl(response.next)
      const pokemonsArray = []

      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url)
        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other["official-artwork"].front_default
        })
      }
      setPokemons(prevPokemons => [...prevPokemons, ...pokemonsArray])
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}></PokemonList>
    </View>
  )
}


export default Pokedex