import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";

const HandletextInput = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Hanlde Text Input</Text>
      <Text> Your Name is {name} </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Enter your Name"
        onChangeText={(text) => setName(text)}
        value= {name}
      />
      <Button title="clear value" onPress={() => setName("")} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: "red",
    borderWidth: 2,
    borderColor: "red",
    margin: 10,
    textAlign: "center",
  },
});
export default HandletextInput;
