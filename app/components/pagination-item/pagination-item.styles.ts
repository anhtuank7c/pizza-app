import { StyleSheet } from "react-native"
import { color } from "../../theme"

export default StyleSheet.create({
  activeDot: {
    backgroundColor: color.primary,
    borderRadius: 50,
    flex: 1,
  },
  dot: {
    borderRadius: 50,
    marginRight: 6,
    overflow: "hidden",
  },
})
