var face_x=[]
var face_y=[]
var face_sixe=[]
var face_num=2
var song
var songIsplay=false
function preload(){
 song = loadSound("368 - Dyalla.mp3");
}
function setup(){
  createCanvas(windowWidth,windowHeight);
}
  

function draw() {
  background(220);
  textSize(40)
  text("x:"+mouseX+  "y:"+mouseY,50,50)
 // var micLevel=mic.getevel
  //console.log(micLevel)
  //for(var)

push() 
  translate(width/2,height/2)
  rectMode(CENTER)
  background(0)
  noStroke()
  fill("#d90429")
  rect(0,0,420,300)
  
  fill("#e9c46a")
  ellipse(-120+map(mouseX,0,width,-20,60),0+map(mouseY,0,height,-20,60),60)//左眼
  fill("#e76f51")
  ellipse(100+map(mouseX,0,width,-20,60),0+map(mouseY,0,height,-20,60),100)//右眼
  console.log(map(mouseX,0,width,-20,60))
  fill("#e9c46a")
  rect(-90,-100,150,30)//左眉毛
  fill("#e9d8a6")
  rect(100,-100,150,30)//右眉毛
 
  fill("#0077b6")
  rect(0,10,30,80)//鼻
  fill("#588157")
  rect(-250,10,50,150)//左耳
  fill("#0077b6")
  rect(250,10,60,150)//右耳
   

  //fill("#e9d8a6")
  //arc(0,100,200,100,0,180)
 if(mouseIsPressed)
  { //mouseIsPressed為true，代表有按下滑鼠
    fill("#e9d8a6")
  arc(0,75,200,150,0,PI) //下弧
  }
  else              
  {//mouseIsPressed為false，代表沒有按下滑鼠
    fill("#e9d8a6")
    arc(0,75,200,200,0,PI)//上弧
  }  
pop()
}
function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}

