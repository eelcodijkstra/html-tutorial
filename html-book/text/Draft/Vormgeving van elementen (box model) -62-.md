Je wilt niet alleen de tekst zelf vormgeven, maar ook de omgeving daaromheen. CSS gebruikt hiervoor het zogenaamde *box-model*: elk element heeft een box waarin dit element bevat is. Deze box heeft, van binnen naar buiten, de volgende onderdelen:

* contents - de inhoud, bijvoorbeeld tekst
* padding - de buffer tussen de inhoud en de doos zelf
* border -  de eigenlijke doos, grens tussen "binnen" en "buiten" de box
* margin - de buffer tussen de omgeving van de doos en de doos zelf.

(In sommige browsers, zoals Firefox, heet dit ook wel het *vakken-model*.)

Meestal gebruiken we dit box-model voor grotere elementen, zoals p-elementen of divs. Maar je kunt dit voor elk element gebruiken.

Enkele voorbeelden van opmaak die je hiermee kunt regelen:

* je kunt de tekst-inhoud van een vak positioneren (`text-align:center;`)
* je kunt de achtergrond van het vak invullen, met een kleur (`background-color:lightyellow;`), of met een figuur (???)
* je kunt de afstand tussen de inhoud en de omgeving veranderen, door de padding en/of de margin te veranderen.
* je kunt de omtrek (border) versieren - met een simpele gekleurde lijn (`border:solid 2px red;`), of met een patroon(???)

Voorbeeld:

```css
h1 {
  text-align: center;
  background-color: lightyellow;
  padding: 10 px;
  border: solid 2px red;
  margin: 20px;
}
```

Dit is niet bedoeld als voorbeeld van een fraaie vormgeving - alleen maar om een aantal mogelijkheden te demonstreren.

Opdrachten

* bekijk met de ontwikkelhulpmiddelen van een browser de box-eigenschappen van een aantal elementen in een html-document. Probeer zowel de box-eigenschappen van een paar grote als van een paar kleine elementen te bekijken. (Je kunt met sommige browsers ook lokaal de eigenschappen veranderen: probeer de margin en de padding van een klein element eens te zetten.)
* gebruik bovenstaande box-opmaak voor verschillende elementen, om het effect te beoordelen. Je kunt de lijst van selectoren bijvoorbeeld stap voor stap uitbreiden tot  `h1, p, em, li`. (Een dergelijk experiment voer je bij voorkeur uit in een interactieve omgeving zoals Thimble of JSBin.)
