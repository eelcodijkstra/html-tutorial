
## CSS principes

Je kunt de stijl-regels direct als attribuut bij een html-element opgeven. Dit kan in het begin het voordeel hebben dat je direct ziet wat er gebeurt. Maar op de lange termijn is die aanpak minder handig:

* vaak wil je elementen van een bepaald type op dezelfde manier vormgeven. Bijvoorbeeld: alle koptitels in een sans-serif font. Het is dan beter om dit eenmaal op te geven, dan bij elke koptitel. 
    * Dit is een voorbeeld van DRY: Don't Repeat Yourself, ofwel: probeer redundantie (herhaling) te vermijden, in het bijzonder van gegevens die nog wel eens kan veranderen. Als je die op meerdere plaatsen vermeld hebt, moet je die op meerdere plaatsen veranderen - met de kans dat je daarbij fouten maakt.
* hetzelfde argument geldt op een hoger niveau: een website bestaat uit meerdere pagina's die je op eenzelfde manier wilt vormgeven. Het is dan beter om deze vormgeving in een apart bestand onder te brengen, dat door de verschillende pagina's *gedeeld* wordt (*indirectie*).
* de vormgeving van een pagina of van een website hangt samen met het gebruik - bijvoorbeeld met verschillende apparaten. Aanpassingen aan deze apparaten hebben niets te maken met de inhoud en structuur van de website.
    * Anders gezegd: de variatie en evolutie van de inhoud is onafhankelijk van de variatie en evolutie van de vormgeving.  

Dit betekent dat we de *structuur en inhoud van de webpagina willen scheiden van de vormgeving van de pagina*. Dit is een voorbeeld van *Separation of Concerns*, een algemeen principe in de Informatica.
We gebruiken de html-elementen voor de inhoud en structuur van de pagina. De vormgeving beschrijven we in afzonderlijke CSS-regels. We moeten dan wel een manier hebben om deze regels te *koppelen* aan de overeenkomstige html-elementen. Daarvoor gebruiken we de *CSS selectoren*.

| selector      | element |
| ---           | --- |
| `tag`         | &lt;tag>-element (type-selector) |
| `.classId`    | element met `class="classId"` (class-selector) |
| `#elemId`     | element met `id="elemId"` (identifier-selector) |
|               | universele? selector |
| `tag.classId` | &lt;tag>-element met `class="classId"` |


We gebruiken een *identifier* (`id`-attribuut) voor het benoemen van een enkel element. Een element-identifier moet uniek zijn in het hele html-bestand.

We gebruiken *classes* voor elementen die eenzelfde soort betekenis hebben, en dus op eenzelfde manier vormgegeven moeten worden. Denk aan: *example*, *proof*, *note*, enz. Meerdere elementen kunnen tot eenzelfde class behoren. En een element kan tot meerdere classes behoren.

> Soms worden classes gebruikt die staan voor een bepaalde vormgeving, bijvoorbeeld op een bepaalde positie op het scherm. Dat is niet handig: je krijgt dan toch weer de vormgeving in de html-code. Probeer class-namen die je in de html-code schrijft onafhankelijk te houden van de uiteindelijke vormgeving.

> Je kunt de class-attributen van een element ook veranderen door middel van Javascript. Daarvoor gelden andere regels.

De mogelijkheden voor selectoren zijn veel uitgebreider: we geven hier alleen de eenvoudigste vormen. Voor meer informatie, zie:

Een CSS-regel heeft de vorm: `selector {naam: waarde; ...}`. Enkele voorbeelden:

```
h1            {color: blue; font-family: sans-serif;}
.example      {font-size: 90%;}
li.example    {font-size: 80%;}
#introduction {font-style: italic;}
```

### Pseudo-classes

CSS definieert een aantal *pseudo-classes*. Dit zijn class-attributen die afhankelijk zijn van de toestand van een element.  Een voorbeeld is een link (&lta>-element). Deze kan "vers" zijn (`.link`), bezocht (`.visited`), onder de cursor (`.hover`), of onder een muisklik (`.active`). Met behulp van deze pseudo-classes kun je de vormgeving van de link aanpassen aan de toestand van die link. Je kunt bijvoorbeeld een "verse" link een andere kleur geven dan een link die al eerder bezocht is.

### Waar plaats je de CSS-regels?

#### Als head-element in het html-bestand
In het geval van een eenvoudige webpagina kun je de CSS-regels in het bestand zelf plaatsen. Hiervoor gebruik je het &lt;style>-element in de header. Als je wilt experimenteren, bijvoorbeeld in JSBin of Thimble, is dat vaak handig. Je gebruikt dan bijvoorbeeld de vorm:

```
<style>
  h1, h2, h3 {
    color: blue;
    font-family: sans-serif;
  }
  .example {
    font-size: 90%;
  }
</style>
```

Ook hier kies je bij voorkeur een layout die leesbaar is, en die bovendien gemakkelijk aan te passen is. In een project zijn daarvoor vaak afspraken waaraan iedereen zich houdt.

#### In een afzonderlijk css-bestand (via link)

In vrijwel alle andere gevallen is het beter om de css-regels in een aparte css-bestand op te nemen. Je kunt naar een css-bestand verwijzen door middel van:

```
<link href="mystyle.css> rel="stylesheet">
```

(Het &lt;link>-element kan op verschillende manieren gebruikt worden, om de relatie tussen dit bestand en andere bestanden aan te geven.)

## Inheritance (overerven)

Zoals we gezien hebben kan een element deel zijn van een ander element (nesting). We kunnen deze hiërarchische structuur weergeven als rechthoeken die in elkaar en onder elkaar geplaatst zijn; of als een (omgekeerde) boom. Deze structuur is ook van belang voor de manier waarop CSS-regels werken:

* als een css-attribuut(?) niet expliciet gedefinieerd is in regel voor het huidige element, geldt de definitie van het omvattende element (de "parent").
* dit gaat door totdat je een element tegenkomt waarvoor het attribuut wel gedefinieerd is.

We noemen dit mechanisme *inheritance* omdat een kind-element de css-eigenschappen erft van zijn ouder-element, enz. Dankzij dit mechanisme kunnen we met veel minder regels volstaan dan wanneer we voor elk element alle eigenschappen zouden moeten definiëren. Als we bijvoorbeeld de font-size van een document willen aanpassen, dan volstaat het om dit te definiëren voor het &lt;body>-element. Alle elementen die daarin vallen erven dan deze definitie - met uitzondering van die elementen waarin deze eigenschap ge-herdefinieerd is, en de kinderen daarvan.

Deze inheritance betekent dat de vormgeving van een element afhangt van zijn omgeving (context). Eenzelfde element op een andere plaats in de boom kan er op het scherm heel anders uitzien.

Niet alle eigenschappen zijn "erfelijk": uitzonderingen zijn bijvoorbeeld box-eigenschappen als `border`, `margin` en `position`, en `background`. Je kunt overigens van een eigenschap aangeven dat deze overgenomen moet worden van het parent-element. Je geeft dan als waarde op `inherit` - bijvoorbeeld `border: inherit;` Als de vormgeving van het parent-element aangepast wordt, verandert de vormgeving van dit element mee.

## Enkele opmerkingen

* voor een bepaald element kunnen meerdere css-regels actief zijn; deze kunnen met elkaar in tegenspraak zijn. In het algemeen geldt dat de regel die het meest specifiek is, en het "dichtst bij" (bijvoorbeeld in de boom, of in de lijst met regels), de overhand heeft. Voor een meer precieze beschrijving, zie de referenties.
* we hebben hier alleen de eenvoudigste vormen van css-selectoren behandeld. Voor meer informatie, zie de referenties.
* CSS evolueert, net als de rest van de web-standaarden. Dit betekent dat je bij een bron op het web altijd moet nagaan hoe up-to-date deze is. Hoe dichter je bij de echte bron (de standaarden) bent, hoe beter.
* niet alle browsers hebben alle nieuwe aspecten van de standaard geïmplementeerd. Zie hiervoor bijvoorbeeld: [Can I use?[(http://caniuse.com).

## Meer informatie

* [MDN CSS-tutorial (beginners)](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started)
* [MDN CSS guide](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS)
* [devdocs](http://devdocs.io/css/)
