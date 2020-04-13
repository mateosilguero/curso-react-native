# Comenzando con React Native

Uno de nuestros recursos más importantes para apreder, debería ser la [documentación oficial](https://reactnative.dev/docs/getting-started), esta guía esta basada en ella, aunque aún no esta en español :(

## ¿Qué es React Native?

Según el sitio: `Un framework para apps Nativas con React`.

Basicamente, un conjunto de herramientas que nos ayudan a armar aplicaciones mobile para android y ios teniendo una sola base de código.

Para desarrollar aplicaciones de manera "tradicional", quiero decir sin usar ningún framework multiplataforma, debemos hacerlo usando Java o Kotlin para android, y Objective-C o Swift, pero react native nos permite hacerlo para ambas plataformas al mismo tiempo usando React (javascript).

y ahora...

## ¿Qué es React?

`https://es.reactjs.org/`

> Una biblioteca de JavaScript para construir interfaces de usuario

Tanto React, como React Native son librerias de código abierto creadas por Facebook, y sirven para crear interfaces de usario usando solamente javascript, y uno de los fuertes de estas son podes crear componentes reutilizables y modularizables.

## Conceptos Básicos de React

> [ver más](https://reactnative.dev/docs/intro-react)

Sintaxis:

En la actualidad nos da una sintaxis muy parecida a HTML que se llama JSX y se escribe asi:

index.js (en web)

```js
// al inicio del archivo importamos nuestras dependecias
import React from 'react';
import ReactDOM from 'react-dom';

// EmotyDiv no recibe props
const EmptyDiv = () => {
  return <div />;
};

// Declaramos una función que luego llamaremos componente
// esta recibe un solo argumento, que es un objeto al que normalmente le diremos props
const HelloMessage = (props) => {
  // react nos pide que el return del componente
  // devuelva un solo elemento
  // en este caso estamos retornando un div, con dos 'hijos' adentro
  return (
    <div>
      Hola {props.name}
      <EmptyDiv />
    </div>
  );
};

// de esta manera invocamos nuestro componente, y le pasamos la propiedad name,
// con el valor "Taylor"
ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example'),
);
```

Props:

Recién hablamos de props, que son ? pueden traducirse como los valores que le podemos pasar a un componente desde otro lado, por ejemplo desde el padre, y los valores pueden ser estos:

```js
<HelloMessage
  string="string"
  number={1}
  boolean={true}
  anotherBoolean
  function={function () {
    console.log('hello');
  }}
  object={{a: 1}}
  array={[1, 2, 3]}
  null={null}
/>;

// y eso se traduce a esto:

const HelloMessage = (props) => {
  console.log(props);
  /*
    {
        string: "string",
        number: 1,
        boolean: true,
        anotherBoolean: true, // si no le ponemos nada, tambien lo toma como true
        function: function () {
            console.log('hello');
        },
        object: {a: 1},
        array: [1, 2, 3]
        null: null
    }
  */
  return <div></div>;
};
```

Estado interno:

Nuestros componentes pueden mantener un estado, valores que persiste durante su `ciclo de vida`, y que podemos usar según necesitemos.

```js
// con el 'hook' useState podemos inicializar y luego modificar el estado
import React, { useState } from 'react'

// Nuestro componente muestra en un primer momento el valor Taylor,
// pero cuando apretamos el valor, ese valor cambia a Mateo
const HelloMessage = (props) => {
    const [name, setName] = useState(props.name)
    return (
        <div>
            Hola {name}
            <button onClick={() => setName('Mateo')}>
                Cambiar Nombre
            </button>
        </div>
    );
}


...

<HelloMessage name="Taylor" />
```

Ciclo de vida:

El ciclo de vida es la manera en la que controlamos el comportamiendo del componente desde que es llamado (montado) hasta que dejar de existir dentro de nuestra aplicación.

```js
// con el 'hook' useEffect controlar el ciclo de vida
import React, { useEffect, useState } from 'react'

// Nuestro componente muestra en un primer momento el valor Taylor,
// pero cuando apretamos el valor, ese valor cambia a Mateo
const Timer = (props) => {
    const [seconds, setSeconds] = useState(0) // el estado toma valor inicial 0

    const tick = () => {
        setSeconds(seconds + 1);
    }

    // esta funcion se va a llamar una sola vez porque como segundo paramentro
    // le pasamos un array vacío
    useEffect(() => {
        // useEffect se llama una vez que el componente este montado
        // a cada segundo, incrementaremos en 1 el valor del estado
        const interval = setInterval(() => tick(), 1000);

        // la funcióin de retorno se llama una vez que el componente se desmonte
        return () => {
            // aqui vamos a limpiar el intervalo1
            clearInterval(interval);
        }
    }, [])

    // en cambio aca, se va ejecutar en cada render,
    // digamos que cada vez que algo del componente cambie,
    // como el estado o las props
    useEffect(() => {
        console.log('me voy a mostrar en cada render')
    })

    return (
      <div>
        Segundos: {this.state.seconds}
      </div>
    );
}
...

<Timer />
```

Podremos aprender más sobre esto, haciendo el [tutorial](https://es.reactjs.org/tutorial/tutorial.html)

En React Native todos estos conceptos se mantienenn, pero en lugar de div, deberemos usar View [y así](https://reactnative.dev/docs/intro-react-native-components#core-components)

Ahora podremos comenzar con la [configuración inicial de React Native](./Setup.md)
