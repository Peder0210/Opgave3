import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyBrjHmQpi_Lu44JprUakJ5fttJ9P3c5NCo",
  authDomain: "opgave3-80853.firebaseapp.com",
  databaseURL: "https://opgave3-80853-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "opgave3-80853",
  storageBucket: "opgave3-80853.appspot.com",
  messagingSenderId: "850548815144",
  appId: "1:850548815144:web:e3b3c9ccf09997e7424c1d"
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Tester ny branch