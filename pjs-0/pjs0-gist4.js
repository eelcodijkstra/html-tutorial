
var ctx; // the global context for the used Canvas element

function initCanvas() {
  var canvas = document.getElementById("mycanvas");
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
  } else {
    alert("no canvas found");
  }
}

// turtle graphics variables
var down=false;          // pen down
var dir=0;               // current drawing direction (360 degrees? )
var pos = {x: 0, y: 0};  // current position

function toPosition (x, y) {
  pos.x = x; pos.y = y;
}

// sin and cos in degrees

function sin(d) {
  return Math.sin(d * Math.PI / 180);
}

function cos(d) {
  return Math.cos(d * Math.PI / 180);
}

function forward(n) {
  var dx = Math.round(n * cos(dir));
  var dy = Math.round(n * sin(dir));
  var newpos = {x: pos.x+dx, y: pos.y+dy};
  if (down) {
    ctx.beginPath ();
    ctx.moveTo (pos.x, pos.y);
    ctx.lineTo (newpos.x, newpos.y);
    ctx.stroke ();
  }
  pos = newpos;
}

function penUp() {
  down=false;
}

function penDown() {
  down=true;
}

function right(n) {
  while (dir<0) {dir += 360;}
  dir = (dir + n) % 360;
}

// take turn with circle segment of deg degrees
// when deg < 0: left turn, deg > 0: right turn

function turnRight(rad, deg) {
  var sgn = (deg < 0) ? -1 : 1;
  var corr = (deg < 0) ? 90 : 270;
  var cx = Math.round(pos.x - sgn * rad * sin(dir));
  var cy = Math.round(pos.y + sgn * rad * cos(dir));

  var k = Math.abs(2 * rad * sin(deg / 2));
  var dx =  k * cos(deg / 2 + dir);
  var dy =  k * sin(deg / 2 + dir);

  var start = (dir + corr) * Math.PI / 180;
  var end = (dir + deg + corr) * Math.PI / 180;
  var newx = Math.round(pos.x + dx);
  var newy = Math.round(pos.y + dy);
  if (down) {
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
//    ctx.lineTo(newx, newy);
//    ctx.moveTo(pos.x, pos.y);
    ctx.arc(cx, cy, rad,  start, end, deg < 0);
    ctx.stroke();
  }
  pos.x = newx;
  pos.y = newy;
  while (dir + deg < 0) {dir += 360;}
  dir = (dir + deg) % 360;
}

function clearCanvas () {
  ctx.clearRect (0, 0, 200, 200);
  dir=0;
  pos={x: 100, y: 100};
  down=false;
}

function repeat(n, f) {
  var i;
  for (i = 0; i < n; i += 1) {
    f(i);
  }
}

$(document).ready( function() {

  $("#forwardButton").on("click", function () {
    forward(parseInt($("#forwardCount").val()));
    displayState();
  });

  $("#rightButton").on("click", function () {
    right(parseInt($("#rightCount").val()));
    displayState();
  });

  $("#turnRightButton").on("click", function () {
    turnRight(
      parseInt($("#turnRightRadius").val()),
      parseInt($("#turnRightCount").val()));
    displayState();
  });
  $("#upButton").on("click", function () {
    penUp();
    displayState();
  });

  $("#downButton").on("click", function () {
    penDown();
    displayState();
  });

  $("#clearButton").on("click", function () {
    clearCanvas();
    displayState();
  });

  $("#testAButton").on("click", function () {
    testA();
    displayState();
  });

  $("#testBButton").on("click", function () {
    testB();
    displayState();
  });

  $("#testCButton").on("click", function () {
    testC();
    displayState();
  });

  function displayState () {
    $("#xDisplay").val(pos.x);
    $("#yDisplay").val(pos.y);
    $("#dirDisplay").val(dir);
    $("#penDisplay").val(down);
  }

  initCanvas();
  clearCanvas();
  displayState();

});

//  ======== User-defined functions ============


function square(size) {
  penDown();
  forward(size); right(90);
  forward(size); right(90);
  forward(size); right(90);
  forward(size); right(90);
}

function rectangle(width, height) {
  alert("not yet defined");
}

function squareStep30() {
  square(30);
  forward(30);
}

function sq() {
  right(10);
  square(50);
}

function testA() {
  repeat(10, sq);
}

function testB() {
  penDown();
  repeat(30, function (i) {
    right(i);
    forward(i);
  });
}

function testC() {
  alert("testC not (yet) defined");
}
