import React from "react";
import { TouchableOpacity, Text, Pressable } from "react-native";

import { styles } from './styles';

const Button = ({title, onPress}) => {
    const handlePress = () => {
        console.log('button is clicked')
    }
    
    return(
        <TouchableOpacity hitSlop={0.6} onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const Buttons = ({title}) => {
    const handlePress = () => {
        console.log('button is clicked')
    }
    
    return(
        <Pressable hitSlop={20} onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}
export default Button
