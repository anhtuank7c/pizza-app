import { StyleSheet, Dimensions } from "react-native"
import { color } from "../../theme/color"
import { spacing } from "../../theme/spacing"

export const { width: SW, height: SH } = Dimensions.get("window")

export default StyleSheet.create({
  btnGetStarted: {
    backgroundColor: color.palette.angry,
    marginBottom: spacing[6],
    marginHorizontal: spacing[8],
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  btnGetStartedText: {
    fontSize: 17,
    fontWeight: "400",
    letterSpacing: 2,
  },
  // slider
  slider: {
    flex: 1,
    justifyContent: "center",
    marginTop: spacing[6],
    padding: spacing[6],
  },
  sliderProgress: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing[4],
  },
  txtContent: {
    textAlign: "center",
  },
  txtHeader: {
    paddingBottom: spacing[4],
    textAlign: "center",
  },
})
