// 最終課題を制作しよう
let charset= ["花","崗","岩"];
let a=[];
let b=[];
let c=[];
let turn = 0;
let pc =0;
let n1;
let n2;
let n3;
let hit =0;



function setup(){
  createCanvas(windowWidth, windowHeight);
cardMake();
}

function draw(){
  background(115, 78, 48);
  textSize(25);
  fill(255);
text("花崗岩ゲーム",200,50);
text("何かキーを押してください",140,250);
stroke(255);
noFill();
rect(100,100,100,100);
rect(250,100,100,100);
rect(400,100,100,100);

numberDisp();

}
  function numberDisp(){
textSize(60);
fill(255);
if(pc==0){
text(charset[turn],130,170);
text(charset[turn],280,170);
text(charset[turn],430,170);
}
if(pc==1){
text(charset[n1],130,170);
text(charset[turn],280,170);
text(charset[turn],430,170);
}
if(pc==2){
text(charset[n1],130,170);
text(charset[n2],280,170);
text(charset[turn],430,170);
}
if(pc==3){
text(charset[n1],130,170);
text(charset[n2],280,170);
text(charset[n3],430,170);
}

if(hit==1){
  text("君は花崗岩マスターだ！",140,350);
}
turn=turn+1;

if(turn==3){turn=0;}}

function cardMake(){
  for(let i= 0; i<3; i++){
    a[i]=i;
    b[i]=i;
    c[i]=i;
  }
}

function keyPressed(){
  if(pc==0){
    n1=a[turn];
  }
  if(pc==1){
    n2=b[turn];
  }
  if(pc==2){
    n3=c[turn];
  }
  pc=pc+1;
  if(pc==3){
    judge();
  }
  if(pc==4){
    pc=0;
  }
}
function judge(){
  if(n1==0&& n2==1 && n3==2){
    hit=1;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
