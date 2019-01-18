var isLevel6End=false;
var is102Button=false;
var is212Button=false;
var is2114Button=false;
var is1014Button=false;
var is1412Button=false;  
var bullet1={};
var bullet2={};
var bullet3={};
var bullet4={};
var bullet5={};
var timer6;

  function begin6(){
  Wall = [];
  cv = document.querySelector("canvas");
  cx = cv.getContext("2d");
  Hero = {};
  isLevel6End=false;
  Hero.x = 0;
  Hero.y = 8;
  makeBullet();
  INZWall6();
  draw6();
  timer6 = setInterval(move6,30);
  }

  function draw6(){
    cx.clearRect(0,0,cv.width,cv.height-25);
    cx.strokeRect(0,0,cv.width,cv.height);
    drawFloor();
  for (let i =0;i<Wall.length;i++){
    cx.fillStyle = "black";
    cx.fillRect(Wall[i].x*CELL_SIZE,Wall[i].y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
  drawButtons6();
  drawHero(Hero);
  drawExit (19,9)
  if (Hero.x==19 && Hero.y==9){
    isLevel6End=true;
    level=7;
    begin7();
  }
  drawBullet(bullet1);
  drawBullet(bullet2);
  drawBullet(bullet3);
  drawBullet(bullet4);
  drawBullet(bullet5);
  if (Hero.x==bullet1.x && Hero.y==bullet1.y || Hero.x==bullet2.x && Hero.y==bullet2.y ||Hero.x==bullet3.x && Hero.y==bullet3.y ||Hero.x==bullet4.x && Hero.y==bullet4.y ||Hero.x==bullet5.x && Hero.y==bullet5.y){
isDead=true;
dead();
  }
}

function move6() {
  if (isLevel6End){console.log("6"); clearInterval(timer6); return;}
  if (isDead){ makeBullet();}
  else{
  if (Hero.x==10 && Hero.y==2 && !is102Button){
    is102Button=true;
    bullet1.x=10;
    bullet1.y=16;}

  if (Hero.x==21 && Hero.y==2 && !is212Button){
      is212Button=true;
      bullet2.x=10;
      bullet2.y=2;}

  if (Hero.x==21 && Hero.y==14 && !is2114Button){
        is2114Button=true;
        bullet3.x=21;
        bullet3.y=2;}

  if (Hero.x==10 && Hero.y==14 && !is1014Button){
        is1014Button=true;
        bullet4.x=21;
        bullet4.y=14;}

  if (Hero.x==14 && Hero.y==12 && !is1412Button){
        is1412Button=true;
        bullet5.x=14;
        bullet5.y=4;}


  if(is102Button){
    if (bullet1.y<=2){ 
      is102Button=false; 
      bullet1.x=30; 
      bullet1.y=30;}
    bullet1.y-=1;
    draw6();
  }  

  if(is212Button){
    if (bullet2.x>=21){ 
      is212Button=false; 
      bullet2.x=30; 
      bullet2.y=30;}
    bullet2.x+=1;
    draw6();
  }  

  if(is2114Button){
    if (bullet3.y>=15){ 
      is2114Button=false; 
      bullet3.x=30; 
      bullet3.y=30;}
    bullet3.y+=1;
    draw6();
  }  

  if(is1014Button){
    if (bullet4.x<=9){ 
      is1014Button=false; 
      bullet4.x=30; 
      bullet4.y=30;}
    bullet4.x-=1;
    draw6();
  }  

  if(is1412Button){
    if (bullet5.y>=15){ 
      is1412Button=false; 
      bullet5.x=30; 
      bullet5.y=30;}
    bullet5.y+=1;
    draw6();
  }
}
}


  function INZWall6() {	
		Wall[0]= new WallPart(0,7);
		Wall[1]= new WallPart(1,7);
		Wall[2]= new WallPart(2,7);
		Wall[3]= new WallPart(3,7);
		Wall[4]= new WallPart(4,7);
		Wall[5]= new WallPart(5,7);
		Wall[6]= new WallPart(6,7);
		Wall[7]= new WallPart(7,7);
		Wall[8]= new WallPart(8,7);
		Wall[9]= new WallPart(9,7);
		Wall[10]= new WallPart(0,9);
		Wall[11]= new WallPart(1,9);
		Wall[12]= new WallPart(2,9);
		Wall[13]= new WallPart(3,9);
		Wall[14]= new WallPart(4,9);
		Wall[15]= new WallPart(5,9);
		Wall[16]= new WallPart(6,9);
		Wall[17]= new WallPart(7,9);
		Wall[18]= new WallPart(8,9);
		Wall[19]= new WallPart(9,9);
		Wall[20]= new WallPart(9,1);
		Wall[21]= new WallPart(9,2);
		Wall[22]= new WallPart(9,3);
		Wall[23]= new WallPart(9,4);
		Wall[24]= new WallPart(9,5);
		Wall[25]= new WallPart(9,6);
		Wall[26]= new WallPart(9,7);
		Wall[27]= new WallPart(9,9);
		Wall[28]= new WallPart(9,10);
		Wall[29]= new WallPart(9,11);
		Wall[30]= new WallPart(9,12);
		Wall[31]= new WallPart(9,13);
		Wall[32]= new WallPart(9,14);
		Wall[33]= new WallPart(9,15);
		Wall[34]= new WallPart(10,1);
		Wall[35]= new WallPart(11,1);
		Wall[36]= new WallPart(12,1);
		Wall[37]= new WallPart(13,1);
		Wall[38]= new WallPart(14,1);
		Wall[39]= new WallPart(15,1);
		Wall[40]= new WallPart(16,1);
		Wall[41]= new WallPart(17,1);
		Wall[42]= new WallPart(18,1);
		Wall[43]= new WallPart(19,1);
		Wall[44]= new WallPart(20,1);
		Wall[45]= new WallPart(21,1);
		Wall[46]= new WallPart(22,1);
		Wall[47]= new WallPart(22,2);
		Wall[48]= new WallPart(22,3);
		Wall[49]= new WallPart(22,4);
		Wall[50]= new WallPart(22,5);
		Wall[51]= new WallPart(22,6);
		Wall[52]= new WallPart(22,7);
		Wall[53]= new WallPart(22,8);
		Wall[54]= new WallPart(22,9);
		Wall[55]= new WallPart(22,10);
		Wall[56]= new WallPart(22,11);
		Wall[57]= new WallPart(22,12);
		Wall[58]= new WallPart(22,13);
		Wall[59]= new WallPart(22,14);
		Wall[60]= new WallPart(22,15);
		Wall[61]= new WallPart(10,15);
		Wall[62]= new WallPart(11,15);
		Wall[63]= new WallPart(12,15);
		Wall[64]= new WallPart(13,15);
		Wall[65]= new WallPart(14,15);
		Wall[66]= new WallPart(15,15);
		Wall[67]= new WallPart(16,15);
		Wall[68]= new WallPart(17,15);
		Wall[69]= new WallPart(18,15);
		Wall[70]= new WallPart(19,15);
		Wall[71]= new WallPart(20,15);
		Wall[72]= new WallPart(21,15);
		Wall[73]= new WallPart(11,3);
		Wall[74]= new WallPart(12,3);
		Wall[75]= new WallPart(13,3);
		Wall[76]= new WallPart(14,3);
		Wall[77]= new WallPart(15,3);
		Wall[78]= new WallPart(16,3);
		Wall[79]= new WallPart(17,3);
		Wall[80]= new WallPart(18,3);
		Wall[81]= new WallPart(19,3);
		Wall[82]= new WallPart(20,3);
		Wall[83]= new WallPart(20,4);
		Wall[84]= new WallPart(20,5);
		Wall[85]= new WallPart(20,6);
		Wall[86]= new WallPart(20,7);
		Wall[87]= new WallPart(20,8);
		Wall[88]= new WallPart(20,9);
		Wall[89]= new WallPart(20,10);
		Wall[90]= new WallPart(20,11);
		Wall[91]= new WallPart(20,12);
		Wall[92]= new WallPart(20,13);
		Wall[93]= new WallPart(11,13);
		Wall[94]= new WallPart(12,13);
		Wall[95]= new WallPart(13,13);
		Wall[96]= new WallPart(13,13);
		Wall[97]= new WallPart(15,13);
		Wall[98]= new WallPart(16,13);
		Wall[99]= new WallPart(17,13);
		Wall[100]= new WallPart(18,13);
		Wall[101]= new WallPart(19,13);
		Wall[102]= new WallPart(11,4);
		Wall[103]= new WallPart(11,5);
		Wall[104]= new WallPart(11,6);
		Wall[105]= new WallPart(11,7);
		Wall[106]= new WallPart(11,8);
		Wall[107]= new WallPart(11,9);
		Wall[108]= new WallPart(11,10);
		Wall[109]= new WallPart(11,11);
		Wall[110]= new WallPart(11,12);
	}

  function drawButtons6() {
		drawButton (10,2);
		drawButton (21,2);
		drawButton (10,14);
		drawButton (21,14);
		drawButton (14,4);
		drawButton (14,12);
  }	
  
  function drawBulletVer(bullet){
    cx.beginPath();
    cx.moveTo(bullet.x*CELL_SIZE+12,bullet.y*CELL_SIZE);
    cx.lineTo(bullet.x*CELL_SIZE+12,bullet.y*CELL_SIZE-CELL_SIZE);
    cx.stroke();
  }

  function drawBulletHor(bullet){
    cx.beginPath();
    cx.moveTo(bullet.x*CELL_SIZE,bullet.y*CELL_SIZE+12);
    cx.lineTo(bullet.x*CELL_SIZE+CELL_SIZE,bullet.y*CELL_SIZE+12);
    cx.stroke();
  }

  function makeBullet(){
    bullet1.x=30;
    bullet1.y=30;
    bullet2.x=30;
    bullet2.y=30;
    bullet3.x=30;
    bullet3.y=30;
    bullet4.x=30;
    bullet4.y=30;
    bullet5.x=30;
    bullet5.y=30;
  }