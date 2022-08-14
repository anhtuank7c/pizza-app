import React, { FC } from "react"
import { View } from "react-native"
import Animated from "react-native-reanimated"
import { color } from "../../theme"
import { usePaginationItem } from "./pagination-item.hooks"
import styles from "./pagination-item.styles"

export const PaginationItem: FC<{
  index: number
  backgroundColor: string
  length: number
  animValue: Animated.SharedValue<number>
  isRotate?: boolean
}> = (props) => {
  const { animValue, index, length, backgroundColor, isRotate } = props
  const width = 10
  const { animStyle } = usePaginationItem({ animValue, index, length })

  return (
    <View
      style={[
        styles.dot,
        {
          backgroundColor: color.palette.lighterGrey,
          width,
          height: width,
          transform: [
            {
              rotateZ: isRotate ? "90deg" : "0deg",
            },
          ],
        },
      ]}
    >
      <Animated.View
        style={[
          styles.activeDot,
          {
            backgroundColor,
          },
          animStyle,
        ]}
      />
    </View>
  )
}
