# Red (Network)

En esta sección vamos a ver como consumir recursos externos y consumir rest APIs.

## Fetch

Para obtener data desde un servicio o api externa (como nuestro backend backend), tenemos que hacer peticiones http, y RN implementa un metodo identico al que podemos encontrar en el navegador: [`fetch`](https://reactnative.dev/docs/network#using-fetch).

A este no hace importarlo porque se encuentra dentro del objeto global.

> La función `fecth` retorna una [Promesa](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas)

uso:

```js
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

const Componente = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // esta API nos devuelve un listado con 10 usuarios de prueba
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((usuarios) => setUsuarios(usuarios));
  }, []);

  return <Text>Hay {usuarios.length} usuarios.</Text>;
};
```
