Belangrijke vragen

## Hoe weet je of het altijd werkt?

* je hebt te maken met verschillende computers, en met verschillende browsers. *Standaardisatie* van HTML etc. speelt daarbij een belangrijke rol; browsers proberen zich aan die standaarden te houden, en web-ontwikkelaars proberen dat ook te doen, bijvoorbeeld door de *validator* te gebruiken.
* voor javascript e.d. heb je testmethodes nodig. De ontwikkelmethodes

## Hoe zorg je dat het overal werkt?

* dit is voor client-based apps lastiger dan voor apps die alle verwerking bij de server doen: je moet rekening houden met de variaties in de browsers die je klanten (gebruikers) gebruiken. In sommige gevallen kun je extra eisen stellen, bijvoorbeeld "een recente/moderne browser" (dus geen IE 7 etc.)
* eigenlijk moet je dit uittesten met verschillende browsers, als je wilt voorkomen dat je gebruikers voor verrassingen komen te staan.
* standaarden spelen hierbij een belangrijke rol.

## Hoe ga je om met variatie en evolutie? en innovatie?

* variaties tussen browsers, evolutie van html:
    * html als evoluerende standaard;
    * evergreen browsers;
    * polyfills (tijdelijke oplossing via library);

Ontwikkelmethodes zoals "continuous deployment" spelen hierin ook een rol. Via het web is het mogelijk om een nieuwe versie direct aan alle gebruikers te distribueren. En je kunt het eigenlijke gebruik monitoren (tot op zekere hoogte).

## Hoe schaalbaar is je oplossing?

* het web is gericht op extreme schaalbaarheid. 
    * cloud-oplossingen zijn mogelijk van erg eenvoudig tot miljoenen gebruikers.

## Efficiëntie?

(De efficiëntie van web-toepassingen speelt op twee niveaus: (i) in de browser; (ii) in de server. Dit eerste is voor elke toepassing van belang. Het tweede vooral voor toepassingen met een groot aantal gebruikers.)

## Hoe houd je de complexiteit in de hand?

* complexiteit - in de zin van ons beperkt denkraam;
* 