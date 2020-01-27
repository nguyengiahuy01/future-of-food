/*
- Pro-Umwelt-team : 2
- Gegen-Umwelt-team : 2
- No : 2
--Tag (30s)
--Nacht (15s)
  1
*/
const role = {
  1: {
    name: 'Greta Thunfisch',
    team: 'Umwelt-Team',
    description: 'Dein Engagement und Zielstrebigkeit im Klimaschutz zählt in der Endbilanz doppelt!'
  },
  2: {
    name: 'Donald Real Trump',
    team: 'Teufel-Team',
    description: 'Du verleugnest den Klimawandel. Ist aber auch egal, was andere sagen, denn du hast du die Macht einfach jemanden, der dir nicht passt, aus dem Spiel zu kicken.'
  },
  3: {
    name: 'Journalist',
    team: 'Umwelt-Team',
    description: 'Du hast die Möglichkeit eine andere Rolle zu sehen und schreibst besonders gern Artikel über Umweltschutz.'
  },
  4: {
    name: 'Veganer',
    team: 'Umwelt-Team',
    description: 'Du verzichtest seit längerer Zeit komplett auf tierische Produkte und versuchst Lebensmittelverschwendung zu vermeiden.'
  },
  5: {
    name: 'Alice Weiter',
    team: 'No',
    description: 'Beschreibung'
  },
  6: {
    name: 'Permakultur-Gärtner',
    team: 'Umwelt-Team',
    description: 'Angefangen als kleiner Hobbygärtner hast du deine Anbaufläche immer mehr erweitert und lebst dafür. Vor allem Verbesserungen in Technologien sind in deinem Interesse.'
  },
  7: {
    name: 'Claudia Rohverzehr',
    team: 'No',
    description: 'Du isst nur Fleisch und kennst auch nur das. Von Salat schrumpft bekanntlich der Bizeps.'
  },
  8: {
    name: 'Forscher',
    team: 'Umwelt-Team',
    description: 'Schon seit Jahren suchst du nach der perfekten Methode, nachhaltiges, umweltschonendes Essen zu generieren.'
  },
  9: {
    name: 'Milliardär',
    team: 'Teufel-Team',
    description: 'Lebensmittelindustrie'
  }
}
export default ({ Vue }) => {
  Vue.prototype.$parse = {
    role (option) {
      return role[option]
    }
  }
}
