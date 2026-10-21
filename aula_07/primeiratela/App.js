import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (

    <ScrollView style={styles.scflex}>
      <View style={styles.container}>


        <Text>Digite o Texto</Text>
        <TextInput placeholder=''></TextInput>
        <Button onPress='' title='botão'></Button>


      </View>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  scflex: {
    flex:1,
    backgroundColor:'#d9fc12',
  },

  container: {
    flex:1,
    backgroundColor: '#db1515',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
