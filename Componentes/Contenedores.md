# Contenedores

En React Native tenemos elementos contenedores que sirven tanto como para agrupar componentes, como definir secciones y darle estilos o propiedas especificas.

## View

El más común es el [View](https://reactnative.dev/docs/view), podriamos compararlo con un div en web.

uso:

```js
    import { View } from 'react-native
    ...

    <View>
        ...
    </View>
```

## ScrollView

Por defecto en RN, cuando el largo del contenido excede el tamaño de la pantalla, el sobrante quedará oculto. Para darle la posibilidad al usuario de scrollear y ver estos elementos, deberemos preveer esta situación y contener la vista dentro de un [ScrollView](https://reactnative.dev/docs/scrollview).

uso:

```js
    import { ScrollView } from 'react-native
    ...

    <ScrollView>
        {/*contenido muy largo*/}
    </ScrollView>
```

## SafeAreaView

Y luego tenemos el [SafeAreaView](https://reactnative.dev/docs/safeareaview), que su función principial es fijarse si el dispositivo en el que estamos tiene **Notch** y ajustar el contenido teniendo en cuenta estos espacios.

![notch](https://resizer.iproimg.com/unsafe/880x/https://assets.iprofesional.com/assets/jpg/2020/01/489197.jpg?5.4.3 'Notch')

uso:

```js
    import { SafeAreaView } from 'react-native
    ...

    <SafeAreaView>
        ...
    </SafeAreaView>
```
