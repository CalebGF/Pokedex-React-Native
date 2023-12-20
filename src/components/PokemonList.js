import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import PokemonCard from './PokemonCard'

export default function PokemonList(props) {
    const { pokemons, isNext, loadPokemons } = props
    const loadMorePokemons = () => {
        loadPokemons()
    }
  return (
    <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item}) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContainer}
        onEndReached={isNext && loadMorePokemons}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
            isNext && (
            <ActivityIndicator size="large" style={styles.spinner} />)
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