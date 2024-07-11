import React from "react";
import { View, Button, Text, SafeAreaView } from "react-native";
import ButtonEvent from "./components/ButtonEvent";
import StateinRN from "./components/StateinRN";
import PropsRN from "./components/PropsRN";
import Styling from "./components/Styling";
import HandletextInput from "./components/HandletextInput";
import SimpleForm from "./components/SimpleForm";
import Flatlist from "./components/Flatlist";

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text> Hello </Text>
        {/* <ButtonEvent/> */}
        {/* <StateinRN /> */}
        {/* <PropsRN /> */}
        {/* <Styling/>  */}
        {/* <HandletextInput/> */}
        {/* <SimpleForm/> */}
        <Flatlist/>
      </View>
    </SafeAreaView>
  );
};
export default App;
