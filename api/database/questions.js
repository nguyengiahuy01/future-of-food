module.exports = [
  {
    id: 1,
    question: "In welche Richtung sollen sich Gesellschaft und Wirtschaft entwickeln?",
    explanation: "Die Insel versucht, sich auf den Entwicklungsweg der Gesellschaft und Wirtschaft zu einigen und holt die Meinungen der Bewohner ein. Vorzugsweise soll der Weg…",
    group: 0,
    answers: {
      0: null
      1: {
        label: "einer durchschnittlich guten Entwicklung eingeschlagen werden.",
        explanation: "Die Entwicklung und Einkommenswachstum bleibt weiter ungleichmäßig, wodurch nachhaltige Entwicklungsziele langsamer erreicht werden. Dabei geht die technologische Entwicklung weiter, jedoch ohne Durchbruch und zudem ist die Population auf fossile Brennstoffe angewiesen. "
      },
      
      2: {
        label: "einer nachhaltigeren Entwicklung eingeschlagen werden.",
        explanation: "Eine nachhaltigere Entwicklung hat zufolge, dass die Population nicht steigt, jedoch ein besseres Management der öffentlichen Güter zufolge hat. Es kann mehr in Bildung und Gesundheit investiert werden und der Fokus wird auf Wirtschaftswachstum und menschliches Wohlbefinden umgeschwenkt. Desweiteren ist dieser Weg ressourceneffizienter."
      },
    }
  },
  {
    id: 2,
    question: "Die vielen Bewohner auf der Insel müssen ernährt werden. Welche Art von Landwirtschaft sollte primär gefördert werden?",
    explanation: "Angesichts der Ereignisse vor dem Umsprung, möchte sich die Insel auf die Agrarwirtschaft konzentrieren, um eine gesunde Ernährungsweise bei den Bewohnern zu fördern.",
    group: 1,
    answers: {
      0: {
        label: "Ertragreichere und schnellere Landwirtschaft",
        explanation: "Hierbei ist die Verwendung von technischer Verfahren nötig, wodurch eine Hohe Produktivität und standardisierte Massenproduktion geschaffen wird."
        },
      1: {
        label: "einer durchschnittlich guten Entwicklung eingeschlagen werden.",
        explanation: "Die Auswirkungen hierbei sind teurer für Konsumenten, die Erträge deutlich weniger, dafür generell umweltfreundlicher. Allerdings wird auch ein höhrer Flächenbedarf pro Ertragseinheit erfordert."
      },
      2: null
    }
  },
  {
    // spätere Runde (KRITISCHE SITUATION)
    id: 3,
    question: "Durch Insektenbefall und schlechtem Boden sind viele Ernten verloren gegangen. Die Bauern müssen sich entscheiden, ob sie ihr Düngeverhalten ändern wollen.",
    explanation: "",
    group: 1,
    answers: {
      0: null
      1: {
        label: "Düngen mit Stickstoffhaltigen Düngemitteln",
        explanation: "Pflanzen können diese Art von Düngemittel schneller aufnehmen, da sie wasserlöslich sind. Pflanzen sind resistenter und geschützter von Wetterbedingungen und Insektenbefall welche eine Veränderung und Beeinflussung des Ökosystems verursacht. Bei hohem pH-Wert ensteht Ammoniak. Dies belastet Gewässer was Fischsterben zufolge hat. Teile des Stickstoffs wird in Lachgas umgewandelt wodurch starkes Treibhausgas entsteht."
        },
      2: {
        label: "Gülle und Mist als Düngemittel verwenden",
        explanation: "Dieses Düngeverhalten wirkt langsamer als chemisch hergestellte Stickstoffdüngemittel, aber dafür sehr viel ökologischer, da es eine natürliche Zufuhr von Stickstoff durch Pflanzenreste ist. Das ist besser für Pflanzen und Obst und Gemüse."
        },
    }
  },
  {
    id: 4,
    question: "Welche Ernährungsweise soll verfolgt werden?",
    explanation: "Die Ernährungsweise der Bewohner hat große Auswirkungen auf die Insel, da die Ernährung einen vehementen Einfluss auf die Umwelt hat.",
    group: 2,
    answers: {
      0: {
        label: "Guidelines Diet - inklusive tierischer Produkte",
        explanation: "Die Guidelines Diet wirkt sich auf die Umwelt so aus, dass höhere Treibhausemissionen durch Rindhaltung erzeugt werden. Dabei wird der Verbrauch von zusätzlichem Platz für den Anbau von Futter und dessen Bewässerung erfordert."
        },
      1: null
      2: {
        label: "Flexitarian Diet - größtenteils Gemüse, Obst, Hülsenfrüchte und Nüsse",
        explanation: "Diese Ernährungsweise hat einen kleineren ökologischen Fußabdruck. Die Grundnahrungsmittel sind Kartoffeln und Hülsenfrüchte. Der Gesamteinfluss auf die Umwelt ist höher."
        },
    }
  },
  {
    id: 5,
    question: "Worauf soll auf der Insel mehr wert gelegt werden?",
    explanation: "Die Bewohner der Insel müssen sich in einem gemeinsamen Treffen darüber einigen, in was in nächste Zeit mehr investiert werden soll.",
    group: 4,
    answers: {
      0: null
      1: {
        label: "Verbesserung der Technologien",
        explanation: "Diese Wahl bedeutet, bessere und effizientere Wassernutzung und -lagerung. Dabei wird die Ackernutzung in Bezug auf Landwirtschaft verbessert, also auch Düngemittel."
        },

      2: {
        label: "Umstellung auf eine Ernährung ohne tierische Produkte",
        explanation: "Wird die Ernährung umgeändert, sodass auf tierische Produkte komplett verzichtet wird, wird die Nutztierhaltung reduziert."
        },
    }
  },
  {
    id: 6,
    question: "Die Verschwendung von Lebensmitteln hat einen immensen Einfluss auf unsere Umwelt. Wie sollte in Zukunft damit umgegangen werden?",
    explanation: "Durch einen Stromausfall, haben die Kühlungen der Supermärkte und der privaten Haushalte nicht funktioniert. Massen an Nahrung, vor allem Fleisch, musste weggeschmissen werden. Dies hat die Bewohner auf die generelle Lebensmittelverschwendung aufmerksam gemacht.",
    group: 5,
    answers: {
      0: null
      1: {
        label: "Lebensmittelproduktion um 50% reduzieren.",
        explanation: "Es ist zwar wichtig, dass die Lebensmittelverschwendung minimiert wird, dies hat aber keinen großen Einfluss auf die Gesamtlage."
        },

      2: {
        label: "Überschüssige Lebensmittel spenden",
        explanation: "Hilfsorganisationen, die gutes Essen sammeln, nehmen überschüssige Lebensmittel dankend an. Dies versorgt weitere Menschen, wodurch die Sättigung der Population geschaffen wird."
        },
    }
  },
  {
    id: 7,
    question: "Die Menschen auf der Insel haben eine weiter Anbaufläche erschaffen. Um welche Anbaufläche handelt es sich?",
    explanation: "Bedenke: Jede Anbaufläche sollte einen gewissen Nutzen haben.",
    group: 3,
    answers: {
      0: null
      1: {
        label: "Futtermittel",
        explanation: "Futtermittel sind hauptsächlich für die Tiere. Die Tiere bekommen somit gut-angebautes Futter."
        },

      2: {
        label: "Nahrungsmittel",
        explanation: "Weitere Nahrungsmittel haben einen Überschuss zufolge. Jedoch können Nahrungsmittel gut in der Population verteilt werden, wodurch mehrere Menschen gesättigt werden."
        },
    }
  },
  {
    id: 8,
    question: "Die Landwirte der Insel merken, dass die Frischwassernutzung besser reguliert und effektiver genutzt werden muss, um vor allem in der Landwirtschaft Verbesserungen zu erreichen. Die Insel muss sich auf eine Kombination verschiedener Maßnahmen, bzw. Herangehensweise, einigen.",
    explanation: "Um die Frischwassernutzung besser zu regulieren und effektiver zu nutzen, müssen sich die Bewohner der Insel auf eine Kombination verschiedener Maßnahmen einigen.",
    group: 6,
    answers: {
      0: {
        label: "Eine weitere Reduzierung der Lebensmittelverschwendung um 50% und einem mittelmäßigen Fortschritt in der Technologie.",
        explanation: "Wird die Lebensmittelverschwendung reduziert, wird der Ertrag der Population geringer."
        },

      1: null

      2: {
        label: "Verbesserung der Technologien um 75% und der wie gewohnten Vermeidung von Lebensmittelverschwendung.",
        explanation: "Mit der verbesserten Technologien können die Inselbewohner bessere Maßnahmen zur Regulierung des Umwelts übernehmen. Überschüssige Lebensmittel können an weitere Bewohner gegeben werden, wodurch die Population wachsen kann."
        },
    }
  },
  {
    id: 9,
    question: "Was soll auf der Insel vorzugsweise angebaut werden?",
    explanation: "Beide Nahrungsressourcen haben verschiedene Vorteile.",
    group: 3,
    answers: {
      0: null

      1: {
        label: "Obst und Gemüse",
        explanation: "Der Anbau von Obst und Gemüse ist deutlich effizienter und belastet die Umwelt kaum. Jedoch sind die Nährwertstoffe nicht so hoch wie die der Hülsenfrüchte. Die Wassernutzung ist allerdings höher."
        },

      2: {
        label: "Hülsenfrüchte",
        explanation: "Hülsenfrüchte eignen sich als eine gute Nährstoffquelle, verbrauchen geringere natürliche Ressourcen und belastet die Umwelt kaum."
        },
    }
  },
  {
    id: 10,
    question: "Die Bewohner der Insel möchten sich einigen, einen Fleisch-Friday einzuführen. Hierbei wird gegrübelt, ob die Menschen das Fleisch aus der eigenen Tierhaltung zu besorgen, oder das Fleisch direkt importieren zu lassen.",
    explanation: "Fleischkonsum kann einen gewissen Sättigungsgrad und Zufriedenheit der Bewohner erzielen. Jedoch sollte man auf die Auswirkungen acht geben.",
    group: 7,
    answers: {
      0: {
        label: "Die Tierhaltung erhöhen, um Importkosten zu sparen.",
        explanation: "Wird die Tierhaltung erhöht, werden mehrere natürliche Ressourcen verbraucht. Die Nutzung von Ackerfläche muss nochmal neu bedacht werden, was auch die Umwelt belastet."
        },

      1: {
        label: "Fleisch von benachbarten Inseln importieren.",
        explanation: "Der Import von Fleisch kann deutlich umweltfreundlicher für die Insel sein, ist allerdings teurer und hat eine mittelmäßige Effizienz für die Inselbewohner zufolge.. "
        },

      2: null
    }
  }
]