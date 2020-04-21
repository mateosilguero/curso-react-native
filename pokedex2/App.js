import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/views/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#ff0000" />
      <Stack.Navigator
        screenOptions={{
          title: 'Pokedex',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Home2" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
