## Plaatjes, iframes

Je kunt op verschillende manieren plaatjes en video's e.d. in een html-document opnemen.

* een *verwijzing naar een plaatje* (via het `img`-element, met een URL). Het plaatje kan afkomstig zijn van dezelfde website of elders van het web.
* een plaatje als *direct onderdeel* van het document: dit kan met pixel-tekeningen (via een Canvas-element), of met vector-tekeningen (via een SVG-element). Je kunt hiermee ook animaties maken.
* door inbedden (embedding) van een ander html-document, met behulp van een iframe met een URL. Dit gebruik je bijvoorbeeld als je een YouTube-video in je html-document wilt opnemen.
* (video, audio: P.M.)

In dit tutorial oefenen we met enkele van deze mogelijkheden.

## Plaatjes: img-element

Met het img-element kun je een plaatje opnemen in een html-pagina. De link (URL) naar het plaatje geef je aan in het `src` attribuut. Een img-element heeft alleen attributen, geen inhoud. Er is dus geen sluithaakje.

Je kunt extra informatie opgeven met de attributen:

* `alt` - *verplicht:* alternatieve tekst
* `height` - hoogte, in `px` (pixels)
* `width` - breedte, in `px`

Voor het positioneren van een plaatje gebruiken we CSS. Daar komen we later op terug.

Voorbeeld:

```
<src="http://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg" 
alt="Paris by night" height="100px">
```

---

*Opdrachten:*

1. Voeg een plaatje toe aan de voorbeeld-pagina. Gebruik hiervoor een plaatje dat al ergens op het web staat (bijvoorbeeld van Wikipedia).
2. Als je het plaatje hierboven gebruikt, zie je dat het om een klein plaatje gaat, maar dat het laden soms vrij lang duurt. Hoe komt dat? (Hint: bekijk het plaatje rechtstreeks in de browser, en probeer in te zoomen)

## Plaatsing van het plaatje

Je kunt een plaatje op twee manieren in een document plaatsen:

* Als onderdeel van de lopende tekst (inline). Dit gebruik je voor kleine plaatjes, zoals een smiley of een speciale letter-tekening.
* Als een block-level element (zoals een `<p>`-element).

Voorbeelden:

```
Je kunt een smiley-plaatje
<img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Fb_smiley.jpg" alt="smile">
in een lopende tekst gebruiken.
```

Je kunt een smiley-plaatje
<img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Fb_smiley.jpg" alt="smile">
in een lopende tekst gebruiken.

```
<img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg" alt="Paris by night" height="100px" >
```

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg" alt="Paris by night" height="100px" >

Hierboven zie je een plaatje als een block-level element.

---

*Opdrachten*

1. Voeg een inline-plaatje toe aan de voorbeeld-pagina. Gebruik hiervoor een plaatje dat al ergens op het web staat (bijvoorbeeld van Wikipedia).
2. Voeg een block-level plaatje toe aan de voorbeeld-pagina.


## Kaarten

Ook kaarten kun je eenvoudig toevoegen. Hiervoor heb je verschillende mogelijkheden:

* Een statische kaart: dit is een plaatje dat je via een API (Application Programmers Interface) ophaalt. De server die de API afhandelt rekent het plaatje uit en stuurt dit op.
* Een interactieve kaart: hiervoor heb je JavaScript nodig. Het script bij de kaart haalt de gegevens op van de server, via een API, en plaatst het resultaat in het document.

```
<img src="https://maps.googleapis.com/maps/api/staticmap?center=52.361951,4.918170&zoom=14&size=200x200">
```

**NB: Google Maps API's zijn niet meer te gebruiken zonder API-sleutel: je moet een account hebben en een bijbehorende sleutel aanmaken.**

<img src="https://maps.googleapis.com/maps/api/staticmap?center=52.361951,4.918170&zoom=14&size=200x200">

---

*Opdrachten:*

1. Voeg deze kaart toe aan het voorbeelddocument en bekijk het resultaat. Wat gebeurt er als je de parameters (center, zoom) aanpast?
2. Zoek uit hoe je de coördinaten van een voor jou interessant punt kunt vinden. Maak een passende kaart met dat punt.

## iframe-element

Met het `<iframe>`-element kun je in een html-document een ander html-document opnemen. De link (URL) naar het bron-document geef je aan in het `src`-attribuut. De inhoud van het iframe-element (tussen de haakjes) is de alternatieve inhoud die getoond wordt als het bron-document niet gevonden kan worden.

Je kunt extra informatie opgeven met de attributen:

* `height` - hoogte in `px` (pixels)
* `width` - breedte in `px`.

Voorbeeld:

```
<iframe width="560" height="315"
  src="https://coderclass.nl" allowfullscreen>
</iframe>
```

<iframe width="560" height="315"
  src="https://coderclass.nl" allowfullscreen>
</iframe>

---

*Opdrachten:*

1. Voeg een iframe toe aan de voorbeeldwebsite. Gebruik hiervoor een html-document dat al ergens op het web staat, bijvoorbeeld een YouTube-video.

## SVG-tekeningen

Een Scalable Vector Graphics tekening beschrijf je op een vergelijkbare manier als een html-document: met elementen met attributen. Zie het voorbeeld hieronder. `<g>...</g>` staat voor een *group*. `<rect .../>` voor een *rectangle* (rechthoek).

```
<svg xmlns="http://www.w3.org/2000/svg"
     version="1.1" width="5cm" height="5cm">
  <desc>Two groups, each of two rectangles</desc>
 <g id="group1" fill="red">
    <rect x="1cm" y="1cm" width="1cm" height="1cm"/>
    <rect x="3cm" y="1cm" width="1cm" height="1cm"/>
 </g>
 <g id="group2" fill="green">
    <rect x="1cm" y="3cm" width="1cm" height="1cm"/>
    <rect x="3cm" y="3cm" width="1cm" height="1cm"/>
 </g>

 <!-- Show outline of canvas using 'rect' element -->
  <rect x=".01cm" y=".01cm" width="4.98cm" height="4.98cm"
        fill="none" stroke="blue" stroke-width=".02cm"/>
</svg>
```

<svg xmlns="http://www.w3.org/2000/svg"
     version="1.1" width="5cm" height="5cm">
  <desc>Two groups, each of two rectangles</desc>
 <g id="group1" fill="red">
    <rect x="1cm" y="1cm" width="1cm" height="1cm"/>
    <rect x="3cm" y="1cm" width="1cm" height="1cm"/>
 </g>
 <g id="group2" fill="green">
    <rect x="1cm" y="3cm" width="1cm" height="1cm"/>
    <rect x="3cm" y="3cm" width="1cm" height="1cm"/>
 </g>

 <!-- Show outline of canvas using 'rect' element -->
  <rect x=".01cm" y=".01cm" width="4.98cm" height="4.98cm"
        fill="none" stroke="blue" stroke-width=".02cm"/>
</svg>

---

*Opdrachten:*

1. Voeg bovenstaand plaatje toe aan het voorbeeld-document. Verander een paar van de waarden (afmetingen, kleuren) en bekijk het resultaat.
2. Voeg een SVG-tekening toe aan je html-document.

## Canvas-tekeningen

Je kunt tekeningen maken in een html-document, met behulp van het Canvas-element.
Door middel van JavaScript-functies kun je daarop pixel-tekeningen maken.

In een volgend tutorial (JavaScript voor games) gaan we dieper in op het gebruik van het Canvas.
