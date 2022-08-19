import React from "react"
import { render, screen } from "@testing-library/react-native"
import { AppNavigator } from "./app-navigator"

describe("tabbar-navigator", () => {
  test("render correctly", () => {
    render(<AppNavigator />)
    expect(screen.toJSON()).toMatchSnapshot()
    expect(screen.findAllByText("Home")).toBeTruthy()
    expect(screen.findAllByText("Coupons")).toBeTruthy()
    expect(screen.findAllByText("Cart")).toBeTruthy()
    expect(screen.findAllByText("Profile")).toBeTruthy()
  })
})
