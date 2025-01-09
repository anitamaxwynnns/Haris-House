import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaProvider>
            <ImageBackground
                style={{
                    flex: 1,
                    alignItems:'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
                source={require("../assets/startscreen.png")}
                blurRadius={2}
            >
            </ImageBackground>
        </SafeAreaProvider>
    );
}

