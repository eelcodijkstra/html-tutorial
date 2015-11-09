Je kunt een html-element zien als een container (doos) met een speciale betekenis. De *tag* kun je gebruiken als label of etiket waar je van alles op kunt schrijven over de inhoud. Je kunt dit ook gebruiken als handvat, voor acties op het element.

* Het deel `xxx` van een tag `<xxx>` heet de *naam* van de tag (tag name).
* de naam van de tag zegt iets over de betekenis, zoals de manier waarop de browser de inhoud moet behandelen. Voorbeeld: de inhoud van een `<h1>`-element is een koptitel; de browser geeft deze in grote letters weer.

## Attributen

Je kunt de tag voorzien van *attributen* die verder beschrijven wat er met de inhoud moet gebeuren. Je kunt met attributen de vormgeving van de inhoud sturen, zoals het lettertype of de kleur van de letters.
De vorm van een attribuut is: `naam="waarde"`. De `waarde` is een string tussen dubbele quotes `"` (ook als de waarde een getal is).

Voorbeelden van tags met attributen:

* `<h1 id="introduction">`
    * `id`: unieke naam van een element, gebruikt om vormgeving en interactie te koppelen aan het element.
* `<div class="exercise">`
    * `class`: manier om gelijksoortige elementen aan te geven, voor bijvoorbeeld een uniforme vormgeving.
* `<img src="figs/tree.png"  alt="een figuur van een boom">`
    * een image-tag (plaatje) verwijst naar een bestand met de betreffende figuur, via het `src`-attribuut;
    * je geeft altijd een alternatief aan voor het plaatje: een tekst die getoond kan worden als het bestand niet gevonden kan worden, of als de tekst voorgelezen wordt.

## Element-naam (id)

Door middel van het id-attribuut kun je het element een naam geven. Deze naam kun je bijvoorbeeld gebruiken om de opmaak te koppelen aan het element, of om dit te koppelen aan acties.

Een voorbeeld van dit laatste:

1. html-document: `<button id="okButton"> OK </button>`
2. JavaScript-bestand: `var button = document.getElementById("okButton"); button.onclick = okButtonHandler;`

In het html-document beschrijven we de button zoals deze weergegeven moet worden, met de tekst "OK". We geven hier de button ook de naam (id): `"okButton"`. In het JavaScript-bestand gebruiken we deze naam om het overeenkomstige DOM-element te vinden. We kunnen dan de bijbehorende handler-functie aan dit element koppelen.

### Welke naam: id of name?

* het id-attribuut gebruik je voor de identificatie van het element;
* het name-attribuut gebruik je voor invoer-waarden: een invoer-element komt overeen met een name-value paar.

Soms kun je een element wel identificeren aan de hand van het name-attribuut, maar dat is niet de bedoeling van de html-standaard. Gebruik voor identificatie een element altijd het id-attribuut.

