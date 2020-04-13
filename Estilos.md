# Estilos en RN

https://reactnative.dev/docs/style

Ahora que vimos qué es un componente y como usarlos, seguramente querramos darle estilos, como por ejemplo agrandar el tamaño de un texto, darle color, ordenar los elementos en la pantalla, etc.

Todos los componentes de React Native admiten la propiedad `style`, la cual espera un objeto (o array de objetos) con atributos de estilos.
Esto atributos son similares a [CSS](https://developer.mozilla.org/es/docs/Web/CSS), aunque con varias limitantes como por ejemplo que a diferencia de la web los estilos no son en cascada y no hay herencia de los componentes a sus hijos, tampoco le podremos poner estilos especificos de texto a un contenedor y viceversa.
Ademas hay que tener en cuenta que seguimos escribiendo Javascript.

En la [documentación](https://reactnative.dev/docs/style) podemos ver algunos ejemplos.

## StyleSheet

la API de StyleSheet tiene varios métodos que nos ayudan a crear y organizar nuestros estilos.

El más usado es `create`, nos sirve para inicializar un objeto de estilos. Este método valida que los atributos que esten sean válidos y mejora la performance al usarlo:

```js
import {StyleSheet, Text} from 'react-native';

const Component = () => {
  return <Text style={styles.text}>Hola</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
```

Para las unidades de medidas usaremos números, y para todo lo demas seran strings.

Los [colores](https://reactnative.dev/docs/colors) aceptan valores hexadecimales (#FFFFFF) o nombres predeterminados, como `red` o `blue`.

---

Tambien podemos usar Estilos `inline`:

Por el ejemplo, para agregar [padding](https://developer.mozilla.org/es/docs/Web/CSS/padding) a un View:

```js
<View style={{ padding: 16 }}>...</View>
<Text style={{ color: 'white' }}>...</Text>
o
<View style={StyleSheet.create({padding: 16})}>...</View>
```
