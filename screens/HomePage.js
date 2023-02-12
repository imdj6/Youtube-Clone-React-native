import { View, Text, Image, SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TvIcon,
  BellAlertIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import Navbar from "../components/Navbar";
import Explore from "../components/Explore";
import SideNavbar from "../components/Uicomponents/SideNavbar";
import Posts from "../components/Uicomponents/Posts";
const HomePage = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [explore, setExplore] = useState(false);
  return (
    <>
      {explore && <SideNavbar explore={explore} setExplore={setExplore}/>}
      <Navbar />
      <Explore explore={explore} setExplore={setExplore} />
      <Posts url="https://i.ytimg.com/vi/PJWemSzExXs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLARazyJycaayer_rgOlUTRQVKk5JA"/>
      <Posts url="https://i.ytimg.com/vi/YgDpr_CrM8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaPhQ1CJFw6IMaykGQNiKkV3ijng"/>
      <Posts url="https://i.ytimg.com/vi/rmd3EM_RR_E/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAooFigIMCAAQARhBIGIoZTAP&rs=AOn4CLCDHqOVy-qfUxQ_PaiC4oTTyGNM4w"/>
      <Posts/>

    </>
  );
};

export default HomePage;
