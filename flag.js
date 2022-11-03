var canvas = document.getElementById("hungary");
var context = canvas.getContext("2d");
context.beginPath();

context.fillStyle = 'green';
context.fillRect(0, 400, 800, 200);
context.fillStyle = 'white';
context.fillRect(0, 200, 800, 200);
context.fillStyle = 'red';
context.fillRect(0, 0, 800, 200);
// x, y, width, height

var canvas = document.getElementById("poland");
var context = canvas.getContext("2d");
context.beginPath();

context.fillStyle = 'red';
context.fillRect(0, 400, 800, 200);
context.fillStyle = 'white';
context.fillRect(0, 200, 800, 200);
// x, y, width, height

var canvas = document.getElementById("france");
var context = canvas.getContext("2d");
context.beginPath();

context.fillStyle = 'red';
context.fillRect(540, 0, 270, 600);
context.fillStyle = 'blue';
context.fillRect(0, 0, 270, 600);
context.fillStyle = 'white';
context.fillRect(270, 0, 270, 600);
// x, y, width, height