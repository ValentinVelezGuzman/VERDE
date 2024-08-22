import { StyleSheet , Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
//si yo nombro ste stiles de otra forma, puedo utilizarlo con ese nombre
// const stylesU
const styles = StyleSheet.create({
//Compartidos con todos 
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
//UserRegister
    containerPUR: {
        flex: 1,
        backgroundColor: '#0c9942',
        justifyContent: 'center', //todo loq ue halla aqui lo tira al centro
        alignItems: 'center', 
      },
      container1UR: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: width * 0.9, // 80% del ancho de la pantalla
        height: height * 0.8, // 40% de la altura de la pantalla
        justifyContent: 'center',
        alignItems: 'center',
      },
      container2UR: {
        justifyContent: 'center',
        alignItems: 'center', 
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      title1: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontFamily: 'Rockwell',
        fontWeight: '900',
      },
  });
  
  export default styles;