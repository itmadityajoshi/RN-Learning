import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Styling = () => {
  return (
    <View>
      <Text style={{fontSize:25, color:'red'}}>Stylin in React-Native</Text>  
      <Text style={style.textBox}> Inline StyleSheet</Text>
    </View>
  );
};

const style = StyleSheet.create({
    textBox: {
      fontSize: 28 ,
      Color: "blue",
      fontWeight: 'bold'
  
    }
  });



export default Styling;
