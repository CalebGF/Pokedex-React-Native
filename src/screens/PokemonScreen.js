import { View, Text } from 'react-native'
import Header from '../components/pokemonDetail/Header'
import Types from '../components/pokemonDetail/Types'
import { ScrollView } from 'react-native-gesture-handler'
import Stats from '../components/pokemonDetail/Stats'

export default function PokemonScreen(props) {
  const { pokemon } = props.route.params
  return (
    <ScrollView>
      <Header 
            name={pokemon.name}  
            order={pokemon.order}
            image={pokemon.image}
            types={pokemon.type}
      />
      <Types types={pokemon.type} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}