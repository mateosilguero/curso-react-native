# Navegacion

Entendemos por navegación a la transición entre pantallas. Es muy común en cualquier tipo de aplicación, divirla en modulos y secciones. Pero no contamos dentro del framework con una API para 'navegar', sino que debemos instalar una librería externa.

Dentro de las opciones, la más común y usada es [`react-navigation`](https://reactnavigation.org/).

Para instarlar esta nueva dependencia debemos correr los siguientes comandos en la terminal:

> https://reactnavigation.org/docs/getting-started

```bash
npm install @react-navigation/native
npm install @react-navigation/stack
```

expo:

```bash
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

cli:

```bash
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

---

uso:

`App.js`

```js
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './views/Home';
import HelpScreen from './views/Help';

const Stack = createStackNavigator();

// Cada uno de los componentes dentro del Stack.Navigator
// va a funcionar como pantallas dentro de nuestra app,
// y la prop 'name' va ser el identificador que debemos usar para
// llegar a ellas

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

`views/Home.js`

```js
import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// Todos los componentes que sean Vistas,
// reciben por props, un objeto llamado navigation*,
// el que podemos usar para movernos entre pantallas
export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Help')}>
        ir a ayuda
      </TouchableOpacity>
    </View>
  );
}
```

[navigation](https://reactnavigation.org/docs/navigating/)

`views/Help.js`

```js
import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function Help({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Help Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        volver
      </TouchableOpacity>
    </View>
  );
}
```

---

Luego, como esta libreria incluye codigo nativo, tenemos que volver a `compilar` nuestra app, corriendo los comandos:

android:

```bash
npm run android
```

ios:

```bash
cd ios && pod install && cd ..
npm run ios
```
