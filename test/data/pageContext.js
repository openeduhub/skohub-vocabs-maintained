export const Concept = {
  node: {
    id: "http://w3id.org/class/hochschulfaecher/S99#",
    type: "Concept",
    hub: "https://test.skohub.io/hub",
    prefLabel: {
      en_us: null,
      de: "Konstruktionstechnik",
    },
    definition: null,
    scopeNote: null,
    narrower: [],
    broader: {
      id: "http://w3id.org/class/hochschulfaecher/B96#",
      prefLabel: {
        en_us: null,
        de: "Maschinenbau",
      },
    },
    inScheme: {
      id: "http://w3id.org/class/hochschulfaecher/scheme#",
      title: {
        en_us: null,
        de: "Fächersystematik Hochschulbildung in Deutschland",
      },
    },
    topConceptOf: null,
  },
  language: "de",
  baseURL: "",
}

export const ConceptNoPrefLabel = {
  node: {
    id: "http://w3id.org/class/hochschulfaecher/S99#",
    type: "Concept",
    hub: "https://test.skohub.io/hub",
    prefLabel: {
      en: null,
      de: "Konstruktionstechnik",
    },
    definition: null,
    scopeNote: null,
    narrower: [],
    broader: {
      id: "http://w3id.org/class/hochschulfaecher/B96#",
      prefLabel: {
        en: null,
        de: "Maschinenbau",
      },
    },
    inScheme: {
      id: "http://w3id.org/class/hochschulfaecher/scheme#",
      title: {
        en_us: null,
        de: "Fächersystematik Hochschulbildung in Deutschland",
      },
    },
    topConceptOf: null,
  },
  language: "en",
  baseURL: "",
}

export const ConceptSchemeNoNarrower = {
  node: {
    id: "http://w3id.org/class/hochschulfaecher/scheme#",
    type: "ConceptScheme",
    title: {
      de: "Fächersystematik Hochschulbildung in Deutschland",
    },
    hasTopConcept: [
      {
        id: "http://w3id.org/class/hochschulfaecher/F1#",
        broader: null,
        prefLabel: {
          de: "Agrar- und Forstwissenschaften",
        },
      },
    ],
  },
  language: "de",
  baseURL: "",
}

export const ConceptSchemeWithNarrower = {
  node: {
    id: "http://w3id.org/class/hochschulfaecher/scheme#",
    type: "ConceptScheme",
    title: {
      de: "Fächersystematik Hochschulbildung in Deutschland",
    },
    hasTopConcept: [
      {
        id: "http://w3id.org/class/hochschulfaecher/F1#",
        narrower: [
          {
            id: "http://w3id.org/class/hochschulfaecher/B1#",
            topConceptOf: null,
            inScheme: {
              id: "http://w3id.org/class/hochschulfaecher/scheme#",
              title: {
                de: "Fächersystematik Hochschulbildung in Deutschland",
              },
            },
            prefLabel: {
              de: "Agrarwissenschaften",
            },
          },
        ],
        broader: null,
        prefLabel: {
          de: "Agrar- und Forstwissenschaften",
        },
      },
    ],
  },
  language: "de",
  baseURL: "",
}

export const ConceptSchemeNoPrefLabel = {
  node: {
    id: "http://w3id.org/class/hochschulfaecher/scheme#",
    type: "ConceptScheme",
    title: {
      de: "Fächersystematik Hochschulbildung in Deutschland",
    },
    hasTopConcept: [
      {
        id: "http://w3id.org/class/hochschulfaecher/F1#",
        narrower: [
          {
            id: "http://w3id.org/class/hochschulfaecher/B1#",
            topConceptOf: null,
            inScheme: {
              id: "http://w3id.org/class/hochschulfaecher/scheme#",
              title: {
                de: "Fächersystematik Hochschulbildung in Deutschland",
              },
            },
            prefLabel: {
              de: "Agrarwissenschaften",
            },
          },
        ],
        broader: null,
        prefLabel: {
          de: "Agrar- und Forstwissenschaften",
        },
      },
    ],
  },
  language: "en",
  baseURL: "",
}
