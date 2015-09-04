Je schrijft code - en dus ook HTML - zowel voor mensen als voor computers:

* mensen, bijvoorbeeld je docent of je collega-leerlingen, moeten je code kunnen lezen en begrijpen. Dit is nodig als je met anderen samenwerkt, of als je verder gaat met het werk van een ander.
* computers, in het geval van HTML: allerlei verschillende browsers, moeten je code kunnen verwerken en omzetten in een bijbehorende vorm op het scherm.

## Coderen voor computers

Om ervoor te zorgen dat je HTML-code goed verwerkt wordt door allerlei verschillende browsers, moet je je aan de HTML-standaard houden. Het is niet voldoende om op je eigen computer, met je eigen browser, te laten zien dat je code "werkt". Code die aan de standaard voldoet moet door de browser op de juiste manier verwerkt worden. Code die niet aan de standaard voldoet kan door verschillende browsers op verschillende manieren behandeld wordt - soms op een manier die jou goed uitkomt, maar soms ook helemaal niet.

Je kunt controleren of je code (althans voor sommige aspecten) aan de standaard voldoet, met behulp van een *validator*. Je kunt het beste dicht bij de bron van de standaard blijven, door de W3C-validator te gebruiken. (W3C is de organisatie die verantwoordelijk is voor de web-standaarden, zoals HTML, CSS, en Javascript.)

> Als je zeker wilt weten dat je code door allerlei verschillende browsers goed verwerkt wordt, is het verstandig om je code met meerdere browsers uit te testen. (Niet alle browsers houden zich precies aan de standaard; maar dat wordt wel beter.) We gaan hier niet verder in op deze problemen.

## Coderen voor mensen

Ook mensen moeten je code kunnen lezen en begrijpen.

* je docent moet je code kunnen begrijpen - om te zien of je een goed oplossing gekozen hebt, of om je te helpen als er iets niet werkt zoals je verwacht (foutzoeken).
* je collega-leerlingen moeten je code kunnen begrijpen - als ze met je moeten samenwerken, of als ze je moeten helpen bij verbeteringen en uitbreidingen.
* je moet zelf je code kunnen begrijpen - als je daar een tijd later verder aan moet werken.

In een project worden hiervoor vaak een "coding style" afgesproken. Dat is een verzameling afspraken die ervoor moet zorgen dat de tekst leesbaar is, en dat deze leesbaar blijft als deze aangepast wordt. Elementen van zo'n stijl zijn bijvoorbeeld:

* regels voor de layout (opmaak): het gebruik van "wit": spaties en lege regels, inspringen (indentatie) e.d.
* regels voor commentaar: wanneer geef je extra commentaar, en op welke manier?
* regels voor namen (identifiers): hoe kies je de namen van variabelen, functies, e.d.
* regels om fouten te voorkomen.

> Je kunt dit ook vergelijken met de stijlgidsen die bijvoorbeeld door kranten gebruikt worden. Deze helpt de schrijvers - ook als ze nog iets aan de tekst van iemand anders moeten doen. En het helpt de lezers: deze krijgen een krant met een consistentie stijl.

Enkele voorbeelden van coding styles, voor verschillende programmeertalen:

Vaak kan een tekst-editor je helpen om je code-tekst volgens deze regels te maken. Een "programmer's editor" kent bijvoorbeeld de verschillende soorten haakjes die van belang zijn voor de code waaraan je werkt. Deze kan helpen dat je haakjes altijd netjes gepaard zijn, en dat de tekst tussen de haakjes op de juiste manier inspringt.

Daarnaast zijn er vaak programma's die, vergelijkbaar met een validator, controleren of je code aan de stijl-afspraken voldoet. Een klassiek voorbeeld hiervan is het programma "lint" voor de programmeertaal C. Voor andere talen en regels zijn andere "lint"-programma's beschikbaar. Een voorbeeld hiervan is JSLint voor Javascript.

> Soms zijn dergelijke programma's (te) erg strikt in de leer; de strikte opvattingen van de auteur van het lint-programma spelen er dan in door. Als dit te extreem wordt, ontstaan er vaak alternatieve versies die wat minder strikt zijn - vgl. JSHint voor Javascript.

### HTML-stijl

Voor html-code moet je je aan de volgende regels houden:

* een haakje betekent extra inspringen over een vaste afstand, totdat het haakje weer afgesloten is. Kies bijvoorbeeld 2 of 4 spaties.
* het sluithaakje staat op dezelfde regel als het bijbehorende openingshaakje, of recht eronder, op een aparte regel.

## Opmerkingen

Een opmerking als "het werkt toch" is in de Informatica/ICT niet terecht:

* wat je meestal hiermee bedoelt, is dat je het in één geval hebt zien werken. Weet je zeker dat het in alle contexten, bij alle soorten invoer, ook zal werken?
* Is je code ook te begrijpen voor mensen? Tenzij deze code bedoeld is om weg te gooien, moet je daar rekening mee houden. Als je ooit code wilt schrijven die niet weggegooid wordt, dan kun je maar beter zo snel mogelijk leren begrijpelijke code te schrijven.



