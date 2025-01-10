import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../auth_screens/Profile";
import { AntDesign } from "@expo/vector-icons";
import ExploreScreen from "../auth_screens/explorescreen";
import MessageScreen from "../auth_screens/messagescreen";
import ShiftScreen from "../auth_screens/shiftscreen";

const Tab = createBottomTabNavigator();

export default function Bottom_Nav() {
    return (
        <Tab.Navigator initialRouteName="Profile">
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: { fontSize: 13, color:'black' },
                    tabBarIcon: () => (
                    <AntDesign name="user" size={24} color = 'black' />
                    ),
                }}
            />
            <Tab.Screen
                name="exploreScreen"
                component={ExploreScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Explore",
                    tabBarLabelStyle: { fontSize: 13, color:'black' },
                    tabBarIcon: () => (
                    <AntDesign name="search1" size={24} color = 'black' />
                    ),
                }}
            />
            <Tab.Screen
                name="messageScreen"
                component={MessageScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Inbox",
                    tabBarLabelStyle: { fontSize: 13, color:'black' },
                    tabBarIcon: () => (
                    <AntDesign name="inbox" size={24} color = 'black' />
                    ),
                }}
            />
            <Tab.Screen
                name="shiftScreen"
                component={ShiftScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Shifts",
                    tabBarLabelStyle: { fontSize: 13, color:'black' },
                    tabBarIcon: () => (
                    <AntDesign name="bars" size={24} color = 'black' />
                    ),
                }}
            />
            
        </Tab.Navigator>
    );
}
