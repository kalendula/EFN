    var cv;
    var cx;
    var CELL_SIZE=25;
    var T_CELL_SIZE=8;
    var Hero;
    var story9 = "Freeeeeeeeeeeeeeeeeeeeeeeeeeeedom!         "
    var storyStart=false;
    var storyEnd=false;
    var str9="";
    var i9=0;
    var str91 = "";
    var str92 = "";
    var isLevel9Begin=false;
    var isLevel9End=false;
    var isEnter=false;
    
  
  
function begin9(){
  isLevel9Begin=true;
  Wall = [];
  cv = document.querySelector("canvas");
  cx = cv.getContext("2d");
  story9 = "Freeeeeeeeeeeeeeeeeeeeeeeeeeeedom!         "
  storyStart=false;
  storyEnd=false;
  str9="";
  i9=0;
  str91 = "";
  isLevel9End=false;
  Hero = {};
  Hero.x = 0;
  Hero.y = 9;
    draw9();
    timer9 = setInterval(move9,160);
  
  }

  function move9(){
    if (isLevel9End){ clearInterval(timer9); return;}
    if (Hero.x<8) {Hero.x+=1;}
    else {storyStart=true;}
    if (storyStart && i9<story9.length){
        str9+=story9[i9];
        ++i9;
    }
    if (i9>= story9.length){
        storyEnd=true;
        str91 = "P r e s s   \" R \"   t o   r e s t a r t   g a m e ! ";
        if (isEnter){str92="S A V E D !"}
        else{
        str92 = "P r e s s   \" E n t e r  \"  t o   s a v e   y o u r   r e s u l t !  ";
    }}
    draw9();
  }
  
  function draw9(){
    cx.clearRect(0,0,cv.width,cv.height-25);
    cx.strokeRect(0,0,cv.width,cv.height);
    drawFloor();
  drawHero(Hero);
  cx.font = "20px Verdana";
  cx.strokeText(str9,9*CELL_SIZE, 10*CELL_SIZE-5);
  cx.strokeText(str91,8*CELL_SIZE, 14*CELL_SIZE+21);
  cx.strokeText(str92,5*CELL_SIZE, 15*CELL_SIZE+21);
 
}