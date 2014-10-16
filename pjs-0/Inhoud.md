# Programmeren in Javascript

## Les 1

* programma, processor, proces
* directe besturing (knoppen) - vb: turtle
* elementaire opdrachten
* samenstellen: opeenvolging
* samenstellen: groepering/naamgeving: functies
    * functie als script, voor een proces
    * resultaat van functie: afhankelijk van toestand

TODO:

* [ ] knoppen toevoegen voor functies `testA` etc.

### Cheating

* waarde van `pos.x` veranderen door een expliciete toekenning. (Een echte robot kun je niet verplaatsen door louter de GPS-coordinaten aan te passen.)

## Les 2 - functies met parameters

* "testen" - hier met knoppen (buttons)
* ook voor eigen functie
* opstap naar herhaling
    * herhaling "met de hand"

TODO:

* [ ] button voor eigen functie toevoegen.
* [ ] uitleg over DRY (en waarom) 

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
    * elementaire operaties: `+ - * /`
    * samenstelling: expressie; haakjes
    * abstractie: functie (in eerste instantie: naam geven aan een expressie).
* namen (vervolg); gebruik van namen in expressies
* namen: de betekenis (het gedrag) van een functie verandert niet als je de naam van een parameter vervangt door een andere naam - zolang je geen naamconflicten hebt.

NB: we hebben een naamconflict met `square` - ook voor het tekenen!

TODO:

* [ ] kwart-cirkel toevoegen als tekenfunctie
* [ ] 

## Les 4

* Herhaling - door functie als parameter `repeat(n, f)`
    * geven we evt. de index als par. mee? Hoe zit dat in JS - elders (foreach)
* Functie als waarde (al eerder genoemd?)
* Verschil tussen functie als waarde, aanroep, en resultaat

## Les 5

* Keuze - bijv. als turtle tegen een grens aanloopt
* Event - met daaraan gekoppelde actie
    * verband tussen keuze en event
    
## Les 6

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

## Help

* er gebeurt niets met de turtle -> is Auto-run JS geselecteerd? (in output-panel, rechts)


    