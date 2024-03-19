import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

type HomeScreenProps = {
  navigation: any; // Replace 'any' with the appropriate navigation type if needed
};

export default function ProfileEditOne({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Picture</Text>
      <Text>enter name </Text>
      <Text>enter last name</Text>

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

    styleButton:{
        alignSelf: "center",
        marginTop: 20,
        width: "80%",
        backgroundColor: "blue",
        borderRadius: 10,
    }, 


});
