
Een html-document is een *platte-tekstbestand*. Zo'n bestand bestaat uit een reeks tekens: letters, cijfers, spaties, regelovergangen, en andere tekens. Deze tekens hebben geen opmaak: alle tekens gebruiken hetzelfde lettertype, en er is geen sprake van kleur of van andere aspecten van vormgeving. Platte tekst gebruik je ook voor programmacode, en voor eenvoudige e-mail en SMS-berichten.

> Een platte-tekstbestand kun je met een *editor* als Notepad lezen of bewerken. In de praktijk gebruik je vaak een *programmer's editor*, zoals Emacs, vi, of SublimeText; of, op het web, editors als Ace of CoreMirror. Deze vind je ook als onderdeel van een ontwikkelomgeving (SDK). Een tekstverwerker als Word is niet geschikt voor het bewerken van platte-tekstbestanden.

Hieronder zie je een voorbeeld van een eenvoudig html-document:

```
<!doctype html>
<html>
  <head>
    <title>Mijn webpagina</title>
  </head>
  <body>
    <h1>Welkom!</h1>
    <p>Welkom op mijn webpagina. Hier is nu nog 
       weinig te zien, maar dat zal zo veranderen.
    </p>
    <p>Ik zal hier later iets meer over mijzelf 
      vertellen. 
    </p>
  </body>
</html>
```

1. De eerste regel geeft aan welk soort document dit is, en welke html-versie dit document gebruikt. Het type `html` geeft aan dat het om een html5-document gaat.
2. Een html-document bestaat uit *elementen* van de vorm `<naam> ... </naam>`. Hierin vormt `<naam>` het openingshaakje; dit heet ook wel de *opening tag* (etiket of label);  `</naam>` is het bijbehorende sluithaakje.
3. Tussen de `<` en `>` staat de *tag name*: deze geeft het type van het element aan. We spreken bijvoorbeeld over een `h1`-element, of een `p`-element;
4. De elementen binnen de haakjes vormen de *inhoud* van het element.
5. Door middel van deze haakjes kunnen we elementen na elkaar plaatsen, maar ook binnen elkaar. Een element bevat dan andere elementen. Dit laatste noemen we *nesting*.
6. Het html-element bevat twee opeenvolgende elementen: eerst het `head`-element, dan het `body`-element.
7. Het `head`-element bevat *informatie over* de pagina, ook wel *meta-data* genoemd.
8. Het `body`-element bevat de eigenlijke *inhoud* van de pagina.

## Doctype: welke standaard?

De eerste regel van het html-document geeft aan welke html-standaard gebruikt is. Meer over HTML-5 en andere HTML-versies vindt je [verderop](Over HTML-standaarden -68-.html).

## Element: naam, inhoud, en attributen

Je kunt een html-element zien als een container (doos) met een speciale betekenis. De structuur van een element beschrijven we [verderop](Element naam, inhoud en attributen -69-.html).

## Nesting en bomen

De haakjes moeten in HTML, net als in andere programmeertalen, netjes "genest" worden. Voorbeeld: `<a>...<b>...</b>...<b>...</b>...</a>`.

> Je mag ze *niet kruislings* gebruiken: `<a>...<b>...</a>...</b>` (**fout**).

Dergelijke geneste haakjes stellen een *hiërarchische structuur* voor. Deze komen we in allerlei vormen in de informatica tegen: zie [Bomen](Bomen -46-.html).

## Witruimte

In de html-document heeft witruimte (spaties, overgang op nieuwe regel) alleen betekenis als scheidingsteken. Je hebt dit nodig om de woorden in de tekst te scheiden.

De browser bepaalt op grond van de afmetingen van het venster en van de regels en aanwijzingen voor de opmaak, hoe de tekst en andere elementen over het venster verdeeld moeten worden. De hoeveelheid wit in de html-vorm maakt daarbij niet uit.

We gebruiken het wit in het html-bestand om dit beter leesbaar te maken voor de menselijke lezer. (Voor de browser maakt dit immers niet uit.) Door bij een openingshaakje in te springen, en bij een sluithaakje terug te gaan, zie je in het bestand direct hoe de verschillende elementen genest zijn.

Dit is een voorbeeld van afspraken die gemaakt worden tussen programmeurs, om de leesbaarheid van programmacode te vergroten. Je schrijft html-code niet alleen voor de browser, maar ook voor je collega's!

## Escapes, benoemde tekens

Een tag heeft de vorm `<naam>` - maar wat als we een dergelijke reeks tekens als inhoud willen gebruiken? Dat komt bijvoorbeeld voor in een document als dit, waarin we allerlei html-tags beschrijven. Maar het teken `<` kan ook voorkomen in een wiskundige tekst.

De oplossing hiervoor in html is het gebruik van *benoemde tekens* (named character reference) als ontsnappingsmechanisme (escape). De naam van het `<`-teken is "`&lt;`". Als we in een html-document willen spreken over de `<h1>`-tag, dan noteren we dit als "`&lt1;h1&gt;`-tag". Andere benoemde tekens zijn:

* `&lt;` voor `<`
* `&amp;` voor `&`
* `&gt;`voor `>`
* `&quot;` voor `"`

*Vraag*: waarom zou je `&amp;` nodig hebben?
