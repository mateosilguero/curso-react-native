# Inputs

para mostrar imagenes deberemos usar el componente [Image](https://reactnative.dev/docs/image).

uso:

```js
    import { Image, View } from 'react-native'
    ...

    <View>
      <Image
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
```

la prop `source` puede recibir tanto la data de la imagen (cuando hacemos require), como un objeto con la key uri que apunta a una url externa
