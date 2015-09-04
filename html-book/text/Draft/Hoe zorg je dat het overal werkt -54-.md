
Hoe kun je zorgen dat je web-document overal (en altijd) werkt? Het moet op allerlei verschillende apparaten, met verschillende hardware, operating systems, en soorten schermen getoond kunnen worden, op een fatsoenlijke manier. Je wilt bovendien dat het over een aantal jaren ook nog werkt: dan heb je met allerlei nieuwe versies van de hardware en de software te maken.

## Standaardisatie (HTML5) en validatie

Het eerste deel van het antwoord is *standaardisatie*. HTML is de standaard voor het web. De verschillende browsers proberen zich tegenwoordig zo goed mogelijk aan deze standaard te houden.

De huidige standaard is HTML5. Dit is een *living standard*: nieuwe ontwikkelingen worden hier stapsgewijs aan toegevoegd. Dit werkt goed in combinatie met de huidige *evergreen browsers*: deze browsers werken zichzelf regelmatig bij, met minimale overlast voor de gebruikers. Dit betekent dat je browser over een jaar waarschijnlijk veel meer kan, zonder dat je daar veel voor hoeft te doen.

Sommige browsers verwerken die nieuwste aspecten van HTML5 eerder dan andere. Je moet daarom altijd rekening houden met de browsers die je gebruikers kunnen gebruiken. Via websites als [caniuse.com](http://caniuse.com) kun je nagaan welke browser welke HTML5-aspecten ondersteunt.

> Vroeger hielden de browsers zich veel minder aan de standaard. Dit had allerlei problemen, waardoor bepaalde websites alleen met een bepaalde browser konden werken. 

Het is niet genoeg als de browsers zich aan de standaard houden: ook html-documenten moeten aan de regels van de standaard voldoen. Je kunt een html-document *valideren* ten opzichte van de regels van standaard, bijvoorbeeld met de W3C validator.

## Ontwerpregels (responsive design)

Een tweede deel van het antwoord is het gebruik van bepaalde ontwerpregels, zoals *responsive design*. Hiermee bedoelen we dat een html-document zo ontworpen is dat het op allerlei verschillende soorten apparaten goed werkt, van mobiele telefoon tot desktop. Omdat een groot deel van het web-gebruik gebeurt met mobiele telefoons, hanteren veel bedrijven tegenwoordig een "mobile first" aanpak. Het moet eerst en vooral goed werken op een mobiele telefoon en tablet; daarna komt de laptop/desktop-versie.

## Wat betekent dit voor jou?

Je moet er in elk geval voor zorgen dat je html-document voldoet aan de html5-standaard. Dit kun je controleren met behulp van een zogenaamde *validator*.

> Je kunt de [W3C-validator](http://validator.w3.org/) gebruiken. Dit kan via de URL van je html-document (als het online staat), via een bestand dat je naar de validator opstuurt (upload), of door de tekst direct in de validator in te voeren (via Copy/Paste).

Een dergelijke validator controleert veel, maar niet alles. Deze zorgt er in elk geval voor dat je geen eenvoudige fouten over het hoofd ziet.

Het is een goede gewoonte om voordat je een document op het web zet, dit document te valideren. In sommige gevallen kun je je editor zo instellen dat dit automatisch gebeurt bij elke "Save"-opdracht.

Het kan nodig zijn om je document op verschillende apparaten en op verschillende browsers uit te testen. Dit geldt vooral als de layout kritisch is, en als je gebruikt maakt van geavanceerde mogelijkheden van HTML5.

*Opmerking:* Deze validatie is bedoeld voor computers die je document verwerken. Daarnaast moet je rekening houden met mensen die je document lezen en aanpassen. Zie daarvoor XXX.
