
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
var down = false;          // pen down
var dir = 0;               // current drawing direction (360 degrees? )
var pos = {x: 0, y: 0};  // current position

function toPosition(x, y) {
  pos.x = x;
  pos.y = y;
}

function forward(n) {
  var
    dx = Math.round(n * Math.cos(dir * Math.PI / 180)), // from degrees to radians: *2pi/360
    dy = Math.round(n * Math.sin(dir * Math.PI / 180)),
    newpos = {x: pos.x + dx, y: pos.y + dy};
  if (down) {
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineTo(newpos.x, newpos.y);
    ctx.stroke();
  }
  pos = newpos;
}

function penUp() {
  down = false;
}

function penDown() {
  down = true;
}

function right(n) {
  if (dir < 0) { dir += 360; }
  dir = (dir + n) % 360;
}

function clearCanvas() {
  ctx.clearRect(0, 0, 200, 200);
  dir = 0;
  pos = {x: 0, y: 0};
  down = false;
}

function repeat(n, f) {
  var i;
  for (i = 0; i < n; i += 1) {
    f(i);
  }
}

$(document).ready(function () {

  $("#forwardButton").on("click", function () {
    forward(parseInt($("#forwardCount").val(), 10));
    displayState();
  });

  $("#rightButton").on("click", function () {
    right(parseInt($("#rightCount").val(), 10));
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

  $("#squareButton").on("click", function () {
    square(30);
    displayState();
  });

  $("#rectangleButton").on("click", function () {
    rectangle(30, 60);
    displayState();
  });

  $("#squareStepButton").on("click", function () {
    squareStep(30);
    displayState();
  });

  $("#turnRightButton").on("click", function () {
    turnRight(30);
    displayState();
  });

  $("#turnLeftButton").on("click", function () {
    turnLeft(30);
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

  function displayState() {
    $("#xDisplay").val(pos.x);
    $("#yDisplay").val(pos.y);
    $("#dirDisplay").val(dir);
    $("#penDisplay").val(down);
  }

  initCanvas();
  clearCanvas();
  displayState();

});

// user-defined functions:

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

function squareStep(size) {
  square(size);
  forward(size);
}

function turnRight(size) {
  right(90);
  forward(size);
}

function turnLeft(size) {
  alert("not yet defined");
}

function sq(i) {
  right(10);
  square(50);
}

function testA() {
  repeat(10, function (i) {
    square(i * 10);
  });
}

function testB() {
  repeat(10, sq);
}

function testC() {
  alert("testC not (yet) defined");
}
