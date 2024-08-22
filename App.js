import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './UI/Login';
import UserRegistration from './UI/UserRegistration';
import ItemList from './UI/ItemList';
import ItemDetails from './UI/ItemDetails';

const Stack = createNativeStackNavigator();

//<Stack.Screen name="Login" component={Login} />
/*
<Stack.Screen name={"Login"} component={Login} options={{ title: 'Bienvenido' }}/>
<Stack.Screen name={"UserRegistration"} component={UserRegistration} options={{ title: 'Registro de Usuario' }}/>
<Stack.Screen name={"ItemList"} component={ItemList} options={{ title: 'Lista de Articulos' }}/>
*/
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Login"} component={Login} options={{ title: 'Bienvenido' }}/>
        <Stack.Screen name={"UserRegistration"} component={UserRegistration} options={{ title: 'Registro de Usuario' }}/>
        <Stack.Screen name={"ItemList"} component={ItemList} options={{ title: 'Lista de Articulos' }}/>
        <Stack.Screen name={"ItemDetails"} component={ItemDetails} options={{ title: 'Detalles de Articulos' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
