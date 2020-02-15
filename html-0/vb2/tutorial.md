# html-0-vb2

## Opsomming

Met behulp van het ul-element (*unordered list*) kun je een opsomming maken.
De onderdelen van zo'n opsomming geef je aan als li-element (list item).

Voor een geordende lijst gebruik je het ol-element, met daarin een aantal li-elementen.

Een li-element kun je alleen gebruiken als onderdeel van een opsomming of van een geordende lijst.

Je kunt ook een opsomming binnen een opsomming plaatsen (nesting). Alle combinaties van geordende en ongeordende lijsten zijn mogelijk.

Het resultaat van een ul-element begint op een nieuwe regel, net als bij een p-element of een h1-element.
Zo'n element noemen we ook wel een *block-level* element.

Een opsomming kun je niet gebruiken binnen een p-element. Het `<ol>`-haakje sluit het p-element af, ook als je geen `</p>`-sluithaakje gebruikt hebt.

---

*Opdrachten*

1. Verander het ul-element in het voorbeeld in een ol-element. NB: je moet dan het open- *en* het sluithaakje aanpassen.
2. Maak bij het onderdeel  "Tekenen" een opsomming van een aantal verschillende soorten, bijvoorbeeld: portrettekenen, manga's, cartoons.
3. Probeer een ol-element binnen een p-element te plaatsen. Wat gebeurt er?
 
## Elementen zonder inhoud

Een horizontale lijn geef je aan met het hr-element. Dit is een bijzonder element: het heeft geen inhoud, en daarom ook geen sluithaakje.

Een hr-element kun je niet gebruiken binnen een p-element of binnen een ul-element. Een horizontale lijn geeft altijd een overgang naar een nieuwe regel aan.

Een ander element zonder inhoud is het br-element. Dit gebruik je om de overgang op een nieuwe regel aan te geven. Dit is één van de manieren om de witruimte in het resultaat te sturen.

  ---
  
*Opdrachten*

1. Voeg één of meer hr-elementen toe aan de voorbeeld-pagina.
2. Voeg één of meer br-elementen toe. Geef enkele voorbeelden waarin je dit element zinvol kunt gebruiken.
3. Een hr-element kun je niet gebruiken binnen een p-element of een ul-element. Ga na wat er gebeurt als je dat toch probeert. Controleer dit zowel met een browser als met de W3C-validator.

## Nog meer elementen

Er zijn nog veel meer elementen, teveel om hier te behandelen. Je hoeft die elementen ook niet allemaal uit je hoofd te kennen: vaak is het voldoende als je ze kunt opzoeken als je ze nodig hebt.

Een leesbare beschrijving van de verschillende elementen vind je via MDN (het Mozilla Developers Network): [HTML Element reference](https://developer/mozilla.org/en-US/docs/Web/HTML/Element).

Via de website [devdocs.io](http://devdocs.io) kun je eenvoudig zoeken in de verschillende soorten documentatie, onder andere MDN en de officiële standaard (W3C).
  
  ---
  
  *Opdrachten*
  
1. Zoek op wat de betekenis is van het q-element en van het blockquote-element. Geef van allebeide een voorbeeld (in de voorbeeld-pagina).
2. Zoek op wat de betekenis is van het dl-element. Geef een voorbeeld hiervan in de voorbeeld-pagina.
3. Zoek een ander element dat je zou kunnen gebruiken en pas dit toe in de voorbeeld-pagina.

## Verwijzingen (links)

Een html-document staat nooit alleen: het bevat links naar andere documenten (hyperlinks), plaatjes (images), audio, video, of omvat een andere webpagina (iframe).

Voor de verwijzingen naar een andere pagina, naar een plaatje, video, of audio, gebruik je een URL (Uniform Resource Locator). 
Dit is eenzelfde URL als je gebruikt in de browser, om aan te geven welke webpagina je wilt bekijken.

Een URL in een verwijzing zie je niet direct in het resultaat op het scherm.
De URL is geen onderdeel van de inhoud van een element, maar is een *attribuut*. 
Zo'n attribuut is onderdeel van het openingshaakje van het element.

## Links en URLs

In dit voorbeeld zie je het gebruik van een *hyperlink*, of gewoon *link*. Een link bestaat uit de volgende delen:

* een `<a>`-openingshaakje,
* met als *attribuut*: `href="...een URL..."`,
* de tekst (of figuur) die op het scherm de link voorstelt,
* het afsluitende `</a>`-haakje.

Op het scherm zie je de link als een tekst in een speciale kleur, of soms onderstreept.
De kleur verandert als je de link al een keer bezocht hebt.
(We komen daarop terug bij de CSS-*pseudo-classes*.)

---

*Opdrachten:*

1. Voeg een link toe aan dit voorbeeld, bijvoorbeeld bij één van de genoemde hobbies.
2. Bezoek één van deze links door middel van de rechter muisknop of CTRL-click (OS X): selecteer "open in nieuw venster" of "open in nieuw tabblad". Wat gebeurt er met de kleur van de link?
    
## URL: Uniform Resource Locator

Een URL gebruik je om een object, bijvoorbeeld een document, in het web te vinden ("locator").
De term "resource" betekent dat het om allerlei soorten objecten (dingen) kan gaan.
Vaak gebruik je een URL ook als *identificatie* van een object.

Voorbeeld: `https://thimble.webmaker.org/nl/project/52060/edit`

Een URL bestaat uit de volgende onderdelen:

* het protocol (bijv. `http:` of `https:`)
* de hostnaam (bijv. `thimble.webmaker.org`)
* de padnaam (bijv. `/nl/project/52060/edit`)

Na het http-protocol volgen de scheidingstekents `//`.

Het laatste deel van de hostnaam is de domeinnaam, bijvoorbeeld `webmaker.org`.

Na de padnaam kunnen ook nog parameters volgen; deze komen later aan bod.

---

## Attributen

Een `<a>`-element heeft een href-attribuut met de URL als waarde.
Elk HTML-element kan attributen hebben. Deze noteer je binnen het openingshaakje, na de naam van de tag. 
Een attribuut noteer je als `naam="waarde"`,
bijvoorbeeld: `href="http://infvo.nl"`.

Bij een link kun je opgeven of de link-pagina de huidige pagina moet overschrijven of dat deze in een nieuw venster geopend moet worden.
Hiervoor gebruik je het attribuut `target`:

* `target="_self"` - link-pagina overschrijft huidige pagina (default)
* `target="_blank"` - open link-pagina in nieuw venster

---
    
 *Opdrachten:*
 
 1. breid een `<a>`-tag in je voorbeeld uit met een target-attribuut, om de pagina in een nieuw venster te openen. Controleer of dit werkt.  


## Een extra pagina

Een website bestaat meestal uit meerdere pagina's. We hebben al een tweede pagina gemaakt.

Een verwijzing naar een andere pagina van dezelfde website is eenvoudiger dan een verwijzing naar een andere website. 
Als `href`-attribuut geef je de (pad)naam van het bestand op. Voorbeeld: 

`<a href="index.html">home</a>`

Je geeft in dit geval het protocol (bijv. `http://`) en het domein (bijv. `infvo.nl`) niet aan. (Dit maakt het later eenvoudiger om je webpagina's naar een ander domein te verhuizen.)

---

*Opdrachten:*

1. Maak een link naar de tweede pagina. Gebruik hiervoor het woord "Tekenen" in de hobby-opsomming als link-tekst.
2. Maak een link van deze tweede pagina naar de eerste. Gebruik hiervoor de tekst onderaan: verwijzing naar de "home" pagina.
3. Maak een derde pagina aan.
4. Maak een link van de eerst pagina naar deze derde pagina. 

## Bijzondere tekens; escapes

In deze handleiding zie je soms zoiets: "&lt;p&gt;-element". Hoe kun je zo'n tekst maken zonder dat de browser in de war komt? Hoe kun je voorkomen dat de browser dit als een openingshaakje ziet?

Als je een bijzonder teken als "&lt;" in het resultaat wilt hebben, dan gebruik je daarvoor een aparte notatie: `&lt;` (`lt` staat voor "less than", het wiskundige teken dat hier gebruikt wordt).

Enkele andere tekens die je op zo'n manier noteert:

* & - `&amp;`
* &lt; - `&lt;`
* &copy; - `&copy;`
* &para; - `&para;`
* &nbsp; - `&nbsp;` - non-breaking space (witruime)
  
In HTML-terminologie heten dit *named character references*; soms noemen we dit ook *character entities*.
Voor een overzicht zie bijvoorbeeld: [character references](http://dev.w3.org/html5/html-author/charref).

Deze afspraak is een voorbeeld van een *escape-notatie*: je gebruikt een speciaal teken, in dit geval de &, om aan te geven dat wat volgt niet op de normale manier verwerkt moet worden. Dit is een "ontsnapping" uit de normale interpretatie. Dit principe kom je op meer plaatsen in de ICT tegen, bijvoorbeeld bij communicatieprotocollen.

*Opdrachten:*

1. Hoe kun je de tekst &amp;lt; in het resultaat van je webpagina krijgen?
2. Gebruik nooit een enkelvoudige & in je HTML-code. Als in het resultaat of in een URL een & nodig is, gebruik dan ***altijd*** de vorm `&amp;`. Hoe schrijf je dan de URL: `http://infvo.com/lab/index.php?title=Hoofdpagina&action=history`?
3. Geef een voorbeeld van het gebruik van een *non-breaking space*.  
  
