module.exports = languages => `
  type ConceptScheme implements Node {
    title: LanguageMap,
    description: LanguageMap,
    hasTopConcept: [Concept]!
  }

  type Concept implements Node {
    prefLabel: LanguageMap,
    definition: LanguageMap,
    scopeNote: LanguageMap,
    note: LanguageMap,
    notation: [String],
    topConceptOf: ConceptScheme,
    narrower: [Concept],
    narrowerTransitive: [Concept],
    broader: Concept,
    broaderTransitive: [Concept],
    inScheme: ConceptScheme!,
    hub: String,
    inbox: String
  }

  type LanguageMap {
    ${[...languages].map(l => `${l}: String`).join(', ')}
  }
`