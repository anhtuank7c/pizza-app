import { StyleSheet, Dimensions } from "react-native"
import { color } from "../../../theme/color"

export const { width: SW, height: SH } = Dimensions.get("window")
export default StyleSheet.create({
  childrenContainer: {
    height: SH * 0.4,
    justifyContent: "flex-end",
    width: SW,
  },
  circle: {
    alignSelf: "center",
    backgroundColor: color.palette.white,
    borderRadius: SH,
    height: SH * 2,
    marginTop: SH * 0.6,
    width: SH * 2,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    width: null,
  },
  imgChef: {
    alignSelf: "center",
    bottom: -20,
    height: SW,
    position: "absolute",
    width: SW * 0.7,
  },
  wrapper: {
    flex: 1,
  },
})
