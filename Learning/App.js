import React from "react";
import { View, Button, Text, SafeAreaView } from "react-native";
import ButtonEvent from "./components/ButtonEvent";
import StateinRN from "./components/StateinRN";
import PropsRN from "./components/PropsRN";
import Styling from "./components/Styling";
import HandletextInput from "./components/HandletextInput";
import SimpleForm from "./components/SimpleForm";
import Flatlist from "./components/Flatlist";
import Maplist from "./components/Maplist";
import DynamicGrid from "./components/DynamicGrid";
import ComponentLoopWithFlatlist from "./components/ComponentLoopWithFlatlist";
import UseEffecth from "./components/UseEffecth";

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
        {/* <Flatlist/> */}
        {/* <Maplist/> */}
        {/* <DynamicGrid/> */}
        {/* <ComponentLoopWithFlatlist/> */}
        <UseEffecth/>
      </View>
    </SafeAreaView>
  );
};
export default App;
