# Animaciones

Con las animaciones podemos crear efectos, interfaces mas fluidas e incluso darle feedback visual a los usarios.

Por ejemplo, podemos crear un efecto de fade-in:

```js
import React, {useState} from 'react';
import {Animated, Text, View, StyleSheet, Button} from 'react-native';

export default function App() {
  // setteamos un valor inicial
  const [fadeAnim] = useState(new Animated.Value(0));

  const fadeIn = () => {
    // esta funcion va a cambir el valor fadeAnim
    // de 0 a 1, en un total de 2 segundos
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  const fadeOut = () => {
    // aca se hace la operacion inversa para lograr un fade-out
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});
```
