import React, {useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';

const Home = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput onChangeText={(value) => setText(value)} />
      <Text>{text}</Text>
      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default Home;
