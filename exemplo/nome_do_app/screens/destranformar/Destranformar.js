import React, { useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image, 
    StatusBar, 
    Animated 
} from 'react-native';
import styles from './Estilo';

export default function RelogioDescarregado({ navigation }) {
    const [statusRecarga, setStatusRecarga] = useState('BATERIA CRÍTICA');
    const pulseAnim = new Animated.Value(1);

    // Efeito de pulso de alerta vermelho
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, { toValue: 1.2, duration: 600, useNativeDriver: true }),
                Animated.timing(pulseAnim, { toValue: 1, duration: 600, useNativeDriver: true })
            ])
        ).start();
    }, []);

    const recarregarOmnitrix = () => {
        setStatusRecarga('RECARREGANDO DNA...');
        setTimeout(() => {
            navigation.navigate('Login');
        }, 1500);
    };

    return (
        <View style={[styles.container, { backgroundColor: '#120505' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#120505" />

            {/* Cabeçalho de Alerta */}
            <View style={[styles.headerBadge, { backgroundColor: 'rgba(255, 0, 0, 0.1)', borderColor: '#FF0000' }]}>
                <Text style={[styles.badgeText, { color: '#FF0000' }]}>🚨 ALERTA DE SEGURANÇA • TIMEOUT</Text>
            </View>

            {/* Omnitrix Vermelho Animado */}
            <Animated.View style={[
                styles.imageContainer, 
                { 
                    backgroundColor: '#240a0a', 
                    borderColor: '#FF0000', 
                    shadowColor: '#FF0000',
                    transform: [{ scale: pulseAnim }] 
                }
            ]}>
                <Image
                    source={{
                        uri: 'https://static.wikia.nocookie.net/ben10/images/6/62/Recalibrated_Omnitrix.PNG.png/revision/latest/thumbnail/width/360/height/360?cb=20250527190547&path-prefix=pt'
                    }}
                    style={[styles.image, { tintColor: '#FF5555' }]} // Dá um tom avermelhado
                    resizeMode="contain"
                />
            </Animated.View>

            <Text style={[styles.titulo, { color: '#FF5555', textShadowColor: '#FF0000' }]}>MODO DE RECARGA</Text>
            <Text style={styles.subtitulo}>{statusRecarga}</Text>

            {/* Painel de Ação de Recarga */}
            <View style={[styles.formContainer, { backgroundColor: '#1c0707', borderColor: '#4a1010' }]}>
                <Text style={[styles.label, { color: '#ff9999', textAlign: 'center', marginBottom: 15 }]}>
                    O Omnitrix esgotou o tempo limite de transformação. Aguarde o ciclo de recarga ou pressione o botão abaixo.
                </Text>

                <TouchableOpacity 
                    style={[styles.botao, { backgroundColor: '#FF0000', shadowColor: '#FF0000' }]}
                    onPress={recarregarOmnitrix}
                >
                    <Text style={styles.textoBotao}>🔋 REINICIAR SISTEMA</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.modoButton, { marginTop: 15, borderColor: '#FF0000' }]}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={[styles.modoText, { color: '#FF0000' }]}>⬅️ VOLTAR AO CHAMA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}