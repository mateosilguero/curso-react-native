import React from 'react';
import {StatusBar} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import List from './src/views/List';
import Detail from './src/views/Detail';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E3350D',
    normal: '#6D6D4E',
    fire: '#F08030',
    fighting: '#C03028',
    water: '#6890F0',
    flying: '#A890F0',
    grass: '#78C850',
    poison: '#A040A0',
    electric: '#F8D030',
    ground: '#E0C068',
    psychic: '#F85888',
    rock: '#B8A038',
    ice: '#98D8D8',
    bug: '#A8B820',
    dragon: '#7038F8',
    ghost: '#705898',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  },
};

const App = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor={MyTheme.colors.primary}
    />
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: MyTheme.colors.primary,
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Pokédex" component={List} />
        <Stack.Screen name="Pokémon" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default App;
