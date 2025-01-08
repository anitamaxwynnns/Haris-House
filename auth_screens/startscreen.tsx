import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageBackground, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function startscreen() {
    return (
        <SafeAreaProvider>
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <ImageBackground
                    source={require("../assets/startscreen.png")}
                    blurRadius={2}
                ></ImageBackground>
            </View>
        </SafeAreaProvider>
    );
}
