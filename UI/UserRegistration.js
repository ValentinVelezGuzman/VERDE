import React from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import styles from '../styles/styleUserRegistration';

const UserRegistration = () => {
  return (
    <View style={styles.containerPUR}>
      <Text style={styles.title1}>Formulario de Registro</Text>
      <View style={styles.container1UR}>
        <View style={styles.container2UR}>
          <TextInput
            placeholder="Usuario"
            style={[styles.input, { height: 50, width: 300 }]}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            style={[styles.input, { height: 50, width: 300 }]}
          />
          <TextInput
            placeholder="Correo"
            keyboardType="email-address"
            style={[styles.input, { height: 50, width: 300 }]}
          />
          <TextInput
            placeholder="Dirección"
            style={[styles.input, { height: 50, width: 300 }]}
          />

          <Button
            title="Registrarse"
            color="#4cad42"
            onPress={() => alert('Usuario registrado exitosamente')}
          />
        </View>
      </View>
    </View>
  );
};

export default UserRegistration;
