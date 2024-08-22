import React from 'react';
import { View, TextInput, Text, Button, Alert, alert} from 'react-native';
import styles from '../styles/styleUserRegistration';
import usersGroup from '../arrayData/usersGroup';

const UserRegistration = () => {

  const registerUser = () => {

    const newUser = {
      id: usersGroup.length + 1,
      image: require('../images/imgUsers/u1.png'), // Imagen predeterminada
      nameUser: username,
      ageUser: userage,
    };
    usersGroup.push(newUser);
    alert('Usuario registrado exitosamente');
  };
  const showUsersGroup = () => {
    Alert.alert('Usuarios Registrados', JSON.stringify(usersGroup, null, 2));
  };

  return (
    <View style={styles.containerPUR}>
      <Text style={styles.title1}>Formulario de Registro</Text>
      <View style={styles.container1UR}>
        <View style={styles.container2UR}>
        <TextInput
            placeholder="Usuario"
            style={[styles.input, { height: 50, width: 300 }]}
            onChangeText={(text) => { username = text; }}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            style={[styles.input, { height: 50, width: 300 }]}
            onChangeText={(text) => { password = text; }}
          />
          <TextInput
            placeholder="Correo"
            keyboardType="email-address"
            style={[styles.input, { height: 50, width: 300 }]}
            onChangeText={(text) => { email = text; }}
          />
          <TextInput
            placeholder="Dirección"
            style={[styles.input, { height: 50, width: 300 }]}
            onChangeText={(text) => { address = text; }}
          />
          <TextInput
            placeholder="Edad"
            keyboardType="numeric"
            style={[styles.input, { height: 50, width: 300 }]}
            onChangeText={(text) => { userage = text; }}
          />         

          <Button
            title="Registrarse"
            color="#4cad42"
            onPress={registerUser}
          />
          <Button
            title="Ver Usuarios Registrados"
            color="#4cad42"
            onPress={showUsersGroup}
          />
        </View>
      </View>
    </View>
  );
};

export default UserRegistration;
