import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.quadrado]} >

    <Image source= {require('./assets/image.png')}
        style={styles.imagemPequena}
        resizeMode = "contain" />

        <Text style={styles.estilotexto}>Dev Maria Clara</Text>
        <Text style={styles.textoPequeno}>Full Stack Developer</Text>

      <View style={styles.socialRow}>
       <TouchableOpacity style={styles.socialButton} >
        <FontAwesome name ='github' size={40} color = '#000000'/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} >
        <FontAwesome name ='linkedin' size={40} color = '#000000'/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} >
        <FontAwesome name ='envelope' size={40} color = '#000000'/>
      </TouchableOpacity>
           </View>
      <StatusBar style="auto" />
 </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0ff1',
    alignItems: 'center',
    justifyContent: 'center',

  },

  quadrado: {
  width: 300,
  height: 500,
  borderRadius: 16,
  backgroundColor: '#f0d3f0',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 10,
  },

estilotexto: {
  fontSize: 30,
  marginHorizontal: 12,
},

imagemPequena: {
  width: 180,
  height: 160,
  marginTop: 35,
},

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
    marginTop: 45,
  },

  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
