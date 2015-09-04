De body bevat de eigenlijke inhoud van de pagina. Voor het beschrijven van deze inhoud kunnen we onder andere de volgende elementen gebruiken:

* `<p>` - (paragraph) alinea
* `<h1>`, `<h2>`, ..., `<h6>` - (head element) koptitel van hoofdstuk, paragraaf, enz. 
* `<ul>` - (unordered list) ongeordende lijst
    * `<li>` - (list item) onderdeel van een geordende of een ongeordende lijst
* `<ol>` - (ordered list) geordende lijst, meestal genummerd

In het Nederlands is een *alinea* een blok regels dat een eenheid vormt; dit heet in het Engels een *paragraph*. Een aantal alinea's dat samen een eenheid vormt heet een *paragraaf*; in het Engels heet dat een *section*.

## Soorten elementen: inline en block-level

Er zijn verschillende soorten elementen. We onderscheiden in eerste instantie *inline*-elementen en *block-level*-elementen.

> HTML5 gebruikt een andere indeling in elementen, maar voorlopig hebben we voldoende aan deze eenvoudige indeling.

Een *inline*-element vormt een onderdeel van "lopende tekst". Enkele voorbeelden van inline-elementen:

* `<em>` (emphasis) - nadruk; de browser kan dit *cursief* vormgeven;
* `<strong>` - sterke nadruk; de browser kan dit **vet** weergeven.
* `<code>` - om stukjes programmacode (e.d.) in een lopende tekst op te nemen, bijvoorbeeld een Linux commando zoals `> ls -al`.
* `<span>` - voor het *groeperen* van inline-elementen.


Een *block-level*-element bevat een zelfstandig stuk tekst of een figuur. Een block-level-element begint gewoonlijk op een nieuwe regel. Block-level elementen bepalen waar de tekst op de pagina, of op het scherm geplaatst wordt, met welke achtergrond, met welke rand, enzovoorts. (In HTML5 heet dit een *flow-element*.)

Een block-level element kan ook andere block-level elementen bevatten. Op die manier kun je grotere eenheden maken, bijvoorbeeld om deze als één blok te positioneren, of om deze op één manier vorm te geven.



## Koppelingen (links)

Een speciaal tekst-element is de koppeling. Deze kan verwijzen naar een ander document, of naar een ander deel van hetzelfde document.

Met een dergelijke koppeling doorbreek je het lineaire karakter van een tekst: in plaats van door te gaan met de volgende regel, kun je de tekst lezen waar de koppeling naar verwijst.

> Zoals elke ervaren internetgebruiker weet, kun je op deze manier snel afdwalen, en zelfs verdwalen. Het document waarnaar verwezen wordt kan weer allerlei andere associaties meebrengen, en voor je het weet lees je een boeiende tekst over een compleet ander onderwerp. (Vgl. ook 6 degrees apart.)

## De elementen *span* en *div*

Met het generieke tag `<span>` kun je inline-elementen groeperen en een naam geven.

```
...Dit is een lopende tekst. <span id="mySpan"> 
Enkele regels daarvan kunnen we groeperen. 
We kunnen daarin ook weer  <em>andere tags</em> 
gebruiken. </span> De tekst kunnen we daarna weer 
gewoon voortzetten.
```

Deze groepering kun je gebruiken voor de vormgeving van deze elementen. Je koppelt de style-attributen dan aan het omvattende element.

```
...Dit is een lopende tekst. <span style="color: blue;">
Enkele regels daarvan kunnen we groeperen.
We kunnen daarin ook weer <em>andere tags</em>
gebruiken. </span> De tekst kunnen we daarna weer
gewoon voortzetten.
```

We zullen later zien dat we deze tekst op allerlei manieren kunnen vormgeven en manipuleren. De span-tag is dan een handig handvat voor de elementen tussen deze haken.


(Moeten we hier "tag" of "element" gebruiken? In de representatie (invoer) gaat het om de tag.)

* groeperen van elementen
* benoemen van een groep elementen

## Welk element mag je waar gebruiken?

Je mag in HTML5 niet elk element gebruiken als onderdeel van een willekeurig ander element. Sterk vereenvoudigd zijn de regels:

* in een lopende tekst mag je alleen inline-elementen gebruiken.
* de volgende block-level elementen bevatten alleen inline-elementen: `<p>`, `<h1>,...<h6>`, 
* in de andere block-level elementen mag je zowel block-level elementen als lopende tekst plaatsen, mits je voldoet aan de regels hierboven.

*Let op!* In het bijzonder geldt de regel dat een block-level element het voorafgaande element kan afsluiten - de sluithaak is soms niet verplicht. Dit geldt bijvoorbeeld voor een p-element dat een h1-element afsluit, of een ul-element dat een p-element afsluit. Dit geeft soms onverwachte resultaten, zowel in de browser als in de validator.



