let elfs = [];
let www;




function preload() {
  let elf0 = loadImage("elf0.png");
  let elf1 = loadImage("elf1.png");
  let elf2 = loadImage("elf2.png");
  let elf3 = loadImage("elf3.png");
  let elf4 = loadImage("elf4.png");
  let elf5 = loadImage("elf5.png");
  let elf6 = loadImage("elf6.png");
  let elf7 = loadImage("elf7.png");
  let elf8 = loadImage("elf8.png");
  elfs = [elf0, elf1, elf2, elf3, elf4, elf5, elf6, elf7, elf8];
  

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


function setup() {
var canvas;
  let H;
  H = (windowHeight / 2) * 7+180;
  canvas=createCanvas(windowWidth-17,H);
  
  canvas.position(0,0);
  canvas.style('z-index','-1');
  frameRate(12);


}

function draw() {
  background(255);

  
  //   cursor
  let elf = random(elfs);
  imageMode(CENTER);
  image(elf, pmouseX, pmouseY, 50, 50);
  
}


