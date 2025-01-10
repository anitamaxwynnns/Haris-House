import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    ImageBackground,
    Pressable,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
} from "react-native";
import { MD2Colors } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { supabase } from "../supabase/supabase";
import { RootStackNavigatorParamsList } from "../App";
import { useAuth } from "../auth/auth_provider";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

type DUMMYDATA = {
    id: string;
    Job: string;
    Time: string;
    Pay: string;
};

const DUMMY: DUMMYDATA[] = [
    {
        id: "1",
        Job: "Project Management Gig",
        Time: "XX:XX:XX",
        Pay: "XXX",
    },
    {
        id: "2",
        Job: "Project Management Gig",
        Time: "XX:XX:XX",
        Pay: "XXX",
    },
    {
        id: "3",
        Job: "Project Management Gig",
        Time: "XX:XX:XX",
        Pay: "XXX",
    },
    {
        id: "4",
        Job: "Project Management Gig",
        Time: "XX:XX:XX",
        Pay: "XXX",
    },
];

export default function Profile() {
    const navigation =
        useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();
    const [user, setUser] = useState<{ name: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const { session } = useAuth();

    const renderItem = ({ item }: { item: DUMMYDATA }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{ padding: 20 }}>
                <Text style={styles.scrollItemText}>Job: {item.Job}</Text>
                <Text style={{ fontSize: 20, color: "black" }}>
                    Time: {item.Time}
                </Text>
                <Text style={{ fontSize: 20, color: "black" }}>
                    Pay:{item.Pay}
                </Text>
            </TouchableOpacity>
        );
    };

    async function getUserInfo(): Promise<{ name: string } | null> {
        if (!session?.user?.id) {
            return null;
        }

        const { data, error } = await supabase
            .from("profile")
            .select("name")
            .eq("user_id", session?.user.id);

        if (error) {
            console.error(error);
            return null;
        }
        return data.length > 0 ? data[0] : null;
    }

    useEffect(() => {
        let ignore = false;
        getUserInfo().then((result) => {
            if (!ignore) {
                setUser(result);
                setLoading(false);
            }
        });
        return () => {
            ignore = true;
        };
    });

    if (loading) {
        return (
            <View>
                <ActivityIndicator
                    animating={true}
                    color={MD2Colors.black}
                    size={"large"}
                />
            </View>
        );
    }

    async function onPress() {
        await supabase.auth.signOut();
        navigation.navigate("StartScreen");
    }

    return (
        <SafeAreaProvider>
            <ImageBackground
                style={{ flex: 1 }}
                source={require("../assets/startscreen.png")}
                blurRadius={4}
            >
                {/* Background Container */}
                <View
                    style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)", justifyContent: 'space-evenly',  }}
                >
                    {/* Name Section */}
                    <View
                        style={{
                            flex: 0.2,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                alignSelf: "flex-start",
                                marginLeft: 20,
                                fontSize: 20,
                                color: "#fff",
                                fontWeight: "bold",
                            }}
                        >
                            Welcome Name!
                        </Text>
                    </View>

                    {/* Scrollable Activity Section */}
                    <View
                        style={{
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            backgroundColor: "white",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 30,
                                padding: 10,
                                fontWeight: "bold",
                            }}
                        >
                            Account Info
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ padding: 10, fontSize: 20 }}>
                                Wallet Connected: MetaMask
                            </Text>
                            <MaterialIcons
                                name="verified"
                                size={18}
                                style={{ marginTop: 13 }}
                            />
                        </View>
                        <Text style={{ padding: 10, fontSize: 20 }}>
                            Account Balance: XXX XRP ($XXX.XXX)
                        </Text>
                    </View>

                    {/* Logout Button */}
                    <View style={{padding: 30}}>
                        <Pressable
                            onPress={onPress}
                            style={{
                                backgroundColor: "black",
                                borderRadius: 20,
                                paddingTop: 15,
                                paddingBottom: 15,
                                padding: 20,
                                alignItems: "center",
                                alignSelf: "center",
                                flexDirection: "column",
                            }}
                        >
                            <Text style={{ color: "white", fontSize: 15 }}>
                                Log Out
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 10,
        width: "80%",
        maxWidth: 400,
        height: "100%",
        maxHeight: 800,
    },
    heading: {
        fontSize: 28,
        color: "#000",
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
    },
    scrollItemText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
    },
    scrollContainer: {
        flex: 0.5, // Adjusts the height of the container
        backgroundColor: "#f9f9f9", // Adds a semi-transparent background
        borderRadius: 10, // Optional: rounds the corners
        padding: 10, // Adds space around the FlatList
        marginHorizontal: 20, // Adds space on the left and right
        marginVertical: 10, // Adds space above and below
    },
});
