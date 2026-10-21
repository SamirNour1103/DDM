import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39ff14',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 120,   // Largura da imagem
    height: 120,  // Altura da imagem
    marginBottom: 20,
    resizeMode: 'contain', // Mantém a proporção correta da imagem
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2b5a23',
    marginBottom: 25,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#39ff14',
    borderColor: '#39ff14',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#ffffff',
    marginBottom: 20,
  },
  botao: {
    width: '90%',
    height: 50,
    backgroundColor: '#0c5200',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textoBotao: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});