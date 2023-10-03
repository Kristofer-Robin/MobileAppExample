import React, { useState } from "react";
import { TextInput, View, Text, Pressable } from "react-native";
import { styles } from "./styles";

const Input = ({label, placeholder, isPassword}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(flase)

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    
    return (
        <View styles={styles.container}>
            <Text styles={styles.label}>{label}</Text>
            <View styles={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible} 
                placeholder={placeholder} styles={styles.input} />
                {
                    isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image styles={styles.eye} source={isPasswordVisible ? require('../../assets/eye.png') : require
                        ('../../assets/eye_closed.png')}/>
                        </Pressable>
                    ) : null
                }
            </View>
        </View>
    )
}
export default Input