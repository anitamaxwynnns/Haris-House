import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import {
    Alert,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackNavigatorParamsList } from "../App";
import { supabase } from "../supabase/supabase";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const navigation =
        useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

    async function handleSignUp() {
        setLoading(true);
        const {
            data: { user },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        if (user !== null) {
            const result = await supabase
                .from("profile")
                .insert({ name: name, user_id: user.id });
            console.log(result);
        }
        setLoading(false);
        if (error) {
            Alert.alert(error.message);
            return;
        }
        navigation.navigate("Profile");
    }

    return (
        <SafeAreaProvider>
            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    flexDirection: "column",
                }}
                source={require("../assets/startscreen.png")}
                blurRadius={2}
            >
                <Button
                    style={{
                        alignSelf: "flex-start",
                        flexDirection: "row",
                        flex: 0.2,
                        marginTop: 70,
                    }}
                    labelStyle={{ fontSize: 20 }}
                    icon="chevron-left"
                    textColor="black"
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{ fontSize: 14 }}>Back</Text>
                </Button>
                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flex: 0.5,
                    }}
                >
                    <TextInput
                        mode="outlined"
                        value={name}
                        onChangeText={(text) => setName(text)}
                        secureTextEntry={false}
                        placeholder="Name"
                        autoCapitalize="none"
                        activeOutlineColor="black"
                        style={{ width: 300 }}
                    ></TextInput>
                    <TextInput
                        mode="outlined"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        secureTextEntry={false}
                        placeholder="Email"
                        autoCapitalize="none"
                        activeOutlineColor="black"
                        style={{ width: 300 }}
                    ></TextInput>
                    <TextInput
                        mode="outlined"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={false}
                        placeholder="Password"
                        autoCapitalize="none"
                        activeOutlineColor="black"
                        style={{ width: 300 }}
                    ></TextInput>
                    <Button
                        mode="contained"
                        disabled={loading}
                        theme={{ colors: { primary: "black" } }}
                        onPress={handleSignUp}
                    >
                        Submit
                    </Button>
                </View>
            </ImageBackground>
        </SafeAreaProvider>
    );
}
