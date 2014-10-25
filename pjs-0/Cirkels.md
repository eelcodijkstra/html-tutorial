## Hoe teken je cirkelbogen met de turtle?

Voor de eenvoudige versie van de turtle gebruiken we alleen opdrachten voor het volgen van een rechte lijn, en voor draaiing om de as van de turtle. We willen de turtle nu ook een bocht kunnen laten maken, in de vorm van een cirkelboog.

Het interface dat we hiervoor kiezen is ontleend aan Python [Python turtle commands](https://docs.python.org/2/library/turtle.html#turtle.circle)

Command: `turtle.circle(radius, extent)`

* `radius`: the radius of the circle segment
* `extent` (optional): the part of the circle segment (in degrees); the direction of the turtle
is changed with this amount.

Je hebt de keuze uit een boog naar rechts, en een boog naar links:

* `radius < 0` : draw the segment clockwise;
* `radius > 0` : draw the segment counter-clockwise.

Note: Python turtle graphics uses mathematical conventions for direction (positive is counter-clockwise) and for the y-axis(?). The origin is in the middle of the Canvas?

* Logo mode: `dir === 0` - points up
* Standard mode: `dir === 0` - points right (mathematical convention)

(What are the Canvas conventions? Does it make sense to use these? Why, why not?)

> We have to decide which conventions to use. For me, it makes most sense when the sign of the angle determines the right or left turn - that is consistent with the normal turns. But, using similar conventions also has its advantages.

Voor het tekenen van een cirkelsegment kunnen we de volgende Canvas-functie gebruiken:

* `ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise )`
* `x, y` - position in Canvas coordinates (of circle centre).
* `startAngle, endAngle` - (in radians, measured from the x-axis)
* `anticlockwise` - draw anticlockwise when `true`; else, clockwise.

We tekenen de boog uitgaande van de huidige positie en richting van de turtle. Deze bepalen `x`, `y`, en `startAngle` - via een berekening. Uit de huidige positie en de richting van de turtle bepalen we de richting van het middelpunt van de cirkel. 

```js
function circle(rad, deg) {
  var cx, cy, newpos = {}, k, newdir ;
  cx = pos.x + rad * Math.sin(Math.PI / 180 * dir);
  cy = pos.y + rad * Math.cos(Math.PI / 18- * dir);
  newdir = dir + deg;
  
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  ctx.arc(cx, cy, rad, ..., false);
  ctx.stroke();
  
  k = 2 * rad * Math.sin(deg /2);
  dx = k * Math.cos(Math.PI / 180 * newdir);
  dy = k * Math.sin(Math.PI / 180 * newdir);
  newpos.x = pos.x + dx;
  newpos.y = pos.y + dy;
}
```

	
```js

// turtle makes a turn over steps degrees, with a radius rad
// dir changes with steps degrees.
// neg. steps is left turn
function circle (rad, steps) {
  var start, end;
  var newpos = {x: 0, y: 0};
  var cx = Math.round(pos.x - rad * Math.sin(dir * Math.PI / 180));
  var cy = Math.round(pos.y + rad * Math.cos(dir  * Math.PI / 180));
  
  var k = 2 * rad * Math.sin(steps / 2 * Math.PI / 180);
  console.log("k=" + k);
  var dx = k * Math.cos((steps / 2 + dir) * Math.PI / 180);
  var dy = k * Math.sin((steps / 2 + dir) * Math.PI / 180);
  
  start = (dir + 270) * Math.PI / 180;
  end = (dir + steps + 270) * Math.PI / 180;
  newpos.x = Math.round(pos.x + dx);
  newpos.y = Math.round(pos.y + dy);
  if (down) {
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineTo(newpos.x, newpos.y);
    ctx.moveTo(pos.x, pos.y);
    ctx.arc(cx, cy, rad,  start, end, false);
    ctx.stroke();
  } 
  pos = newpos;
  if (dir < 0) {dir += 360;}
  dir = (dir + steps) % 360;
//  var dx = Math.round(n*Math.cos(dir*Math.PI/180)); 
  // from degrees to radians: *2pi/360
//  var dy = Math.round(n*Math.sin(dir*Math.PI/180));
}

function circleLeft (rad, steps) {
  var start, end;
  var newpos = {x: 0, y: 0};
  var cx = Math.round(pos.x + rad * Math.sin(dir * Math.PI / 180));
  var cy = Math.round(pos.y - rad * Math.cos(dir  * Math.PI / 180));
    console.log("c= (" + cx + "," + cy + ")");
  
  var k = 2 * rad * Math.sin(steps / 2 * Math.PI / 180);
  console.log("k=" + k);
  var dx =  k * Math.cos((-steps / 2 + dir) * Math.PI / 180);
  var dy =  k * Math.sin((-steps / 2 + dir) * Math.PI / 180);
  
  start = (dir + 90) * Math.PI / 180;
  end = (dir - steps + 90) * Math.PI / 180;
  newpos.x = Math.round(pos.x + dx);
  newpos.y = Math.round(pos.y + dy);
  if (down) {
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineTo(newpos.x, newpos.y);
    ctx.moveTo(pos.x, pos.y);
    ctx.arc(cx, cy, rad,  start, end, true);
    ctx.stroke();
  } 
  pos = newpos;
  if (dir - steps < 0) {dir += 360;}
  dir = (dir - steps) % 360;
//  var dx = Math.round(n*Math.cos(dir*Math.PI/180)); 
  // from degrees to radians: *2pi/360
//  var dy = Math.round(n*Math.sin(dir*Math.PI/180));
}
```
  
  