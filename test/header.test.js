import React from "react"
import { render, screen, act } from "@testing-library/react"
import Header from "../src/components/header"
import mockFetch from "./mocks/mockFetch"
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from "@gatsbyjs/reach-router"

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch)
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe("Header", () => {
  it("renders header component without language tags", async () => {
    const languages = ["de"]
    const language = "de"
    const route = "/one-lang/w3id.org/class/hochschulfaecher/scheme.de.html"
    const history = createHistory(createMemorySource(route))
    await act(() => {
      render(
        <LocationProvider history={history}>
          <Header
            siteTitle="Test Title"
            languages={languages}
            language={language}
          />
        </LocationProvider>
      )
    })
    expect(screen.getByRole("banner")).toBeInTheDocument()
    // skohub logo
    expect(screen.getByRole("img", { name: "SkoHub Logo" })).toBeInTheDocument()
    // skohub title
    expect(
      screen.getByRole("link", { name: "SkoHub Logo Test Title" })
    ).toBeInTheDocument()
    // skohub concept scheme link
    expect(
      screen.getByRole("link", {
        name: "Fächersystematik Hochschulbildung in Deutschland",
      })
    ).toBeInTheDocument()
    // check for language menu not to be present
    expect(screen.queryByRole("list")).toBeNull()
  })
  it("renders header component with multiple language tags", async () => {
    const languages = ["de", "en", "uk"]
    const language = "de"
    const route = "/three-langs/w3id.org/class/hochschulfaecher/scheme.de.html"
    const history = createHistory(createMemorySource(route))
    await act(() => {
      render(
        <LocationProvider history={history}>
          <Header
            siteTitle="Test Title"
            languages={languages}
            language={language}
          />
        </LocationProvider>
      )
    })
    // skohub concept scheme link
    expect(
      screen.getByRole("link", {
        name: "Fächersystematik Hochschulbildung in Deutschland",
      })
    ).toBeInTheDocument()
    // check for language menu
    expect(screen.getByRole("list")).toBeInTheDocument()
    // check for language items
    expect(screen.getAllByRole("listitem").length).toBe(3)
  })

  it("renders header, shows concept id if title in language is not present", async () => {
    const languages = ["de"]
    const language = "en"
    const route = "/no-prefLabel/w3id.org/class/hochschulfaecher/scheme.de.html"
    const history = createHistory(createMemorySource(route))
    await act(() => {
      render(
        <LocationProvider history={history}>
          <Header
            siteTitle="Test Title"
            languages={languages}
            language={language}
          />
        </LocationProvider>
      )
    })
    // skohub concept scheme link
    expect(
      screen.getByRole("link", {
        name: "http://w3id.org/class/hochschulfaecher/scheme#",
      })
    ).toBeInTheDocument()
  })
})
