import { View, Text, Image, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TvIcon,
  BellAlertIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import Navbar from "../components/Navbar";
import Explore from "../components/Explore";
const HomePage = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
    <Navbar/>
    <Explore/>
    </>
  );
};

export default HomePage;
