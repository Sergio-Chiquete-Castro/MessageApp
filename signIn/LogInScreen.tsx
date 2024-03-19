import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

type HomeScreenProps = {
  navigation: any; // Replace 'any' with the appropriate navigation type if needed
};

export default function LogInScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.logoCircle}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>
      <Text style={styles.title}>Welcome to Chat</Text>
      <View style={styles.separator} />

      <View>
        <Text style={styles.emailText}>Email</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Enter Email"
        ></TextInput>

        <Text style={styles.passText}>Password</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Enter Password"
        ></TextInput>

        <View style={styles.loginButton}>
          <Button
            title="Log In"
            onPress={() => navigation.navigate("Details")}
            color={'white'}
          />
        </View>

        <View style={styles.signUpButton}>
        <Button
            title="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
            color={'white'}
          />
        </View>

        <View style={{ marginTop: 50 }}>
          <Button title="Forgot Password" color={"blue"} />
          <Button title="Privacy" color={"blue"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpButton: {
    alignSelf: "center",
    marginTop: 20,
    width: "80%",
    backgroundColor: "blue",
    borderRadius: 10,
  },
  loginButton: {
    marginTop: 20,
    width: "80%",
    backgroundColor: "blue",
    borderRadius: 10,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 65,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  emailText: {
    marginLeft: 11,
  },
  emailInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  passText: {
    marginLeft: 11,
  },
  passwordInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  logoText: {
    marginTop: 35,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  logoCircle: {
    alignSelf: "center",
    borderWidth: 1,
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});
