import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SavedScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Roteiro',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#0D4BF2',
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
      headerRight: () => null,
    });
  }, []);

  const handleButtonPress = () => {
    navigation.navigate('Perfil');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
        <Image source={require('../assets/hotel2.jpg')} style={styles.buttonImage} />
        <Text style={styles.buttonTitle}>Hotéis</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  buttonContainer: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonImage: {
    width: 339,
    height: 152,
    borderRadius: 21,
    marginBottom: 10,
  },
  buttonTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    position: 'absolute',
    bottom: 10,
  },
});

export default SavedScreen;
