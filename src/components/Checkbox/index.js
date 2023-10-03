import React from "react";
import { Touchable0pacity } from "react-native";

import { styles } from './styles'

const Checkbox = ({checked, onCheck}) => {
    return(
        <Touchable0pacity active0pacity={0.6} style={styles.container} onPress={() => onCheck(!checked)}>
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require('../../assets/check.png')} />
                </View>
            ) : null}
        </Touchable0pacity>
    )
}
export default Checkbox