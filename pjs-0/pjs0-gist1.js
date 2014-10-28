
var ctx; // the global context for the used Canvas element

function initCanvas () {
  var canvas = document.getElementById("mycanvas");
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
  } else {
    alert ("no canvas found");
  }
}

// turtle graphics variables
var down=false;          // pen down
var dir=0;               // current drawing direction (360 degrees? )
var pos = {x: 0, y: 0};  // current position

function toPosition (x, y) {
  pos.x = x; pos.y = y;
}

function forward (n) {
  var dx = Math.round (n*Math.cos (dir*Math.PI/180)); // from degrees to radians: *2pi/360
  var dy = Math.round (n*Math.sin (dir*Math.PI/180));
  var newpos = {x: pos.x+dx, y: pos.y+dy};
  if (down) {
    ctx.beginPath ();
    ctx.moveTo (pos.x, pos.y);
    ctx.lineTo (newpos.x, newpos.y);
    ctx.stroke ();
  }
  pos = newpos;
}

function penUp () {
  down=false;
}

function penDown () {
  down=true;
}

function right (n) {
  if (dir<0) {dir += 360;}
  dir = (dir + n) % 360;
}

function square (n) {
  penDown ();
  for (var i=0; i<4; i++) {
    forward (n);
    rotate (90);
  }
}

function clearCanvas () {
  ctx.clearRect (0, 0, 200, 200);
  dir=0;
  pos={x: 100, y: 100};
  down=false;
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

function square50() {
  penDown();
  forward(50); right(90);
  forward(50); right(90);
  forward(50); right(90);
  forward(50); right(90);
}

// functions linked to buttons:

function testA() {
  square50();
}

function testB() {
  alert("Hallo from testB");
}

function testC() {

}
