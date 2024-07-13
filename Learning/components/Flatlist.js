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
    {
      id:10,
      name: "asmi"
    },
  ];
  
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center', margin: 10}}> List with Flat List components</Text>
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
