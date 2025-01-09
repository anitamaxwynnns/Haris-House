import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./auth_screens/StartScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./auth_screens/signin";
import SignUp from "./auth_screens/signup";
import HomeScreen from "./auth_screens/homescreen";

export type RootStackNavigatorParamsList = {
    StartScreen: undefined;
    SignUp: undefined;
    SignIn: undefined;
    HomeScreen: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="StartScreen">
                    <Stack.Screen
                        name="StartScreen"
                        component={StartScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
