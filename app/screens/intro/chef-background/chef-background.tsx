import React from "react"
import { ImageBackground, View, SafeAreaView } from "react-native"
import { AutoImage } from "../../../components"
import styles from "./chef-background.styles"

interface Props {
  children: React.ReactElement<any, any>[]
}
export const ChefBackground = ({ children }: Props) => {
  return (
    <ImageBackground source={require("./background.jpg")} style={styles.container}>
      <View style={styles.wrapper}>
        <AutoImage source={require("./chef.png")} style={styles.imgChef} />
        <View style={styles.circle} />
      </View>
      <SafeAreaView style={styles.childrenContainer}>{children}</SafeAreaView>
    </ImageBackground>
  )
}
