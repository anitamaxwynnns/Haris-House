import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { Alert, ImageBackground, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackNavigatorParamsList } from "../App";
import { supabase } from "../supabase/supabase";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigation =
        useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

    async function signinWithEmail() {
        setLoading(true);
        const {
            data: {session},
            error,
        } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        setLoading(false);

        if (error) {
            Alert.alert(error.message);
            return;
        }

        navigation.navigate("Bottom_Nav");
    }
    return (
        <SafeAreaProvider>
            <ImageBackground
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
                source={require("../assets/startscreen.png")}
                blurRadius={2}
            >
                <Button
                    style={{
                        alignSelf: "flex-start",
                        flex: 0.2,
                        flexDirection: "column",
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
                        justifyContent: "space-evenly",
                        flex: 0.65,
                        alignItems: "center",
                    }}
                >
                    <TextInput
                        mode="outlined"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        secureTextEntry={false}
                        placeholder="Email"
                        autoCapitalize="none"
                        activeOutlineColor="black"
                        style={{ width: 300 }}
                    />
                    <TextInput
                        mode="outlined"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={false}
                        placeholder="Password"
                        autoCapitalize="none"
                        activeOutlineColor="black"
                        style={{ width: 300 }}
                    />
                    <Button
                        mode="contained"
                        style={{ width: 100, alignSelf: "center" }}
                        theme={{ colors: { primary: "black" } }}
                        onPress={signinWithEmail}
                    >
                        Submit
                    </Button>
                </View>
            </ImageBackground>
        </SafeAreaProvider>
    );
}
