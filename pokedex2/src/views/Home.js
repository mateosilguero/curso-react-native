import React, {useEffect, useState} from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import P, {Pokemon} from '../services/pokeapi';

const Home = ({navigation}) => {
  const [filterBy, setFilter] = useState('');
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    P.getPokemonsList({limit: 150}).then((response) => {
      setPokemon(
        response.results.map((pokemon, index) =>
          Pokemon({
            ...pokemon,
            id: index + 1,
          }),
        ),
      );
    });
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Buscar..."
        style={styles.input}
        onChangeText={(value) => setFilter(value)}
      />
      <FlatList
        contentContainerStyle={{paddingBottom: 50}}
        data={pokemons.filter((pokemon) => pokemon.name.includes(filterBy))}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.pokemon}
              onPress={() => navigation.navigate('Pokemon', {pokemon: item})}>
              <Image style={styles.pokemonImage} source={{uri: item.image}} />
              <Text>
                {item.id} - {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pokemon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  pokemonImage: {
    height: 52,
    width: 52,
    marginRight: 16,
  },
  input: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    fontSize: 16,
    paddingHorizontal: 8,
  },
});

export default Home;
