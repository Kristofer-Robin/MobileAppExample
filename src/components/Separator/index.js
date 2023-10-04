import React, { useState } from "react";
import { Text, View } from "react-native";

import { styles } from './styles';

const Separator = ({text}) => {
    return(
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.tetxt}>{text}</Text>
            <View style={styles.line} />
        </View>
    )
}

export default Separator