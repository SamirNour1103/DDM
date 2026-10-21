import { View, Text, TextInput, Button, Image } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
                }}
                style={{ width: 200, height: 200 }}
            />
            <Button
                title="Entrar"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}