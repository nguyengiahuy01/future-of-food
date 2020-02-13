module.exports = [
  {
    id: 1,
    question:
      "Die Insel versucht, sich auf den Entwicklungsweg der Gesellschaft und Wirtschaft zu einigen und holt die Meinungen der Bewohner ein. Welcher Weg sollte eingeschlagen werden?",
    explanation:
      "Es gibt verschiedene Prognosen bzw. Richtungen, wie wir uns sozioökonomisch entwickeln könnten. SSP1, eine sogenannte “Middle-of-the-road”-Entwicklung,  eine durchschnittliche Entwicklung der Sozioökonomie, die nicht schlecht ist aber auch keine technologischen Durchbrüche erzielt oder umweltfreundlich ist. SSP2 hingegen, “the green-road”, beschreibt eine viel positivere und umweltfreundlichere Entwicklung, bei der auch das menschliche Wohlbefinden eine Rolle spielt.",
    group: 0,
    answers: {
      0: null,
      1: {
        label: "Durchschnittlich guten Entwicklung einschlagen.",
        explanation:
          "Die Entwicklung und Einkommenswachstum bleibt weiter ungleichmäßig, wodurch nachhaltige Entwicklungsziele langsamer erreicht werden. Dabei geht die technologische Entwicklung weiter, jedoch ohne Durchbruch und zudem ist die Population auf fossile Brennstoffe angewiesen. "
      },

      2: {
        label: "Nachhaltigere Entwicklung einschlagen.",
        explanation:
          "Eine nachhaltigere Entwicklung hat zufolge, dass die Population nicht steigt, jedoch ein besseres Management der öffentlichen Güter zufolge hat. Es kann mehr in Bildung und Gesundheit investiert werden und der Fokus wird auf Wirtschaftswachstum und menschliches Wohlbefinden umgeschwenkt. Desweiteren ist dieser Weg ressourceneffizienter."
      }
    }
  },
  {
    id: 2,
    question:
      "Die vielen Bewohner auf der Insel müssen ernährt werden. Welche Art von Landwirtschaft sollte primär gefördert werden?",
    explanation:
      "Eine industrielle Landwirtschaft hat den Vorteil, dass sie deutlich ertragreicher ist, als die ökologische Landwirtschaft. Allerdings ist diese weitaus umwelt- und tierfreundlicher.",
    group: 1,
    answers: {
      0: {
        label: "Ertragreichere und schnellere Landwirtschaft",
        explanation:
          "Hierbei ist die Verwendung von technischer Verfahren nötig, wodurch eine hohe Produktivität und standardisierte Massenproduktion geschaffen wird."
      },
      1: {
        label:
          "Für den Konsumenten teurere Landwirtschaft mit weniger Erträgen, allerdings umweltschonender",
        explanation:
          "Die Auswirkungen hierbei sind teurer für Konsumenten, die Erträge deutlich weniger, dafür generell umweltfreundlicher. Allerdings wird auch ein höhrer Flächenbedarf pro Ertragseinheit erfordert."
      },
      2: null
    }
  },
  {
    // spätere Runde (KRITISCHE SITUATION)
    id: 3,
    question:
      "Durch Insektenbefall und schlechtem Boden sind viele Ernten verloren gegangen. Die Bauern müssen sich entscheiden, ob sie ihr Düngeverhalten ändern wollen.",
    explanation:
      "Eine übermäßige Verwendung von Düngemitteln führt zu einer Eutrophierung, d.h. einer Erhöhung des Nährstoffsgehalts in Gewässern durch gelöste Nährstoffe, besonders Stickstoff und Phosphor. Dies hat meist nachteilige Folgen für die Ökologie der Gewässer und ihre Nutzbarkeit, z.B. ein exzessiver Algenwachstum, der den Sauerstoffgehalt unter Wasser aufbraucht, was zu sogenannten toten Zonen in küstennahe Ozeanen führt.",
    group: 1,
    answers: {
      0: null,
      1: {
        label: "Düngen mit Stickstoffhaltigen Düngemitteln",
        explanation:
          "Pflanzen können diese Art von Düngemittel schneller aufnehmen, da sie wasserlöslich sind. Pflanzen sind resistenter und geschützter von Wetterbedingungen und Insektenbefall welche eine Veränderung und Beeinflussung des Ökosystems verursacht. Bei hohem pH-Wert ensteht Ammoniak. Dies belastet Gewässer was Fischsterben zufolge hat. Teile des Stickstoffs wird in Lachgas umgewandelt wodurch starkes Treibhausgas entsteht."
      },
      2: {
        label: "Gülle und Mist als Düngemittel verwenden",
        explanation:
          "Dieses Düngeverhalten wirkt langsamer als chemisch hergestellte Stickstoffdüngemittel, aber dafür sehr viel ökologischer, da es eine natürliche Zufuhr von Stickstoff durch Pflanzenreste ist. Das ist besser für Pflanzen und Obst und Gemüse."
      }
    }
  },
  {
    id: 4,
    question: "Welche Ernährungsweise soll verfolgt werden?",
    explanation:
      "Die Ernährungsweise der Bewohner hat große Auswirkungen auf die Insel, da die Ernährung einen vehementen Einfluss auf die Umwelt hat.",
    group: 2,
    answers: {
      0: {
        label: "Guidelines Diet - inklusive tierischer Produkte",
        explanation:
          "Die Guidelines Diet wirkt sich auf die Umwelt so aus, dass höhere Treibhausemissionen durch Rindhaltung erzeugt werden. Dabei wird der Verbrauch von zusätzlichem Platz für den Anbau von Futter und dessen Bewässerung erfordert."
      },
      1: null,
      2: {
        label:
          "Flexitarian Diet - größtenteils Gemüse, Obst, Hülsenfrüchte und Nüsse",
        explanation:
          "Diese Ernährungsweise hat einen kleineren ökologischen Fußabdruck. Die Grundnahrungsmittel sind Kartoffeln und Hülsenfrüchte. Der Gesamteinfluss auf die Umwelt ist höher. "
      }
    }
  },
  {
    id: 5,
    question:
      "Die Bewohner der Insel müssen sich in einem gemeinsamen Treffen darüber einigen, in was in nächste Zeit mehr investiert werden soll.",
    explanation:
      "Die Umstellung auf eine Ernährung ohne tierische Produkte hat einen sehr viel größeren positiven Einfluss auf die Umwelt, da Treibhausgase stark reduziert werden und Ackerflächen anders genutzt werden könnten. Die Verbesserung der Technologien ist zwar hilfreich und darf nicht vernachlässigt werden, aber eine nachhaltige Ernährungsumstellung ist entscheidend für eine bessere Umwelt.",
    group: 4,
    answers: {
      0: null,
      1: {
        label: "Verbesserung der Technologien",
        explanation:
          "Diese Wahl bedeutet, bessere und effizientere Wassernutzung und -lagerung. Dabei wird die Ackernutzung in Bezug auf Landwirtschaft verbessert, also auch Düngemittel."
      },

      2: {
        label: "Umstellung auf eine Ernährung ohne tierische Produkte",
        explanation:
          "Wird die Ernährung umgeändert, sodass auf tierische Produkte komplett verzichtet wird, wird die Nutztierhaltung reduziert."
      }
    }
  },
  {
    id: 6,
    question:
      "Durch einen Stromausfall, haben die Kühlungen der Supermärkte und der privaten Haushalte nicht funktioniert. Massen an Nahrung, vor allem Fleisch, musste weggeschmissen werden. Dies hat die Bewohner auf die generelle Lebensmittelverschwendung aufmerksam gemacht.",
    explanation:
      "Allein in Deutschland werden pro Jahr ca. 11 Millionen Tonnen Lebensmittel verschwendet und dies trägt maßgeblich zur Umweltbelastung bei. Vor allem Obst und Gemüse wird am häufigsten weggeworfen. Die Verluste beginnen schon in der Landwirtschaft durch falsche Lagerungen, Schädlingsbefall, Unwetterzerstörung oder, weil es nicht genügend Abnehmer gibt. In der Industrie tragen Transportschäden oder technische Ursachen in der Produktion auch dazu bei, das Lebensmittel weggeschmissen werden müssen. In Supermärkten o.ä. gibt es eine so breite Auswahl und verschiedene Produktvorgaben, dass viele Erzeugnisse entweder nicht vermarktungsfähig sind oder liegen bleiben und entsorgt werden. In der Gastronomie ist besonders die unkalkulierbare Nachfrage ein Grund, der zusammen mit falscher Lagerung und strengen Hygienevorschriften oder schlecht definierte Portionsgrößen für Speiseabfälle sorgt.Letztlich gehören wir alle, als Verbraucher, dazu, dass Lebensmittel weggeworfen werden und häufig verlieren wir das Bewusstsein dafür, welcher Ressourcen- und Energieverbrauch eigentlichen hinter dem ganzen Überfluss steht.",
    group: 5,
    answers: {
      0: null,
      1: {
        label:
          "Die Lebensmittelverschwendung zu minimieren ist zwar wichtig, trägt aber keinen so großen Teil zur Gesamtlage bei. Mit verschiedenen bereits bestehenden Hilfsorganisationen, die noch gutes Essen sammeln, ist schon viel getan.",
        explanation:
          "Es ist zwar wichtig, dass die Lebensmittelverschwendung minimiert wird, dies hat aber keinen großen Einfluss auf die Gesamtlage."
      },

      2: {
        label: "Überschüssige Lebensmittel spenden.",
        explanation:
          "Hilfsorganisationen, die gutes Essen sammeln, nehmen überschüssige Lebensmittel dankend an. Dies versorgt weitere Menschen, wodurch die Sättigung der Population geschaffen wird."
      }
    }
  },
  {
    id: 7,
    question:
      "Die Menschen auf der Insel haben eine weitere Anbaufläche erschaffen. Für was wird die meiste Anbaufläche verwendet?",
    explanation:
      "Weideland und Futtermittelanbau beanspruchen global ganze 70% der landwirtschaftlichen Anbauflächen. Durch die steigende Futtermittelproduktion wird der Ackerbau immer mehr industrialisiert. Folglich entstehen immer mehr Monokulturen und es werden mehr Pestizide und Düngemittel verwendet. Eine sinnvolle Lösung wäre, nährstoffreiche Pflanzen anzubauen und vermehrt auf Tierprodukte zu verzichten.Bedenke: Jede Anbaufläche sollte einen gewissen Nutzen haben.",
    group: 3,
    answers: {
      0: null,
      1: {
        label: "Futtermittel",
        explanation:
          "Futtermittel sind hauptsächlich für die Tiere. Die Tiere bekommen somit gut-angebautes Futter."
      },

      2: {
        label: "Nahrungsmittel",
        explanation:
          "Weitere Nahrungsmittel haben einen Überschuss zufolge. Jedoch können Nahrungsmittel gut in der Population verteilt werden, wodurch mehrere Menschen gesättigt werden."
      }
    }
  },
  {
    id: 8,
    question:
      "Die Landwirte der Insel merken, dass die Frischwassernutzung besser reguliert und effektiver genutzt werden muss, um vor allem in der Landwirtschaft Verbesserungen zu erreichen. Die Insel muss sich auf eine Kombination verschiedener Maßnahmen, bzw. Herangehensweise, einigen.",
    explanation:
      "Eine effizientere Nutzung von Frischwasser hat einen sehr positiven Einfluss auf die Landwirtschaft. Durch verbesserte Wasserbecken und eine Regulierung des Wasserverbrauchs, kann z.B. Überwässerung reduziert werden und die Felder besser genährt.",
    group: 6,
    answers: {
      0: {
        label:
          "Eine weitere Reduzierung der Lebensmittelverschwendung um 50% und einem mittelmäßigen Fortschritt in der Technologie.",
        explanation:
          "Wird die Lebensmittelverschwendung reduziert, wird der Ertrag der Population geringer."
      },

      1: null,
      2: {
        label:
          "Verbesserung der Technologien um 75% und der wie gewohnten Vermeidung von Lebensmittelverschwendung.",
        explanation:
          "Mit der verbesserten Technologien können die Inselbewohner bessere Maßnahmen zur Regulierung des Umwelts übernehmen. Überschüssige Lebensmittel können an weitere Bewohner gegeben werden, wodurch die Population wachsen kann."
      }
    }
  },
  {
    id: 9,
    question: "Was soll auf der Insel vorzugsweise angebaut werden?",
    explanation:
      "Hülsenfrüchte haben nachweislich weniger negativen Einfluss auf die Umwelt als Obst und Gemüse. Zwar brauchen sie mehr Ackerfläche, dafür aber viel weniger Pflege, wie z.B. Düngung, und sind sehr viel nährstoffreicher.",
    group: 3,
    answers: {
      0: null,
      1: {
        label: "Obst und Gemüse",
        explanation:
          "Der Anbau von Obst und Gemüse ist deutlich effizienter und belastet die Umwelt kaum. Jedoch sind die Nährwertstoffe nicht so hoch wie die der Hülsenfrüchte. Die Wassernutzung ist allerdings höher."
      },

      2: {
        label: "Hülsenfrüchte",
        explanation:
          "Hülsenfrüchte eignen sich als eine gute Nährstoffquelle, verbrauchen geringere natürliche Ressourcen und belastet die Umwelt kaum."
      }
    }
  },
  {
    id: 10,
    question:
      "Die Bewohner der Insel möchten sich einigen, einen Fleisch-Friday einzuführen. Hierbei wird gegrübelt, ob die Menschen das Fleisch aus der eigenen Tierhaltung zu besorgen, oder das Fleisch direkt importieren zu lassen.",
    explanation:
      "Fleischkonsum kann einen gewissen Sättigungsgrad und Zufriedenheit der Bewohner erzielen. Jedoch sollte man auf die Auswirkungen acht geben.",
    group: 7,
    answers: {
      0: {
        label: "Die Tierhaltung erhöhen, um Importkosten zu sparen.",
        explanation:
          "Wird die Tierhaltung erhöht, werden mehrere natürliche Ressourcen verbraucht. Die Nutzung von Ackerfläche muss nochmal neu bedacht werden, was auch die Umwelt belastet."
      },

      1: {
        label: "Fleisch von benachbarten Inseln importieren.",
        explanation:
          "Der Import von Fleisch kann deutlich umweltfreundlicher für die Insel sein, ist allerdings teurer und hat eine mittelmäßige Effizienz für die Inselbewohner zufolge."
      },
      2: null
    }
  },
  {
    id: 11,
    question:
      "Um die Zukunft besser gestalten zu können, muss darüber entschieden werden, wie die Umweltbelastungen am besten minimiert werden können.",
    explanation:
      "Analysen belegen, dass nur eine Kombination von Maßnahmen dazu führen, dass unser Ernährungssystem die Grenzen unseres Planeten nicht sprengen. Treibhausgasemissionen können nicht ohne eine Ernährungsumstellung minimiert werden; Verbesserungen in Technologien tragen maßgeblich zur Ackerland- und Wassernutzung und deren Effizienz bei; alle Maßnahmen regulieren die Phosphor- und Stickstoffwerte",
    group: 4,
    answers: {
      0: null,
      1: {
        label:
          "Es soll sich immer auf eine Maßnahme (Technologie, Diät, Wassernutzung...) konzentriert und bestmöglich ausgeführt werden, um eine ganzheitliche Verbesserung zu erreichen",
        explanation: ""
      },
      2: {
        label:
          "Um eine ganzheitliche Verbesserung zu erreichen, müssen verschiedene Maßnahmen gleichzeitig ergriffen werden.",
        explanation: ""
      }
    }
  },
  {
    id: 12,
    question:
      "Die Insel hat, bedingt durch eine schlechte Ernte, einen Tomaten-Engpass. Das alljährliche Tomaten-Fest steht nun vor der Tür und die Bewohner müssen beratschlagen, was getan werden soll.",
    explanation:
      "Regionale und saisonale Lebensmittel sind ein besonders starker Faktor bei der nachhaltigen Gestaltung der Ernährung. Dadurch werden weitaus weniger Schadstoffe ausgestoßen, da lange Transportwege und die damit einhergehenden Schadstoffe vermieden werden können.",
    group: 3,
    answers: {
      0: null,
      1: {
        label: "Tomaten können von einem anderen Inselstaat importiert werden",
        explanation: ""
      },
      2: {
        label:
          "Ein Verzicht auf das Tomaten-Fest und stattdessen regionales Gemüse feiern",
        explanation: ""
      }
    }
  },
  {
    id: 13,
    question:
      "Im Zuge des Trends, immer mehr auf tierische Produkte zu verzichten, hat sich eine Gruppe von Inselbewohnern zusammengetan und bearbeitet immer mehr Leute, durch aktives Ansprechen und Beurteilen, es ihnen gleichzutun. Sollte dies in der Öffentlichkeit weiter unterstützt werden?",
    explanation:
      "Eine Veränderung in unserer Ernährung hin zu mehr Nachhaltigkeit, ist unumgänglich, um eine Verbesserung der Umwelt zu erreichen. Allerdings ist “Food-Shaming” nicht der richtige Weg, sondern bewirkt meist Gegenteiliges. Zumal eine nachhaltige Ernährung nicht gleich totalen Verzicht bedeutet.",
    group: 2,
    answers: {
      0: null,
      1: {
        label:
          "Absolut! Es ist wichtig, dass andere Menschen aktiv auf ihre Ernährung angesprochen werden und zum Umdenken bewegt werden",
        explanation: ""
      },
      2: {
        label: "Nein, nicht so.",
        explanation: ""
      }
    }
  },
  {
    id: 14,
    question:
      "Damit sich die Bewohner der Insel nachhaltiger und gesünder ernähren, muss…",
    explanation:
      "Eine Veränderung hin zu einer pflanzlichen Ernährung ist einerseits nachweislich gesünder und andererseits umweltfreundlicher. Allerdings ist ein kompletter Verzicht nicht notwendig, sondern lediglich eine Regulierung und Reduzierung von Fleischkonsum, vor allem rotem Fleisch, und Milchprodukten.",
    group: 2,
    answers: {
      0: null,
      1: {
        label: "sich jeder mit Fleischkonsum besser regulieren.",
        explanation: ""
      },
      2: {
        label: "am besten gänzlich auf Fleisch verzichtet werden.",
        explanation: ""
      }
    }
  },
  {
    id: 15,
    question:
      "Die Insel hat durch eine nachhaltige Ernährung und umweltfreundliches Handeln große Fortschritte, vor allem in der Technologie, gemacht. Die Bewohner beratschlagen, ob sich mit anderen Inselstaaten zusammengetan werden sollte.",
    explanation:
      "Wir leben alle auf einem Planeten und selbst Probleme am anderen Ende der Welt betreffen uns. Es ist wichtig auch in Entwicklungsländern Aufklärungskampagnen anzubieten, über seinen eigenen Tellerrand hinauszuschauen und mit gutem Vorbild voranzugehen.",
    group: 0,
    answers: {
      0: {
        label: "Nein, jeder soll eigene Fortschritte machen und diese finden.",
        explanation: ""
      },
      1: null,
      2: {
        label: "Ja, es ist wichtig, weniger starken Inselstaaten zu helfen.",
        explanation: ""
      }
    }
  },
  {
    id: 16,
    question:
      "Die Inselbewohner erfordern neue Maßnahmen bezüglich der hohen Viehhaltung. Dazu gibt es zwei Lösungen:",
    explanation:
      "Treibhausgase aus der Massentierhaltung sind überwiegend Methan, das Wiederkäuer wie Rinder in ihren Mägen produzieren, und Lachgas, das durch stickstoffhaltige Dünger freigesetzt wird. In Deutschland stammten 2016 rund 59 % der gesamten Methan- und 80 % der Lachgas-Emissionen aus der Land- und dabei weitestgehend aus der Tierwirtschaft. Beides sind extrem klimaschädliche Gase: Methan ist rund 25-mal und Lachgas rund 300-mal klimaschädlicher als CO2.",
    group: 7,
    answers: {
      0: {
        label: "Fleischkonsum erhöhen.",
        explanation:
          "Fleisch als Nahrungsmittel hat einen kürzeren Lebenszyklus und gelangt damit schneller im Abfall."
      },
      1: null,
      2: {
        label: "Milcherzeugnisse erhöhen.",
        explanation:
          "Milcherzeugnisse verursachen weniger CO2 und hat einen höheren Lebenspann für die Inselbewohner, da es weniger schnell verdirbt und somit im Müll landet."
      }
    }
  },
  {
    id: 17,
    question:
      "Die Inselbewohner möchten sich für den Winter wappnen und überlegen, welche Heizmittel am sinnvollsten wäre um sich im Eigenheim warm zu halten.",
    explanation:
      "Treibhausgase aus der Massentierhaltung sind überwiegend Methan, das Wiederkäuer wie Rinder in ihren Mägen produzieren, und Lachgas, das durch stickstoffhaltige Dünger freigesetzt wird. In Deutschland stammten 2016 rund 59 % der gesamten Methan- und 80 % der Lachgas-Emissionen aus der Land- und dabei weitestgehend aus der Tierwirtschaft. Beides sind extrem klimaschädliche Gase: Methan ist rund 25-mal und Lachgas rund 300-mal klimaschädlicher als CO2.",
    group: 0,
    answers: {
      0: {
        label: "Brennholz",
        explanation:
          "Bei der Verbrennung von Holz verbindet sich Kohlenstoff mit Sauerstoff aus der Atmosphäre und bildet Kohlendioxid."
      },
      1: {
        label: "Öl und Gas",
        explanation:
          "Öl- und Gasheizungen sind gängigere Heizsysteme. Die CO2-Bilanz von diesen Heizsystemen ist zwar höher, aber ressourcenschonender."
      },
      2: null
    }
  },
  {
    id: 18,
    question:
      "Innerhalb der Regionen auf der Insel wird der Handel betrieben. Um den Handel auszubauen, möchten die Inselbewohner bessere Verkehrswege und -mittel erschaffen. Jedoch reichen die Ressourcen nur für den Ausbau eines Transportwegs aus.",
    explanation:
      "Beispielweise ist der Ausstoß an Kohlendioxid (CO2) pro transportierter Tonne Ware auf einem großen Schiff deutlich geringer als beispielsweise bei dem Transport per Lkw oder Flugzeug. Jedoch liegen die Emissionen von Luftschadstoffen – wie Ruß oder Schwefeldioxid – weit höher. Auch ist die Schifffahrt mitverantwortlich für Müllteppiche auf dem Meer, Öl am Strand oder das Einschleppen fremder Tier- und Pflanzenarten.",
    group: 0,
    answers: {
      0: {
        label: "Den Wasservekehr erhöhen und Hafen ausbauen",
        explanation: ""
      },
      1: {
        label: "Mehr Straßen und mehr Fahrzeuge für Transport",
        explanation: ""
      },
      2: null
    }
  }
];
