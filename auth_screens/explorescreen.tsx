import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackNavigatorParamsList } from "../App";

export default function ExploreScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();
    const [loading, setLoading] = useState(false);

    // Simulate an API call or background task when navigating
    async function handleNavigation(target: string) {
        setLoading(true);
        try {
            // Simulating a delay for any API calls or logic (optional)
            setTimeout(() => {
                setLoading(false);
                navigation.navigate(target);
            }, 500); // Adjust time as needed
        } catch (error) {
            setLoading(false);
            Alert.alert("An error occurred", error.message || "Please try again.");
        }
    }

    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <ImageBackground
                style={styles.background}
                source={require("../assets/startscreen.png")}
                blurRadius={4}
            >

                <View style={styles.container}>
                    <Text style={styles.heading}>View New Jobs</Text>

                    {/* First horizontal scroll bar */}
                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.scrollContainer}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.scrollItem}>
                            <Text style={styles.scrollItemText}>Job 1 Title</Text>
                            <Image source={require("../assets/cafe.jpg")} style={styles.scrollItemImage}></Image>
                            <Text style={styles.scrollItemText}>Job 1 Description</Text>
                        </View>
                        <View style={styles.scrollItem}>
                        <Text style={styles.scrollItemText}>Job 2 Title</Text>
                            <Image source={require("../assets/cafe.jpg")} style={styles.scrollItemImage}></Image>
                            <Text style={styles.scrollItemText}>Job 2 Description</Text>
                        </View>
                        <View style={styles.scrollItem}>
                        <Text style={styles.scrollItemText}>Job 3 Title</Text>
                            <Image source={require("../assets/cafe.jpg")} style={styles.scrollItemImage}></Image>
                            <Text style={styles.scrollItemText}>Job 3 Description</Text>
                        </View>
                        <View style={styles.scrollItem}>
                        <Text style={styles.scrollItemText}>Job 4 Title</Text>
                            <Image source={require("../assets/cafe.jpg")} style={styles.scrollItemImage}></Image>
                            <Text style={styles.scrollItemText}>Job 4 Description</Text>
                        </View>
                    </ScrollView>

                    <Text style={styles.heading}>Explore Jobs</Text>

                    {/* Second horizontal scroll bar */}
                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.scrollContainer}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.scrollItem}>
                            <Text style={styles.scrollItemText}>Job 1 Title</Text>
                            <Image source={require("../assets/cafe2.jpg")} style={styles.scrollItemImage}></Image>
                            <Text style={styles.scrollItemText}>Job 1 Description</Text>
                        </View>
                        <View style={styles.scrollItem}>
                        <Text style={styles.scrollItemText}>Job 2 Title</Text>
                            <Image source={require("../assets/cafe2.jpg")} style={styles.scrollItemImage}></Image>
                            <Text style={styles.scrollItemText}>Job 2 Description</Text>
                        </View>
                        <View style={styles.scrollItem}>
                        <Text style={styles.scrollItemText}>Job 3 Title</Text>
                            <Image source={require("../assets/cafe2.jpg")} style={styles.scrollItemImage}></Image>
                            <Text style={styles.scrollItemText}>Job 3 Description</Text>
                        </View>
                        <View style={styles.scrollItem}>
                        <Text style={styles.scrollItemText}>Job 4 Title</Text>
                            <Image source={require("../assets/cafe2.jpg")} style={styles.scrollItemImage}></Image>
                            <Text style={styles.scrollItemText}>Job 4 Description</Text>
                        </View>
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
        flexDirection: "column",
    },
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
        color: "#fff",
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        width: 200,
        alignSelf: "center",
        marginBottom: 15,
    },
    backButton: {
        alignSelf: "flex-start",
        margin: 10,
    },
    scrollContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 400,
        marginBottom: 20,
    },
    scrollItem: {
        width: 200, // Adjust the size of each scroll item
        height: 400, // Keep the height 400px
        backgroundColor: "#f9f9f9",
        marginRight: 10,
        overflow: "hidden",
    },
    scrollItemText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
        textAlign: "center", // Optional: aligns text within the box
    },
    scrollItemImage: {
        width: "100%", // Adjust the size of the image relative to the box
        height: "50%", // Adjust height based on your design
        resizeMode: "cover", // Ensures the image fits nicely
        borderRadius: 8, // Optional: matches the box's corners
        alignSelf: "flex-end",
    },
});
