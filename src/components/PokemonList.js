import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import PokemonCard from './PokemonCard'

export default function PokemonList(props) {
    const { pokemons } = props
    const loadMorePokemons = () => {
        console.log("Cargando mas pokemons")
    }
  return (
    <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item}) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContainer}
        onEndReached={loadMorePokemons}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
            <ActivityIndicator size="large" style={styles.spinner} />
        }
    />
  )
}


const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    }
})