import { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated"

export const usePaginationItem = (props) => {
  const { animValue, index, length } = props
  const width = 10

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1]
    let outputRange = [-width, 0, width]

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1]
      outputRange = [-width, 0, width]
    }

    return {
      transform: [
        {
          translateX: interpolate(animValue?.value, inputRange, outputRange, Extrapolate.CLAMP),
        },
      ],
    }
  }, [animValue, index, length])

  return {
    animStyle,
  }
}
