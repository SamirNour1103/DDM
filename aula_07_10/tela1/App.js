import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.scflex}>
      <View style={styles.container}>
        <Text>Digite aqui</Text>
        <TextInput placeholder="teste"></TextInput>
        <Button onPress="" title="botão"></Button>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  scflex: {
    flex:1,
    backgroundColor: '#2f067ac9',
  },
  container: {
    flex: 1,
    backgroundColor: '#5600f7c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
