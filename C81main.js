canvas = document.getElementById("MyCanvas");
//document.getElementById("MyCanvas").getContext("2d");
ctx  = canvas.getContext("2d");

color = "blue";

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = color;
ctx.arc(80,200,50,0,2*Math.PI);
ctx.stroke();
 // arc(x,y,radius, starting angle, angle)

 color = "black";

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = color;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();

color = "red";

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = color;
ctx.arc(320,200,50,0,2*Math.PI);
ctx.stroke();

color = "yellow";

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = color;
ctx.arc(130,250,50,0,2*Math.PI);
ctx.stroke();

color = "green";

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = color;
ctx.arc(250,250,50,0,2*Math.PI);
ctx.stroke();

