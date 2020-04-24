import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import P from '../services/pokeapi';

const Detail = ({route}) => {
  const [poke, setPoke] = useState({});
  const {pokemon} = route.params;

  useEffect(() => {
    P.getPokemonByName(pokemon.name).then(function (response) {
      setPoke({...pokemon, ...response});
    });
  }, []);

  return (
    <View>
      <Image style={{width: 50, height: 50}} source={{uri: pokemon.image}} />
      <Text>
        #{pokemon.id} - {pokemon.name}
      </Text>
      {}
      <Text>
        #{pokemon.id} - {pokemon.name}
      </Text>
    </View>
  );
};

export default Detail;
