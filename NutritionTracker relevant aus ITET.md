Für eine Nutrition-Tracker-App auf Firebase mit HTML/CSS/JS ist der direkte Bezug zum Curriculum ehrlich gesagt sehr gering. Die App nutzt primär praktisches Web-Engineering, nicht die theoretischen Grundlagen die hier aufgelistet sind. Trotzdem gibt es ein paar echte Berührungspunkte:

**Informatik I & II** sind am relevantesten. Datenstrukturen wie Arrays, Objekte und Hash-ähnliche Strukturen (Firestore-Dokumente sind im Kern Key-Value-Stores) sowie Kontrollstrukturen und OOP-Konzepte fliessen direkt in den JS-Code ein. Sortier- und Suchalgorithmen aus Informatik II kommen zum Einsatz wenn du z.B. Lebensmittel filterst oder die Historie sortierst.

**Wahrscheinlichkeitstheorie und Statistik** wäre relevant wenn du Durchschnittswerte, Trends oder Zielerreichungsquoten berechnest — Erwartungswert, Varianz, das sind genau die Metriken die eine Tracker-App typischerweise anzeigt (durchschnittliche Kalorien pro Tag, Standardabweichung, etc.).

**Digitaltechnik / Zahlensysteme** taucht indirekt auf wenn du mit Binärdaten, Encoding oder Bit-Flags arbeitest, aber das ist bei einer einfachen Tracker-App eher marginal.

**Analysis I** kommt ins Spiel wenn du Trendlinien oder gleitende Durchschnitte berechnest — das ist im Kern diskrete Approximation von stetigen Funktionen.

Was die App aber hauptsächlich nutzt — Firebase Realtime DB / Firestore, Auth, HTTP-Requests, DOM-Manipulation, Event-Driven Programming — das ist alles praktisches Software-Engineering das im Curriculum erst ab Informatik I/II angedeutet wird, aber nie wirklich tief behandelt wird. Dein Curriculum ist stark mathematisch-physikalisch ausgerichtet (EE-Studiengang?), und Web-Development ist da schlicht kein Fokus.

Kurz gesagt: **Informatik I/II und Statistik** sind die einzigen Module die wirklich etwas beitragen. Der Rest des Curriculums ist für deine App nicht relevant.