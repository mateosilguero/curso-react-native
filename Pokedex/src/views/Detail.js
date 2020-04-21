import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import P, {Pokemon} from '../../services/pokeapi';

export default function Detail({route, navigation}) {
  const [pokemon, setPokemon] = useState(route.params.pokemon);
  const [isLoading, setLoading] = useState(true);
  const {colors} = useTheme();

  const colorByType = colors[pokemon.types?.[0].type.name];

  useEffect(() => {
    Promise.all([
      P.getPokemonByName(pokemon.name),
      P.getPokemonSpeciesByName(pokemon.name).then((res) =>
        P.resource(res.evolution_chain.url).then((chain) => ({
          description: res.flavor_text_entries
            ?.find((flavor) => flavor.language.name === 'es')
            ?.flavor_text?.replace(/\n/g, ' '),
          chain: chain.chain,
        })),
      ),
    ])
      .then(([poke, evolutionChain]) => {
        setPokemon(
          Pokemon({
            ...pokemon,
            ...evolutionChain,
            ...poke,
          }),
        );
        setLoading(false);
      })
      .catch(() => {
        navigation.goBack();
      });

    // o
    // fetch(pokemon.url)
    //   .then(res => res.json())
    //   .then(response => setPokemon({...pokemon, ...response}))
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colorByType,
      },
    });
  }, [colorByType]);

  const recursiveEvolutionChain = (chain) => {
    const isCurrent = chain?.species.name === pokemon.name;
    return (
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            if (route.params.previous === chain?.species.name) {
              navigation.goBack();
            } else if (!isCurrent) {
              navigation.push('Pokémon', {
                pokemon: chain.species,
                previous: pokemon.name,
              });
            }
          }}>
          <Text
            style={[
              styles.name,
              {
                marginHorizontal: 16,
                color: isCurrent && colors.primary,
              },
            ]}>
            {chain?.species.name}
          </Text>
        </TouchableOpacity>
        {chain?.evolves_to.length > 0 && <Text style={styles.name}>></Text>}
        <View>
          {chain?.evolves_to?.map((poke) => recursiveEvolutionChain(poke))}
        </View>
      </View>
    );
  };

  return isLoading ? (
    <ActivityIndicator
      size={54}
      color={colors.primary}
      style={{marginTop: 36}}
    />
  ) : (
    <ScrollView contentContainerStyle={{padding: 16}}>
      <StatusBar backgroundColor={colorByType} barStyle="light-content" />
      <View style={[styles.row, {justifyContent: 'flex-start'}]}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: pokemon.image,
          }}
        />
        <View>
          <Text style={styles.name}>
            #{pokemon.id} - {pokemon.name}
          </Text>
          <View
            style={[
              styles.row,
              {marginRight: 8, justifyContent: 'flex-start'},
            ]}>
            {pokemon.types?.map((t) => (
              <View
                style={[
                  styles.type,
                  {
                    backgroundColor: colors[t.type.name],
                  },
                ]}>
                <Text style={{color: 'white'}}>{t.type.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <Text style={styles.description}>{pokemon.description}</Text>
      {pokemon.chain?.evolves_to.length > 0 && (
        <>
          <Text style={styles.name}>Cadena evolutiva:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recursiveEvolutionChain(pokemon.chain)}
          </ScrollView>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {width: 150, height: 150, alignSelf: 'center'},
  name: {fontSize: 24},
  description: {fontSize: 16, marginBottom: 16},
  row: {flexDirection: 'row'},
  type: {padding: 8, paddingHorizontal: 16, margin: 4, borderRadius: 56},
});
