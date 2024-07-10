import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [display, setDisplay] = useState(false);

  const Clearform = () => {
    setDisplay(false);
    setName("");
    setAge("");
  };

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 28,
          color: "red",
          marginBottom: 15,
        }}
      >
        {" "}
        Simple Form Handling{" "}
      </Text>
      <TextInput
        style={styles.firstInput}
        placeholder="Enter your Name "
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.secondInput}
        placeholder="Enter your Age"
        value={age}
        onChangeText={(age) => setAge(age)}
      />
      <View style={{ marginBottom: 8 }}>
        <Button
          title="print Value"
          color={"green"}
          padding={10}
          onPress={() => setDisplay(true)}
        />
      </View>
      <Button title="Clear Value" padding={10} onPress={Clearform} />

      <View>
        {display ? (
          <View>
            <Text style={styles.texthead}> Your Name is : {name} </Text>
            <Text style={styles.texthead}>Your Age is : {age} </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  texthead: {
    fontSize: 20,
  },
  firstInput: {
    borderWidth: 2,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
  secondInput: {
    borderWidth: 2,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 5,
  },
});

export default SimpleForm;
