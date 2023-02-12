import { View, Text } from 'react-native'
import React from 'react'

const Expolorebuttons = (props) => {
  return (
    <View className>
      <Text className={"text-white" + (props.active ? "active-button" : "cta-button")}>{props.text}</Text>
    </View>
  )
}

export default Expolorebuttons