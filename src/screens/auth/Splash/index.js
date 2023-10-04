import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    Pressable
} from "react-native"
import Button from "../../../components/Button"
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Checkbox from "../../../components/Checkbox";
import Input from "../../../components/Input";
import Signup from "../Signup";


const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require
            ('../../../assets/10050.png')}/>

            <View style={styles.container}>
            <Text style={styles.title}>You'll Find</Text>
            <Text style={[styles.title, styles.innerTitle]}> All you need </Text>
            <Text style={styles.title}> Here!</Text>
            </View>
            
            <Button title="Sign Up" />


            <Pressable hitSlop={20}>
            <Text style={styles.footerText}>Sign In</Text>
            </Pressable> 
        </View>
    )
}

export default Splash