function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(15);
  //strokeWeight(4);
}

// 3*a -> 3(b+c) = 3b+3c -> 3b+3(2b) = 9b
// x*b = 9b -> x=9
// y*c
// z*c
// d*(3+x) = 3d+3x -> 9b/12 = 3b/4

// y=z=x/2
// x*b = x*c/2 -> b=c/2 -> c=2b

let a,b,c,d,y,z;

const x=9;
b=3.2;

a=3*b;
c=2*b;
d=(3*b)/4;
y=z=x/2;


//to scale the diagram
let scale = 30;
//inital coordinates
let x1=0, y1=0;
//width and height
let w, h;
//area
let area;
//precision
let p=2;
function draw() {
  background(0);
  
  abc();
  
  fill(color(252, 103, 38));
  rect(x1, y1, a*scale, 3*scale);
  w=x1+a*scale;
  h=y1+3*scale;
  area=3*a;
  displayArea(area, w, h);
  
  fill(color(252, 219, 3));
  rect(x1, y1+(3*scale), b*scale, x*scale);
  w=x1+(b*scale);
  h=2*(y1+(3*scale))+(x*scale);
  area=b*x;
  displayArea(area, w, h);
  
  fill(color(30, 196, 22));
  rect(x1+(b*scale), y1+(3*scale), c*scale, y*scale);
  w=2*(x1+(b*scale))+(c*scale);
  h=2*(y1+(3*scale))+(y*scale);
  area=c*y;
  displayArea(area, w, h);
  
  fill(color(252, 58, 143));
  rect(x1+(b*scale), y1+((3+y)*scale), c*scale, z*scale);
  w=2*(x1+(b*scale))+(c*scale);
  h=2*(y1+((3+y)*scale))+z*scale;
  area=c*z;
  displayArea(area, w, h);
  
  fill(color(37, 112, 250));
  rect(x1+(a*scale), y1, d*scale, (x+3)*scale);
  w=2*(x1+(a*scale))+(d*scale);
  h=2*(y1)+(x+3)*scale;
  area=d*x+3*d;
  displayArea(area, w, h);
  
  fill(color(255,255,255));
  text("b = "+round(b,p), windowWidth/2, (3/4)*windowHeight);
  text("scale = "+round(scale,p), (windowWidth/2)+12, (3/4)*windowHeight+20)
  
}

//function is used to control scale of everything being drawn on screen as well as the width of yellow rectangle which is turn determines the width of all the rest of rectangles

function abc() {
  if (keyIsDown(UP_ARROW) === true) {
    b+=0.025;
    update();
  } else if (keyIsDown(DOWN_ARROW) === true) {
    if(b>1.025){
      b-=0.025;
      update();
    }
  }
  
  if(keyIsDown(LEFT_ARROW) === true){
    if(scale>1){
      scale-=0.1;
    } 
  } else if(keyIsDown(RIGHT_ARROW) === true){
    scale+=0.1;
  }
}

function update(){
  a=3*b;
  c=2*b;
  d=(3*b)/4;
}

function displayArea(area, w, h){
  fill(color(0,0,0));
  text(round(area,p), w/2, h/2);
}