import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View, StyleSheet, ScrollView,Image  } from 'react-native'; 
import Swiper from 'react-native-swiper';

const HotelScreen = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: 'Hoteis',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        },
        headerStyle: {
          backgroundColor: '#147DEB',
          height: 110,
          borderBottomColor: 'transparent',
          shadowColor: 'transparent',
        },
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </TouchableOpacity>
        ),
        headerRight: () => null,
      });
    }, [navigation]);
  
    return (
      <ScrollView style={styles.container}>
        <View style={styles.square}>
          <View style={styles.carouselContainer}>
            <Swiper autoplay={true}>
              <View style={styles.slide}>
                <Image
                  source={require('../assets/hotel1.jpg')}
                  style={styles.image}
                />
              </View>
              <View style={styles.slide}>
                <Image
                    source={require('../assets/lazer.jpg')}
                  style={styles.image}
                />
              </View>
              <View style={styles.slide}>
                <Image
                    source={require('../assets/quarto.jpg')}
                  style={styles.image}
                />
              </View>
            </Swiper>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  // Estilos da tela
  const styles = StyleSheet.create({
    // Estilo do container principal que ocupa toda a tela
    container: {
      flex: 1,
      backgroundColor: '#F1EFFF', // Cor de fundo da tela
    },
    // Estilo do quadrado que contém o carousel de imagens
    square: {
      width: 400,
      height: 370,
      borderRadius: 20, // Borda arredondada do quadrado
      backgroundColor: '#FFFFFF', // Cor de fundo do quadrado
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 15, // Margem vertical (espaço acima e abaixo) do quadrado
      marginHorizontal: 5, // Margem horizontal (espaço nas laterais) do quadrado
    },
    // Estilo do container do carousel de imagens
    carouselContainer: {
      width: 370, // Largura do carousel
      height: 150, // Altura do carousel
      borderRadius: 20, // Borda arredondada do carousel
      overflow: 'hidden', // Oculta o conteúdo que transborda do container
      marginTop: -86, // Posicionamento do carousel mais alto em relação ao quadrado
    },
    // Estilo dos slides do carousel
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Estilo das imagens do carousel
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover', // Modo de exibição da imagem no carousel
    },
  });
  
  export default HotelScreen;


