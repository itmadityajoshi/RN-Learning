import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const Maplist = () => {
  const users = [
    {
      id: 1,
      name: "adi",
    },
    {
      id: 2,
      name: "sam",
    },
    {
      id: 3,
      name: "hero",
    },
    {
      id: 4,
      name: "sami",
    },
    {
      id: 10,
      name: "asmi",
    },
    {
        id: 1,
        name: "adi",
      },
      {
        id: 2,
        name: "sam",
      },
      {
        id: 3,
        name: "hero",
      },
      {
        id: 4,
        name: "sami",
      },
      {
        id: 10,
        name: "asmi",
      },
      {
        id: 1,
        name: "adi",
      },
      {
        id: 2,
        name: "sam",
      },
      {
        id: 3,
        name: "hero",
      },
      {
        id: 4,
        name: "sami",
      },
      {
        id: 10,
        name: "asmi",
      },
  ];

  return (
    <View>
      <Text>List with Map Function </Text>
      <ScrollView style={{marginBottom:60}}>

      {users.map((item) => (
        <Text style={styles.text}> {item.name} </Text>
      ))}
      </ScrollView>

    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "gold",
    margin: 5,
    textAlign: "center",
    padding: 10,
  },
});

export default Maplist;
