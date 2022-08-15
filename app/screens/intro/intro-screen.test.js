import React from "react"
import renderer from "react-test-renderer"
import { IntroScreen } from "./intro-screen"

describe("intro-screen", () => {
  it("render correctly", async () => {
    const tree = renderer.create(<IntroScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
