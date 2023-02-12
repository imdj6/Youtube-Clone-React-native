import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { GlobeAltIcon } from "react-native-heroicons/solid";
import Expolorebuttons from "./Uicomponents/Expolorebuttons";
const Explore = (props) => {
  return (
    <View className="bg-black text-white flex-row p-2 items-center space-x-4">
      <View className="bg-slate-700 p-2">
        <TouchableOpacity onPress={(e) => {
            props.setExplore(true);
          }}>
        <GlobeAltIcon color="white" />
        </TouchableOpacity>
      </View>
      <View className="border-slate-700 border h-10" />
      <View className="flex-row space-x-2 items-center">
        <View>
          <Expolorebuttons text="News" active="true" />
        </View>
        <View>
          <Expolorebuttons text="Trending"/>
        </View>
        <View>
          <Expolorebuttons text="Mixes"/>
        </View>
        <View>
          <Expolorebuttons text="Music"/>
        </View>
        <View>
          <Expolorebuttons text="Salman"/>
        </View>
        <View>
          <Expolorebuttons text="Scene"/>
        </View>
      </View>
    </View>
  );
};

export default Explore;
