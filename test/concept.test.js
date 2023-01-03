import React from "react"
import { render, screen } from "@testing-library/react"
import { Concept as pageContext } from "../test/data/pageContext"
import Concept from "../src/components/Concept"

describe("Concept", () => {
  it("renders concept component", () => {
    render(<Concept pageContext={pageContext} />)
    expect(
      screen.getByRole("heading", { name: "Konstruktionstechnik" })
    ).toBeInTheDocument()
  })
})
