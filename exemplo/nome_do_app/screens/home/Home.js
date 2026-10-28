import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Image, 
    Alert, 
    KeyboardAvoidingView, 
    Platform,
    StatusBar 
} from 'react-native';
import styles from './Estilo';

export default function Login({ navigation }) {
    const [usuario, setUsuario] = useState('');
    const [codigoAcesso, setCodigoAcesso] = useState('');
    const [modoOmnitrix, setModoOmnitrix] = useState('Recalibrado');

    const handleAcessar = () => {
        if (!usuario.trim()) {
            Alert.alert('Acesso Negado', 'Por favor, insira o Codinome de Herói para ativar o Omnitrix.');
            return;
        }

        // Navega para a tela do herói (ex: Chama) passando os dados digitados
        navigation.navigate('Chama', { 
            nomeHeroi: usuario,
            modo: modoOmnitrix 
        });
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" backgroundColor="#051208" />

            {/* Cabeçalho da Base dos Encanadores */}
            <View style={styles.headerBadge}>
                <Text style={styles.badgeText}>SISTEMA OMNITRIX v10.0 • BASE PLUMBER</Text>
            </View>

            {/* Imagem do Omnitrix Destacada */}
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: 'https://static.wikia.nocookie.net/ben10/images/6/62/Recalibrated_Omnitrix.PNG.png/revision/latest/thumbnail/width/360/height/360?cb=20250527190547&path-prefix=pt'
                    }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            {/* Título Futurista */}
            <Text style={styles.titulo}>HORA DE VIRAR HERÓI!</Text>
            <Text style={styles.subtitulo}>Identifique-se para desbloquear o DNA Alienígena</Text>

            {/* Formuário de Autenticação */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Codinome do Encanador / Herói:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Ben Tennyson"
                    placeholderTextColor="#557c5d"
                    value={usuario}
                    onChangeText={setUsuario}
                    autoCapitalize="words"
                />

                <Text style={styles.label}>Código do Level de Acesso (Opcional):</Text>
                <TextInput
                    style={styles.input}
                    placeholder="••••••••"
                    placeholderTextColor="#557c5d"
                    secureTextEntry
                    value={codigoAcesso}
                    onChangeText={setCodigoAcesso}
                />

                {/* Seleção do Modo do Relógio */}
                <Text style={styles.label}>Modo do Omnitrix:</Text>
                <View style={styles.modoSelector}>
                    {['Recalibrado', 'Ultimatrix', 'Master Control'].map((item) => (
                        <TouchableOpacity
                            key={item}
                            style={[
                                styles.modoButton,
                                modoOmnitrix === item && styles.modoButtonActive
                            ]}
                            onPress={() => setModoOmnitrix(item)}
                        >
                            <Text style={[
                                styles.modoText,
                                modoOmnitrix === item && styles.modoTextActive
                            ]}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Botão Principal de Transformaçao */}
                <TouchableOpacity 
                    style={styles.botao}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Chama')}
                >
                    <Text style={styles.textoBotao}>⚡ TRANSFORMAR EM CHAMA!</Text>
                </TouchableOpacity>
            </View>

            {/* Rodapé / Status */}
            <Text style={styles.footerText}>Galvan Prime Tech • Protocolo Azmuth</Text>
        </KeyboardAvoidingView>
    );
}