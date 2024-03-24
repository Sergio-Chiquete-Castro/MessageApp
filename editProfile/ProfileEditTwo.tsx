import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { StyleSheet } from "react-native";

import FlagInput from "./flagInput";

type HomeScreenProps = {
  navigation: any;
};

export default function ProfileEdiTwo({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.profileCircle}>
        <Text style={styles.profileText}>Profile PIC</Text>
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Edwin</Text>
        <Text style={styles.nameText}>Gilder</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.flagContainer}>
          <Text style={styles.label}>Choose a flag</Text>
          <FlagInput />
        </View>

        <View style={styles.bioContainer}>
          <Text style={styles.label}>Bio:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter something short"
            multiline
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Enter"
           onPress={() => navigation.navigate("MainScreen")}
          color={"white"}
           
         />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileCircle: {
    alignSelf: "center",
    borderWidth: 1,
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profileText: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  nameContainer: {
    alignSelf: "center",
    marginBottom: 20,
  },
  nameText: {
    fontSize: 16,
  },
  contentContainer: {
    flexDirection: "row",
  },
  flagContainer: {
    flex: 1,
    marginRight: 10,
  },
  bioContainer: {
    flex: 1,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    height: 100,
  },
  buttonContainer: {
    alignSelf: "center",
    marginTop: 20,
    width: "80%",
    backgroundColor: "blue",
    borderRadius: 10,
  },
});

