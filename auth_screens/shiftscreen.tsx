import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageBackground, StyleSheet, Text, View, ScrollView} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackNavigatorParamsList } from "../App";
import { useState } from "react";


export default function ShiftScreen() {
    const activeJobs = [
        { id: 1, role: "Cashier", location: "SuperMart, Downtown", time: "Today, 10:00 AM - 6:00 PM" },
        { id: 2, role: "Waiter", location: "Cafe Bliss, Midtown", time: "Tomorrow, 1:00 PM - 9:00 PM" },
    ];

    const completedJobs = [
        { id: 3, role: "Barista", location: "Java Lounge, City Center", time: "Jan 5, 9:00 AM - 5:00 PM" },
        { id: 4, role: "Warehouse Assistant", location: "StoreCo, Industrial Park", time: "Jan 3, 8:00 AM - 4:00 PM" },
        { id: 5, role: "Sales Associate", location: "Mall Plaza, Uptown", time: "Dec 30, 10:00 AM - 6:00 PM" },
    ];

    return (
        <SafeAreaProvider>
            <ImageBackground
                style={styles.background}
                source={require("../assets/startscreen.png")}
                blurRadius={2}
            >
                <View style={styles.container}>
                    <Text style={styles.heading}>My Shifts</Text>

                    {/* Active Jobs Section */}
                    <Text style={styles.subheading}>Active Jobs</Text>
                    <ScrollView style={styles.section}>
                        {activeJobs.length > 0 ? (
                            activeJobs.map((job) => (
                                <View key={job.id} style={styles.jobCard}>
                                    <Text style={styles.jobRole}>{job.role}</Text>
                                    <Text style={styles.jobLocation}>{job.location}</Text>
                                    <Text style={styles.jobTime}>{job.time}</Text>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.noJobsText}>No active jobs at the moment.</Text>
                        )}
                    </ScrollView>

                    {/* Completed Jobs Section */}
                    <Text style={styles.subheading}>Completed Jobs</Text>
                    <ScrollView style={styles.section}>
                        {completedJobs.length > 0 ? (
                            completedJobs.map((job) => (
                                <View key={job.id} style={styles.jobCard}>
                                    <Text style={styles.jobRole}>{job.role}</Text>
                                    <Text style={styles.jobLocation}>{job.location}</Text>
                                    <Text style={styles.jobTime}>{job.time}</Text>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.noJobsText}>No completed jobs to show.</Text>
                        )}
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
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    subheading: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
    },
    section: {
        maxHeight: 200,
        marginBottom: 20,
    },
    jobCard: {
        backgroundColor: "#f9f9f9",
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    jobRole: {
        fontSize: 18,
        fontWeight: "bold",
    },
    jobLocation: {
        fontSize: 14,
        color: "#555",
        marginVertical: 5,
    },
    jobTime: {
        fontSize: 12,
        color: "#999",
    },
    noJobsText: {
        fontSize: 14,
        color: "#555",
        textAlign: "center",
    },
});


