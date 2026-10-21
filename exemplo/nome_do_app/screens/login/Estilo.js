import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a150a', // Fundo bem escuro estilo Encanador/Omnitrix
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#39ff14', // Verde Neon brilhante
    marginBottom: 25,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    fontSize: 14,
    fontWeight: '600',
    color: '#00ff66',
    marginBottom: 5,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#122612',
    borderColor: '#39ff14',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 20,
  },
  botao: {
    width: '90%',
    height: 50,
    backgroundColor: '#39ff14', // Botão verde chamativo
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
    shadowColor: '#39ff14',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  textoBotao: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});