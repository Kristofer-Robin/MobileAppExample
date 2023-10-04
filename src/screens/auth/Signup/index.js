import React, { useState } from "react";
import { View, Text } from "react-native";

import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button"
import { styles } from "./styles";
import Checkbox from "../../../components/Checkbox";

const Signup = () => {
    const [checked, setChecked] = useState(false)

    return (
        <View styles={styles.container}>
            <AuthHeader title="Sign up"/>
            <Input lable="Name" placeholder="John Doe"/>
            <Input lable="Email" placeholder="example@gmail.com"/>
            <Input isPassword lable="Password" placeholder="******"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with <Text Style={styles.agreeTextBold}>Terms</Text> and <Text Style={styles.agreeTextBold}></Text>Privacy</Text>
            </View>
            <Button style={styles.button} title="Sign In" />
        </View>
    )
}
export default Signup