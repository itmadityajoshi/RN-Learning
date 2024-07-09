import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const StateinRN = () => {

    const [name, setName] = useState('Aditya');
    let data = 'state data'
    
    function testName (){
        setName('Anybody')
        data = 'function data'
    }

  return (
    <View>
      <Text> State in React Native </Text>
      <Text>Name : {name} </Text>
      <Text> {data} </Text>
      <Button title="change Name" onPress={testName} />
    </View>
  );
};

export default StateinRN;
