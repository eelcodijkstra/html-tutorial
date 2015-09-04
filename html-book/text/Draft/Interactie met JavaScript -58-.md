Met JavaScript kunnen we interactie toevoegen aan een web-document. We kunnen er zelfs complete toepassingen mee maken - de zogenaamde web-apps. 

Vanuit een HTML-document bezien, is er sprake van twee soorten interactie:

* interactie met de gebruiker;
* interactie met de server.

We geven hier alleen een eenvoudig voorbeeld van interactie met de gebruiker via JavaScript. In volgende modules gaan we dieper in op de mogelijkheden van JavaScript. De voorbeelden die we behandelen zijn alleen bedoeld om een eerste indruk te geven. Het is niet nodig om deze in alle detail te begrijpen: daarvoor verwijzen we naar die volgende modules.

> Je kunt JavaScript ook gebruiken aan de kant van de *server*, om de interactie van de server met de client (browser) af te handelen. Ook andere talen zijn hier in gebruik, vooral scripting-talen zoals PHP en Python. Met behulp van bijvoorbeeld node.js kun je ook JavaScript gebruiken. Ook de interactie met Google Drive en de bijbehorende toepassingen kun je via een variant van JavaScript uitvoeren: GoogleScript.

Voor de interactie aan de kant van de browser moeten we de JavaScript-code koppelen aan het HTML-document. We gebruiken hiervoor het Document Object Model (DOM): een representatie van het HTML-document in de browser, in de vorm van een *boom*. Een interactie heeft vaak betrekking op een specifiek element, bijvoorbeeld een button of een ander invoerelement. Door middel van de naam (`id`) van het element kunnen we dit koppelen aan de JavaScript-code.

We kunnen toegang krijgen tot een element met naam `nm` in de DOM met behulp van `getElementByIId(nm)`. Voorbeeld:

```html
<button id="buttonA"> A </button>

<script>
  var buttonElt = document.getElementById("buttonA");
<\script>
```

We kunnen aan een element een actie koppelen: een handler voor een interactie-event voor een gebruikers-interactie.  In het geval van een `button` is dat bijvoorbeeld een klik op deze button (met een muis, of met "touch"). We breiden het script-deel in het bovenstaande voorbeeld uit tot:

```js
var buttonElt = document.getElememtById("buttonA");
  
function buttonHandler() {
  alert("Button A was clicked");
}

buttonElt.onclick = buttonHandler;
```

> Waar plaats je een script? In onze eenvoudige voorbeelden plaatsen we het script altijd aan het eind van het body-deel van het document. Op die manier zorgen we ervoor dat alle elementen in de DOM gedefinieerd zijn voordat het script actief wordt. Voor grotere scripts en grotere documenten is het aan te raden om de scripts in aparte bestanden op te nemen. 

We kunnen vanuit JavaScript ook het document veranderen. We kunnen de attributen van een element veranderen, bijvoorbeeld de stijl. Hiermee kunnen we de vorm van het document op het scherm veranderen. We kunnen ook de inhoud van het document veranderen, en elementen toevoegen en verwijderen.

We zullen eerst met JavaScript het uiterlijk van het document veranderen. We gaan uit van een document met onder andere de volgende elementen:

```html
 <p id="myText"> Dit is een voorbeeld-tekst </p> <br>

 <button id="buttonA"> A </button>
```

Met het volgende script kunnen we de *vormgeving* van de paragraaf aanpassen:

```js
var buttonElt = document.getElememtById("buttonA");

function buttonHandler() {
  var textElt - document.getElementById("myText");
  textElt.style.color = "blue";
}

buttonElt.onclick = buttonHandler;
```

Als we de functie `buttonHandler` aanpassen, kunnen we ook de inhoud van het element veranderen:

```js
function buttonHandler() {
  var textElt = document.getElementById("myText");
  textElt.innerHTML = textElt.innerHTML + "enz. ";
}
```

Op een vergelijkbare manier kunnen we niet alleen de tekst van het document veranderen, maar ook elementen toevoegen en verwijderen. We kunnen alle aspecten van het document aanpassen vanuit JavaScript.

### Interactie met de server

Ook voor de interactie met de server kunnen we JavaScript gebruiken. We sturen dan http-verzoeken naar de server, en verwerken de respons van deze verzoeken. Dit kunnen we *asynchroon* doen, wat betekent dat interactie tussen de gebruiker en het document mogelijk blijft tijdens de interactie vanuit het document met de server. (Als je dit synchroon doet, zoals in het geval van HTML-formulieren zonder JavaScript, dan moet de gebruiker wachten totdat de respons van de server helemaal verwerkt is.) Deze asynchrone interactie met behulp van JavaScript staat bekend onder de naam AJAX (Asynchronous JavaScript And XML; in plaats van XML wordt tegenwoordig vaak JSON gebruikt.).

  

