import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import Box from './components/Box';

import styles from './styles'

export default function App() {  
  const students = [
    {
      name: 'Noah',
      age: 17,
      city: 'Boca Raton'
    },
    {
      name: 'Mia',
      age: 13,
      city: 'Boca Raton'
    },
    {
      name: 'Matt',
      age: 19,
      city: 'Boca Raton'
    },
    {
      name: 'Christian',
      age: 20,
      city: 'West Palm'
    },
    {
      name: 'Dan',
      age: 'old 👴🏻',
      city: 'Boca Raton'
    },
    {
      name: 'Chris',
      age: 29,
      city: 'Boca Raton'
    },
    {
      name: 'Val',
      age: 30,
      city: 'Del Ray'
    },
    {
      name: 'Emily',
      age: 24,
      city: 'Boca Raton'
    },
    {
      name: 'Zack',
      age: 24,
      city: 'Jupiter'
    },
  ]
  
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>STUDENTS</Text>
      <View style={styles.studentsContainer}>
        {students.map(student => <Box student={student}/>)}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    </ScrollView>
  );
}
