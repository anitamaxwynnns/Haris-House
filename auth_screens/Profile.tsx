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
} from "react-native";
import { MD2Colors } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { supabase } from "../supabase/supabase";
import { RootStackNavigatorParamsList } from "../App";
import { useAuth } from "../auth/auth_provider";

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
                <Text style={{ fontSize: 20, color: "black" }}>
                    Job: {item.Job}
                </Text>
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
                style={{flex:1}}
                source={require("../assets/startscreen.png")}
                blurRadius={4}
            >
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
                        }}
                    >
                        Name
                    </Text>
                </View>
                <View
                    style={{
                        flex: 0.6,
                        flexDirection: "column",
                        paddingLeft: 22,
                    }}
                >
                    <Text style={{ fontSize: 20 }}>Activity</Text>
                    <FlatList
                        data={DUMMY}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
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
            </ImageBackground>
        </SafeAreaProvider>
    );
}
