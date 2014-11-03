# Programmeren in Javascript

## Les 1

* programma, processor, proces, (invoer), resultaat/uitvoer
* directe besturing (knoppen) - vb: turtle
    * vgl. afstandsbesturing (radiografische auto, robot)
* elementaire opdrachten
* samenstellen: opeenvolging
* samenstellen: groepering/naamgeving: functies
    * functie als script, voor een proces
    * resultaat van functie: afhankelijk van toestand

TODO:

* [x] knoppen toevoegen voor functies `testA` etc.
* [x] initialisatie van turtle: (100, 100) (nog niet "down", er moet iets over blijven...)
* [x] log van proces (acties)


### Cheating

* waarde van `pos.x` veranderen door een expliciete toekenning. (Een echte robot kun je niet verplaatsen door louter de GPS-coordinaten aan te passen.)

## Les 2 - functies met parameters

* "testen" - hier met knoppen (buttons)
* ook voor eigen functie
* opstap naar herhaling
    * herhaling "met de hand"
* eenvoudige figuren, ook samengesteld
    * huisje als combinatie van rechthoek en vierkant.
* bochten-opdracht voor turtle    
* blad - als combinatie van twee cirkel-fragmenten.

TODO:

* [x] button voor eigen functies toevoegen (testA, testB, testC).
* [x] initialisatie van turtle: (100, 100)
* [x] bochten (cirkels)
* [ ] uitleg over DRY (en waarom)
* [ ] stap voor stap uitvoeren van proces
* [x] log van acties

## Les 3 - functies met resultaat; waarden; expressies

* tot nu toe: uniform, geen mogelijkheid om te rekenen met parameters
    * alle vierkanten gelijk
* als je verschillende vierkanten wilt, moet je met de hand parameters aanpassen
* tot nu toe: proces met resultaat buiten programma
    * je kunt niets met het resultaat in het programma
    * je kunt er niet verder mee rekenen; het is geen waarde in het programma
* berekening - vs. actie (proces)
* waarde - in eerste instantie: getallen
* we willen kunnen rekenen - bijvoorbeeld om vierkanten van verschillende grootte te tekenen.
* overeenkomst tussen operatoren en functies
* ook hier weer: elementaire operaties, samenstelling, en abstractie
    * elementaire operaties: `+ - * /` en `%` (rest na deling)
    * samenstelling: expressie; haakjes
    * abstractie: functie (in eerste instantie: naam geven aan een expressie).
* namen (vervolg); gebruik van namen in expressies
* namen: de betekenis (het gedrag) van een functie verandert niet als je de naam van een parameter vervangt door een andere naam - zolang je geen naamconflicten hebt.
* console als rekenmachine?

NB: we hebben een naamconflict met `square` - ook voor het tekenen!

Opstap voor herhaling.

TODO:

* [x] kwart-cirkel toevoegen als tekenfunctie
* [ ] 

## Les 4

* **Herhaling** - door functie als parameter `repeat(n, f)`
    * we geven de index als extra (optionele) par. mee
    * array.forEach: 3 args: element, index, array
    * we gebruiken hier dat parameters in JS optioneel zijn
* Functie als waarde (al eerder genoemd?)
* Verschil tussen functie als waarde, aanroep, en resultaat
* Voorbeelden met mod (draaiing)
* Random?

## Les 5

* Keuze - bijv. als turtle tegen een grens aanloopt
* Event - met daaraan gekoppelde actie
    * verband (ven verschil!!) tussen keuze en event
    * misverstand is vergelijkbaar als bij `while`; IF is niet WHEN
* Hoe kunnen we dit vormgeven? We willen bijvoorbeeld aan andere vorm van "forward", die binnen de wereld blijft.
    * hiervoor hebben we wel redelijk wat wiskunde nodig; voor deze inleiding niet handig.
    * gebruik van een soort "radar"?
* Voorbeeld: strook voor strook, "bolvormig", opvullen van de ruimte.
    * als y === 0 , naar rechts ipv. naar omhoog
    * als 
* Evt. combineren met random?
* Andere voorbeelden van IF:
   * botsingen (collisions), onderling of met de rand
   * actie afhankelijk van indrukken van een toets.
   * max, min
   * controleren op toestand bij het afhandelen van een event (bijv. knop ingedrukt).
   * event-object als par. voor handler; bijv. `evt.altKey`
* NB: een echte FizzBuzz: alleen rotatie bij deelbaar door 3 of 5, alleen forward bij rest.
* combinatie van herhaling en keuze; actie afhankelijk van de index, nog verder doorgevoerd.

## Les 6

* Variabelen
* Variabele representeert toestand van de turtle
    * turtle verplaatsing -> verandering van toestand, verandering van variabelen
* Direct manipuleren van toestand: "teleportatie"
    * (niet mogelijk bij een echte robot)
    * mogelijk voor virtuele tekenrobot (turtle)
* (Consequenties van gebruik van absolute coördinaten.)
* Model van variabele: "lade" met naam en waarde; object als "ladenkast"
* Toekenning
    * relatie tussen toekenning en binding
* Toestand (gevormd door de variabelen)
    * toekenning aan pos, dir: verplaatsen van turtle. (teleportatie)
    * NB: toestand kan ook door externe omstandigheden veranderen; waarnemen van toestand, input.
* Verschil met "variabelen" in Wiskunde.
* Gebruik van zinvolle (betekenisvolle) namen
* Begrip "invariant"? (Relaties tussen variabelen.)
* Model van computer-geheugen (ladenkast); namen, waarden, en "hokjes".

* Voorbeeld: totale afstand afgelegd door turtle

* gebruik van variabelen in console
* console als rekenmachine (vervolg)

## Les 7

* Andere waarden: strings
* Begrip typering; typering van waarden
* Wat kunnen we met strings in het geval van turtle?
* Conversies tussen waarden.
* Notatie en interpretatie
* Overloading van operatoren (in JS: `+`)


## Les 8

* Objecten
* Samenstelling van data
* Voorbeeld: meerdere turtles, elk met hun eigen toestand
* Bijv. extra knop: selecteren van de turtle.
* De opdrachten moeten dan ook aan de turtle gekoppeld zijn: 
    * functies als onderdeel van het turtle-object - en 
    * gebruik van `this`.
* Ook: koppeling aan DOM? (is ook een object)

* Later: gebruik van keys op verschillende manieren

## Les 9

* Arrays (rijtjes; in principe van gelijksoortige waarden)
* Samenstelling van data
* indicering
* foreach; map; reduce
* herhaling is onlosmakelijke verbonden aan rijtjes gelijksoortige elementen.
* Voorbeeld: array van meerdere turtles, waar je allemaal een bepaalde operatie op uitvoert.
    * voorbeeld: animatie; uitvoeren van een stap? Collision detection?
* van turtle naar slang (snake) - die zichzelf niet mag raken.

## Les 10




## Opmerkingen

* Hoe kunnen we een begin maken met Test-Driven Development? Dit kan helpen om eerst op de gevraagde functionaliteit te concentreren, voordat je aan de implementatie begint.
* is het naamconflict of naamsconflict?
* animaties
* redeneren over programma's, bijv. `forward(n); forward(m);` equivalent `forward(n+m)`. Analoog voor `right`. (totale draaiing kun je ook bepalen)
* voor het testen (en voor de herhaling) is het eenvoudiger om te werken met functies zonder parameter. We kunnen een aantal functies `testA` `testB` `testC` definiëren, met knoppen om deze
aan te roepen.
    * het is niet eenvoudig om een functie te definiëren in het console-venster. Je loopt daar aan
    tegen de limiet van één regel.
* subtiel: (i) de grootte is een absolute maat, zonder geheugen; (ii) de draaiing is een actie met een neveneffect. In herhalingen hoeven we voor de laatste geen parameter op te geven, en voor de eerste wel.
* JSLint: http://javascript.crockford.com/code.html
    * i.h.b. de spatie-regels, en de regels voor variabele-declaraties zijn wat "typisch".
* Turtle: relatieve versus absolute coördinaten: een voordeel van de relatieve (turtle-)coordinaten is dat je dezelfde figuur ook eenvoudig kunt schalen en draaien.
* De programma's waar de leerlingen mee werken moeten interessant zijn.
    * In de voorbeelden wil ik snel toe naar: recursie; tekenen van bomen; en animatie.
* In sommige gevallen is het niet zo erg om wat op de feiten vooruit te lopen; het is belangrijker om het materiaal voor de leerlingen interessant te houden.
* Opm: een van de manieren om een figuur voor te stellen, is door middel van een functie die die figuur tekent. (Een alternatief is om daarvoor een datastructuur op te bouwen, die je vervolgens moet interpreteren - maar dat is weer een extra interpretatie-slag.)
    * we kunnen in JS later ook met een gemengde representatie werken.
* de vormgeving is nu nog niet heel aantrekkelijk. Het is vrij eenvoudig voor leerlingen om daar zelf wat aan te doen (met verschillende kleuren, diktes, patronen).
* kunnen we niet met hetzelfde JSBin framework volstaan, voor alle lessen? (Of, in elk geval meerdere lessen met hetzelfde framework. Of, met eenzelfde JS-turtle library.)

## Help

* er gebeurt niets met de turtle -> is Auto-run JS geselecteerd? (in output-panel, rechts)
* er verschijnt niets in het Canvas -> is de pen "down"?

    