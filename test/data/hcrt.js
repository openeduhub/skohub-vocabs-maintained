export const conceptSchemeOneLang = {
  id: "https://w3id.org/kim/hcrt/scheme",
  type: "ConceptScheme",
  title: {
    de: "Hochschulcampus Ressourcentypen",
  },
  description: {
    de: 'Eine Wertelliste für Typen von Lernressourcen (Learning Resource Type), entstanden im Kontext des Metadatenschemas "LOM for Higher Education OER Repositories" (https://w3id.org/dini-ag-kim/hs-oer-lom-profil/latest/).',
  },
  hasTopConcept: [
    {
      id: "https://w3id.org/kim/hcrt/application",
      prefLabel: {
        de: "Softwareanwendung",
      },
    },
    {
      id: "https://w3id.org/kim/hcrt/assessment",
      prefLabel: { de: "Lernkontrolle" },
      altLabel: { de: ["Assessment"] },
    },
    {
      id: "https://w3id.org/kim/hcrt/audio",
      prefLabel: { de: "Audio" },
      altLabel: { de: ["Tonaufnahme"] },
    },
  ],
}

export const conceptSchemeThreeLang = {
  id: "https://w3id.org/kim/hcrt/scheme",
  type: "ConceptScheme",
  title: {
    de: "Hochschulcampus Ressourcentypen",
    en: "Higher Education Resource Types",
    uk: "Типи ресурсів вищої освіти",
  },
  description: {
    de: 'Eine Wertelliste für Typen von Lernressourcen (Learning Resource Type), entstanden im Kontext des Metadatenschemas "LOM for Higher Education OER Repositories" (https://w3id.org/dini-ag-kim/hs-oer-lom-profil/latest/).',
  },
  hasTopConcept: [
    {
      id: "https://w3id.org/kim/hcrt/application",
      prefLabel: {
        de: "Softwareanwendung",
        en: "Software Application",
        uk: "Програмне забезпечення",
      },
    },
    {
      id: "https://w3id.org/kim/hcrt/assessment",
      prefLabel: { de: "Lernkontrolle", en: "Assessment", uk: "Оцінювання" },
      altLabel: { de: ["Assessment"] },
    },
    {
      id: "https://w3id.org/kim/hcrt/audio",
      prefLabel: { de: "Audio", en: "Audio Recording", uk: "Аудіозапис" },
      altLabel: { de: ["Tonaufnahme"], uk: ["Звукозапис"] },
    },
    {
      id: "https://w3id.org/kim/hcrt/case_study",
      prefLabel: { de: "Fallstudie", en: "Case Study", uk: "Приклад" },
    },
    {
      id: "https://w3id.org/kim/hcrt/course",
      prefLabel: { de: "Kurs", en: "Course", uk: "Курс" },
    },
    {
      id: "https://w3id.org/kim/hcrt/data",
      prefLabel: { de: "Daten", en: "Data", uk: "Дані" },
    },
    {
      id: "https://w3id.org/kim/hcrt/diagram",
      prefLabel: { de: "Diagramm", en: "Diagram", uk: "Діаграма" },
      altLabel: { de: ["Grafik"], uk: ["Графіка"] },
    },
    {
      id: "https://w3id.org/kim/hcrt/drill_and_practice",
      prefLabel: { de: "Übung", en: "Drill and Practice", uk: "Практика" },
    },
    {
      id: "https://w3id.org/kim/hcrt/educational_game",
      prefLabel: { de: "Lernspiel", en: "Game", uk: "Навчальна гра" },
    },
    {
      id: "https://w3id.org/kim/hcrt/experiment",
      prefLabel: { de: "Experiment", en: "Experiment", uk: "Експеримент" },
    },
    {
      id: "https://w3id.org/kim/hcrt/image",
      prefLabel: { de: "Abbildung", en: "Image", uk: "Ілюстрація" },
      altLabel: { de: ["Bild"], uk: ["Зображення"] },
    },
    {
      id: "https://w3id.org/kim/hcrt/index",
      prefLabel: {
        de: "Nachschlagewerk",
        en: "Reference Work",
        uk: "Довідник",
      },
    },
    {
      id: "https://w3id.org/kim/hcrt/lesson_plan",
      prefLabel: {
        de: "Unterrichtsplanung",
        en: "Lesson Plan",
        uk: "План уроку",
      },
    },
    {
      id: "https://w3id.org/kim/hcrt/map",
      prefLabel: { de: "Karte", en: "Map", uk: "Мапа" },
    },
    {
      id: "https://w3id.org/kim/hcrt/portal",
      prefLabel: { de: "Portal", en: "Web Portal", uk: "Портал" },
    },
    {
      id: "https://w3id.org/kim/hcrt/questionnaire",
      prefLabel: { de: "Fragebogen", en: "Questionnaire", uk: "Анкета" },
    },
    {
      id: "https://w3id.org/kim/hcrt/script",
      prefLabel: { de: "Skript", en: "Script", uk: "Запис" },
    },
    {
      id: "https://w3id.org/kim/hcrt/sheet_music",
      prefLabel: { de: "Musiknoten", en: "Sheet Music", uk: "Ноти" },
    },
    {
      id: "https://w3id.org/kim/hcrt/simulation",
      prefLabel: { de: "Simulation", en: "Simulation", uk: "Симуляція" },
    },
    {
      id: "https://w3id.org/kim/hcrt/slide",
      prefLabel: { de: "Präsentation", en: "Presentation", uk: "Презентація" },
    },
    {
      id: "https://w3id.org/kim/hcrt/text",
      prefLabel: { de: "Textdokument", en: "Text", uk: "Текстовий документ" },
    },
    {
      id: "https://w3id.org/kim/hcrt/textbook",
      prefLabel: { de: "Lehrbuch", en: "Textbook", uk: "Підручник" },
    },
    {
      id: "https://w3id.org/kim/hcrt/video",
      prefLabel: { de: "Video", en: "Video", uk: "Відео" },
    },
    {
      id: "https://w3id.org/kim/hcrt/web_page",
      prefLabel: { de: "Webseite", en: "Web Page", uk: "Веб-сайт" },
    },
    {
      id: "https://w3id.org/kim/hcrt/worksheet",
      prefLabel: {
        de: "Arbeitsmaterial",
        en: "Worksheet",
        uk: "Робочий матеріал",
      },
    },
    {
      id: "https://w3id.org/kim/hcrt/other",
      prefLabel: { de: "Sonstiges", en: "Other", uk: "Різне" },
    },
  ],
}
