/* ═════════════════════════════════════════════════════════════════════
   ZENTRALE KUNSTWERK-DATENQUELLE
   ─────────────────────────────────────────────────────────────────────
   Alle Kunstwerke der Galerie werden aus diesem einen Array geladen
   (siehe script.js: renderGallery / renderFeatured / openArtworkDetail).

   NEUES KUNSTWERK HINZUFÜGEN:
   1. Bilddatei in den Ordner "Images/" legen.
   2. Ein neues Objekt unten in ARTWORKS einfügen (Vorlage kopieren).
   3. Felder ausfüllen. Wenn eine Information (noch) nicht vorhanden ist,
      den Platzhaltertext einfach stehen lassen oder durch den echten
      Text ersetzen — nichts an Layout/Code muss angefasst werden.

   FELDER:
   id                → eindeutiger, URL-freundlicher Schlüssel (kebab-case)
   title             → Titel des Kunstwerks
   image             → Pfad relativ zur index.html, z. B. "Images/Datei.jpeg"
   alt               → Alternativtext für Screenreader/SEO (Bild sachlich beschreiben)
   year              → Entstehungsjahr
   category          → "glaube"   = Glaube & Symbolik
                        "tiere"   = Tiere & Natur
                        "portrait"= Porträt & Stille Momente
   categoryLabel     → sichtbarer Kategorie-Name (Deutsch)
   technique         → Material/Technik
   dimensions        → Maße, z. B. "60 × 80 cm"
   background        → Entstehungsgeschichte / Inspiration des Werks
   symbolism         → Bedeutung von Farben, Formen, Symbolen
   christianMeaning  → die Evangeliums-Botschaft, die das Werk vermittelt
   bibleVerse        → passende Bibelstelle (Text + Referenz)
   interpretation    → eine Einladung zum Nachdenken für die Betrachterin/den Betrachter
   availability      → "Verfügbar" | "Verkauft" | "Privatsammlung" | "Auf Anfrage"
   featured          → true = erscheint im "Ausgewählte Werke"-Bereich der Startseite
═════════════════════════════════════════════════════════════════════ */

const PLACEHOLDER = {
  background: "Die Entstehungsgeschichte dieses Werkes wird in Kürze ergänzt.",
  symbolism: "Eine Beschreibung der verwendeten Farben, Formen und Symbole folgt in Kürze.",
  christianMeaning: "Die christliche Botschaft dieses Werkes wird in Kürze ergänzt.",
  bibleVerse: "",
  interpretation: "Die persönliche Deutung der Künstlerin wird in Kürze ergänzt.",
  dimensions: "Maße auf Anfrage",
  technique: "Technik wird ergänzt",
};

const ARTWORKS = [
  // ── GLAUBE & SYMBOLIK ────────────────────────────────────────────
  {
    id: "loewe-von-juda-I",
    title: "Löwe von Juda",
    image: "Images/IMG_1125.jpeg",
    alt: "Gemälde eines Löwenprofils mit wehender Mähne in Gold- und Erdtönen, mit Blattgold-Akzenten",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl und Blattgold auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Am Anfang stand nicht der Wunsch, ein Tier zu malen, sondern die Frage, wie man Macht darstellt, die niemandem schadet. Ein Löwe im Profil, den Blick nach vorn gerichtet, die Mähne im Wind — und mittendrin echtes Blattgold, das das Licht im Raum jedes Mal anders auffängt. Kein Bild, das man einmal ansieht und abhakt, sondern eines, das sich mit dem Tageslicht verändert, so wie sich der Blick auf Christus verändert, je länger man hinschaut.",
    symbolism:
      "Die goldenen Akzente in der Mähne greifen das Licht ein und verleihen dem Tier eine königliche, fast überirdische Präsenz. Gold ist hier kein Schmuck, sondern Aussage: Das, was hier dargestellt ist, gehört nicht ganz dieser Welt.",
    christianMeaning:
      "Der Löwe von Juda ist eines der ältesten christlichen Sinnbilder für Christus als König und Sieger. Er steht dafür, dass Jesus nicht nur als sanftes Lamm für uns gestorben ist, sondern als Löwe auferstanden — dass der Tod, der Sünde und Schuld über jedem Menschen verhängt, endgültig überwunden ist. Wer an ihn glaubt, gehört nicht mehr dem Untergang, sondern dem Sieger.",
    bibleVerse: "„Siehe, es hat überwunden der Löwe, der da ist vom Stamm Juda.“ — Offenbarung 5,5",
    interpretation:
      "Vor diesem Bild darf man sich fragen: Traue ich Christus wirklich zu, dass er größer ist als das, was mich gerade bedrängt? Der Löwe schaut nicht ängstlich — er schaut, als wäre der Sieg längst entschieden.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "loewe-von-juda-II",
    title: "Löwe von Juda II",
    image: "Images/IMG_1165.jpeg",
    alt: "Gemälde eines Löwen von vorne mit ausdrucksstarkem Blick und heller Mähne vor strukturiertem Untergrund",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: PLACEHOLDER.technique,
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Ein zweites Bild zum selben Thema ist nie eine Wiederholung, sondern eine andere Frage an denselben Gedanken. Diesmal blickt der Löwe nicht im Profil, sondern direkt heraus — kein Ausweichen, kein Vorbeischauen. Die raue, fast plastische Oberfläche sollte sich anfühlen wie Fels: etwas, das man anfassen möchte, um zu prüfen, ob es wirklich so standhaft ist, wie es aussieht.",
    symbolism:
      "Der direkte Blick durchbricht die übliche Distanz eines Tierporträts. Die erdigen, fast steinernen Farbtöne erden das Königliche — Stärke, die nicht fern ist, sondern zum Greifen nah.",
    christianMeaning:
      "Als zweites Werk der Löwe-von-Juda-Reihe steht auch dieses Bild für Stärke, Würde und die königliche Seite des Glaubens — aber mit einem direkten Blick, der niemanden übersieht. Christus wendet sich nicht ab. Er sieht jeden Menschen, mit allem, was er mit sich trägt, und lädt ihn trotzdem ein, ihm zu vertrauen.",
    bibleVerse: "„Siehe, es hat überwunden der Löwe, der da ist vom Stamm Juda.“ — Offenbarung 5,5",
    interpretation:
      "Manche Bilder schauen einen an, statt betrachtet zu werden. Dieses hier stellt die Frage um: nicht, was du in Christus siehst, sondern ob du zulässt, dass er dich sieht.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "heiliger-geist",
    title: "Heiliger Geist",
    image: "Images/IMG_1575.jpeg",
    alt: "Gemälde einer weißen Taube mit ausgebreiteten Flügeln unter einem goldenen Kreis, in Creme- und Goldtönen",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl und Blattgold auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Manche Motive lassen sich nicht erzwingen — sie stellen sich ein, wenn man lange genug still geworden ist. Die Taube mit den weit geöffneten Schwingen entstand aus dem Wunsch, etwas Unsichtbares sichtbar zu machen: nicht Gott selbst, aber die Bewegung, mit der er sich einem Menschen nähert. Sanft, aber nicht zu übersehen.",
    symbolism:
      "Die Taube mit ausgebreiteten Flügeln unter dem goldenen Kreis verweist auf Reinheit, Frieden und eine Gegenwart, die von oben herabkommt. Die herabfallenden Federn erinnern daran, dass diese Gegenwart sich verschenkt, nicht erobert wird.",
    christianMeaning:
      "Die Taube ist das klassische Symbol des Heiligen Geistes, der bei der Taufe Jesu sichtbar herabkam. Für jeden, der an Christus glaubt, gilt dieselbe Zusage: Gott bleibt nicht fern. Er zieht ein — als Beistand, als Trost, als Kraft, die von innen verändert, was kein Mensch aus eigener Anstrengung schafft.",
    bibleVerse: "„Und der Geist Gottes schwebte auf dem Wasser.“ — 1. Mose 1,2",
    interpretation:
      "Am Anfang der Schöpfung schwebte der Geist über dem Chaos, bevor es Licht wurde. Vielleicht ist das die tröstlichste Botschaft dieses Bildes: Gottes Geist schwebt auch über dem, was in einem Leben noch ungeordnet ist.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "gethsemane",
    title: "Gethsemane",
    image: "Images/IMG_1146.jpeg",
    alt: "Gemälde einer betenden Gestalt mit gefalteten Händen und goldenem Heiligenschein vor dunklem, herabfließendem Hintergrund",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl und Blattgold auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Es gibt einen Moment in der Passionsgeschichte, der leiser ist als die Kreuzigung und trotzdem genauso entscheidend: die Nacht in Gethsemane, in der Jesus betet, während sein Wille noch mit dem Willen des Vaters ringt. Dieses Bild wollte genau diesen Moment festhalten — nicht das Ergebnis, sondern das Ringen davor, aus dem heraus der Gehorsam wächst.",
    symbolism:
      "Die gefalteten Hände und der gesenkte Blick stehen für Hingabe und stille Zwiesprache; der goldene Heiligenschein hebt die Gestalt aus dem Irdischen heraus, während der dunkle, herabfließende Hintergrund die Schwere der Nacht spürbar macht, in der niemand ihm die Last abnehmen konnte.",
    christianMeaning:
      "In Gethsemane hat Jesus die volle menschliche Angst vor Leid und Tod durchlebt — und sich trotzdem für den Weg zum Kreuz entschieden, aus Liebe zu jedem Menschen, der ohne ihn verloren wäre. Das ist die Mitte des Evangeliums: Gott hat sich nicht aus der Distanz für uns entschieden, sondern mitten im Ringen.",
    bibleVerse: "„Doch nicht mein, sondern dein Wille geschehe.“ — Lukas 22,42",
    interpretation:
      "Wer selbst schon einmal in einer Nacht wach lag, in der eine Entscheidung schwerer wog als alles andere, findet sich in diesem Bild wieder. Der Unterschied ist: Diese Entscheidung wurde für uns getroffen.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "dornenkrone",
    title: "Dornenkrone",
    image: "Images/IMG_1544.jpeg",
    alt: "Gemälde des Antlitzes Christi mit Dornenkrone, geschlossenen Augen und einer Hand auf der Brust vor dunklem Hintergrund",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: PLACEHOLDER.technique,
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Manche Bilder beginnen nicht mit einer Skizze, sondern mit einer Frage: Wie malt man Leid, ohne die Hoffnung zu verlieren, die dahinter liegt? Die Antwort war ein Gesicht in Ruhe — Augen geschlossen, nicht vor Schmerz verzerrt, sondern in Hingabe. Die Dornenkrone bleibt, aber sie hat nicht das letzte Wort.",
    symbolism:
      "Die Dornenkrone erinnert an Leid, das getragen wurde, damit daraus Hoffnung erwachsen kann. Die ruhige Haltung des Gesichts, die Hand auf der Brust, spricht nicht von Niederlage, sondern von einer Hingabe, die freiwillig geschieht.",
    christianMeaning:
      "Die Dornenkrone ist eines der zentralen Passionssymbole und verweist auf das Leiden Christi am Kreuz — Spott und Schmerz, die er stellvertretend für jeden Menschen ertragen hat. Diese Krone aus Dornen ist der Moment, in dem Gottes Liebe konkret wird: nicht als Idee, sondern als Wunde.",
    bibleVerse:
      "„… und die Kriegsknechte flochten eine Krone aus Dornen und setzten sie auf sein Haupt.“ — Johannes 19,2",
    interpretation:
      "Eine Krone aus Dornen war als Spott gedacht — und wurde zum wahrsten Titel, den Jesus je getragen hat. Wer das erkennt, sieht in jedem eigenen Leid die Möglichkeit, dass Gott gerade dort am nächsten ist.",
    availability: "Auf Anfrage",
    featured: true,
  },
  {
    id: "das-kreuz",
    title: "Das Kreuz",
    image: "Images/IMG_1577.jpeg",
    alt: "Gemälde eines goldenen Kreuzes mit Dornenkrone und weißer Rose in der Mitte, darüber eine Taube mit ausgebreiteten Flügeln",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl und Blattgold auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Dieses Werk sollte kein einzelnes Symbol zeigen, sondern das ganze Evangelium in einem Bild bündeln: die Taube des Geistes oben, das Kreuz in der Mitte, die Dornenkrone, die daran hängt, und mittendrin eine einzelne weiße Rose. Der Farbverlauf von strahlendem Gold zu dunklem Schatten sollte den Weg vom Himmel zur Erde nachzeichnen — den Weg, den Christus gegangen ist, um zurück zum Vater zu führen.",
    symbolism:
      "Das Kreuz, oben in leuchtendem Gold, verdunkelt sich nach unten hin — ein Weg von der Herrlichkeit in die Tiefe. Die Dornenkrone umschließt die Mitte, und dort, wo sich Leid und Herrlichkeit berühren, blüht eine weiße Rose: Schönheit, die aus dem Schmerz selbst hervorgeht.",
    christianMeaning:
      "Das Kreuz ist das zentrale Zeichen des christlichen Glaubens — Symbol von Opfer, Erlösung und Hoffnung zugleich. Es ist der Ort, an dem Gottes Gerechtigkeit und seine Liebe sich nicht widersprechen, sondern zusammenfinden: die Strafe, die wir verdient hätten, trägt er; das Leben, das wir nicht verdienen, schenkt er.",
    bibleVerse:
      "„Das Wort vom Kreuz ist eine Torheit denen, die verloren werden; uns aber, die wir selig werden, ist es eine Gotteskraft.“ — 1. Korinther 1,18",
    interpretation:
      "Eine Rose inmitten von Dornen zu malen war kein Zufall. Manchmal ist genau das der Kern des Glaubens: zu erkennen, dass das, was wie das Ende aussieht, in Wahrheit der Anfang von etwas Neuem ist.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "das-schaf",
    title: "Das Schaf",
    image: "Images/IMG_1173.jpeg",
    alt: "Gemälde eines Schafes mit strukturierter Wolle, blauem Auge und silberner Schleife, verziert mit hängenden Kristallen",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl, Strukturpaste und angebrachte Glasperlen auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Die Wolle dieses Schafes ist nicht flach gemalt, sondern regelrecht aufgetragen — Schicht für Schicht, bis die Oberfläche anfing, wie echtes Fell zu wirken. Kleine Kristalle wurden eingearbeitet, die das Licht im Raum auffangen, fast wie Tau am frühen Morgen. Ein Bild, das man berühren möchte, bevor man es versteht.",
    symbolism:
      "Das Schaf steht für Anvertrauen und die Geborgenheit, die in einer führenden Hand liegt. Die glitzernden Details erinnern daran, dass Nachfolge nicht grau und pflichtbewusst sein muss — sie kann leuchten.",
    christianMeaning:
      "Das Bild des Schafes, das einem Hirten folgt, ist eines der ältesten und zärtlichsten Bilder für die Beziehung zwischen Gott und Mensch. Es beschreibt, wie Jesus selbst über sich sprach: als guter Hirte, der sein Leben für die Schafe lässt — nicht aus Pflicht, sondern aus Liebe.",
    bibleVerse: "„Der HERR ist mein Hirte, mir wird nichts mangeln.“ — Psalm 23,1",
    interpretation:
      "Ein Schaf findet seinen Weg nicht durch eigene Orientierung, sondern durch die Stimme, der es vertraut. Die Frage, die dieses Bild stellt, ist keine nach Fähigkeit, sondern nach Vertrauen: Kenne ich die Stimme, der ich folge?",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "lamm",
    title: "Lamm",
    image: "Images/IMG_1196.jpeg",
    alt: "Gemälde eines jungen Lammes mit lockiger, glitzernder Wolle und einem goldenen Schmetterling mit Perle am Ohr",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl auf Leinwand mit angebrachtem Metallschmetterling und Perle",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Ein kleiner goldener Schmetterling aus Filigranmetall, eine einzelne Perle — Details, die sich niemandem aufdrängen, die man aber nicht mehr vergisst, sobald man sie entdeckt hat. So wie Gnade oft im Kleinen beginnt, bevor sie das ganze Bild verändert.",
    symbolism: "Das Lamm steht für Unschuld und stellvertretendes Opfer. Der Schmetterling daneben — Symbol der Verwandlung — deutet an, dass aus dieser Unschuld etwas Neues hervorgeht.",
    christianMeaning:
      "Das Lamm Gottes ist eines der ältesten christlichen Christussymbole — Zeichen der Sanftmut und des Opfers, das Versöhnung schafft. Jesus ging den Weg des Opferlamms freiwillig, damit jeder, der an ihn glaubt, nicht mehr durch eigene Opfer vor Gott bestehen muss.",
    bibleVerse:
      "„Siehe, das ist Gottes Lamm, das der Welt Sünde trägt!“ — Johannes 1,29",
    interpretation:
      "Ein Lamm wehrt sich nicht gegen das, was mit ihm geschieht. Genau darin liegt die stille Kraft dieses Bildes: Hingabe, die nicht schwach ist, sondern die größte Stärke überhaupt.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "kleines-lamm",
    title: "Kleines Lamm",
    image: "Images/IMG_1565.jpeg",
    alt: "Gemälde eines kleinen, zarten Lammes mit lockiger Wolle und einem goldenen Schmetterling mit Perle am Ohr",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl auf Leinwand mit angebrachtem Metallschmetterling und Perle",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Nicht jedes Bild muss neu erfunden werden — manche Motive verdienen ein zweites, zarteres Echo. Dieses kleinere Lamm entstand als leiserer Gegenpart zu seinem größeren Geschwister: dieselbe Sprache, aber sanfter im Ton.",
    symbolism:
      "Die zarteren Proportionen und der weichere Blick betonen Verletzlichkeit — nicht als Schwäche, sondern als das, was Schutz und Nähe erst möglich macht.",
    christianMeaning:
      "Als Gegenstück zu „Lamm“ betont dieses kleinere, zartere Werk die Verletzlichkeit, die unter Gottes Schutz getragen wird. Gott verachtet nicht das Kleine und Schwache — er sucht es gerade dort auf, wo es sich selbst nicht helfen kann.",
    bibleVerse: "„Er wird die Lämmer auf seinen Arm nehmen und im Busen tragen.“ — Jesaja 40,11",
    interpretation:
      "Es gibt eine Kraft darin, klein sein zu dürfen. Dieses Bild lädt dazu ein, genau das anzunehmen, statt es zu verstecken.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "gehalten",
    title: "Gehalten",
    image: "Images/IMG_1548.jpeg",
    alt: "Gemälde zweier Hände, die ein kleines Lamm behutsam halten, darüber eine Dornenkrone als Heiligenschein",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: PLACEHOLDER.technique,
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Die Idee für dieses Bild war denkbar einfach und gerade deshalb schwer umzusetzen: zwei Hände, die halten, ohne festzuhalten. Kein Zwang, keine Kontrolle — nur Schutz. Erst als die Dornenkrone als Heiligenschein darüber gesetzt wurde, war klar, wessen Hände das eigentlich sind.",
    symbolism:
      "Zwei Hände tragen behutsam ein Lamm; die Dornenkrone darüber verbindet Zartheit und Leid zu einem Bild bedingungsloser Fürsorge. Es sind durchbohrte Hände, die hier halten.",
    christianMeaning:
      "Ein Sinnbild dafür, dass niemand aus Gottes Hand fällt — gehalten, selbst dort, wo Dornen sind. Die Hände, die die Nägel trugen, sind dieselben Hände, die jeden Menschen tragen, der sich ihnen anvertraut.",
    bibleVerse:
      "„Fürchte dich nicht, denn ich bin mit dir; weiche nicht, denn ich bin dein Gott.“ — Jesaja 41,10",
    interpretation:
      "Halten heißt nicht, dass nichts mehr wehtut. Es heißt, dass man nicht allein fällt. Dieses Bild ist ein stiller Widerspruch gegen jede Angst, vergessen zu sein.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "ruhe",
    title: "Ruhe",
    image: "Images/IMG_1549.jpeg",
    alt: "Gemälde eines ruhenden Lammkopfes mit schwarz-goldener Glitzer-Wolle, silberner Schleife und Rosen-Rankenmuster am Rand",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl, Strukturpaste und Glitter auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Nach mehreren Bildern, die von Leid und Kampf erzählten, sollte dieses Werk das Gegenteil zeigen: ein Tier, das sich einfach niederlegt. Kein Aufbäumen, kein Widerstand — nur das stille Vertrauen, dass es an diesem Ort sicher ist.",
    symbolism:
      "Die ruhige Haltung des Tieres spiegelt einen Frieden, der von außen geschenkt wird, nicht selbst erzeugt. Die herabfließenden Farbschlieren im Hintergrund wirken wie Wasser, das zur Ruhe kommt.",
    christianMeaning: "Ein Bild der Ruhe, die entsteht, wenn man sich in Gottes Führung fallen lässt. Diese Ruhe ist keine Leistung — sie ist eine Gabe an jeden, der aufhört, sich selbst zu retten, und sich stattdessen führen lässt.",
    bibleVerse: "„Er weidet mich auf einer grünen Aue und führet mich zum frischen Wasser.“ — Psalm 23,2",
    interpretation:
      "Ruhe ist selten das Ergebnis von weniger Umständen — meistens ist sie das Ergebnis von mehr Vertrauen. Dieses Bild lädt dazu ein, sich genau das zu erlauben.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "unschuld",
    title: "Unschuld",
    image: "Images/IMG_1569.jpeg",
    alt: "Gemälde eines Lammes mit blauen Augen, einer echten getrockneten Rose am Ohr und einem angebrachten Kreuzanhänger mit Perlen um den Hals",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl auf Leinwand mit getrockneter Rose und angebrachtem Perlenkreuz",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Ein echtes Kreuz, verziert mit Perlen, wurde diesem Lamm buchstäblich um den Hals gelegt — kein gemaltes Symbol, sondern ein reales Objekt, das aus der Leinwand heraustritt. Daneben eine getrocknete Rose: schön, aber vergänglich. Der Kontrast zwischen dem bleibenden Kreuz und der verwelkenden Blüte war von Anfang an die eigentliche Aussage.",
    symbolism:
      "Das goldene Kreuz um den Hals des Lammes und die getrocknete Rose verbinden Reinheit mit der Vergänglichkeit des Irdischen. Alles Schöne welkt — außer dem, was am Kreuz hängt.",
    christianMeaning:
      "Unschuld, die durch das Kreuz geschützt bleibt — selbst wenn alles andere vergeht. Was Menschen aus eigener Kraft nie bewahren könnten, bewahrt Christus: eine Reinheit, die nicht von uns selbst kommt, sondern uns geschenkt wird.",
    bibleVerse: "„So seid ihr nun nicht mehr Gäste und Fremdlinge, sondern Mitbürger der Heiligen und Gottes Hausgenossen.“ — Epheser 2,19",
    interpretation:
      "Alles an diesem Bild ist vergänglich außer dem kleinen Kreuz um den Hals. Vielleicht ist das die ehrlichste Zusammenfassung des Glaubens: Alles verwelkt, nur das nicht.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "eva",
    title: "Eva",
    image: "Images/IMG_1194.jpeg",
    alt: "Gemälde von Eva unter dem Baum der Erkenntnis mit rotem Apfel, texturierten Blättern und Rosenmuster am Boden",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl und Blattgold auf Leinwand mit strukturierter Rinde",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Jede Geschichte der Menschheit beginnt mit diesem Moment: eine Frau, ein Baum, eine Frucht, eine Entscheidung. Dieses Bild wollte die Szene nicht anklagend zeigen, sondern ehrlich — mit all der Schönheit, die die Versuchung immer auch hat, sonst wäre sie keine.",
    symbolism:
      "Der texturierte Baum mit Blattgold-Akzenten, der leuchtend rote Apfel und das Rosenmuster am Boden erzählen von einem Garten, der vollkommen schön war — und in dem trotzdem etwas zerbrach.",
    christianMeaning:
      "Eva steht in der biblischen Erzählung am Anfang der Menschheitsgeschichte — zwischen Erschaffung, Fall und der Hoffnung auf Erlösung. Genau in diesem Garten gab Gott bereits das erste Versprechen: dass ein Nachkomme kommen würde, der die Trennung wieder heilt, die hier begann.",
    bibleVerse: "„Und Gott schuf den Menschen ihm zum Bilde.“ — 1. Mose 1,27",
    interpretation:
      "Die Geschichte von Eva ist nicht nur Anklage, sondern Anfang eines längeren Weges. Wo der Bruch geschah, kündigt sich schon die Heilung an — das ist die stille Hoffnung, die in diesem Bild mitschwingt.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "aufbluehendes-herz",
    title: "Aufblühendes Herz",
    image: "Images/IMG_5202.jpg",
    alt: "Gemischte Medien: ein steinern strukturiertes Herz mit einem Riss, aus dem ein blühender Zweig mit weißen Blüten wächst",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl und Strukturpaste auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Dieses Bild entstand aus einer einfachen, fast trotzigen Idee: Was, wenn genau der Ort, an dem etwas zerbrochen ist, der Ort wird, an dem etwas Neues wächst? Die Struktur des Herzens wurde bewusst hart und narbig angelegt, fast wie Stein — und mitten hinein wurde ein zarter blühender Zweig gesetzt.",
    symbolism:
      "Das steinerne, narbige Herz trägt einen Riss — und genau aus diesem Riss wächst ein blühender Zweig. Bruch und neues Leben stehen nicht gegeneinander, sondern ineinander.",
    christianMeaning:
      "Ein Bild dafür, dass Gott aus einem verhärteten Herzen ein lebendiges macht — Verwandlung, die gerade dort beginnt, wo etwas zerbrochen ist. Das ist das Evangelium in einem Satz: Wo Menschen nur Bruch sehen, beginnt Gott zu heilen.",
    bibleVerse:
      "„Und ich will euch ein neues Herz und einen neuen Geist in euch geben und will das steinerne Herz aus eurem Fleisch wegnehmen und euch ein fleischernes Herz geben.“ — Hesekiel 36,26",
    interpretation:
      "Wer einen Riss im eigenen Herzen trägt, findet sich in diesem Bild wieder — und vielleicht auch die leise Erlaubnis, dass genau dort etwas Neues beginnen darf.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "liebe",
    title: "Liebe",
    image: "Images/IMG_5207.jpg",
    alt: "Gemischte Medien: ein weißes Keramikherz mit der Prägung 'Liebe', umgeben von gemalten weißen Blütenzweigen vor Blattgold-Hintergrund",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl und Blattgold auf Leinwand mit Keramikherz",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Manchmal reicht ein einziges Wort. Statt es zu malen, wurde es geprägt — in ein reales, kleines Keramikherz, das aus der Leinwand heraustritt. Alles andere im Bild, die Blütenzweige, das Blattgold, ordnet sich diesem einen Wort unter.",
    symbolism:
      "Das plastische Keramikherz mit der Prägung „Liebe“ tritt aus der Fläche heraus, umrahmt von zart blühenden Zweigen vor Blattgold — als wüchse alles Schöne im Bild aus diesem einen Wort hervor.",
    christianMeaning:
      "Die Liebe steht im Zentrum — nicht als Gefühl, sondern als das Wesen Gottes selbst, aus dem alles andere wächst. Das Evangelium ist im Kern keine Regel und keine Leistung, sondern eine Liebe, die zuerst gehandelt hat, bevor irgendjemand sie verdient hatte.",
    bibleVerse: "„Gott ist Liebe.“ — 1. Johannes 4,8",
    interpretation:
      "Nicht: Gott hat Liebe. Sondern: Gott ist Liebe. Dieser kleine Unterschied trägt das ganze Bild — und mehr als das.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "danke",
    title: "Danke",
    image: "Images/IMG_5208.jpg",
    alt: "Gemischte Medien: ein weißes Keramikherz mit der Prägung 'Danke' und einer Feder, umgeben von gemalten Blütenzweigen vor Blattgold-Hintergrund",
    year: "2026",
    category: "glaube",
    categoryLabel: "Glaube & Symbolik",
    technique: "Acryl und Blattgold auf Leinwand mit Keramikherz",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Als Gegenstück zu „Liebe“ entstand dieses Bild fast von selbst — denn wer die Liebe Gottes einmal wirklich begreift, dem bleibt kaum etwas anderes übrig als Dankbarkeit. Die leichte Feder daneben sollte zeigen, dass dieser Dank kein schweres Pflichtgefühl ist, sondern etwas Leichtes.",
    symbolism:
      "Als Gegenstück zu „Liebe“ trägt dieses Herz das Wort „Danke“ — begleitet von einer leichten Feder, die auf Dankbarkeit als etwas Schwereloses verweist.",
    christianMeaning:
      "Dankbarkeit als Grundhaltung des Glaubens — nicht abhängig von den Umständen, sondern eine bewusste Antwort auf Gottes Treue. Wer verstanden hat, was ihm in Christus geschenkt wurde, kann gar nicht anders, als zu danken, selbst mitten in schweren Zeiten.",
    bibleVerse:
      "„Seid dankbar in allen Dingen; denn das ist der Wille Gottes in Christus Jesus für euch.“ — 1. Thessalonicher 5,18",
    interpretation:
      "Dankbarkeit ändert selten die Umstände — aber sie ändert fast immer den Blick auf sie. Dieses Bild ist eine leise Einladung, genau das zu üben.",
    availability: "Auf Anfrage",
    featured: false,
  },

  // ── TIERE & NATUR ────────────────────────────────────────────────
  {
    id: "sanftmut",
    title: "Sanftmut",
    image: "Images/IMG_1489.jpeg",
    alt: "Nahaufnahme eines Kuhkopfes mit weichem Fell und sanftem Blick in warmen Braun- und Goldtönen",
    year: "2026",
    category: "tiere",
    categoryLabel: "Tiere & Natur",
    technique: "Acryl auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Die Bibel vergleicht Gottes Volk gelegentlich mit Herdentieren, die ihren Hirten kennen — und genau diesen erkennenden Blick sollte dieses Bild einfangen. Kein wilder, scheuer Blick, sondern einer, der weiß, wo er hingehört.",
    symbolism:
      "Die extreme Nähe der Perspektive und die weichen, warmen Farbtöne nehmen der Größe des Tieres jede Bedrohlichkeit — was bleibt, ist reine Sanftmut.",
    christianMeaning:
      "Sanftmut ist im Glauben keine Schwäche, sondern eine Frucht des Geistes — die Kraft, sich führen zu lassen, statt den eigenen Willen durchzusetzen. Selbst ein großes, kräftiges Tier kann von einer sanften Hand geleitet werden, wenn es seinem Hirten vertraut.",
    bibleVerse: "„Ein Ochse kennt seinen Herrn und ein Esel die Krippe seines Herrn; aber Israel kennt's nicht.“ — Jesaja 1,3",
    interpretation:
      "Selbst ein Tier kann seinen Versorger erkennen. Dieses Bild stellt leise die Frage, die der Prophet stellte: Erkennen wir Menschen, wem wir gehören?",
    availability: "Auf Anfrage",
    featured: true,
  },
  {
    id: "treu-und-wahrhaftig",
    title: "Treu und Wahrhaftig",
    image: "Images/IMG_1202.jpeg",
    alt: "Gemälde eines weißen Pferdes von vorne mit glitzernder, wehender Mähne vor Blattgold-Rahmen",
    year: "2026",
    category: "tiere",
    categoryLabel: "Tiere & Natur",
    technique: "Acryl auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Ein weißes Pferd trägt in der biblischen Bildsprache ein ganz bestimmtes Gewicht — es ist das Tier, auf dem der wiederkommende Christus selbst reitet. Dieses Bild wollte nichts Kriegerisches zeigen, sondern reine, leuchtende Klarheit: ein Wesen, das keine Täuschung kennt.",
    symbolism:
      "Das weiße Pferd trägt seit jeher Konnotationen von Reinheit und einer Kraft, die in Ruhe liegt. Die glitzernde Mähne im Wind erinnert daran, dass diese Kraft in Bewegung ist, nicht erstarrt.",
    christianMeaning:
      "In der Offenbarung reitet Christus bei seiner Wiederkunft auf einem weißen Pferd, und sein Name lautet „Treu und Wahrhaftig“. Dieses Bild erinnert daran, dass die Geschichte nicht offen ausgeht — sie hat ein Ziel, und dieses Ziel trägt einen Namen, der hält, was er verspricht.",
    bibleVerse: "„Und ich sah den Himmel aufgetan; und siehe, ein weißes Pferd. Und der darauf saß, hieß Treu und Wahrhaftig.“ — Offenbarung 19,11",
    interpretation:
      "In einer Welt voller gebrochener Versprechen ist „treu und wahrhaftig“ fast ein Fremdwort geworden. Dieses Bild hält daran fest, dass es jemanden gibt, auf den diese Worte wirklich zutreffen.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "standhaft",
    title: "Standhaft",
    image: "Images/IMG_1210.jpeg",
    alt: "Gemälde eines schottischen Hochlandrindes mit zottigem Fell, Hörnern und goldenen Glitzerakzenten",
    year: "2026",
    category: "tiere",
    categoryLabel: "Tiere & Natur",
    technique: PLACEHOLDER.technique,
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Ein Hochlandrind steht meist unbeeindruckt im rauesten Wetter — dichtes Fell, gesenkter Kopf, unbewegt. Genau diese Unerschütterlichkeit, nicht die imposanten Hörner, war der eigentliche Anlass für dieses Bild.",
    symbolism: "Das zottige Fell und die kräftige Statur stehen für eine Widerstandskraft, die von innen kommt — nicht Härte, sondern Standfestigkeit.",
    christianMeaning:
      "Der Glaube verspricht keine Abwesenheit von Stürmen, sondern die Kraft, in ihnen stehen zu bleiben. Wer in Christus verwurzelt ist, kann rauem Wetter standhalten, ohne davongetragen zu werden.",
    bibleVerse: "„Seid stark und unverzagt … denn der HERR, dein Gott, ist mit dir in allem, was du tun wirst.“ — Josua 1,9",
    interpretation:
      "Standhaftigkeit sieht von außen oft unspektakulär aus — bis der Sturm kommt. Dieses Bild ehrt genau diese stille, unauffällige Kraft.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "warten-auf-das-licht",
    title: "Warten auf das Licht",
    image: "Images/IMG_1124.jpeg",
    alt: "Gemälde eines aufmerksam sitzenden Hasen mit Perlenschleife am Ohr unter einer goldenen Mondscheibe",
    year: "2026",
    category: "tiere",
    categoryLabel: "Tiere & Natur",
    technique: PLACEHOLDER.technique,
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Ein Tier, das nachts wach ist, kennt eine besondere Art des Wartens — aufmerksam, aber nicht ängstlich, den Blick auf einen Punkt am Himmel gerichtet, der noch nicht hell ist. Dieses Bild wollte genau diesen Zustand malen: das Wachbleiben, bevor der Morgen kommt.",
    symbolism:
      "Die aufrechte, wache Haltung des Hasen unter der golden schimmernden Mondscheibe erzählt vom Warten in der Dunkelheit — nicht resigniert, sondern erwartungsvoll.",
    christianMeaning:
      "Der Glaube lebt oft im Wartestand — zwischen dem, was Christus schon getan hat, und dem, was er noch vollenden wird. Dieses Warten ist kein leeres Aushalten, sondern ein Warten mit Hoffnung, weil die Morgendämmerung längst angekündigt ist.",
    bibleVerse: "„Meine Seele wartet auf den Herrn mehr, als die Wächter auf den Morgen warten.“ — Psalm 130,6",
    interpretation:
      "Wer schon einmal eine lange Nacht durchwacht hat, kennt dieses Gefühl: die Sehnsucht nach dem ersten Lichtstreifen. Dieses Bild erinnert daran, dass das Licht kommt — auch wenn die Nacht noch dauert.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "furchtlos",
    title: "Furchtlos",
    image: "Images/IMG_1225.jpeg",
    alt: "Gemälde eines wilden, dunklen Hasen, aufrecht sitzend, mit wachsamen bernsteinfarbenen Augen vor grauem Untergrund",
    year: "2026",
    category: "tiere",
    categoryLabel: "Tiere & Natur",
    technique: PLACEHOLDER.technique,
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Ein wildes Tier ohne jeden Schmuck, ohne beruhigende Geste — nur der wache Blick eines Geschöpfes, das eigentlich zu den scheuesten Tieren überhaupt gehört und hier trotzdem aufrecht und offen dasitzt. Genau dieser Widerspruch war der Ausgangspunkt.",
    symbolism: "Das struppige, ungezähmte Fell und der direkte Blick stehen für eine Wildheit, die nicht bedrohlich ist, sondern echt — ein Geschöpf, das genauso sein darf, wie es geschaffen wurde.",
    christianMeaning:
      "Gott sorgt für seine Geschöpfe, auch die scheuesten und wildesten unter ihnen — und wenn schon sie ohne Angst leben dürfen, wie viel mehr die Menschen, die Gott als seine Kinder kennt. Furchtlosigkeit im Glauben wächst nicht aus eigener Stärke, sondern aus dem Wissen, gesehen und versorgt zu sein.",
    bibleVerse: "„Fürchtet euch nicht! Ihr seid mehr wert als viele Sperlinge.“ — Matthäus 10,31",
    interpretation:
      "Ein wildes Tier ohne Angst zu malen war ein bewusster Kontrast zu allem, was normalerweise fluchtbereit ist. Vielleicht ist das die Einladung dieses Bildes: einmal nicht in Habachtstellung zu leben.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "zwei-sind-besser",
    title: "Zwei sind besser",
    image: "Images/FullSizeRender.jpeg",
    alt: "Gemälde zweier Hasen, Nase an Nase, die sich sanft an den Pfoten halten",
    year: "2026",
    category: "tiere",
    categoryLabel: "Tiere & Natur",
    technique: PLACEHOLDER.technique,
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Zwei Tiere, die sich zuwenden statt voneinander weg — eine kleine, unspektakuläre Geste, die trotzdem alles über Beziehung erzählt. Es sollte kein romantisches Bild werden, sondern eines über Gemeinschaft in jeder Form: Freundschaft, Familie, Kirche.",
    symbolism:
      "Die Berührung der Nasen und das sanfte Halten der Pfoten erzählen von Nähe, die nicht erzwungen, sondern gesucht wird.",
    christianMeaning:
      "Der Glaube war nie als einsamer Weg gedacht. Gott selbst lebt in Gemeinschaft — Vater, Sohn und Geist — und ruft auch Menschen dazu, einander zu tragen, statt allein zu bestehen.",
    bibleVerse:
      "„Zwei sind besser daran als einer allein, denn sie haben von ihrer Mühe guten Lohn. … Und wenn jemand den Überlegenen packt, so widerstehen ihm zwei.“ — Prediger 4,9.12",
    interpretation:
      "Kaum ein Bild in dieser Sammlung ist so einfach — und kaum eines trifft so genau, was oft am meisten fehlt: jemanden, der einfach da ist.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "kind-des-koenigs",
    title: "Kind des Königs",
    image: "Images/IMG_1116 2.jpeg",
    alt: "Gemälde eines französischen Bulldogge mit aufgesetzter goldener Krone vor Ranken mit weißen Blüten",
    year: "2026",
    category: "tiere",
    categoryLabel: "Tiere & Natur",
    technique: "Acryl auf Leinwand mit angebrachter Kronen-Applikation",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Eine kleine Hunde-Persönlichkeit mit einer viel zu großen, viel zu prächtigen Krone — das sollte zuerst einfach charmant sein. Doch je länger das Bild wuchs, desto mehr wurde daraus eine Aussage über Würde, die nicht verdient, sondern verliehen wird.",
    symbolism:
      "Die aufgesetzte, plastische Krone wirkt bewusst zu groß und zu prunkvoll für ein gewöhnliches Haustier — Würde, die von außen verliehen wird, nicht selbst erarbeitet.",
    christianMeaning:
      "Wer an Christus glaubt, wird nicht Diener, sondern Kind — mit allen Rechten, die dazugehören. Diese königliche Würde hat niemand sich selbst verdient; sie wird geschenkt, so wie eine Krone aufgesetzt wird.",
    bibleVerse: "„Ihr aber seid das auserwählte Geschlecht, die königliche Priesterschaft.“ — 1. Petrus 2,9",
    interpretation:
      "Eine Krone, die offensichtlich zu groß ist, erinnert daran, dass wir in diese Würde erst noch hineinwachsen — und dass sie uns trotzdem schon jetzt gehört.",
    availability: "Auf Anfrage",
    featured: true,
  },
  {
    id: "neu-geboren",
    title: "Neu geboren",
    image: "Images/IMG_1175.jpeg",
    alt: "Gemälde eines jungen, weißen Kalbes mit großen dunklen Augen und zottigem Fell vor Blattgold-Rahmen",
    year: "2026",
    category: "tiere",
    categoryLabel: "Tiere & Natur",
    technique: PLACEHOLDER.technique,
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Ein junges Tier, das die Welt gerade erst kennenlernt — offene, große Augen, noch ohne die Vorsicht, die mit der Zeit kommt. Dieses Bild sollte genau diesen ersten, unverbrauchten Blick festhalten.",
    symbolism: "Das weiche, helle Fell und die großen, offenen Augen des Kalbes stehen für einen Anfang, der noch ganz unbeschrieben ist.",
    christianMeaning:
      "Im Glauben ist niemand dazu verurteilt, in der eigenen Vergangenheit zu bleiben. Wer sich Christus zuwendet, fängt tatsächlich neu an — nicht als Wiederholung, sondern als echte Neugeburt.",
    bibleVerse: "„Es sei denn, dass jemand von neuem geboren werde, kann er das Reich Gottes nicht sehen.“ — Johannes 3,3",
    interpretation:
      "Ein neuer Anfang ist nie eine Kleinigkeit. Dieses Bild erinnert daran, dass Gott genau darin spezialisiert ist: aus alt neu machen.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "hahn",
    title: "Hahn",
    image: "Images/IMG_1582.jpg",
    alt: "Gemälde eines Hahns mit rotem Kamm und violett-grauem, zerzaustem Gefieder vor grauem Hintergrund",
    year: "2026",
    category: "tiere",
    categoryLabel: "Tiere & Natur",
    technique: PLACEHOLDER.technique,
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Kaum ein Tier trägt in der biblischen Erzählung eine so schmerzhafte und zugleich hoffnungsvolle Doppelrolle wie der Hahn: Zeuge eines Verrats und zugleich Ankündiger eines neuen Tages. Dieses Bild wollte beides zulassen, ohne eines davon zu verstecken.",
    symbolism:
      "Der wache, direkte Blick des Hahns und sein aufgestellter Kamm stehen für Wachsamkeit und den Anbruch eines neuen Tages.",
    christianMeaning:
      "Der Hahn erinnert an die Verleugnung des Petrus und den Ruf zur Umkehr — und zugleich, mit dem Krähen am Morgen, an einen neuen Anfang. Petrus wurde trotz seines Versagens nicht verstoßen, sondern wiederhergestellt. Genau das ist die Zusage an jeden, der glaubt, zu weit gegangen zu sein, um zurückzukehren.",
    bibleVerse:
      "„Und alsbald krähte der Hahn. Da gedachte Petrus an das Wort Jesu … und ging hinaus und weinte bitterlich.“ — Matthäus 26,74-75",
    interpretation:
      "Petrus' größter Fehler wurde nicht sein letztes Wort. Dieses Bild erinnert daran, dass ein Scheitern selten das Ende der Geschichte ist, sondern oft der Moment, in dem Umkehr beginnt.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "demut",
    title: "Demut",
    image: "Images/IMG_5273.jpg",
    alt: "Gemälde eines jungen Eselsfüllens von vorne mit großen aufgestellten Ohren, dunklem zottigem Fell und wachem Blick vor warmem braun-mauve Hintergrund",
    year: "2026",
    category: "tiere",
    categoryLabel: "Tiere & Natur",
    technique: PLACEHOLDER.technique,
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Ein Eselsfüllen, das direkt in den Betrachter blickt, mit Ohren, die fast größer wirken als der ganze Kopf. Es gibt kaum ein unscheinbareres Tier in der Bibel als den Esel — und genau das war der Reiz: ein Wesen zu malen, das niemand für königlich hält, und darin die stille Größe zu entdecken, die es tatsächlich trägt.",
    symbolism:
      "Die überdimensionalen Ohren und der weiche, wache Blick des jungen Tieres erzählen von Verletzlichkeit ohne Angst. Das zottige, ungeordnete Fell und die warmen, erdigen Farbtöne holen dieses unscheinbare Tier aus jeder Randnotiz heraus und stellen es mitten ins Licht.",
    christianMeaning:
      "Kein Pferd, kein Löwe — ein Esel war es, auf dem Jesus in Jerusalem einzog, als Erfüllung einer jahrhundertealten Prophezeiung. Ein König, der sich nicht auf einem Streitross, sondern auf einem jungen Lasttier zeigt, kehrt jede menschliche Vorstellung von Macht um. Genau darin liegt das Evangelium: Gottes Größe zeigt sich nicht im Prunk, sondern in der Demut.",
    bibleVerse:
      "„Siehe, dein König kommt zu dir sanftmütig und reitet auf einem Esel, auf einem Füllen der Lastesel.“ — Matthäus 21,5",
    interpretation:
      "Ein Esel wird nie mit Macht in Verbindung gebracht — und genau deshalb wählte Christus ihn. Dieses Bild fragt leise, ob wir Größe dort erkennen würden, wo sie sich wirklich zeigt: nicht im Lauten, sondern im Demütigen.",
    availability: "Auf Anfrage",
    featured: false,
  },

  // ── PORTRÄT & STILLE MOMENTE ─────────────────────────────────────
  {
    id: "getragen-von-gnade",
    title: "Getragen von Gnade",
    image: "Images/IMG_1152.jpeg",
    alt: "Gemälde einer Ballerina in strukturiertem weißem Kleid mit Perlenkette, in Spitzenschuhen, mit angebrachter Rose und Sternanhänger",
    year: "2026",
    category: "portrait",
    categoryLabel: "Porträt & Stille Momente",
    technique: "Acryl und Strukturpaste auf Leinwand mit angebrachter Rose, Perlen und Applikationen",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Eine Tänzerin auf Spitzenschuhen trägt ihr gesamtes Gewicht auf der kleinstmöglichen Fläche — und schafft es trotzdem, schwerelos zu wirken. Genau dieses Paradox, Anstrengung, die wie Leichtigkeit aussieht, war der Anlass für dieses Bild.",
    symbolism:
      "Das strukturierte, fast schwerelos wirkende Kleid und die aufrechte, tragende Haltung der Figur erzählen von Anmut, die getragen wird, statt aus eigener Kraft zu stehen.",
    christianMeaning:
      "So wie eine Tänzerin nicht aus eigener Muskelkraft schwebt, sondern durch jahrelange Übung und ein tragendes System aus Balance, trägt Gottes Gnade jeden Menschen, der sich nicht mehr aus eigener Kraft aufrecht halten kann. Gnade ist kein Verdienst — sie ist das, was uns hält, wenn wir es selbst nicht mehr könnten.",
    bibleVerse: "„Denn aus Gnade seid ihr selig geworden durch Glauben, und das nicht aus euch: Gottes Gabe ist es.“ — Epheser 2,8",
    interpretation:
      "Anmut, die man sieht, ist fast immer das Ergebnis von etwas Unsichtbarem, das trägt. Dieses Bild fragt leise: Worauf steht das eigene Leben eigentlich?",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "stille",
    title: "Stille",
    image: "Images/IMG_1150.jpeg",
    alt: "Gemälde einer betenden Gestalt mit langem, wehendem Haar vor goldenem Heiligenschein, die Hand ruhig auf der Brust",
    year: "2026",
    category: "portrait",
    categoryLabel: "Porträt & Stille Momente",
    technique: PLACEHOLDER.technique,
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Als Gegenstück zu den lauten, kämpferischen Bildern dieser Sammlung sollte dieses Werk eine einzige Bewegung einfrieren: das Innehalten. Kein Wort, keine Geste, die etwas fordert — nur ein gesenkter Blick und ein goldener Kreis, der andeutet, dass diese Stille nicht leer ist.",
    symbolism:
      "Das fließende Haar und der goldene Heiligenschein umrahmen ein Gesicht, das ganz nach innen gewandt ist — eine Stille, die nicht Leere bedeutet, sondern Fülle.",
    christianMeaning:
      "In einer lauten Welt ist Stille vor Gott oft die schwerste Übung des Glaubens — und zugleich die notwendigste. Erst wer still wird, hört die Stimme, die schon die ganze Zeit gesprochen hat.",
    bibleVerse: "„Seid stille und erkennet, dass ich Gott bin.“ — Psalm 46,11",
    interpretation:
      "Diese Aufforderung ist kein sanfter Vorschlag, sondern ein Befehl: sein zu lassen, was man sonst ständig kontrollieren will. Dieses Bild ist eine Einladung, genau das für einen Moment zu üben.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "angesicht",
    title: "Angesicht",
    image: "Images/IMG_1164.jpeg",
    alt: "Gemälde eines Gesichts mit langem braunem Haar, Bart und leuchtend blauen Augen, die den Betrachter direkt ansehen, mit goldenen Glitzerakzenten",
    year: "2026",
    category: "portrait",
    categoryLabel: "Porträt & Stille Momente",
    technique: "Acryl auf Leinwand mit Glitter-Akzenten",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Die meisten Bilder dieser Sammlung zeigen Symbole — dieses hier zeigt einen Blick. Kein Profil, kein Ausweichen: ein Gesicht, das den Betrachter direkt ansieht, mit Augen, die nicht loslassen. Dieses Bild sollte kein Objekt zum Betrachten sein, sondern ein Gegenüber.",
    symbolism:
      "Der direkte, unausweichliche Blick durchbricht jede Distanz zwischen Bild und Betrachter. Die goldenen Glitzerakzente im Hintergrund deuten eine Gegenwart an, die über das rein Menschliche hinausgeht.",
    christianMeaning:
      "Gott hat kein Interesse an einer Beziehung aus der Ferne. In Christus wurde sein Angesicht sichtbar, ansprechbar, greifbar — kein fernes Prinzip, sondern ein Gegenüber, das jeden Menschen persönlich ansieht.",
    bibleVerse: "„Der HERR lasse sein Angesicht leuchten über dir und sei dir gnädig.“ — 4. Mose 6,25",
    interpretation:
      "Ein Bild, das einen ansieht, lässt sich schwerer aus der Distanz betrachten. Vielleicht ist das genau der Punkt: Der Glaube beginnt dort, wo man aufhört, nur zuzuschauen.",
    availability: "Auf Anfrage",
    featured: true,
  },
  {
    id: "groessere-liebe",
    title: "Größere Liebe",
    image: "Images/IMG_1215.jpeg",
    alt: "Gemälde einer Tänzerin in einem federleichten, glitzernden weißen Kleid mit einer echten roten Rose an einer grünen Schleife",
    year: "2026",
    category: "portrait",
    categoryLabel: "Porträt & Stille Momente",
    technique: "Acryl und Strukturpaste auf Leinwand mit echter Rose und Schleife",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Eine einzelne rote Rose inmitten von reinem Weiß — dieser Kontrast war von Anfang an gesetzt. Alles am Kleid ist leicht, fast schwerelos, aber die Rose trägt Gewicht: Farbe des Lebens, Farbe der Hingabe.",
    symbolism:
      "Die föderleichte, glitzernde Robe steht in bewusstem Kontrast zur satten roten Rose in ihrer Mitte — Leichtigkeit und Hingabe in einem Bild vereint.",
    christianMeaning:
      "Die tiefste Liebe zeigt sich nicht in Worten, sondern in dem, was sie zu geben bereit ist. Christus hat sein Leben gegeben — nicht aus Zwang, sondern aus freier, größter Liebe.",
    bibleVerse: "„Niemand hat größere Liebe als die, dass er sein Leben lässt für seine Freunde.“ — Johannes 15,13",
    interpretation:
      "Eine rote Rose ist eines der ältesten Symbole der Liebe — und doch verblasst jedes menschliche Bild davon neben dem, was am Kreuz geschah. Dieses Werk versucht trotzdem, etwas davon einzufangen.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "sorget-nicht",
    title: "Sorget nicht",
    image: "Images/IMG_5196.jpg",
    alt: "Gemälde von drei cremefarbenen Rosen an einer diagonal verlaufenden Ranke mit dunklen, mauvefarbenen Blättern",
    year: "2026",
    category: "portrait",
    categoryLabel: "Porträt & Stille Momente",
    technique: "Acryl auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Drei Blüten an einer schlichten Ranke, ohne Vase, ohne Arrangement — einfach so, wie sie wachsen. Die Idee dahinter war, etwas völlig Müheloses zu malen: Schönheit, die niemand herstellen musste.",
    symbolism:
      "Die diagonal verlaufende, ungezähmte Ranke mit ihren drei Blüten wirkt organisch und unangestrengt gewachsen, nicht komponiert.",
    christianMeaning:
      "Wenn schon Blumen, die weder säen noch ernten, in solcher Schönheit stehen, wie viel mehr wird Gott für die sorgen, die er als seine Kinder kennt. Diese Zusage ist eine direkte Einladung, die eigene Sorge loszulassen.",
    bibleVerse:
      "„Schauet die Lilien auf dem Feld, wie sie wachsen: sie arbeiten nicht, auch spinnen sie nicht … Sollte er das nicht viel mehr für euch tun, o ihr Kleingläubigen?“ — Matthäus 6,28.30",
    interpretation:
      "Eine Blume muss sich um nichts bemühen, um schön zu sein. Dieses Bild fragt leise, wie viel Kraft wir mit Sorgen verbrauchen, die wir eigentlich abgeben dürften.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "lieblicher-geruch",
    title: "Lieblicher Geruch",
    image: "Images/IMG_5198.jpg",
    alt: "Gemälde eines Straußes aus drei mauvefarbenen Rosen mit dunklen Blättern vor grauem Hintergrund",
    year: "2026",
    category: "portrait",
    categoryLabel: "Porträt & Stille Momente",
    technique: "Acryl auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Ein Strauß ist immer eine Gabe — niemand pflückt Blumen nur für sich selbst. Genau dieser Gedanke des bewussten Schenkens stand hinter diesem Bild: etwas Schönes, absichtlich zusammengestellt, um weitergegeben zu werden.",
    symbolism: "Die bewusst gebündelte Anordnung der drei Rosen, anders als die frei wachsende Ranke, deutet auf Absicht hin — eine Gabe, die für jemand anderen gedacht ist.",
    christianMeaning:
      "Christus hat sich selbst als Opfergabe gegeben, die Gott als „lieblichen Geruch“ angenommen hat. Was am Kreuz geschah, war kein Zufall, sondern eine bewusste, hingebungsvolle Gabe aus Liebe.",
    bibleVerse:
      "„… wie auch Christus uns geliebt hat und hat sich selbst für uns gegeben als Gabe und Opfer, Gott zu einem süßen Geruch.“ — Epheser 5,2",
    interpretation:
      "Ein Geschenk sagt oft mehr über den Schenkenden als über das Geschenk selbst. Dieses Bild lädt dazu ein, an das größte Geschenk zu denken, das je gegeben wurde.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "bleibet-in-mir",
    title: "Bleibet in mir",
    image: "Images/IMG_5199.jpg",
    alt: "Gemälde eines ausladenden Astwerks mit mehreren grau-mauvefarbenen Rosen unterschiedlicher Größe",
    year: "2026",
    category: "portrait",
    categoryLabel: "Porträt & Stille Momente",
    technique: "Acryl auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Ein einzelner Ast wächst nie allein — er verzweigt sich, trägt mehrere Blüten, die alle aus derselben Quelle Nahrung ziehen. Dieses großformatige Geäst sollte genau das zeigen: wie viel aus einer einzigen Verbindung wachsen kann.",
    symbolism: "Das verzweigte, weitläufige Astwerk mit seinen unterschiedlich großen Blüten zeigt Vielfalt, die dennoch aus einem gemeinsamen Ursprung hervorgeht.",
    christianMeaning:
      "Jesus verglich sich selbst mit einem Weinstock und seine Nachfolger mit den Reben. Getrennt von ihm kann keine Rebe Frucht bringen — verbunden mit ihm wächst mehr, als eine einzelne Blüte je allein hervorbringen könnte.",
    bibleVerse: "„Ich bin der Weinstock, ihr seid die Reben. Wer in mir bleibt und ich in ihm, der bringt viel Frucht.“ — Johannes 15,5",
    interpretation:
      "Keine Blüte an diesem Ast fragt sich, ob sie genug Kraft hat, um zu blühen — sie hängt einfach an der Quelle. Das ist die stille Einladung dieses Bildes.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "bluehen-zu-seiner-zeit",
    title: "Blühen zu seiner Zeit",
    image: "Images/IMG_5200.jpg",
    alt: "Gemälde einer Magnolienblüte in Grau- und Cremetönen vor Blattgold-Streifen",
    year: "2026",
    category: "portrait",
    categoryLabel: "Porträt & Stille Momente",
    technique: "Acryl und Blattgold auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Magnolien blühen nur für kurze Zeit im Jahr, und niemand kann sie dazu bringen, früher zu öffnen. Dieses Bild entstand aus dem Respekt vor diesem eigenen Rhythmus — vor Schönheit, die sich nicht erzwingen lässt.",
    symbolism:
      "Die einzelne, voll erblühte Magnolie vor schimmernden Blattgold-Streifen markiert einen genauen, kostbaren Moment — nicht dauerhaft, aber vollkommen, solange er währt.",
    christianMeaning:
      "Gott hat für jede Sache eine bestimmte Zeit vorgesehen, auch wenn Menschen sie oft nicht sehen, bevor sie eintritt. Zu vertrauen, dass die eigene Zeit noch kommt, ist eine der stillsten Formen des Glaubens.",
    bibleVerse: "„Er hat alles schön gemacht zu seiner Zeit.“ — Prediger 3,11",
    interpretation:
      "Ungeduld ist oft nur die Weigerung, auf den richtigen Moment zu vertrauen. Diese Blüte erinnert daran, dass Schönheit selten auf Kommando entsteht.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "kostbarer-als-gold",
    title: "Kostbarer als Gold",
    image: "Images/IMG_5201.jpg",
    alt: "Gemälde zweier großer mauvefarbener Rosen mit Knospen vor einem Hintergrund mit Blattgold-Streifen und Goldsprenkeln",
    year: "2026",
    category: "portrait",
    categoryLabel: "Porträt & Stille Momente",
    technique: "Acryl und Blattgold auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Dieses Bild wollte zeigen, was passiert, wenn Vergängliches auf Bleibendes trifft: Blüten, die in wenigen Tagen verwelken werden, gerahmt von Blattgold, das über Jahrhunderte hält. Genau in dieser Spannung liegt seine Aussage.",
    symbolism: "Die satten Rosen und Knospen vor dem funkelnden Blattgold-Hintergrund stellen Vergängliches und Bleibendes bewusst nebeneinander.",
    christianMeaning:
      "Glaube, der durch Prüfungen hindurchgeht, wird am Ende kostbarer befunden als Gold, das im Feuer geprüft wird — und Gold selbst vergeht, während dieser Glaube bleibt.",
    bibleVerse:
      "„… damit euer Glaube als viel kostbarer erfunden werde als das vergängliche Gold, das durchs Feuer bewährt wird.“ — 1. Petrus 1,7",
    interpretation:
      "Gold gilt als das Beständigste, was Menschen kennen — und doch ist es am Ende vergänglich. Dieses Bild fragt, was wirklich bleibt, wenn alles andere verblasst.",
    availability: "Auf Anfrage",
    featured: false,
  },
  {
    id: "vollkommen-schoen",
    title: "Vollkommen schön",
    image: "Images/IMG_5206.jpg",
    alt: "Gemälde einer einzelnen großen mauvefarbenen Rosenblüte mit goldenem Blütenzentrum auf cremefarbenem Grund",
    year: "2026",
    category: "portrait",
    categoryLabel: "Porträt & Stille Momente",
    technique: "Acryl auf Leinwand",
    dimensions: PLACEHOLDER.dimensions,
    background:
      "Eine einzelne Blüte, ganz allein auf der Fläche, ohne Ablenkung durch Blätter oder Ranken — die reduzierteste Komposition dieser ganzen Sammlung. Manchmal muss man alles Nebensächliche weglassen, um das Wesentliche zu zeigen.",
    symbolism:
      "Die zentrierte, isolierte Rosenblüte mit ihrem goldenen Herzen lässt keinen Zweifel daran, worum es geht: um vollkommene, ungeteilte Schönheit.",
    christianMeaning:
      "In Christus wird jeder Makel bedeckt, jede Schuld getilgt — wer zu ihm gehört, wird von Gott nicht als fehlerhaft, sondern als vollkommen schön angesehen, nicht aus eigener Kraft, sondern durch das, was Christus für ihn getan hat.",
    bibleVerse: "„Du bist ganz schön, meine Freundin, und kein Makel ist an dir.“ — Hohelied 4,7",
    interpretation:
      "Kaum jemand hält sich selbst für makellos. Dieses Bild erinnert daran, dass genau das die Zusage ist, die niemand sich selbst geben kann — sie muss geschenkt werden.",
    availability: "Auf Anfrage",
    featured: false,
  },
];

const ARTWORK_CATEGORIES = [
  { key: "all", label: "Alle Werke" },
  { key: "glaube", label: "Glaube & Symbolik" },
  { key: "tiere", label: "Tiere & Natur" },
  { key: "portrait", label: "Porträt & Stille Momente" },
];
