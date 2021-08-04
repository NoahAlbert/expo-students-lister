import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'

export default function Box({ student }){
    return(
        <View style={styles.box}>
            <Text style={styles.boxText}>
                Name: {student.name}
            </Text>
            <Text style={styles.boxText}>
                Age: {student.age}
            </Text>
            <Text style={styles.boxText}>
                City: {student.city}
            </Text>
        </View>
    )
}