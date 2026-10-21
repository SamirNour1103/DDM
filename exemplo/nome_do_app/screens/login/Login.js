import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import styles from './Estilo';

export default function Login({ navigation }) {

    return (

        <View style={styles.container}>

            <Image
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Omnitrix_icon.png'
                }}
                style={styles.image}
            />

            <Text style={styles.titulo}>HORA DO SHOW!</Text>

           

            

            <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.textoBotao}>COMEÇAR!</Text>
            </TouchableOpacity>

        </View>

    );
}