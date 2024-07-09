import React from 'react';
import {View, Button, Text} from 'react-native'
import ButtonEvent from './components/ButtonEvent'
import StateinRN from './components/StateinRN';


const App =()=>{
  return(
    <View>
      <Text> Hello </Text>
     {/* <ButtonEvent/> */}
     <StateinRN />
   
    </View>
  ) 
}
export default App;