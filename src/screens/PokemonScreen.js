import { View, Text } from 'react-native'
import Header from '../components/pokemonDetail/Header'

export default function PokemonScreen(props) {
  const { pokemon } = props.route.params
  return (
    <View>
      <Header 
            name={pokemon.name}  
            order={pokemon.order}
            image={pokemon.image}
            types={pokemon.type}
      />
    </View>
  )
}