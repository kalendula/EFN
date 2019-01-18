class WallPart {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }}
    
  
    var c=1;
    var Wall;
    var cv;
    var cx;
    var CELL_SIZE=25;
    var T_CELL_SIZE=8;
    var Hero;
    isLevel1End=false;
    var Boss;
    var pointTimer;
  
  
  function begin1(){
  pointTimer = setInterval(drawTimer,500);
  Wall = [];
  cv = document.querySelector("canvas");
  cx = cv.getContext("2d");
  var floorimg = new Image();
    floorimg.src = "img/Floor-1.png";
  Hero = {};
   Boss= {};
   Boss.x=19;
    Boss.y=16;
  Hero.x = 0;
  Hero.y = 1; 
   floorimg.onload = function (){  cx.drawImage(floorimg,0,0);
    INZWall1();
    draw1();}
  }

  function INZWall1() {Wall[0]= new WallPart(1,0);
    Wall[1]= new WallPart(2,0);
    Wall[2]= new WallPart(3,0);
    Wall[3]= new WallPart(4,0);
    Wall[4]= new WallPart(5,0);
    Wall[5]= new WallPart(6,0);
    Wall[6]= new WallPart(7,0);
    Wall[7]= new WallPart(0,2);
    Wall[8]= new WallPart(1,2);
    Wall[9]= new WallPart(2,2);
    Wall[10]= new WallPart(3,2);
    Wall[11]= new WallPart(4,2);
    Wall[12]= new WallPart(5,2);
    Wall[13]= new WallPart(5,3);
    Wall[14]= new WallPart(5,4);
    Wall[15]= new WallPart(5,5);
    Wall[16]= new WallPart(5,6);
    Wall[17]= new WallPart(5,7);
    Wall[18]= new WallPart(5,8);
    Wall[19]= new WallPart(5,9);
    Wall[20]= new WallPart(5,10);
    Wall[21]= new WallPart(7,1);
    Wall[22]= new WallPart(7,2);
    Wall[23]= new WallPart(7,3);
    Wall[24]= new WallPart(7,4);
    Wall[25]= new WallPart(7,5);
    Wall[26]= new WallPart(7,6);
    Wall[27]= new WallPart(7,7);
    Wall[28]= new WallPart(7,8);
    Wall[29]= new WallPart(6,10);
    Wall[30]= new WallPart(7,10);
    Wall[31]= new WallPart(8,10);
    Wall[32]= new WallPart(9,10);
    Wall[33]= new WallPart(10,10);
    Wall[34]= new WallPart(11,10);
    Wall[35]= new WallPart(12,10);
    Wall[36]= new WallPart(8,8);
    Wall[37]= new WallPart(9,8);
    Wall[38]= new WallPart(10,8);
    Wall[39]= new WallPart(11,8);
    Wall[40]= new WallPart(12,8);
    Wall[41]= new WallPart(13,8);
    Wall[42]= new WallPart(14,8);
    Wall[43]= new WallPart(12,11);
    Wall[44]= new WallPart(12,12);
    Wall[45]= new WallPart(12,13);
    Wall[46]= new WallPart(12,14);
    Wall[47]= new WallPart(12,15);
    Wall[48]= new WallPart(12,16);
    Wall[49]= new WallPart(12,17);
    Wall[50]= new WallPart(14,9);
    Wall[51]= new WallPart(14,10);
    Wall[52]= new WallPart(14,11);
    Wall[53]= new WallPart(14,12);
    Wall[54]= new WallPart(14,13);
    Wall[55]= new WallPart(14,14);
    Wall[56]= new WallPart(14,15);
    Wall[57]= new WallPart(15,15);
    Wall[58]= new WallPart(16,15);
    Wall[59]= new WallPart(17,15);
    Wall[60]= new WallPart(19,15);
    Wall[61]= new WallPart(21,15);
    Wall[62]= new WallPart(22,15);
    Wall[63]= new WallPart(23,15);
    Wall[64]= new WallPart(24,15);
    Wall[65]= new WallPart(25,15);
    Wall[66]= new WallPart(26,15);
    Wall[67]= new WallPart(27,15);
    Wall[68]= new WallPart(28,15);
    Wall[69]= new WallPart(13,17);
    Wall[70]= new WallPart(14,17);
    Wall[71]= new WallPart(15,17);
    Wall[72]= new WallPart(16,17);
    Wall[73]= new WallPart(17,17);
    Wall[74]= new WallPart(18,17);
    Wall[75]= new WallPart(19,17);
    Wall[76]= new WallPart(20,17);
    Wall[77]= new WallPart(21,17);
    Wall[78]= new WallPart(22,17);
    Wall[79]= new WallPart(23,17);
    Wall[80]= new WallPart(24,17);
    Wall[81]= new WallPart(25,17);
    Wall[82]= new WallPart(26,17);
    Wall[83]= new WallPart(27,17);
    Wall[84]= new WallPart(28,17);
    Wall[85]= new WallPart(0,0);
    Wall[86]= new WallPart(0,0);
    Wall[87]= new WallPart(17,14);
    Wall[88]= new WallPart(17,13);
    Wall[89]= new WallPart(18,13);
    Wall[90]= new WallPart(19,13);
    Wall[91]= new WallPart(20,13);
    Wall[92]= new WallPart(21,13);
    Wall[93]= new WallPart(21,14);
  }
    
  
  function draw1(){
    cx.clearRect(0,0,cv.width,cv.height-25);
  cx.strokeRect(0,0,cv.width,cv.height);
  drawFloor();
  for (let i =0;i<Wall.length;i++){
    cx.fillStyle = "black";
    cx.fillRect(Wall[i].x*CELL_SIZE,Wall[i].y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
  drawBoss(Boss);
  drawHero(Hero);
  drawExit (28,16);
  }