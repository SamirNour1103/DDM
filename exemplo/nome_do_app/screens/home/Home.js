import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './Estilo';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>

            {/* Imagem simples exibida na tela */}
            <Image
                source={{
                    uri: 'https://static.wikia.nocookie.net/ben10/images/6/62/Recalibrated_Omnitrix.PNG.png/revision/latest/thumbnail/width/360/height/360?cb=20250527190547&path-prefix=pt'
                }}
                style={styles.image}
            />

            <Text style={styles.titulo}>HORA DE VIRAR HEROI!</Text>

            <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate('Chama')}
            >
                <Text style={styles.textoBotao}>TRANSFORMAR!</Text>
            </TouchableOpacity>

        </View>
    );
}