import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const UseEffecth = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.warn("Error data 1");
  }, [count]);
  return (
    <View>
      <Text> useEffect Hook life cycle</Text>
      <Text style={{fontSize:19}}>{count}</Text>
      <Button title="update Count" onPress={() => setCount(count + 1)} />
      <Text style={{fontSize:19}}>{data}</Text>

      <Button title="update Data" onPress={() => setData(data + 1)} />
    </View>
  );
};

export default UseEffecth;
