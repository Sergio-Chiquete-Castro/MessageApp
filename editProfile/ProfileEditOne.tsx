import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { StyleSheet } from "react-native";

type HomeScreenProps = {
  navigation: any; // Replace 'any' with the appropriate navigation type if needed
};

export default function ProfileEditOne({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profileCircle}>
        <Text style={styles.profileText}>Profile PIC</Text>

        <View style={styles.profileButton}>
        <Button
          title="edit"
           color={"white"}
        />
        </View>
      </View>


      <View style={styles.profileFName}>
        <Text style={styles.fNameText}>First</Text>
        <TextInput
          style={styles.fNameInput}
          placeholder="First Name"
        ></TextInput>
      </View>

      <View style={styles.profileLName}>
        <Text style={styles.lNameText}>Last</Text>
        <TextInput
          style={styles.lNameInput}
          placeholder="Last Name"
        ></TextInput>
      </View>

      <View style={styles.styleButton}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate("EditTwo")}
          color={"white"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileText: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  profileCircle: {
    alignSelf: "center",
    borderWidth: 1,
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 20,
  },

  profileButton:{
    alignSelf: "center",
    marginTop: 35,
    width: "50%",
    backgroundColor: "blue",
    borderRadius: 10,
   },


  profileLName: {
    padding: 20,
  },
  lNameText: {
    marginLeft: 11,
  },
  lNameInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  profileFName: {
    padding: 20,
    marginTop: 20,
  },

  fNameText: {
    marginLeft: 11,
  },
  fNameInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  textInput: {
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10,
  },

  styleButton: {
    alignSelf: "center",
    marginTop: 20,
    width: "80%",
    backgroundColor: "blue",
    borderRadius: 10,
  },
});
