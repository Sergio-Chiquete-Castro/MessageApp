import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

type HomeScreenProps = {
  navigation: any; // Replace 'any' with the appropriate navigation type if needed
};

export default function ChatroomScreen({ navigation }: HomeScreenProps) {
  return ( 
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.logoCircle} />
        <View style={styles.notifCircle} />
        <View style={styles.settingCircle} />
      </View>
      <View style={styles.horizontalLine}/>
      <View style={styles.container3}>
        <View style={styles.profPFP} />
        <View style={styles.chatButton}>
          <Button
            title="Chat"
            color={"white"}
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: "white",
      borderRadius: 10,
      alignSelf: "center",
    },
    
    //Handles Top Section//
    container2: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
    },
    logoCircle: {
      borderWidth: 1,
      height: 50,
      width: 50,
      borderRadius: 25,
      marginLeft: 16
    },
    notifCircle: {
      borderWidth: 1,
      height: 50,
      width: 50,
      borderRadius: 25,
      marginLeft: 250,
    },
    settingCircle: {
      borderWidth: 1,
      height: 50,
      width: 50,
      borderRadius: 25,
      marginLeft: 10,
    },

    //--------------------//

    //Handles Bottom Section//
    container3: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 618,
      marginLeft: 14,
    },
    profPFP: {
      borderWidth: 1,
      height: 70,
      width: 70,
      borderRadius: 35,
      marginTop: 0,
      marginLeft: 7,
    },
    chatButton: {
      alignSelf: "center",
      width: 310,
      backgroundColor: "blue",
      borderRadius: 10,
      marginTop: 0,
      height:50,
      marginLeft: 20,
      marginHorizontal: 30,
    },

    //--------------------//

    //Horizontal Line//

    horizontalLine: {
      borderBottomWidth: 1,
      borderBottomColor: "black",
      marginVertical: 18, 
    }
});
