# html-0-vb1

## Hoe werkt dit tutorial?

* je kunt omschakelen tussen Preview en Tutorial in de tab hierboven. Om verwarring te voorkomen heeft het tutorial een andere kleur.
* in de linkerkolom selecteer je het bestand om te bewerken in de editor. In dit eerste tutorial gebruik je alleen `index.html`

De tekst in het editor-venster in het midden kun je veranderen - 
het resultaat daarvan zie je direct in het Preview-venster rechts. 
Hierdoor kun je snel experimenteren.
Het resultaat van een experiment kun je bewaren.

Je hoeft niet bang te zijn dat je iets kapot maakt: 
je kunt altijd weer terug naar de oorspronkelijke versie.

We zullen later zien hoe je een dergelijke pagina in het web kunt publiceren.


## Een simpele webpagina

Je ziet hier een voorbeeld van een heel eenvoudige webpagina.
Het kan het begin zijn van je eigen website.

Een html-pagina bestaat uit:

1. Op regel 1: het document-type. Voor HTML5: `<!doctype html>`
2. De html-inhoud, tussen de haken: `<html>...</html>`
3. Daarbinnen, eerst de header, tussen `<head>...</head>`
4. en daarna de eigenlijke inhoud, tussen `<body>...</body>`

---

*Opdrachten*

1. Verander de tekst tussen de haakjes `<h1>...</h1>`.
   Wat verandert er in het resultaat?
2. Verander de haakjes `<h1>...</h1>` in `<h2>...</h2>`.
   Wat verandert er in het resultaat?
3. Verander de tekst tussen de haakjes `<title>...</title>`. Verandert er iets in het resultaat?

## Tags en elementen

Html gebruikt speciale "haakjes": een openingshaakje
heeft de vorm `<naam>`, het bijbehorende sluithaakje
`</naam>`. We noemen de naam in het haakje de "tag".

Deze haakjes moeten altijd netjes *gepaard* zijn: elk openingshaakje moet afgesloten worden met een sluithaakje. (Later zullen we losse tags tegenkomen.)

> Als je een haakje niet goed afsluit, zal de Thimble-editor je hierop wijzen.

De html-tekst met openingshaakje `<p>` tot en met
het bijbehorende sluithaakje noemen we een *`<p>`-element*, of kortweg p-element. 
Op dezelfde manier spreken we over een `<h1>`-element, of een `<em>`-element.

De tekst tussen de twee haken van een element noemen we de *inhoud* van dat element.

---

*Opdrachten*

1. Zet het woord "fantastisch" tussen de haken  `<em>..</em>`. Wat is het resultaat?

2. Verander de haakjes `<em>...</em>` in `<strong>...</strong>`. Resultaat?

3. Zet *om de haakjes* `<strong>..</strong>` de haken `<em>...</em>`. Resultaat?

4. Voeg aan het eind een alinea toe (een `<p>`-element). Hoe reageert de editor als je al wel het openingshaakje, maar nog niet het sluithaakje gegeven hebt?

5. Wat gebeurt er als je een `<p>`-element binnen een `<p>`-element probeert te definiëren?


## Witruimte

Witruimte (white space) is de lege ruimte tussen en rond de tekst: spaties en regelovergangen.

* De browser ziet spaties in de html-tekst alleen als scheidingsteken.
* De hoeveelheid wit in het *resultaat* hangt niet af van het aantal spaties in de html-tekst.
* We gebruiken spaties en regelovergangen in de html-tekst om deze voor mensen goed leesbaar te maken.

De haken en de tekst *springen in*, als deze binnen andere haken geplaatst zijn. Hiermee maak je de tekst beter leesbaar.
Doe dit zelf ook zelf altijd. De editor helpt je daarbij.

---

*Opdrachten*

1. Ga na dat meer of minder wit in de html-tekst geen gevolg heeft voor het resultaat, door spaties en lege regels toe te voegen of te verwijderen.

2. Wat is het resultaat als je de laatste (enige) spatie tussen twee woorden verwijdert?

3. Hoe helpt de Thimble-editor je om de tekst tussen twee haken te laten inspringen?

4. Je kunt een regelovergang in het resultaat afdwingen door middel van `<br>`. Dit is een element zonder sluithaak en zonder inhoud. (Waarom heeft dit geen sluithaak?) <br> Probeer dit uit.

## Commentaar
Je schijft HTML-code niet alleen om deze door een browser te laten verwerken.
Je collega's (en docenten, assistenten) moeten deze code ook kunnen lezen en begrijpen. En waarschijnlijk moet je zelf later ook nog weten hoe het in elkaar zit, en waarom.

Je kunt de HTML-code leesbaar maken door te zorgen voor een nette opmaak: het gebruik van *witruimte* in de code: regelovergangen, spaties, inspringen.

Soms is er extra informatie nodig om te begrijpen waarom de code zo geschreven is. Daarvoor gebruik je, net als in andere programmeertalen, *commentaar*.
Commentaar begint met de openingshaak `<!--` en eindigt met de sluithaak `-->`.
Let op: in beide gevallen gaat het om twee opeenvolgende `--`.
In de tekst in het commentaar zelf mag je geen `--` gebruiken. Daar moet je vooral om denken als je een stuk HTML-code tussen commentaar-haken plaatst.

---

*Opdrachten*

1. Voeg op een zinvolle plaats commentaar toe aan de voorbeeld-pagina.

2. Ga na wat er gebeurt:

   1. als je commentaar binnen commentaar plaatst.
   2. als je de tekens `--` binnen commentaar plaatst.

   Controleer dit zowel met een browser als met de W3C-validator.
