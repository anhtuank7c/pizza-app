import React from "react"
import { render, screen } from "@testing-library/react-native"
import { Switch } from "./switch"

test("match snapshot", () => {
  render(<Switch />)
  expect(screen).toMatchSnapshot()
})
