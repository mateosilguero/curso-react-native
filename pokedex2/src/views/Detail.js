import React, {useEffect, useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import P, {Pokemon} from '../services/pokeapi';
import {ScrollView} from 'react-native-gesture-handler';

const Detail = ({route, navigation}) => {
  const [poke, setPoke] = useState({});
  const {colors} = useTheme();
  const {pokemon, previous} = route.params;

  const colorByType = colors[poke.types?.[0].type.name];

  const recursiveEvolutionChain = (chain) => {
    const isCurrent = chain?.species.name === pokemon.name;
    return (
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            if (previous === chain?.species.name) {
              navigation.goBack();
            } else if (!isCurrent) {
              navigation.push('Pokemon', {
                pokemon: chain.species,
                previous: pokemon.name,
              });
            }
          }}>
          <Text
            style={[
              styles.pokemonName,
              {
                marginHorizontal: 16,
                color: isCurrent && colors.primary,
              },
            ]}>
            {chain?.species.name}
          </Text>
        </TouchableOpacity>
        {chain?.evolves_to.length > 0 && (
          <Text style={styles.pokemonName}>></Text>
        )}
        <View>
          {chain?.evolves_to?.map((poke) => recursiveEvolutionChain(poke))}
        </View>
      </View>
    );
  };

  useEffect(() => {
    Promise.all([
      P.getPokemonByName(pokemon.name),
      P.getPokemonSpeciesByName(pokemon.name),
    ]).then(([pokemonInfo, speciesInfo]) => {
      const {types, id} = pokemonInfo;
      const {evolution_chain, flavor_text_entries} = speciesInfo;
      const description = flavor_text_entries
        .find((flavor) => flavor.language.name === 'es')
        ?.flavor_text.replace(/\n/g, ' ');
      P.resource(evolution_chain.url).then((evolutionChain) => {
        setPoke(
          Pokemon({
            ...pokemon,
            id,
            description,
            chain: evolutionChain.chain,
            types: types.sort((a, b) =>
              a.slot > b.slot ? 1 : a.slot < b.slot ? -1 : 0,
            ),
          }),
        );
      });
    });
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colorByType,
      },
    });
  }, [colorByType]);

  return (
    <View style={{padding: 16}}>
      <StatusBar backgroundColor={colorByType} barStyle="light-content" />
      <View style={styles.row}>
        <Image style={{width: 180, height: 180}} source={{uri: poke.image}} />
        <View style={{paddingTop: 24}}>
          <Text style={styles.pokemonName}>
            #{poke.id} - {poke.name}
          </Text>
          <View style={styles.typesContainer}>
            {poke.types?.map((type, index) => (
              <Text
                key={index}
                style={[
                  styles.type,
                  {backgroundColor: colors[type.type.name]},
                ]}>
                {type.type.name}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <Text style={{fontSize: 16}}>{poke.description}</Text>
      <Text style={{fontSize: 24, marginTop: 16}}>Cadena Evolutiva</Text>
      <ScrollView horizontal style={styles.typesContainer}>
        {recursiveEvolutionChain(poke.chain)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  pokemonName: {
    fontSize: 20,
  },
  typesContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  type: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
    color: 'white',
  },
});

export default Detail;
