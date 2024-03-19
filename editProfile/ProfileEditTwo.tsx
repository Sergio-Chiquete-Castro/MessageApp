import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

type HomeScreenProps = {
  navigation: any; // Replace 'any' with the appropriate navigation type if needed
};

export default function ProfileEdiTwo({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> show case : Profile Picture</Text>
      <Text>show case : enter name </Text>
      <Text>show case : enter last name</Text>

      <Text>BIO</Text>

      <Text>drop down for flag</Text>

      <View style={styles.styleButton}>
        <Button
          title="Enter"
          onPress={() => navigation.navigate("Details")}
          color={"white"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  styleButton: {
    alignSelf: "center",
    marginTop: 20,
    width: "80%",
    backgroundColor: "blue",
    borderRadius: 10,
  },
});
