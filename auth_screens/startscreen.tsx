import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackNavigatorParamsList } from "../App";

export default function StartScreen() {
    const navigation =
        useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

    return (
        <SafeAreaProvider>
            <ImageBackground
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                }}
                source={require("../assets/startscreen.png")}
                blurRadius={2}
            >
                <View
                    style={{
                        flexDirection: "column",
                    }}
                >
                    <Text style={{ fontSize: 50 }}>MetaMission</Text>
                </View>
                <View
                    style={{
                        justifyContent: "space-evenly",
                        height: 250,
                        width: 300,
                    }}
                >
                    <Button
                        mode="contained"
                        buttonColor="black"
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        Get Started
                    </Button>
                    <Button mode="contained" buttonColor="black" onPress={() => navigation.navigate("SignIn")}>
                        Sign In
                    </Button>
                </View>
            </ImageBackground>
        </SafeAreaProvider>
    );
}
