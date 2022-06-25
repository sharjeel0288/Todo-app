import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SandBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxone}>one</Text>
      <Text style={styles.boxtwo}>two</Text>
      <Text style={styles.boxthree}>three</Text>
      <Text style={styles.boxfour}>four</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent:'center' ,
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxone: {
    backgroundColor: "violet",
    padding: 10,
  },
  boxtwo: {
    backgroundColor: "gold",
    padding: 10,
  },
  boxthree: {
    backgroundColor: "coral",
    padding: 10,
  },
  boxfour: {
    backgroundColor: "skyblue",
    padding: 10,
  },
});
