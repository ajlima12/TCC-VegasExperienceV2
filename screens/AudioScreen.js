import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


const AudioScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Audio Screen',
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

  const speak = (text) => {
    Speech.speak(text, {
      language: 'en-US',
    });
  };

  const playAudio1 = () => {
    const audioText = 'Hello';
    speak(audioText);
  };

  const playAudio2 = () => {
    const audioText = 'Good morning...Good night';
    speak(audioText);
  };

  const playAudio3 = () => {
    const audioText = 'Yes... No... Maybe... Please';
    speak(audioText);
  };

  const playAudio4 = () => {
    const audioText = 'Thank you... You’re welcome';
    speak(audioText);
  };

  const playAudio5 = () => {
    const audioText = 'What is your name?';
    speak(audioText);
  };

  const playAudio6 = () => {
    const audioText = 'Could you bring me the menu?';
    speak(audioText);
  };

  const playAudio7 = () => {
    const audioText = 'What time is it?';
    speak(audioText);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Dia a Dia</Text>
        </View>

        <View style={styles.square}>
          <Text style={[styles.audioText, { alignSelf: 'flex-start' }]}>Hello</Text>
          <Text style={[styles.subText, { alignSelf: 'flex-start' }]}>Olá</Text>
          <TouchableOpacity style={styles.button} onPress={playAudio1}>
            <FontAwesome name="microphone" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.square}>
          <Text style={[styles.audioText, { alignSelf: 'flex-start' }]}>Good morning/ Good night</Text>
          <Text style={[styles.subText, { alignSelf: 'flex-start' }]}>Bom dia/ Boa noite</Text>
          <TouchableOpacity style={styles.button} onPress={playAudio2}>
            <FontAwesome name="microphone" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.square}>
          <Text style={[styles.audioText, { alignSelf: 'flex-start' }]}>Yes/No/Maybe/Please</Text>
          <Text style={[styles.subText, { alignSelf: 'flex-start' }]}>Sim/ Não/ Talvez/ Por favor</Text>
          <TouchableOpacity style={styles.button} onPress={playAudio3}>
            <FontAwesome name="microphone" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.square}>
          <Text style={[styles.audioText, { alignSelf: 'flex-start' }]}>Thank you/ You’re welcome</Text>
          <Text style={[styles.subText, { alignSelf: 'flex-start' }]}>Obrigada/ De nada</Text>
          <TouchableOpacity style={styles.button} onPress={playAudio4}>
            <FontAwesome name="microphone" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.square}>
          <Text style={[styles.audioText, { alignSelf: 'flex-start' }]}>What is your name?</Text>
          <Text style={[styles.subText, { alignSelf: 'flex-start' }]}>Qual é o seu nome?</Text>
          <TouchableOpacity style={styles.button} onPress={playAudio5}>
            <FontAwesome name="microphone" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.square}>
          <Text style={[styles.audioText, { alignSelf: 'flex-start' }]}>What time is it?</Text>
          <Text style={[styles.subText, { alignSelf: 'flex-start' }]}>Que horas são?</Text>
          <TouchableOpacity style={styles.button} onPress={playAudio7}>
            <FontAwesome name="microphone" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Restaurante</Text>
        </View>
        <View style={styles.square}>
          <Text style={[styles.audioText, { alignSelf: 'flex-start' }]}>Could you bring me the menu?</Text>
          <Text style={[styles.subText, { alignSelf: 'flex-start' }]}>Você pode me trazer o cardápio?</Text>
          <TouchableOpacity style={styles.button} onPress={playAudio6}>
            <FontAwesome name="microphone" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFFF',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  scrollView: {
    flexGrow: 1,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0303',
  },
  square: {
    width: 390,
    height: 121,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginBottom: 20,
  },
  audioText: {
    fontSize: 16,
    textAlign: 'left',
  },
  subText: {
    fontSize: 12,
    marginTop: 10,
    textAlign: 'left',
  },
  button: {
    marginTop: 10,
  },
});

export default AudioScreen;
