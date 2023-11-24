import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Image} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5";
import AccountScreen from "../screens/AccountScreen"
import PokedexScreen from "../screens/PokedexScreen"
import FavoritesScreen from "../screens/FavoritesScreen"

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Favorites" 
                        component={FavoritesScreen} 
                        options={{ 
                            tabBarLabel: "My Favorites" ,
                            tabBarIcon: (color, size) => (
                                <Icon name="heart" size={size} color={color} />
                            )
                            
                        }}            
            />

            <Tab.Screen name="Pokedex" 
                        component={PokedexScreen}
                        options={{ 
                            tabBarLabel: "" ,
                            tabBarIcon: () => renderPokeball(),
                            
                        }}
            
            />
            <Tab.Screen name="Account" 
                        component={AccountScreen} 
                        options={{ 
                            tabBarLabel: "My Account" ,
                            tabBarIcon: (color, size) => (
                                <Icon name="user" size={size} color={color} />
                            )
                        }}
                        />
        </Tab.Navigator>
    )
}

function renderPokeball() {
    return ( <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />)
}
  
