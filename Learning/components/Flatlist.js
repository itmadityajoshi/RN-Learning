import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";

const Flatlist = () => {

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
  ];
  
  return (
    <View>
      <Text> List with Flat List components</Text>
      <FlatList data={users} renderItem = {({item})=><Text style={styles.text}> {item.name}</Text>} />
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize:20,
    fontWeight:'bold',
    backgroundColor: 'gold',
    margin: 5,
    textAlign: 'center',
    padding: 10,
  }
})

export default Flatlist;
