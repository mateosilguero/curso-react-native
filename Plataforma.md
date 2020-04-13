# Código específico de la plataforma

Muchas de las cosas que hagamos, se verá y funcionará igual tanto en android como en iphone, pero si quisieramos cambiar el comportamiento o aplicar estilos según la plataforma en donde se corra la aplicación, podemos usar la API de [Platform](https://reactnative.dev/docs/platform-specific-code).

> `Platorm.OS` nos devuelve `android` o `ios`.

```js
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
});
```

> `Platorm.select` se comporta según la plataforma

```js
    import { Platform, TouchableOpacity } from 'react-native';

    ...


    <TouchableOpacity
        onPress={Platform.select({
            android: () => console.log('estamos en android'),
            ios: () => console.log('estamos en iOS'),
        })}
    />
```
