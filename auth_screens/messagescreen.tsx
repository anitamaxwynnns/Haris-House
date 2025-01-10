import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageBackground, StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackNavigatorParamsList } from "../App";

export default function MessageScreen() {
    const messages = [
        { id: 1, sender: "Employer 1", preview: "Hey, how are you?", timestamp: "10:30 AM" },
        { id: 2, sender: "Employer 2", preview: "Are we meeting tomorrow?", timestamp: "9:15 AM" },
        { id: 3, sender: "Employer 3", preview: "Please check the attached file.", timestamp: "Yesterday" },
        { id: 4, sender: "Employer 4", preview: "Got it, thanks!", timestamp: "Monday" },
        { id: 5, sender: "Employer 5", preview: "Let's catch up soon.", timestamp: "Last Week" },
    ];

    return (
        <SafeAreaProvider>
            <ImageBackground
                style={styles.background}
                source={require("../assets/startscreen.png")}
                blurRadius={2}
            >
                <View style={styles.container}>
                    <Text style={styles.heading}>Messages</Text>
                    
                    {/* Scrollable Message List */}
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        {messages.map((message) => (
                            <View key={message.id} style={styles.messageCard}>
                                <Text style={styles.sender}>{message.sender}</Text>
                                <Text style={styles.preview}>{message.preview}</Text>
                                <Text style={styles.timestamp}>{message.timestamp}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        width: "90%",
        marginTop: 50,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 10,
        padding: 20,
        height: "80%" ,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    messageCard: {
        backgroundColor: "#f9f9f9",
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    sender: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    preview: {
        fontSize: 14,
        color: "#555",
        marginBottom: 10,
    },
    timestamp: {
        fontSize: 12,
        color: "#999",
        textAlign: "right",
    },
});
