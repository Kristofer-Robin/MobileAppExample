import { View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";

const Signup = () => {
    return (
        <View styles={styles.container}>
            <AuthHeader title="Sign up"/>
            <Input lable="Name" placeholder="John Doe"/>
            <Input lable="Email" placeholder="example@gmail.com"/>
            <Input isPassword lable="Password" placeholder="******"/>
        </View>
    )
}
export default Signup