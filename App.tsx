import StartScreen from "./auth_screens/startscreen";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./auth_screens/signin";
import SignUp from "./auth_screens/signup";
import ExploreScreen from "./auth_screens/explorescreen";
import Profile from "./auth_screens/Profile";
import Bottom_Nav from "./tabs/bottom_nav";
import MessageScreen from "./auth_screens/messagescreen";
import ShiftScreen from "./auth_screens/shiftscreen";


export type RootStackNavigatorParamsList = {
    StartScreen: undefined;
    SignUp: undefined;
    SignIn: undefined;
    ExploreScreen: undefined;
    Profile: undefined;
    Bottom_Nav: undefined;
    MessageScreen: undefined;
    ShiftScreen: undefined;
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
                    <Stack.Screen
                        name="ExploreScreen"
                        component={ExploreScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="MessageScreen"
                        component={MessageScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ShiftScreen"
                        component={ShiftScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
