import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { GlobeAltIcon } from "react-native-heroicons/solid";
import Expolorebuttons from "./Uicomponents/Expolorebuttons";
const Explore = () => {
  return (
    <View className="bg-black text-white flex-row p-2 items-center space-x-4">
      <View className="bg-slate-700 p-2">
        <GlobeAltIcon color="white" />
      </View>
      <View className="border-slate-700 border h-10" />
      <View className="flex-row space-x-4 items-center">
        <View>
          <Expolorebuttons text="news" active='true'/>
        </View>
        <View>
          <Expolorebuttons text="trending" trending="true" />
        </View>
      </View>
    </View>
  );
};

export default Explore;
