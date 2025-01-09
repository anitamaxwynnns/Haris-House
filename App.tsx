import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./auth_screens/startscreen";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./auth_screens/signin";
import SignUp from "./auth_screens/signup";
import Profile from "./auth_screens/Profile";
import Bottom_Nav from "./tabs/bottom_nav";

export type RootStackNavigatorParamsList = {
    StartScreen: undefined;
    SignUp: undefined;
    SignIn: undefined;
    Profile: undefined;
    Bottom_Nav: undefined;
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
                        name="Profile"
                        component={Profile}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Bottom_Nav"
                        component={Bottom_Nav}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
