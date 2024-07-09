import React from 'react'
import {View, Button, Text} from 'react-native'

const ButtonEvent = () => {

    const fruit =(val)=> {
      console.warn(val);
    }
  return (
    <View>
      <Text> Button Components & onPress event</Text>
      <Button title="Press Me" onPress={()=>fruit('Hello Siyana')} color={'green'}/>
      <Button title="Press Me 2" onPress={fruit} />
    </View>
  )
}

export default ButtonEvent;
