const data = [
    {
        semester: 1,
        label: "1. Semester",
        modules: [
            {
                name: "Technische Mechanik",
                topics: [
                    { name: "Kinematik", items: ["Kraft", "Moment", "Geschwindigkeit/Bewegung"] },
                    { name: "Statik", items: ["Gleichgewicht", "Äquivalenz und Reduktion von Kräftegruppen", "Reibung"] },
                    { name: "Dynamik", items: ["Newtonsches Bewegungsgesetz (2. Newton)", "Impulssatz", "Drallsatz"] }
                ]
            },
            {
                name: "Netzwerk und Schaltungen I",
                topics: [
                    { name: "Physikalische Grundlagen", items: ["Stromursprung", "Spannungsursprung", "Elektrostatisches Feld", "Leitungsmechanismen"] },
                    { name: "Bauelemente & Analyse", items: ["Grundbauelemente", "Mathematische Modelle", "Schaltungsentwurf", "Netzwerk-Analyse"] },
                    { name: "Gleichstromnetzwerke", items: ["Stromverteilung", "Spannungsverteilung", "Stationäres Strömungsfeld", "Berechnungsmethoden"] },
                    { name: "Elektromagnetische Felder", items: ["Induktion", "Zeitvariante Felder", "Technische Anwendungen"] }
                ]
            },
            {
                name: "Digitaltechnik",
                topics: [
                    { name: "Grundlagen & Bausteine", items: ["Analog vs. Digital", "CMOS-Technik", "Zahlensysteme", "Speicherbausteine"] },
                    { name: "Schaltungsdesign", items: ["Logikgatter", "Boolesche Algebra", "Kombinatorik", "Sequenzielle Logik"] },
                    { name: "Systementwurf", items: ["Endliche Automaten (FSM)", "Zustandsspeicher", "Mikroprozessor-Basics", "Synthese-Methoden"] }
                ]
            },
            {
                name: "Analysis I",
                topics: [
                    { name: "Zahlenbereiche", items: ["Reelle Zahlen", "Komplexe Zahlen"] },
                    { name: "Analysis-Grundlagen", items: ["Folgen & Grenzwerte", "Reihen & Potenzreihen", "Stetige Abbildungen"] },
                    { name: "Differential- & Integralrechnung", items: ["Variable Funktionen", "Ableitungsregeln", "Integrationsmethoden"] },
                    { name: "Differentialgleichungen", items: ["Einführung", "Gewöhnliche DGLs"] }
                ]
            },
            {
                name: "Lineare Algebra",
                topics: [
                    { name: "Lineare Gleichungssysteme", items: ["Gauss-Algorithmus", "Matrizen-Operationen"] },
                    { name: "Matrizenzerlegungen", items: ["LU-Zerlegung", "QR-Zerlegung", "Singulärwertzerlegung (SVD)"] },
                    { name: "Vektorräume", items: ["Basiswahl & -wechsel", "Lineare Abbildungen", "Koordinatentransformation"] },
                    { name: "Norm & Skalarprodukt", items: ["Gram-Schmidt-Verfahren", "Projektoren"] },
                    { name: "Eigenwertprobleme", items: ["Eigenwerte & Eigenvektoren", "Determinanten", "Symmetrische Matrizen"] },
                    { name: "Anwendungen", items: ["Ausgleichsrechnung", "Numerische Aspekte", "Python (NumPy/SciPy)"] }
                ]
            }
        ]
    },
    {
        semester: 2,
        label: "2. Semester",
        modules: [
            {
                name: "Physik I",
                topics: [
                    {
                        name: "Schwingungen & Wellen",
                        items: [],
                        subtopics: [
                            { name: "Schwingungstypen", items: ["Harmonisch", "Gedämpft", "Erzwungen"] },
                            { name: "Wellenpropagation", items: ["Energie & Intensität", "Beugung & Reflektion"] },
                            { name: "Welleneffekte", items: ["Dopplereffekt", "Interferenz & Überlagerung", "Resonanz", "Stehende Wellen"] }
                        ]
                    },
                    {
                        name: "Thermodynamik",
                        items: [],
                        subtopics: [
                            { name: "Gaseigenschaften", items: ["Kinetische Gastheorie", "Ideales Gas"] },
                            { name: "Hauptsätze", items: ["Energieerhaltung", "Kreisprozesse", "Entropie"] },
                            { name: "Wärmetransport", items: ["Übertragung", "Strahlung"] }
                        ]
                    }
                ]
            },
            {
                name: "Analysis II",
                topics: [
                    { name: "Mehrdimensionale Differentialrechnung", items: ["Partielle Ableitungen", "Ableitungsregeln", "Implizite Funktionen", "Extremwertaufgaben"] },
                    { name: "Mehrdimensionale Integralrechnung", items: ["Mehrfachintegrale", "Integrationsmethoden", "Integration über Untermannigfaltigkeiten"] },
                    { name: "Vektoranalysis", items: ["Vektorfelder", "Satz von Gauss", "Satz von Stokes"] }
                ]
            },
            {
                name: "Mathematische Methoden",
                topics: [
                    { name: "Komplexe Analysis", items: ["Komplexe Funktionen", "Ableitungsregeln", "Cauchy-Riemann-Gleichungen"] },
                    { name: "Integration", items: ["Komplexes Integral", "Residuensatz", "Anwendungen"] },
                    { name: "Reihenentwicklungen", items: ["Taylor-Reihen", "Laurent-Reihen"] },
                    { name: "Transformationen", items: ["Fourier-Reihen", "Fourier-Transformation", "Laplace-Transformation"] }
                ]
            },
            {
                name: "Netzwerk und Schaltungen II",
                topics: [
                    { name: "Wechselstromrechnung", items: ["Komplexe Methoden", "Maschenstromverfahren", "Knotenpotentialverfahren", "Netzwerksätze"] },
                    { name: "Systemverhalten", items: ["Zeitbereich", "Frequenzbereich", "Übergangsverhalten", "Übertragungsfunktion", "Zweitore"] },
                    { name: "Signalanalyse", items: ["Nicht-sinusförmige Signale", "Fourierzerlegung", "Fouriertransformation", "Laplacetransformation"] },
                    { name: "Operationsverstärker", items: ["Grundschaltungen", "Gegentaktverstärker", "Differenzverstärker", "Dimensionierung"] }
                ]
            },
            {
                name: "Informatik I",
                topics: [
                    { name: "Grundlagen", items: ["Fundamentale Datentypen", "Ausdrücke & Anweisungen", "Computerarithmetik"] },
                    { name: "Programmierkonzepte", items: ["Kontrollstrukturen", "Funktionen", "Klassen (OOP)", "Referenzen & Zeiger"] },
                    { name: "Datenstrukturen", items: ["Containertypen", "Dynamische Datentypen", "Speichermanagement"] }
                ]
            }
        ]
    },
    {
        semester: 3,
        label: "3. Semester",
        modules: [
            {
                name: "Signal- und Systemtheorie I",
                topics: [
                    { name: "Grundlagen", items: ["Signalklassifikation", "Systemklassifikation", "Zeit- & Frequenzbereich", "Signal- & Hilberträume"] },
                    { name: "Systemtheorie", items: ["Lineare zeitinvariante Systeme (LTI)", "Verallgemeinerte Funktionen"] },
                    { name: "Abtastung", items: ["Zeitkontinuierliche Signale", "Abtasttheorem"] },
                    { name: "Zeitdiskrete Systeme", items: ["Systemverhalten", "z-Transformation"] },
                    { name: "Fouriertransformation", items: ["Diskrete Fourier-Transformation (DFT)", "Schnelle Fourier-Transformation (FFT)"] }
                ]
            },
            {
                name: "Informatik II",
                topics: [
                    {
                        name: "Algorithmen & Komplexität",
                        items: ["Asymptotische Laufzeit (O-Notation)"],
                        subtopics: [
                            { name: "Basis-Algorithmen", items: ["Suchen", "Sortieren"] },
                            { name: "Graphenalgorithmen", items: ["Kürzeste Wege", "Spannbäume"] }
                        ]
                    },
                    {
                        name: "Datenstrukturen",
                        items: ["Hashtabellen"],
                        subtopics: [
                            { name: "Baumstrukturen", items: ["Suchbäume", "Balancierte Bäume", "Heaps"] }
                        ]
                    },
                    { name: "Entwurfsstrategien", items: ["Induktion", "Divide & Conquer", "Backtracking", "Dynamische Programmierung"] },
                    {
                        name: "Generische Programmierung",
                        items: ["C++ Templates"],
                        subtopics: [
                            { name: "Funktionale Konzepte", items: ["Funktionen höherer Ordnung", "Lambdas", "Closures"] }
                        ]
                    },
                    {
                        name: "Parallelisierung",
                        items: [],
                        subtopics: [
                            { name: "Grundlagen", items: ["Nebenläufigkeit", "Abhängigkeiten"] },
                            { name: "Speichermodelle", items: ["Geteilter Speicher"] },
                            { name: "Synchronisation", items: ["Race Conditions", "Mutex", "Kommunikation"] }
                        ]
                    }
                ]
            },
            {
                name: "Halbleiterschaltungstechnik",
                topics: [
                    { name: "Transistor-Grundlagen", items: ["Bauteile (Bipolar/MOSFET)", "Signalverhalten", "Arbeitspunkt", "Eintransistorverstärker"] },
                    { name: "Frequenzanalyse", items: ["Verstärker-Frequenzgang", "Bandbreitenerweiterung"] },
                    {
                        name: "Spezielle Verstärker",
                        items: ["Differenzverstärker", "Transimpedanzverstärker"],
                        subtopics: [
                            { name: "Instrumentierungsverstärker", items: ["Störunterdrückung", "Chopper-Technik"] }
                        ]
                    },
                    { name: "Aktive Filter", items: ["Grundstrukturen", "Biquadratische Stufen", "Höhere Ordnung", "Switched-Cap-Filter"] }
                ]
            },
            {
                name: "Physik II",
                topics: [
                    { name: "Quantenmechanik Grundlagen", items: ["Wellenmechanik", "Postulate & Formalismus"] },
                    { name: "Modellsysteme", items: ["Potentialtopf", "Harmonischer Oszillator", "Wasserstoffatom"] },
                    { name: "Mehrteilchensysteme", items: ["Identische Teilchen", "Pauli-Prinzip", "Quantenstatistik"] },
                    { name: "Festkörperphysik", items: ["Kristallsysteme", "Bandstrukturen"] },
                    { name: "Konzepte & Anwendungen", items: ["Näherungsmethoden", "Verschränkung & Superposition", "Engineering-Anwendungen"] }
                ]
            },
            {
                name: "Diskrete Mathematik",
                topics: [
                    { name: "Mengenlehre", items: ["Grundlagen", "Axiome"] },
                    { name: "Kombinatorik", items: ["Zählformen", "Zählprinzipien", "Spezielle Zählprobleme"] },
                    {
                        name: "Graphentheorie",
                        items: [],
                        subtopics: [
                            { name: "Graphenarten", items: ["Netzwerke", "Bäume"] },
                            { name: "Graphenprobleme", items: ["Einfärbung", "Flüsse & Schnitte", "Matchings"] }
                        ]
                    },
                    {
                        name: "Algebra",
                        items: [],
                        subtopics: [
                            { name: "Zahlentheorie", items: ["Teilbarkeit", "Kongruenz"] },
                            { name: "Strukturen", items: ["Gruppen", "Körper & Ringe"] },
                            { name: "Anwendungen", items: ["Kryptographie", "Fehlerkorrektur"] }
                        ]
                    }
                ]
            },
            {
                name: "Analysis III",
                topics: [
                    { name: "PDE Einführung", items: ["Klassifikation", "Typen"] },
                    { name: "Quasilineare DGLs", items: ["Charakteristikenmethode", "Erhaltungssätze"] },
                    { name: "Hyperbolische DGLs", items: ["Wellengleichung", "d'Alembert-Formel", "Separationsansatz"] },
                    { name: "Parabolische DGLs", items: ["Wärmeleitungsgleichung", "Maximumsprinzip", "Separationsansatz"] },
                    { name: "Elliptische DGLs", items: ["Laplace-Gleichung", "Maximumsprinzip", "Variationsmethoden"] }
                ]
            }
        ]
    },
    {
        semester: 4,
        label: "4. Semester",
        modules: [
            {
                name: "Signal- und Systemtheorie II",
                topics: [
                    { name: "Systemmodellierung", items: ["Dynamische Systeme", "LTI-Systeme", "Zustandsgleichungen"] },
                    { name: "Zustandsraumanalyse", items: ["Lösungsmethoden", "Stabilität", "Steuerbarkeit", "Beobachtbarkeit"] },
                    { name: "Frequenzbereichsanalyse", items: ["Frequenzgang", "Bode-Diagramm", "Nyquist-Diagramm"] },
                    { name: "Zeitdiskrete Systeme", items: ["Abtastung", "Systemmodelle"] },
                    { name: "Erweiterte Themen", items: ["Nichtlineare Systeme", "Chaos", "Diskrete Ereignisse", "Hybride Systeme"] }
                ]
            },
            {
                name: "Technische Informatik",
                topics: [
                    {
                        name: "Hardware-Architektur",
                        items: [],
                        subtopics: [
                            { name: "Mikroprozessoren", items: ["Control Paths", "Data Paths"] },
                            { name: "Optimierungen", items: ["Pipelining", "Speculation", "Caching"] }
                        ]
                    },
                    {
                        name: "Software-Systeme",
                        items: ["Low-Level Programmierung"],
                        subtopics: [
                            {
                                name: "Betriebssystem-Konzepte",
                                items: ["Prozess-Management", "Scheduling"],
                                subtopics: [
                                    { name: "Speicherverwaltung", items: ["Physisch", "Virtuell"] }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "Halbleiterelemente",
                topics: [
                    { name: "Einführung", items: ["Historie der Mikroelektronik"] },
                    {
                        name: "Halbleiterphysik",
                        items: ["Festkörper-Kristallstruktur", "Halbleitereigenschaften (Si)", "Quantenmechanik & Bändermodell", "Leitfähigkeit & Dispersion", "Gleichgewichtsstatistik", "Transportgleichungen", "Generation & Rekombination"]
                    },
                    {
                        name: "Bauelemente",
                        items: [],
                        subtopics: [
                            { name: "pn-Übergang", items: ["Physik & Elektrik"] },
                            { name: "pn-Diode", items: ["Kennlinien", "Kleinsignalverhalten", "Durchbruchmechanismen"] },
                            { name: "MOS-Bauelemente", items: ["Bänderdiagramm", "MOSFET-Betrieb", "CV- & IV-Charakteristiken", "Frequenzverhalten"] },
                            { name: "Bipolartransistoren", items: ["Funktionsprinzip", "Betriebsmodi", "Modellierung & Simulation"] }
                        ]
                    }
                ]
            },
            {
                name: "Elektromagnetische Wellen und Felder",
                topics: [
                    { name: "Grundlagen", items: ["Maxwell'sche Gleichungen", "Wellengleichung"] },
                    { name: "Wellenausbreitung", items: ["Felder im freien Raum", "Brechung & Reflexion"] },
                    { name: "Strahlung", items: ["Dipolstrahlung", "Feldwinkelspektrum"] }
                ]
            },
            {
                name: "Numerik",
                topics: [
                    { name: "Grundlagen", items: ["Scientific Python", "Fehleranalyse"] },
                    { name: "Analysis-Methoden", items: ["Nullstellensuche", "Newton-Verfahren", "Quadratur"] },
                    { name: "Differentialgleichungen", items: ["Anfangswertaufgaben", "Einschrittverfahren", "Schrittweitensteuerung", "Stabilitätsanalyse"] }
                ]
            },
            {
                name: "Wahrscheinlichkeitstheorie und Statistik",
                topics: [
                    { name: "Wahrscheinlichkeitsräume", items: ["Kolmogorov-Axiome", "Diskrete Modelle", "Verteilungsfunktionen"] },
                    { name: "Bedingte Wahrscheinlichkeiten", items: ["Bayes'sche Regel", "Nachrichtenquellen", "Bedingte Verteilungen"] },
                    { name: "Zufallsvariablen", items: ["Erwartungswert & Varianz", "Gesetz der grossen Zahlen", "Zentraler Grenzwertsatz"] },
                    { name: "Statistik", items: ["Parameterschätzung", "Hypothesentests"] }
                ]
            }
        ]
    }
];

// ═══════════════════════════════════════════════════════════
// VORWISSEN DATA – from Vorwissen-Mathematik.md & Vorwissen-Physik.md
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// VOR-GYMI DATA
// ═══════════════════════════════════════════════════════════
const vorGymiData = [
    {
        subject: "vg-math",
        label: "Vor-Gymi – Mathematik",
        modules: [
            {
                name: "Zahlenbereiche & Arithmetik",
                topics: [
                    {
                        name: "Natürliche Zahlen ℕ", items: [], subtopics: [
                            { name: "Stellenwertsystem", items: ["Tausender", "Hunderter", "Zehner", "Einer"] },
                            { name: "Operationen", items: ["Addition", "Subtraktion", "Multiplikation", "Division"] }
                        ]
                    },
                    {
                        name: "Ganze Zahlen ℤ", items: [], subtopics: [
                            { name: "Zahlenstrahl", items: ["Positive Zahlen", "Negative Zahlen"] },
                            { name: "Rechenregeln", items: ["Vorzeichenregeln", "Betrag"] }
                        ]
                    },
                    {
                        name: "Rationale Zahlen ℚ", items: [], subtopics: [
                            { name: "Bruchrechnung", items: ["Erweitern & Kürzen", "Hauptnenner", "Kehrwert", "ggT & kgV", "Addition & Subtraktion", "Multiplikation & Division"] },
                            { name: "Dezimalzahlen", items: ["Periodische Zahlen", "Umwandlung Bruch ↔ Dezimal", "Stellenwerte (Zehntel, Hundertstel)"] }
                        ]
                    },
                    {
                        name: "Reelle Zahlen ℝ", items: [], subtopics: [
                            { name: "Irrationale Zahlen", items: ["√2", "Kreiszahl π"] },
                            { name: "Wurzeln", items: ["Quadratwurzel", "Wurzelgesetze", "Rationalmachen des Nenners"] }
                        ]
                    },
                    {
                        name: "Prozentrechnung", items: [], subtopics: [
                            { name: "Grundaufgaben", items: ["Prozentwert", "Prozentsatz", "Grundwert"] },
                            { name: "Veränderung", items: ["Prozentuale Erhöhung", "Prozentuale Reduktion", "Zinsrechnung"] }
                        ]
                    }
                ]
            },
            {
                name: "Terme, Potenzen & Algebra",
                topics: [
                    {
                        name: "Terme & Umformungen", items: [], subtopics: [
                            { name: "Grundoperationen", items: ["Zusammenfassen", "Ausmultiplizieren (Distributivgesetz)", "Ausklammern"] },
                            { name: "Binomische Formeln", items: ["(a+b)² = a²+2ab+b²", "(a−b)² = a²−2ab+b²", "(a+b)(a−b) = a²−b²", "Rückwärts erkennen"] }
                        ]
                    },
                    {
                        name: "Potenzen & Wurzeln", items: [], subtopics: [
                            { name: "Potenzgesetze", items: ["aⁿ·aᵐ = aⁿ⁺ᵐ", "aⁿ÷aᵐ = aⁿ⁻ᵐ", "(aⁿ)ᵐ = aⁿᵐ", "(a·b)ⁿ = aⁿ·bⁿ"] },
                            { name: "Besondere Exponenten", items: ["a⁰ = 1", "a⁻ⁿ = 1/aⁿ", "a^(1/n) = ⁿ√a", "a^(m/n) = ⁿ√(aᵐ)"] }
                        ]
                    }
                ]
            },
            {
                name: "Gleichungen & Proportionalität",
                topics: [
                    { name: "Lineare Gleichungen", items: ["Äquivalenzumformungen", "Gleichungen mit Klammern", "Gleichungen mit Brüchen"] },
                    {
                        name: "Lineare Gleichungssysteme", items: [], subtopics: [
                            { name: "Lösungsverfahren", items: ["Einsetzungsverfahren", "Gleichsetzungsverfahren", "Additionsverfahren"] }
                        ]
                    },
                    {
                        name: "Quadratische Gleichungen", items: [], subtopics: [
                            { name: "Lösungsmethoden", items: ["Reinquadratisch (x²=a)", "Ausklammern", "Faktorisieren", "abc-/pq-Formel (Einführung)"] }
                        ]
                    },
                    {
                        name: "Proportionalität & Dreisatz", items: [], subtopics: [
                            { name: "Typen", items: ["Direkte Proportionalität (y=kx)", "Indirekte Proportionalität (y=k/x)"] },
                            { name: "Dreisatz", items: ["Direkter Dreisatz", "Indirekter Dreisatz"] }
                        ]
                    }
                ]
            },
            {
                name: "Funktionen & Koordinatensystem",
                topics: [
                    { name: "Koordinatensystem", items: ["x-/y-Achse", "Quadranten", "Punkte eintragen/ablesen", "Abstand zweier Punkte", "Mittelpunkt"] },
                    { name: "Funktionsbegriff", items: ["Zuordnung", "Definitionsbereich", "Funktionswerte berechnen", "Graphen zeichnen (Wertetabelle)"] },
                    {
                        name: "Lineare Funktionen", items: [], subtopics: [
                            { name: "Konzepte", items: ["Steigung m", "y-Achsenabschnitt b", "Nullstelle", "Geradengleichung aus 2 Punkten", "Schnittpunkte"] }
                        ]
                    },
                    {
                        name: "Quadratische Funktionen", items: [], subtopics: [
                            { name: "Konzepte", items: ["Normalparabel", "Scheitelpunktform", "Öffnung (a>0 / a<0)", "Verschiebung & Streckung"] }
                        ]
                    },
                    { name: "Weitere Funktionstypen", items: ["Potenzfunktionen (x³, x⁴)", "Wurzelfunktion √x", "Betragsfunktion |x|", "Hyperbel 1/x"] }
                ]
            },
            {
                name: "Geometrie",
                topics: [
                    {
                        name: "Ebene Figuren", items: [], subtopics: [
                            { name: "Formen & Formeln", items: ["Dreieck (A=g·h/2, Winkelsumme 180°)", "Rechteck & Quadrat", "Parallelogramm & Trapez", "Kreis (U=2πr, A=πr²)"] }
                        ]
                    },
                    {
                        name: "Körper", items: [], subtopics: [
                            { name: "Volumen & Oberfläche", items: ["Quader & Würfel", "Prisma", "Zylinder (V=πr²h)"] }
                        ]
                    },
                    { name: "Satz des Pythagoras", items: ["a²+b²=c²", "Hypotenuse berechnen", "Kathete berechnen", "Rechtwinkligkeit prüfen"] },
                    {
                        name: "Trigonometrie (rechtwinkliges △)", items: [], subtopics: [
                            { name: "Grundlagen", items: ["sin(α) = Gegenkathete/Hypotenuse", "cos(α) = Ankathete/Hypotenuse", "tan(α) = Gegenkathete/Ankathete"] },
                            { name: "Spezielle Winkel", items: ["30° (sin=1/2)", "45° (sin=√2/2)", "60° (sin=√3/2)"] }
                        ]
                    }
                ]
            },
            {
                name: "Statistik & Wahrscheinlichkeit",
                topics: [
                    { name: "Datendarstellung", items: ["Wertetabellen", "Säulen-/Balkendiagramme", "Kreisdiagramme", "Histogramme"] },
                    { name: "Statistische Kennzahlen", items: ["Arithmetisches Mittel", "Median", "Modus"] },
                    {
                        name: "Wahrscheinlichkeit (Grundlagen)", items: [], subtopics: [
                            { name: "Konzepte", items: ["Zufallsexperiment", "Ergebnis & Ereignis", "Laplace-Wahrscheinlichkeit", "Baumdiagramme"] }
                        ]
                    }
                ]
            }
        ]
    }
];

// ═══════════════════════════════════════════════════════════
// GYMI DATA – Mathematik & Physik
// ═══════════════════════════════════════════════════════════
const gymiData = [
    {
        subject: "gy-math",
        label: "Gymi – Mathematik",
        modules: [
            {
                name: "Algebra",
                topics: [
                    {
                        name: "Gleichungen & Ungleichungen", items: [], subtopics: [
                            { name: "Quadratische Gleichungen", items: ["pq-Formel / Mitternachtsformel", "Diskriminante & Lösungsanzahl", "Faktorisieren"] },
                            { name: "Höhere Ordnung", items: ["Polynomdivision", "Substitution (biquadratisch)", "Satz vom Nullprodukt"] },
                            { name: "Ungleichungen", items: ["Äquivalenzumformung", "Fallunterscheidung", "Systeme mit 2 Variablen (graphisch)"] },
                            { name: "Parameterdiskussion", items: ["Diskriminante D=b²−4ac", "Lösungsanzahl abhängig von Parametern"] }
                        ]
                    },
                    {
                        name: "Komplexe Zahlen", items: [], subtopics: [
                            { name: "Darstellungsformen", items: ["Algebraische Form (a+bi)", "Trigonometrische Form r(cosφ+i·sinφ)", "Gaußsche Zahlenebene"] },
                            { name: "Rechenoperationen", items: ["Addition & Subtraktion", "Multiplikation & Division", "Konjugiert Komplexes", "Betrag & Argument"] },
                            { name: "Fortgeschritten", items: ["Satz von Moivre (Potenzen)", "n-te Wurzeln in ℂ", "Gleichungen in ℂ lösen", "Geometrische Interpretation (Drehung/Streckung)"] }
                        ]
                    }
                ]
            },
            {
                name: "Analysis",
                topics: [
                    {
                        name: "Elementare Funktionen", items: [], subtopics: [
                            { name: "Grundtypen", items: ["Konstante & Identität", "Lineare & Affine", "Potenz- & Wurzelfunktionen", "Betragsfunktion"] },
                            { name: "Transzendente Funktionen", items: ["Exponentialfunktion (eˣ, aˣ)", "Logarithmus (ln, log_a)", "Trigonometrische (sin, cos, tan)"] },
                            { name: "Abwandlungen", items: ["Spiegelungen f(−x), −f(x)", "Verschiebungen f(x+k), f(x)+k", "Streckung k·f(x)", "|f(x)| und f(|x|)"] }
                        ]
                    },
                    {
                        name: "Folgen & Reihen", items: [], subtopics: [
                            { name: "Folgentypen", items: ["Arithmetische Folge (aₙ=a₁+(n−1)d)", "Geometrische Folge (aₙ=a₁·qⁿ⁻¹)"] },
                            { name: "Methoden", items: ["Vollständige Induktion", "Summenformeln"] },
                            { name: "Konvergenz", items: ["Grenzwert bestimmen", "Konvergenzbegriff"] }
                        ]
                    },
                    {
                        name: "Grenzwerte & Stetigkeit", items: [], subtopics: [
                            { name: "Limes", items: ["Grenzwertsätze", "Asymptoten (waagrecht/senkrecht/schräg)", "Regel von L'Hôpital"] },
                            { name: "Stetigkeit", items: ["Punktweise Stetigkeit", "Sprungstellen & Lücken"] }
                        ]
                    },
                    {
                        name: "Differentialrechnung", items: [], subtopics: [
                            { name: "Grundlagen", items: ["Differenzenquotient → Differentialquotient", "Tangentensteigung"] },
                            { name: "Ableitungsregeln", items: ["Summenregel", "Produktregel", "Quotientenregel", "Kettenregel"] },
                            { name: "Ableitungen wichtiger Funktionen", items: ["Potenz-/Exponential-/Log-Funktionen", "Trigonometrische Funktionen"] },
                            { name: "Kurvendiskussion", items: ["Nullstellen", "Extrema (1. Ableitung)", "Wendepunkte (2. Ableitung)", "Krümmungsverhalten"] },
                            { name: "Anwendungen", items: ["Optimierungsprobleme", "Tangentengleichung"] }
                        ]
                    },
                    {
                        name: "Integralrechnung", items: [], subtopics: [
                            { name: "Grundlagen", items: ["Stammfunktion", "Bestimmtes Integral (Riemann)", "Hauptsatz der Analysis"] },
                            { name: "Methoden", items: ["Substitution", "Partielle Integration"] },
                            { name: "Anwendungen", items: ["Flächenberechnung zwischen Graphen", "Rotationsvolumen"] }
                        ]
                    }
                ]
            },
            {
                name: "Trigonometrie",
                topics: [
                    { name: "Einheitskreis", items: ["sin/cos als Koordinaten", "Periodizität", "Spezielle Winkel (30°, 45°, 60°, 90°)"] },
                    {
                        name: "Beziehungen", items: [], subtopics: [
                            { name: "Winkelbeziehungen", items: ["Komplementärwinkel (α+β=90°)", "Supplementärwinkel (α+β=180°)", "Gegenwinkel"] },
                            { name: "Additionstheoreme", items: ["sin(α±β) = sinα·cosβ ± cosα·sinβ", "cos(α±β) = cosα·cosβ ∓ sinα·sinβ"] }
                        ]
                    },
                    { name: "Sinus- & Kosinussatz", items: ["a/sinα = b/sinβ = c/sinγ", "c² = a²+b² − 2ab·cosγ"] },
                    { name: "Goniometrische Gleichungen", items: ["sin(x)=0 → x=kπ", "cos(x)=0 → x=π/2+kπ", "Allgemeine Lösungsmengen"] }
                ]
            },
            {
                name: "Vektorielle & Analytische Geometrie",
                topics: [
                    {
                        name: "Vektoroperationen", items: [], subtopics: [
                            { name: "Grundlagen", items: ["Addition & Skalarmultiplikation", "Linearkombination", "Kolinear & Komplanar", "Orthonormierte Basen"] },
                            { name: "Produkte", items: ["Skalarprodukt (u·v = |u||v|cosφ)", "Kreuzprodukt (u×v, senkrechter Vektor)", "Spatprodukt (Volumen)"] }
                        ]
                    },
                    {
                        name: "Analytische Geometrie Ebene", items: [], subtopics: [
                            { name: "Geraden", items: ["Parametergleichung g(t)=P+t·r", "Normalenform ax+by+c=0"] },
                            { name: "Kreise", items: ["(x−x₀)²+(y−y₀)²=r²", "Tangentengleichung"] },
                            { name: "Kegelschnitte", items: ["Ellipse", "Parabel", "Hyperbel", "Brennpunkte & Exzentrizität"] },
                            { name: "Lagebeziehungen", items: ["Schnittpunkte", "Abstände (Punkt-Gerade)", "Winkelhalbierende"] }
                        ]
                    },
                    {
                        name: "Analytische Geometrie Raum", items: [], subtopics: [
                            { name: "Geraden & Ebenen", items: ["Parametergleichung", "Kartesische Ebenengleichung", "Normalenvektor"] },
                            { name: "Abstände", items: ["Punkt-Punkt", "Punkt-Gerade", "Punkt-Ebene", "Windschiefe Geraden"] },
                            { name: "Winkel", items: ["Gerade-Gerade", "Gerade-Ebene", "Ebene-Ebene"] },
                            { name: "Körper", items: ["Würfel & Quader", "Prisma & Zylinder", "Kegel & Kugel"] }
                        ]
                    }
                ]
            },
            {
                name: "Stochastik",
                topics: [
                    {
                        name: "Beschreibende Statistik", items: [], subtopics: [
                            { name: "Darstellung", items: ["Kreisdiagramm", "Stabdiagramm", "Histogramm"] },
                            { name: "Kennzahlen", items: ["Arithmetisches Mittel", "Median & Modus", "Varianz & Standardabweichung"] }
                        ]
                    },
                    {
                        name: "Kombinatorik", items: [], subtopics: [
                            { name: "Zählprinzipien", items: ["Permutationen (mit/ohne Wdh.)", "Variationen (mit/ohne Wdh.)", "Kombinationen (mit/ohne Wdh.)"] },
                            { name: "Sätze", items: ["Binomischer Lehrsatz", "Pascalsches Dreieck"] }
                        ]
                    },
                    {
                        name: "Wahrscheinlichkeitsrechnung", items: [], subtopics: [
                            { name: "Grundlagen", items: ["Ereignisse (A∩B, A∪B, Ā)", "Unabhängige & disjunkte Ereignisse"] },
                            { name: "Regeln", items: ["Additionsregel", "Multiplikationsregel", "Bedingte Wahrscheinlichkeit P(A|B)"] },
                            { name: "Darstellung", items: ["Ergebnisbaum"] }
                        ]
                    },
                    {
                        name: "Zufallsvariablen", items: [], subtopics: [
                            { name: "Kenngrößen", items: ["Erwartungswert", "Standardabweichung"] },
                            { name: "Verteilungen", items: ["Binomialverteilung P(X=k)", "Normalverteilung (Näherung)"] }
                        ]
                    }
                ]
            },
            {
                name: "Lineare Algebra",
                topics: [
                    {
                        name: "Lineare Abbildungen", items: [], subtopics: [
                            { name: "Begriffe", items: ["Definition (Addition & Skalierung erhalten)", "Kern (Nullraum)", "Bildraum"] },
                            { name: "Matrixdarstellung", items: ["Abbildungsmatrix relativ zu Basis", "Basiswechsel"] }
                        ]
                    },
                    {
                        name: "2×2-Matrizen", items: [], subtopics: [
                            { name: "Operationen", items: ["Matrixaddition", "Skalarmultiplikation", "Matrixmultiplikation"] },
                            { name: "Determinante & Inverse", items: ["det(A) = ad−bc", "A⁻¹ = (1/det)·[[d,−b],[−c,a]]", "Invertierbarkeit (det≠0)"] }
                        ]
                    },
                    {
                        name: "Eigenwertprobleme", items: [], subtopics: [
                            { name: "Berechnung", items: ["det(A−λI)=0", "Eigenwerte", "Eigenvektoren"] },
                            { name: "Interpretation", items: ["Invariante Richtungen", "Streckung/Stauchung", "Symmetrien & Rotationen"] }
                        ]
                    }
                ]
            }
        ]
    },
    {
        subject: "gy-phys",
        label: "Gymi – Physik",
        modules: [
            {
                name: "Grundlagen",
                topics: [
                    {
                        name: "Grössen & Einheiten", items: [], subtopics: [
                            { name: "SI-System", items: ["Grundgrössen", "Masseinheiten"] },
                            { name: "Dimensionen", items: ["Einheitenanalyse"] }
                        ]
                    },
                    {
                        name: "Numerik & Darstellung", items: [], subtopics: [
                            { name: "Genauigkeit", items: ["Signifikante Stellen", "Exakte Rechnung", "Abschätzung"] },
                            { name: "Schreibweisen", items: ["Exponentialschreibweise", "Zehnerpotenzen", "Vorsilben (Milli, Mega etc.)"] }
                        ]
                    }
                ]
            },
            {
                name: "Mechanik",
                topics: [
                    {
                        name: "Kinematik (Bewegungslehre)", items: [], subtopics: [
                            { name: "Bewegungsgrössen", items: ["Ort & Weg", "Geschwindigkeit (Vektor/Skalar)", "Beschleunigung", "Bewegungsdiagramme (t-x, t-v)"] },
                            { name: "Geradlinige Bewegung", items: ["Gleichförmige Bewegung", "Gleichmässig beschleunigte Bewegung", "Freier Fall"] },
                            { name: "Kreisbewegung", items: ["Frequenz & Periode", "Winkelgeschwindigkeit", "Bahngeschwindigkeit", "Zentripetalbeschleunigung"] }
                        ]
                    },
                    {
                        name: "Dynamik (Kräfte)", items: [], subtopics: [
                            { name: "Masse & Materie", items: ["Trägheit", "Schwere", "Dichte"] },
                            { name: "Kraftbegriff", items: ["Vektordarstellung", "Newtons Axiome (1., 2., 3.)", "Kräfteparallelogramm"] },
                            { name: "Kraftarten", items: ["Gewichtskraft", "Federkraft (Hookesches Gesetz)", "Reibungskraft (Haft/Gleit)", "Normalkraft"] }
                        ]
                    },
                    {
                        name: "Arbeit & Energie", items: [], subtopics: [
                            { name: "Arbeit", items: ["Definition", "Hubarbeit", "Beschleunigungsarbeit", "Reibungsarbeit"] },
                            { name: "Energieformen", items: ["Kinetische Energie", "Potentielle Energie (Lage)", "Spannenergie (Feder)"] },
                            { name: "Erhaltungssätze", items: ["Energieerhaltungssatz", "Impuls & Impulserhaltung"] },
                            { name: "Leistung", items: ["Definition", "Wirkungsgrad"] }
                        ]
                    },
                    {
                        name: "Hydrostatik", items: [], subtopics: [
                            { name: "Druck", items: ["Definition", "Schweredruck", "Pascalsches Prinzip"] },
                            { name: "Auftrieb", items: ["Archimedisches Prinzip", "Schwimmen & Sinken"] }
                        ]
                    },
                    {
                        name: "Gravitation", items: [], subtopics: [
                            { name: "Gravitationsgesetz", items: ["Newtonsche Anziehung", "Satellitenbahnen"] },
                            { name: "Keplersche Gesetze", items: ["Ellipsenbahnen", "Flächensatz", "Umlaufzeiten (3. Gesetz)"] }
                        ]
                    }
                ]
            },
            {
                name: "Thermische Phänomene",
                topics: [
                    {
                        name: "Temperatur & Wärme", items: [], subtopics: [
                            { name: "Temperaturskalen", items: ["Celsius", "Kelvin", "Absoluter Nullpunkt"] },
                            { name: "Grundbegriffe", items: ["Temperatur vs. Wärme", "Thermisches Gleichgewicht"] }
                        ]
                    },
                    {
                        name: "Thermodynamik", items: [], subtopics: [
                            { name: "Hauptsätze", items: ["Erster Hauptsatz (Energieerhaltung)", "Zweiter Hauptsatz (Entropie/Richtung)"] },
                            { name: "Wärmeübertragung", items: ["Wärmeleitung", "Konvektion (Strömung)", "Wärmestrahlung"] }
                        ]
                    },
                    {
                        name: "Materie & Zustände", items: [], subtopics: [
                            { name: "Ausdehnung", items: ["Festkörper", "Flüssigkeiten", "Gase"] },
                            { name: "Aggregatszustände", items: ["Schmelzen & Erstarren", "Verdampfen & Kondensieren", "Spezifische Wärmekapazität", "Latente Wärme"] }
                        ]
                    }
                ]
            },
            {
                name: "Elektrizitätslehre",
                topics: [
                    {
                        name: "Elektrostatik", items: [], subtopics: [
                            { name: "Ladung", items: ["Coulomb-Gesetz", "Ladungstrennung"] },
                            { name: "Elektrisches Feld", items: ["Feldstärke", "Feldlinien", "Homogenes Feld"] },
                            { name: "Potential", items: ["Spannung", "Arbeit im E-Feld", "Energie"] }
                        ]
                    },
                    {
                        name: "Gleichstromkreise", items: [], subtopics: [
                            { name: "Grundgrössen", items: ["Stromstärke", "Elektrischer Widerstand", "Spezifischer Widerstand"] },
                            { name: "Gesetzmässigkeiten", items: ["Ohmsches Gesetz", "Reihenschaltung", "Parallelschaltung"] },
                            { name: "Energieumsatz", items: ["Elektrische Leistung", "Joule'sche Wärme"] }
                        ]
                    },
                    {
                        name: "Magnetismus", items: [], subtopics: [
                            { name: "Magnetfeld", items: ["Feldlinienbilder", "Stromdurchflossener Leiter", "Elektromagnete"] },
                            { name: "Kraftwirkung", items: ["Lorentzkraft (auf Leiter)", "Induktion (qualitativ)"] }
                        ]
                    }
                ]
            },
            {
                name: "Optik & Wellen",
                topics: [
                    {
                        name: "Wellenlehre", items: [], subtopics: [
                            { name: "Kenngrössen", items: ["Wellenlänge", "Amplitude", "Frequenz", "Ausbreitungsgeschwindigkeit"] },
                            { name: "Wellentypen", items: ["Transversalwellen", "Longitudinalwellen"] }
                        ]
                    },
                    {
                        name: "Wellenphänomene", items: [], subtopics: [
                            { name: "Ausbreitung", items: ["Reflexionsgesetz", "Brechungsgesetz (Snellius)"] },
                            { name: "Superposition", items: ["Interferenz", "Konstruktiv & Destruktiv"] }
                        ]
                    },
                    { name: "Optik (Grundlagen)", items: ["Lichtgeschwindigkeit", "Lichtstrahlmodell", "Spektrum"] }
                ]
            },
            {
                name: "Atomphysik",
                topics: [
                    {
                        name: "Atomaufbau", items: ["Kern-Hülle-Modell", "Kernkräfte"], subtopics: [
                            { name: "Elementarteilchen", items: ["Protonen", "Neutronen", "Elektronen"] }
                        ]
                    },
                    {
                        name: "Radioaktivität", items: [], subtopics: [
                            { name: "Strahlungsarten", items: ["Alpha-Zerfall", "Beta-Zerfall", "Gamma-Strahlung"] },
                            { name: "Gesetzmässigkeiten", items: ["Halbwertszeit", "Zerfallsreihe", "Periodensystem (Ordnungszahl/Massenzahl)"] },
                            { name: "Strahlenschutz", items: ["Abschirmung"] }
                        ]
                    }
                ]
            }
        ]
    }
];

// ═══════════════════════════════
