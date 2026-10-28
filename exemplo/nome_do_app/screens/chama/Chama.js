import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image, 
    StatusBar, 
    ScrollView 
} from 'react-native';
import styles from './Estilo';

export default function Chama({ route, navigation }) {
    // Recebe os dados passados pela tela de Login
    const { nomeHeroi = 'Encanador', modo = 'Recalibrado' } = route.params || {};

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1a0500" />

            {/* Cabeçalho de Status */}
            <View style={[styles.headerBadge, { backgroundColor: 'rgba(255, 69, 0, 0.1)', borderColor: '#FF4500' }]}>
                <Text style={[styles.badgeText, { color: '#FF4500' }]}>ALIEN ATIVO: CHAMA (PYRONITE)</Text>
            </View>

            {/* Imagem do Herói Chama */}
            <View style={[styles.imageContainer, { backgroundColor: '#2b0a00', borderColor: '#FF4500', shadowColor: '#FF4500' }]}>
                <Image
                    source={{
                        uri: 'https://static.wikia.nocookie.net/liga-da-zueira-oficial/images/b/b8/Db0d489f4943844e070992c33c8f88a8.png/revision/latest?cb=20240211183625&path-prefix=pt-br'
                    }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.titulo}>CHAMA!</Text>
            <Text style={styles.subtitulo}>Operador: {nomeHeroi} • Modo: {modo}</Text>

            {/* Painel de Habilidades / Status */}
            <View style={[styles.formContainer, { backgroundColor: '#1a0805', borderColor: '#4a1505' }]}>
                <Text style={[styles.label, { color: '#ff8c66' }]}>Espécie: Pyronite</Text>
                <Text style={[styles.label, { color: '#ff8c66' }]}>Planeta Natal: Pyros</Text>
                
                <Text style={[styles.label, { marginTop: 10 }]}>Poderes Principais:</Text>
                <Text style={{ color: '#fff', fontSize: 13, marginBottom: 15 }}>
                    • Pirocinese Avançada{'\n'}
                    • Voo com Prancha de Fogo{'\n'}
                    • Imunidade ao Calor Extremo
                </Text>

                {/* Botão para ir para o Relógio Descarregado */}
                <TouchableOpacity 
                    style={[styles.botao, { backgroundColor: '#FF4500', shadowColor: '#FF4500' }]}
                      onPress={() => navigation.navigate('Destranformar')}
                >
                    <Text style={styles.textoBotao}>⚠️ DESCARREGAR OMNITRIX (VERMELHO)</Text>
                </TouchableOpacity>

                {/* Botão para Voltar */}
                <TouchableOpacity 
                    style={[styles.modoButton, { marginTop: 10, borderColor: '#FF4500' }]}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={[styles.modoText, { color: '#FF4500' }]}>⬅️ VOLTAR AO LOGIN</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}