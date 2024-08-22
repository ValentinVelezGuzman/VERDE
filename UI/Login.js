import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/styleLogin';

const Login = ({navigation }) => {
  return (
    <View style={styles.containerP}>
      <View style={styles.container1}>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}
        >
          <View style={{ backgroundColor: '#99c454', flex: 0.3 }} />
          <View style={{ backgroundColor: '#4cad42', flex: 0.5 }} />
          <View>
            <Text style={styles.slogan}> Supermercado </Text>
            <Text style={styles.slogan}> Digital </Text>
          </View>
        </View>
      </View>

      <View style={styles.container2}>
        <Text style={styles.logo}>Verde</Text>
      </View>

      <View style={styles.container3}>
        <TextInput
          placeholder="Correo electrónico"
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.input}
        />

          <View style={styles.separator}>
            <Button
            title="Inicio de sesión"
            color={'#4cad42'}
            style={styles.button}
            
            />

            <Button 
            title="Registrarse" 
            color={'#4cad42'}
            onPress={()=>{
              navigation.navigate('UserRegistration')
            }}//arrow funtions
            />
          </View>
      </View>
    </View>
  );
};

export default Login;
