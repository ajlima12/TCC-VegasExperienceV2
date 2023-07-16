import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from "../components/Header";

const ProfileScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Perfil",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#147DEB",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => null, // Remova o ícone de sino definindo headerRight como uma função que retorna null
    });
  }, []);

  return (
    <View>
      <Header/>
      {/* Conteúdo da tela ProfileScreen */}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
