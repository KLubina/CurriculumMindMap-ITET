Ein Lautsprecher ist im Grunde ein Wandler — er konvertiert elektrische Energie in mechanische Schwingung, und die Schwingung in Schallwellen. Das ist genau die Schnittstelle zwischen deinem EE-Curriculum und Physik.

**Elektromagnetismus** ist der Kern des Ganzen. Ein Permanentmagnet erzeugt ein statisches Magnetfeld. Eine Schwingspule (Voice Coil) sitzt in diesem Feld — wenn Wechselstrom durch sie fliesst, entsteht nach dem Lorentz-Gesetz eine Kraft die die Spule vor und zurück bewegt. Das kommt direkt aus dem **4. Semester — Elektromagnetische Wellen und Felder** (Maxwell-Gleichungen, Lorentz-Kraft, Dipolstrahlung — die Membran ist akustisch ein Dipol).

**Mechanik und Akustik** — die Schwingspule ist an einer Membran befestigt. Die Membran schwingt und bewegt Luftmoleküle, was Druckwellen erzeugt. Hier kommt das **1. Semester — Technische Mechanik** rein: Kräfte auf die Schwingspule, Masse der Membran, Federsteifigkeit der Aufhängung, Dämpfung. Das ist ein klassisches gedämpftes Feder-Masse-System. Vertieft wird das im **2. Semester — Physik I**: Schwingungstypen (harmonisch, gedämpft, erzwungen), Resonanz, Wellenausbreitung, Energie und Intensität — das ist direkt die Akustik des Lautsprechers.

**Frequenzweichen** — kein Lautsprecher deckt den ganzen Frequenzbereich gleich gut ab. Deshalb baut man Crossover-Netzwerke aus Kondensatoren und Spulen — Tiefpass für den Woofer, Hochpass für den Hochtöner. Das ist direkt das **2. Semester — Netzwerk und Schaltungen II**: RLC-Netzwerke, Übertragungsfunktionen, Bode-Diagramme, Frequenzbereichsanalyse.

**Das Gehäuse** ist akustisch entscheidend. Ohne Gehäuse löschen die Schallwellen von Vorder- und Rückseite der Membran sich gegenseitig aus (akustischer Kurzschluss). Ob du eine geschlossene Box, Bassreflex-Port oder offene Schallwand baust, ändert das Tieffrequenzverhalten fundamental. Das beschreibt man mit dem **Thiele-Small-Modell** — ein Ersatzschaltbild das den Lautsprecher als LTI-System modelliert. Hier greift das **4. Semester — Signal- und Systemtheorie II**: Zustandsraumanalyse, Stabilitätsbedingungen, Bode- und Nyquist-Diagramme für die Gehäuseabstimmung. Die Thiele-Small-Parameter sind dabei die wichtigsten Kennzahlen:

- `Fs` — Resonanzfrequenz des Treibers
- `Qts` — Gütefaktor (wie stark ist die Resonanz gedämpft)
- `Vas` — äquivalentes Luftvolumen (wie steif ist die Aufhängung)
- `Xmax` — maximaler linearer Membranhub
- `Sd` — effektive Membranfläche

Mit diesen Parametern berechnet man welches Gehäusevolumen und welche Port-Abstimmung optimal sind — und genau da kommt das **4. Semester — Numerik** ins Spiel: Simulation des Frequenzgangs, numerische Lösung der Gehäusegleichungen wenn du die Bassreflex-Abstimmung optimieren willst.

---

Der Lautsprecher ist ein wunderbares Projekt weil er fast alles aus deinem Curriculum gleichzeitig verbindet: Elektromagnetik, gedämpfte Schwingungen, LTI-Systeme, Bode-Diagramme und RLC-Netzwerke. Willst du mit einem einfachen Breitband-Treiber starten (kein Crossover nötig), oder denkst du eher an ein Zwei-Wege-System mit Weiche?