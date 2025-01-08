import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import startscreen from "./auth_screens/startscreen";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackNavigatorParamsList = {
    startscreen: undefined;
    signup: undefined;
    signin: undefined;
    homescreen: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="startscreen">
                    <Stack.Screen
                        name="startscreen"
                        component={startscreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="signup"
                        component={startscreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="signin"
                        component={startscreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="homescreen"
                        component={startscreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
