import { View, Text, Image } from "react-native";
import React from "react";
const Posts = ({url}) => {
  return (
    <View className="flex space-y-3 bg-black text-white">
      <View>
        <Image
          source={{
            uri: url,
          }}
          className="w-full object-contain h-[24vh] bg-gray-300 "
        />
      </View>
      <View className='flex-row items-center space-x-3'>
        <View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/2584/2584659.png",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full ml-1"
          />
        </View>
        <View>
          <Text className="text-white">lorem2sjbchjsbchsbh</Text>
          <Text className="text-slate-700">lorem2sjbchjsbchsbh</Text>
        </View>
      </View>
      <View className="bg-slate-800 h-2" />
    </View>
  );
};

export default Posts;
