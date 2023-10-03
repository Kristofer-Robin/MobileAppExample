import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { styles } from "./styles";

const AuthHeader = ({title, onBackPress}) => {
    return (
        <View styles={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
            <Image styles={styles.image} source={require('../../assets/auth_back.png')}/>
            </Pressable>
            <Text styles={styles.title}>{title}</Text>
        </View>
    )
}
export default AuthHeader