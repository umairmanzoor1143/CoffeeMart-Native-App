import React from "react"
import { View, ActivityIndicator } from "react-native"
interface ILoading {
  color?: string
  loadingsStyle?: any
}
export const Loading: React.FC<ILoading> = ({
  color = "#000",
  loadingsStyle = { flex: 1, justifyContent: "center" },
}) => {
  return (
    <View style={loadingsStyle}>
      <ActivityIndicator color={color} animating={true} size="small" />
    </View>
  )
}
