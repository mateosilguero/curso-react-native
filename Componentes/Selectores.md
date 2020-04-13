# Selectores

Los Selectores ([Pickers](https://reactnative.dev/docs/picker)), son la forma que tenemoa de mostrar un menú despeglable con opciones:

uso:

```js
    import { Picker } from 'react-native'
    ...

    <Picker
        onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
    >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
    </Picker>
```
