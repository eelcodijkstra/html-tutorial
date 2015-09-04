Om een plaatje, zoals een foto of een tekening, op te nemen in een html-pagina, heb je het webadres van dit plaatje nodig. Bovendien moet het plaatje beschikbaar zijn in een formaat dat de browser kan gebruiken.

> Een plaatje is in HTML altijd een afzonderlijk bestand: het maakt geen deel uit van het document zelf. Plaatjes in een document van een tekstverwerker als Word of Google Drive zijn meestal wel onderdeel van het document zelf.

De meeste browsers kunnen met de volgende formaten voor plaatjes overweg:

*  .png (dit is een alternatief voor jpeg, met minder beperkingen)
*  .jpg (jpeg)
* .bmp (bitmap)
* .svg (scalable vector graphics)
* .gif (gif - inclusief gif animaties)

Door middel van het  `<img>`-element neem je een plaatje op in een html-document. Als attributen moet je vermelden:

* `src=" ...  url ... "` - het webadres (URL) van het plaatje.
* `alt=" ... alternatieve tekst ..."` - de tekst als alternatief voor het plaatje.

Je kunt een plaatje op twee manieren op een pagina plaatsen: als onderdeel van de lopende tekst, of als apart onderdeel. In html hangt dit af van de plaats van het `<img>`-element:

1. als losse figuur (block-level element). Dit gebruik je voor de grotere figuren.
2. als onderdeel van de lopende tekst (inline element). Dit gebruik je als je een kleine figuur, zoals een smiley, in de tekst wilt opnemen. Je moet er wel rekening mee houden dat een dergelijke figuur niet automatisch groter of kleiner wordt met de grootte van het lettertype.

In het voorbeeld hieronder zie je beide.

```
<p> Je kunt een smiley-plaatje
<img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Fb_smiley.jpg"
alt="smile"> in een lopende tekst gebruiken.
<\p>
<img src="http://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg"
alt="Paris by night" height="100px" >
<p> Dit is de volgende alinea.
<\p>
```

### Grootte van het plaatje

Met behulp van de attributen `height` en `width` kun je het formaat van het plaatje opgeven (in pixels - voor HTML4, of in CSS pixels - voor HTML5).

> Tip: It is a good practice to specify both the height and width attributes for an image. If these attributes are set, the space required for the image is reserved when the page is loaded. However, without these attributes, the browser does not know the size of the image. The effect will be that the page layout will change during loading (while the images load). (W3Schools)

### Alternatieve tekst

Het is een goede gewoonte om een figuur altijd te voorzien van tekst die gebruik kan worden als alternatief voor de figuur. Deze alternatieve tekst wordt door de browser getoond als de figuur niet gevonden kan worden, of als deze om een andere reden niet getoond kan worden. Ook kan deze tekst gebruikt worden als de inhoud van een pagina voorgelezen wordt.

```
<img src="smiley.gif" alt="Smiley face" height="42" width="42">

```

### Positioneren van plaatjes op de pagina

Voor het positioneren van een plaatje op de pagina maak je gebruik van CSS. Dit komt in een later hoofdstuk aan de orde.

## HTML5 figure element

In een groter document  wil je soms een tekst bij een plaatje - bijvoorbeeld een onderschrift of titel ("caption"). In HMTL5 kun je hiervoor het  `<figure>`-element gebruiken.

Voorbeeld (uit MDN beschrijving):

```
<figure>
<img src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png" 
  alt="An awesome picture">
</figure>
<p></p>
<figure>
<img src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png" 
  alt="An awesome picture">
<figcaption>Caption for the awesome picture</figcaption>
</figure>
<p></p>
```

### Referenties

* [HTML5 figure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
* [img element](http://devdocs.io/html/img)

## iframe element

Met behulp van het `<iframe>`>element kun je een andere htm-document opnemen als onderdeel van een html-document. We spreken dan over *embedding* van dit andere document. Dit gebruik je bijvoorbeeld als je een YouTube-video op je eigen website wilt opnemen:

```
<iframe width="560" height="315"
  src="//www.youtube.com/embed/CP1oBwccARY"
  frameborder="0" allowfullscreen>
</iframe>
```

Met een iframe kun je een willekeurige website opnemen als onderdeel van je pagina. Zie bijvoorbeeld:

```
<iframe width="560" height="315"
  src="//webmaker.org"
  frameborder="1" allowfullscreen>
</iframe>
```

Er zijn een paar regels waar je rekening mee moet houden. In de eerste plaats moet het protocol van het iframe-document ten minste even veilig zijn als het protocol van het omvattende document. Je kunt altijd een `https`-url gebruiken voor een iframe-document. Maar een `http`-url voor een iframe binnen een document met een `https`-url werkt niet.

> In de voorbeelden hierboven is het protocol weggelaten in de URL. Dit betekent dat het protocol van het omvattende document gebruikt wordt.

In de tweede plaats zijn er allerlei andere veiligheidsoverwegingen, voor de communicatie tussen het iframe-document en het omvattende document. Er is daarbij een verschil tussen "same origin" URLs, en "cross origin" URLs. Als het document in het iframe van een ander domein afkomstig is, is er sprake van een "cross origin". Dit is een potentieel gevaarlijke situatie. Als het iframe-document dezelfde origin (domein) heeft als het omvattende document, neem je aan dat het onderdeel is van dezelfde website.

## Canvas

## SVG

Het Canvas werkt op basis van pixels. Je kunt ook op een andere manier tekenen: met vectoren. In HTML5 kun je Scalable Vector Graphics (SVG) elementen gebruiken. In dit geval beschrijf je een tekening op een vergelijkbare manier zoals je een html-document beschrijft: als een samenstelling van elementen.

> In tegenstelling tot html (tot nu toe) heeft SVG de mogelijkheid voor het definiëren van eigen componenten 
(abstracties). De notatie voor het gebruik is wel heel anders dan die voor normale SVG-elementen: er is een
speciaal `<use>`-element voor het "aanroepen" van een zelf-gedefinieerd element (figuur).

Voorbeeld:

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

## Kaarten

Je kunt op verschillende manieren een kaart op je website plaatsen. Je maakt daarvoor gebruik van een API van een server die kaart-informatie aanbiedt.  Je moet er dan voor zorgen dat de server het juiste HTTP-verzoek krijgt. In eenvoudige gevallen kan dat door een URL met de juiste parameters op te geven (bijvoorbeeld de URL in een `img`-element). In ingewikkelder gevallen handelt een lokaal script (in JavaScript) de interactie met de server af. De aanbieder van de kaart-API geeft de code die je hiervoor in je html-document moet opnemen.

- als statisch plaatje. In dit geval is een `img`-element vaak voldoende. In de URL geef je de parameters voor de kaart-API aan.
- als interactieve kaart. Hiervoor heb je een element nodig met JavaScript, voor het doorspelen van de interactie met de server.

Er zijn verschillende aanbieders van kaarten voor websites. Google Maps is erg bekend, maar je kunt ook open source kaarten opnemen met Open Streetmap. Enkele voorbeelden van APIs:

* [Google Maps API](https://developers.google.com/maps/)
* [Open Streetmap services (met API)](http://wiki.openstreetmap.org/wiki/List_of_OSM_based_Services )

## Audio en video

In HTML5 kun je rechtstreeks geluid (audio) en beeld (video) opnemen. Vroeger had je daarvoor speciale plug-ins nodig, maar tegenwoordig is dit onderdeel van HTML5 - en dus ingebouwd in de browser.
