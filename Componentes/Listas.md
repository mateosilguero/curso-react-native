# Listas

Una forma de renderizar una lista de elementos en React quizá sea esta:

```jsx
const numbers = [1,2,3]
<div>
  {numbers.map((number, index) => (
    <p key={index}>{number}</p>
  ))}
</div>
```

Y podriamos hacer lo mismo en native, sin embargo el framework nos dice que esta forma puede ser muy poco performante, es decir que podriamos tener problemas con la velocidad, por lo que en su lugar nos sugieren el uso del componente [FlatList](https://reactnative.dev/docs/flatlist).

uso:

```jsx
    import { FlatList, Text } from 'react-native'
    const numbers = [1,2,3]
    ...

    <FlatList
        data={numbers}
        keyExtractor={item => item} // esta funcion
        renderItem={({item}) => (
            <Text>{item}</Text>
        )}
    />
```
