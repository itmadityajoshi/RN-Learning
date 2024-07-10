import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const PropsRN = () => {
    
    const [name, setName] = useState('Hari')
  return (
    <View>
        <Text> Props in React Native </Text>
        <Button title='change' onPress={()=>{setName('Gopal')}} />

        <Users name = {name}  age={27}/>

    </View>
  )
}

// child components

const Users = (props)=>{
    return (
        <View>
            <Text> Name : {props.name} </Text>
            <Text> Age : {props.age} </Text>

        </View>
    )
}

export default PropsRN
