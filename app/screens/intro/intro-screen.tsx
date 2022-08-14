import React, { FC, useCallback } from "react"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Text, PaginationItem } from "../../components"
import { ChefBackground } from "./chef-background/chef-background"
import Carousel from "react-native-reanimated-carousel"
import styles, { SW, SH } from "./intro-screen.styles"
import { useSharedValue } from "react-native-reanimated"
import { color } from "../../theme"

const slides = [
  {
    title: "intro.slideFirstTitle",
    desc: "intro.slideFirstDesc",
  },
  {
    title: "intro.slideSecondTitle",
    desc: "intro.slideSecondDesc",
  },
  {
    title: "intro.slideThirdTitle",
    desc: "intro.slideThirdDesc",
  },
]

export const IntroScreen: FC<StackScreenProps<NavigatorParamList, "intro">> = function IntroScreen({
  navigation,
}) {
  const progressValue = useSharedValue<number>(0)

  const gotoHomeScreen = () => navigation.navigate("welcome")

  const renderSlide = useCallback(({ item }) => {
    return (
      <View style={styles.slider}>
        <Text preset="header" tx={item.title} style={styles.txtHeader} />
        <Text preset="default" tx={item.desc} style={styles.txtContent} />
      </View>
    )
  }, [])

  return (
    <ChefBackground>
      <Carousel
        loop
        testID="intro-slide"
        width={SW}
        height={SH * 0.25}
        autoPlay={true}
        pagingEnabled
        data={slides}
        scrollAnimationDuration={3000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={renderSlide}
        onProgressChange={(_, absoluteProgress) => (progressValue.value = absoluteProgress)}
      />
      {!!progressValue && (
        <View style={[styles.sliderProgress, { width: slides.length * 10 }]}>
          {slides.map((_, index) => (
            <PaginationItem
              backgroundColor={color.primary}
              animValue={progressValue}
              index={index}
              key={index}
              length={slides.length}
            />
          ))}
        </View>
      )}
      <Button
        testID="get-started-button"
        style={styles.btnGetStarted}
        textStyle={styles.btnGetStartedText}
        tx="intro.getStarted"
        onPress={gotoHomeScreen}
      />
    </ChefBackground>
  )
}
