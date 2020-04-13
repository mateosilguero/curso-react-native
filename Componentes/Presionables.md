# Botones

Tenemos varios componentes que nos permiten darle la propiedad de 'presionable' o 'tocable' a otro.

Estos 3 son bastante similiares:

[TouchableHighlight](https://reactnative.dev/docs/touchablehighlight)

[TouchableOpacity](https://reactnative.dev/docs/touchableopacity)

[TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback)

Varian en algunas props que admiten o no, y principalmente en el comportamiento que tiene al tocarlos.

uso:

```js
    import { Text, TouchableOpacity } from 'react-native
    ...

    <TouchableOpacity onPress={() => console.log('click !')}>
        <Text>Boton</Text>
    </TouchableOpacity>
```

## Button

Luego apareció el componente [Button](https://reactnative.dev/docs/button), que es un TouchableOpacity con estilos especificos, y tiene una API algo distinta:

uso:

```js
    import { Button } from 'react-native
    ...

    <Button
        onPress={onPressLearnMore}
        title="Boton"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
    />
```
