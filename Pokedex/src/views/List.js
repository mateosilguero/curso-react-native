import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import P, {Pokemon} from '../../services/pokeapi';

export default function List({navigation}) {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    P.getPokemonsList({limit: 150}).then((response) => {
      setPokemon(
        response.results.map((p, index) =>
          Pokemon({
            ...p,
            id: index + 1,
          }),
        ),
      );
    });
  }, []);
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Buscar ..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />
      <FlatList
        contentContainerStyle={{paddingBottom: 50}}
        data={pokemon.filter((p) => p.name.includes(search))}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Pokémon', {pokemon: item})}>
            <Image
              style={{width: 50, height: 50}}
              resizeMode="contain"
              source={{
                uri: item.image,
              }}
            />
            <Text style={{marginLeft: 16}}>
              #{item.id} - {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
    fontSize: 16,
    paddingHorizontal: 16,
  },
});
