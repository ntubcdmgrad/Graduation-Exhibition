let elfs = [];
let www;
let m = 780;
let title;
let a;
let b;
let c;
let d;
let e;
let C =
  "我們使用回收再生紙張製作包裝，減少浪費、易於回收，以藏在城市中的苔蘚為概念，混合再生紙漿與廢棄鐵絲，製作乘載苔蘚的紙漿板，還原水泥的凹凸紋理，呈現城市意象，透過再生材質以傳遞自然與文化共生。";
let BGV;

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
  title = loadImage("111title.png");
  elfs = [elf0, elf1, elf2, elf3, elf4, elf5, elf6, elf7, elf8];
  www = loadImage("website use.png");
  a = loadImage("G8_0.jpg");
  b = loadImage("G8_1.jpg");
  c = loadImage("G8_2.jpg");
  d = loadImage("G8_3.jpg");
  e = loadImage("G8_4.jpg");
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


function setup() {
var canvas;
  let H;
  H = (windowHeight / 2) * 7+300 ;
  canvas=createCanvas(windowWidth-17,H);
  // canvas=createCanvas(1920-17, TopSpace + H + H + H + H );
  canvas.position(0,0);
  canvas.style('z-index','-1');
  frameRate(12);

  // video setup
  // BGV = createVideo("IMG_0009.MOV");
  // BGV.size(400, 400);
  // BGV.volume(0);
  // BGV.loop();
  // BGV.hide();
}

function draw() {
  background(255);
//   video
  // imageMode(CORNER);
  // let img = BGV.get();
  // image(img, 0, 100);
  
    //   Project name
  let TextSpacing;
  TextSpacing = (1920 / 3) * 2 + 20;
  let TopSpace = (1080 / 6)+30 ;

  // textSize(25);
  // textStyle(BOLD);
  // noStroke();
  // fill(0);
  // text("探蘚家 moss-er", TextSpacing, TopSpace + 32);

  // //   Designer
  // textSize(15);
  // textStyle(NORMAL);
  // fill(0);
  // noStroke();
  // text("徐于琇 , 劉兆斌", TextSpacing, TopSpace + 64);

  // //   Concept
  // textSize(15);
  // textStyle(NORMAL);
  // fill(0);
  // textLeading(30);
  // let CW = windowWidth / 4;
  // textWrap(CHAR);
  // text(C, TextSpacing, TopSpace + 110, CW,700);

  //   images
  let W;
  W = (1920 / 7) * 3;
  let H;
  H = (1920 / 7) * 3* 0.7;
  let Lspace = (1920 / 3) * 2 - W-100;
  let titleTop;
  titleTop = TopSpace - 1080 / 3.5;
  let titleHeight;
  titleHeight = 1080 / 3.5;

  imageMode(CORNER);
 
  // image(a, Lspace, TopSpace, W, H);
  // image(b, Lspace, TopSpace + H + 30, W, H);
  // image(c, Lspace, TopSpace + H + H + 60, W, H);
  // image(d, Lspace, TopSpace + H + H + H + 90, W, H);
  // image(e, Lspace, TopSpace + H + H + H + H + 120, W, H);

  //   footer
  // rectMode(CORNER);
  // fill(200);
  // noStroke();
  // rect(0,TopSpace + H + H + H + H + H + 225,windowWidth,80)

  // head block
  // fill(255);
  // noStroke();
  // rect(0, 0, windowWidth, 100);
  
  

  //   top animation
  // imageMode(CENTER);
  // image(www, m, 50, 1096, 100);
  // m = m + 7;
  // loop();
  // if (m > windowWidth + 600) {
  //   m = -260;
  // }
  
//    title block
  // fill(255);
  // noStroke();
  // rect(0,0,266,100);
  
  // noFill();
  // stroke(208,64,141);
  // ellipse(121,83,58,27);
 
  //  imageMode(CORNER);
  //  image(title, -10, -27, 280, 170);
 
  
  //   cursor
  let elf = random(elfs);
  imageMode(CENTER);
  image(elf, pmouseX, pmouseY, 50, 50);
  
  
//  let link = createA('http://p5js.org/', 'this is a link','_self');
// link.position(500, 0);
}

// function mousePressed() {
//   if (mouseY >= 00 && mouseY <= 100 && mouseX >= 00 && mouseX <= 300) {
//     //range accounting for text length

//     window.open("https://editor.p5js.org/lovebensonbanana/full/v16EwTUiH");
//   }
// }
