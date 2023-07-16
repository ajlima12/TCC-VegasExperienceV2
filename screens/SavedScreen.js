import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SavedScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true, // Define se o cabeçalho será exibido
      title: 'Roteiro', // Define o título do cabeçalho como 'Roteiro'
      headerTitleAlign: 'center', // Define o alinhamento do título como centralizado
      headerTitleStyle: {
        fontSize: 20, // Define o tamanho da fonte do título como 20 pixels
        fontWeight: 'bold', // Define fonte como negrito
        color: 'white', // Define a cor do título como branco
      },
      headerStyle: {
        backgroundColor: '#147DEB', // Define a cor de fundo do cabeçalho 
        height: 110, // Define a altura do cabeçalho como 110 pixels
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
      headerRight: () => null, // Remove qualquer componente do lado direito do cabeçalho
    });
  }, []);

  const handleButtonPress = () => {
    navigation.navigate('Home'); // Navega para a tela 'Home'
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
        <View style={styles.buttonImageContainer}>
          <Image source={require('../assets/hotel2.jpg')} style={styles.buttonImage} />
          <View style={styles.buttonOverlay} />
        </View>
        <View style={styles.buttonTitleContainer}>
          <Text style={styles.buttonTitle}>Hotéis</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
        <View style={styles.buttonImageContainer}>
          <Image source={require('../assets/rodavegas.jpg')} style={styles.buttonImage} />
          <View style={styles.buttonOverlay} />
        </View>
        <View style={styles.buttonTitleContainer}>
          <Text style={styles.buttonTitle}>Pontos Turisticos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
        <View style={styles.buttonImageContainer}>
          <Image source={require('../assets/aviao.jpg')} style={styles.buttonImage} />
          <View style={styles.buttonOverlay} />
        </View>
        <View style={styles.buttonTitleContainer}>
          <Text style={styles.buttonTitle}>Pacotes de Viagem</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
        <View style={styles.buttonImageContainer}>
          <Image source={require('../assets/trem.jpg')} style={styles.buttonImage} />
          <View style={styles.buttonOverlay} />
        </View>
        <View style={styles.buttonTitleContainer}>
          <Text style={styles.buttonTitle}>Transporte</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1, // Define o contêiner principal como flexível para ocupar todo o espaço disponível
    paddingTop: 20, // Define o preenchimento superior de 20 unidades
  },
  buttonContainer: {
    backgroundColor: '#f2f2f2', // Define a cor de fundo do botão 
    alignItems: 'center', // Centraliza os elementos horizontalmente dentro do botão
    justifyContent: 'center', // Centraliza os elementos verticalmente dentro do botão
    marginBottom: 10, // Define a margem inferior de 10 unidades
    position: 'relative', // Define a posição do botão como relativa
  },
  buttonImageContainer: {
    position: 'relative', // Define a posição do contêiner da imagem como relativa
    width: 339, // Define a largura do contêiner da imagem como 339 unidades
    height: 152, // Define a altura do contêiner da imagem como 152 unidades
    borderRadius: 21, // Define o raio da borda do contêiner da imagem como 21 unidades
    overflow: 'hidden', // Define o comportamento de overflow do contêiner como oculto
  },
  buttonImage: {
    flex: 1, // Define a imagem do botão para ocupar todo o espaço disponível
    width: '100%', // Define a largura da imagem como 100% do contêiner
    height: '100%', // Define a altura da imagem como 100% do contêiner
  },
  buttonOverlay: {
    ...StyleSheet.absoluteFillObject, // Define o posicionamento do overlay como absoluto, preenchendo todo o contêiner
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // cor da opacidadde
  },
  buttonTitleContainer: {
    position: 'absolute', // Define o posicionamento do contêiner do título como absoluto
    bottom: 10, // Define a posição inferior do contêiner do título como 10 unidades
    left: 0, // Define a posição esquerda do contêiner do título como 0 unidades
    right: 0, // Define a posição direita do contêiner do título como 0 unidades
    alignItems: 'flex-start', // Alinha os elementos à esquerda dentro do contêiner do título
    paddingHorizontal: 50, // Define o preenchimento horizontal do contêiner do título como 50 unidades
  },
  buttonTitle: {
    fontSize: 22, // Define o tamanho da fonte do título como 22 unidades
    fontWeight: 'bold', // Define o peso da fonte como negrito
    color: 'white', // Define a cor do título como branco
  },
});
export default SavedScreen;
