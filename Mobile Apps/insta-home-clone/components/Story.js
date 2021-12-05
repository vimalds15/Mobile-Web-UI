import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Story = ({ name, profUrl }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#e95950", "#fccc63", "#ffa500"]}
          style={styles.linearGradient}
        >
          <Image style={styles.image} source={{ uri: profUrl }} />
        </LinearGradient>
      </View>
      <Text>{name}</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  mainContainer: {
    height: 150,
  },
  container: {
    height: 70,
    width: 70,
    marginRight: 10,
    borderRadius: 50,
  },
  image: {
    height: "92%",
    width: "92%",
    borderRadius: 50,
    borderWidth: 1,
    // borderColor:
  },
  linearGradient: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
