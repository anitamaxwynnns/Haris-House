import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import {
    FlatList,
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { supabase } from "../supabase/supabase";
import { RootStackNavigatorParamsList } from "../App";

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

type ItemProps = {
    item: DUMMYDATA;
    backgroundColor: string;
    textColor: string;
    onPress: () => void;
};

export default function Profile() {
    const navigation =
        useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();
    const [user, setUser] = useState<{ name: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState("");
    const [selectedId, setSelectedId] = useState<string>("");

    const renderItem = ({ item }: { item: DUMMYDATA }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{ padding: 20 }}>
                <Text style={{ fontSize: 20, color: "black" }}>{item.Job}</Text>
                <Text style={{ fontSize: 20, color: "black" }}>
                    {item.Time}
                </Text>
                <Text style={{ fontSize: 20, color: "black" }}>{item.Pay}</Text>
            </TouchableOpacity>
        );
    };

    async function getUserInfo() {}

    async function onPress() {
        await supabase.auth.signOut();
        navigation.navigate("StartScreen");
    }

    return (
        <SafeAreaProvider>
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
                style={{ flex: 0.5, flexDirection: "column", paddingLeft: 22 }}
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
                <Text style={{ color: "white", fontSize: 15 }}>Log Out</Text>
            </Pressable>
        </SafeAreaProvider>
    );
}
