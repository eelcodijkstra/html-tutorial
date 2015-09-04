Een volgende stap is de opmaak van de pagina. In het bijzonder speelt daarbij: waar plaats je de verschillende elementen (positionering)? CSS heeft hiervoor de nodige hulpmiddelen, maar deze zijn niet altijd even gemakkelijk en doorzichtig in het gebruik.

Deze positionering speelt in het bijzonder een rol als je een webdocument zowel voor mobiele als voor desktop-schermen geschikt wilt maken. Je wilt graag een *responsive design*: de vorm past zich op een logische manier aan aan het apparaat dat gebruikt wordt. Veel ontwerpers gebruiken tegenwoordig een *mobile first* aanpak: er wordt eerst een mobiele versie gemaakt van de web-pagina of de web-app; later wordt er een desktop-versie gemaakt die vaak van deze mobiele versie afgeleid is. Deze aanpak heeft in het bijzonder zin als de web-pagina of de web-app vooral op mobiele apparaten gebruikt wordt.

We geven hier enkele voorbeelden van positionering met CSS. In een volgende module gaan we veel dieper op deze materie in.

Een eenvoudig voorbeeld is het positioneren van een plaatje, bijvoorbeeld een img-element. We gaan uit van de volgende situatie:

```html
  <div id="div1">
    <div id="div2">
      <p id="par1"> Dit is een stukje tekst; het is kort, maar kan
        ook langer zijn.
      </p>
      <img src="http://myserver.com/figures/fig2.png" id="fig1">
    </div>
    <p id="par2">  Nog een stukje tekst </p>
  </div>
```

Dit plaatje kun je op twee manieren plaatsen:

* als blok dat onderdeel is van een reeks (tekst-)blokken; dit is het normale geval. De tekst van `par1` komt boven het
plaatje, en de tekst van `par2` onder het plaatje. Zowel de tekst als het plaatje beslaan (in principe) de beschikbare breedte.
* als blok dat "zweeft" ten opzichte van de tekst, naar de linker- of naar de rechter kantlijk van de omvattende box. 

Door de css-regel: `#fig1 { float: right; }` geef je aan dat de figuur naar rechts geplaatst moet worden. 

Het effect is waarschijnlijk niet wat je wilt: het plaatje steekt onder uit de box, en komt in conflict met de tekst van `par2`. Dit kun je op twee manieren oplossen; deze kun je ook combineren.

Als je een element onder een `float`-element geplaatst wilt hebben, dan geef je dat aan met de css-property `clear`.
In dit geval zorgt `#par2 { clear: right } ` ervoor dat `par2` onder de elementen komt die naar rechts "zweven", in dit geval het plaatje.

Je kunt er ook voor zorgen dat het plaatje niet buiten het omvattende element `div2` uitsteekt, door de volgende regel:
`#div2 { overflow: auto; }`.

Meer informatie over het positioneren van elementen



