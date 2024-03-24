import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

type HomeScreenProps = {
    navigation: any; // Replace 'any' with the appropriate navigation type if needed
  };

export default function WelcomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.logoCircle}>
                    <Text style={styles.logoText}>Logo</Text>
                </View>
                <View style={styles.notifCircle}>
                    <Text style={styles.notifText}>Notif</Text>
                </View>
            </View>
            <View style={styles.welcomeCircle}>
                <Text style={styles.welcomeText}>Welcome User</Text>
            </View>
            <View style={styles.separator} />

            <View style={styles.chatroomButton}>
                <Button
                    title="View Chatrooms"
                    onPress={() => navigation.navigate("ChatroomMenu")}
                    color={'white'}
                />
            </View>

            <View style={styles.editButton}>
                <Button
                    title="Edit Profile"
                    onPress={() => navigation.navigate("EditOne")}
                    color={'white'}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 10,
        alignSelf: "center",
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    notifCircle: {
        marginLeft: 310,
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 25,
        marginTop: 6,
    },
    notifText: {
        marginTop: 14,
        marginLeft: 7,
        fontWeight: "bold",
    },
    logoCircle: {
        alignSelf: "auto",
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius:25,
        marginLeft: 12,
        marginTop: 6,
    },
    logoText: {
        marginTop: 14,
        marginLeft: 8,
        fontWeight: "bold",
    },
    welcomeCircle: {
        alignSelf: "center",
        borderWidth: 1,
        height: 350,
        width: 350,
        borderRadius: 250,
        marginTop: 120,
        marginHorizontal: 42,
    },
    welcomeText: {
        marginTop: 165,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%"
    },
    chatroomButton: {
        alignSelf: "center",
        marginTop: 10,
        width: 300,
        height: "5%",
        backgroundColor: "blue",
        borderRadius: 10,
    },
    editButton: {
        alignSelf: "center",
        marginTop: 15,
        width: 300,
        height: "5%",
        backgroundColor: "blue",
        borderRadius: 10,
    }
});
