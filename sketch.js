var duck;
var w = "wanted dead or alive";

function preload() {
   duck = loadImage("killer_duck.jpg"); 
}


function setup() {
	createCanvas(680, 750);
	background("white");
	textSize(50);
	text(w, 20, 20);
}

function draw() {
	background(0);
  image(duck, 0, 0, width, height);  
       
	
	
	
	}
	
	
