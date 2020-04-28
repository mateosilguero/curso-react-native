import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/views/Home';
import Detail from './src/views/Detail';

const Stack = createStackNavigator();

const theme = {
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

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen name="Pokedex" component={Home} />
        <Stack.Screen name="Pokemon" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
