import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {styles} from './styles'

const GoogleLogin = () => {
    return(
        <TouchableOpacity accessibilityActions={0.6} style={styles.container}>
            <Image style={styles.image} source={require('../../assets/Gmail.png')}></Image>        
        </TouchableOpacity>
    )
}
export default React.memo(GoogleLogin)