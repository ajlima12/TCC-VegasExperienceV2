import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import Swiper from 'react-native-swiper';

// Importação do Carousel
import Carousel from "../components/Carousel";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Vegas Experience",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#147DEB", //cor da NavBar
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => null,
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <Swiper autoplay={true}>
          <View style={styles.slide}>
            <Image
              source={require('../assets/img1.jpeg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/img2.jpeg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/img3.jpeg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/img4.jpeg')}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
      <Header />
      
      {/* Carousel incorporado */}
      <Carousel navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    height: 300, // Altura do carousel
   
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default HomeScreen;
