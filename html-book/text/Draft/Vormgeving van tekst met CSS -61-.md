Met HTML kun je de inhoud en de structuur van een web-document beschrijven. Je doet dit aan de hand van elementen die een bepaalde rol en betekenis hebben. Uiteindelijk wil je het document ook weergeven op het scherm van een computer of van een mobiel apparaat, of op papier. Hoe kun je het document daarvoor vormgeven?

Voor deze vormgeving gebruik je een aparte taal: CSS (Cascading Style Sheets). In dit (en het volgende) hoofdstuk maken we kennis met CSS; voor een verdere uitwerking kun je een volgende module volgen.

Bij de vormgeving van een web-document hebben we te maken met de volgende aspecten:

* vormgeving van *tekst*: bijvoorbeeld het lettertype (font), de grootte van de tekens, de kleur;
* vormgeving van *elementen*: de achtergrondkleur, kantlijnen of randen om het element, witruimte, enz.
* opmaak (layout) van de *pagina*, onder andere de positionering van de verschillende elementen (zoals figuren, navigatie-onderdelen, enz.)

Aan elk van deze onderdelen besteden we een apart hoofdstuk.

## Voorbereiding

Opdrachten:

* de website [CSS Zen Garden](www.csszengarden.com) demonstreert  hoeveel verschil de vormgeving via CSS kan maken, met eenzelfde inhoud. Bekijk een aantal voorbeelden op deze website.

## Vormgeving van de tekst

### Style-attribuut

Als eerste voorbeeld behandelen we de vormgeving van de kopjes - de elementen h1, h2, enz. We kunnen de vormgeving van een element aangeven door middel van een *style-attribuut*. De waarde van een style-attribuut bestaat uit een reeks `css-declarations` van de vorm `property: value;`.  Voorbeeld:

```html
<h1 style="font-family: sans-serif; color: blue;"> 
  Welkom op mijn pagina
</h1>
```

Hiermee geven we de volgende stijl aan voor deze kop: 

* `font-family:sans-serif;` - gebruik een schreefloos lettertype;
* `color:blue;` - gebruik blauw als kleur voor de letters .

### Ontkoppelen van style en element

We willen graag een consistente vormgeving voor de weergave van een document. Voor alle h1-elementen gebruiken we bij voorkeur dezelfde stijl. Als we dit zouden doen door de style-properties bij elk h1-element te herhalen, hebben we mogelijk een probleem:

* bij een dergelijke herhaling kunnen we snel een fout maken; als we dit bij een enkel element vergeten,  is onze vormgeving niet meer consistent;
* als we een iets andere vormgeving willen voor de kopjes, bijvoorbeeld omdat een andere kleur beter past bij de nieuwe huisstijl, dan moeten we de stijl-attributen van alle kopjes veranderen. Dit is niet alleen veel werk, maar de kans op fouten is ook erg groot.

Een betere oplossing is als we de stijl van alle h1-elementen op één plaats beschrijven. We moeten dan wel een manier hebben om de stijl en de elementen te koppelen. Dit doen we met behulp van *CSS-selectoren*. De eenvoudigste daarvan is de naam van het element-type (de tag-name). Voorbeeld:

```html
  <style>
    h3 {
       font-family: sans-serif;
    }
  </style>
...
  <h3> Mijn hobbies </h3>
...
  <h3> Tekenen </h3>
```

In dit voorbeeld hebben we een apart style-element, met daarin een aantal CSS-regels van de vorm: `selector(en) {prop:value ...}`. Dit style-element plaatsen we bij voorkeur in het head-element, voorin het document. (We zullen later zien dat het vaak handiger is om deze CSS-regels in een apart bestand te plaatsen.)

Er zijn meer redenen waarom we zo inhoud en vormgeving willen scheiden: de vormgeving kan heel erg van het apparaat en van de omgeving van de gebruiker afhangen; bovendien kan de vormgeving onafhankelijk van de inhoud veranderen. In de meeste gevallen blijft de vormgeving gelijk (consistentie is belangrijk). Maar soms blijft de inhoud gelijk, en willen we de vormgeving veranderen. Ook zijn hiervoor vaak verschillende personen verantwoordelijk. Het is dan handig als deze twee aspecten ook fysiek gescheiden zijn - in verschillende delen van een document, of liever nog, in verschillende bestanden.

Samenvattend: we scheiden inhoud en opmaak ("*presentation*") om

* een consistente opmaak te krijgen voor gelijksoortige elementen (en voor gelijksoortige documenten);
* veranderingen in de opmaak onafhankelijk uit te kunnen voeren  van veranderingen in de inhoud;
    * variatie en evolutie van opmaak onafhankelijk van variatie en evolutie van inhoud;
* de opmaak eenvoudig aan te kunnen passen aan de context van het gebruik, zoals het apparaat, of de voorkeuren van de gebruiker.





