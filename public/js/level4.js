var Enemy1;
var Enemy2;
var isEnemy1Up=true;
var isEnemy2Up=false;
var isLevel4End=false;
var timer4;

function begin4(){
    Wall = [];
    cv = document.querySelector("canvas");
    cx = cv.getContext("2d");
    CELL_SIZE = 25;
    T_CELL_SIZE = 8;
    Hero = {};
    Hero.x = 0;
    Hero.y = 9;
    Enemy1= {};
    Enemy1.x=6;
    Enemy1.y=14;
    Enemy2= {};
    Enemy2.x=12;
    isLevel4End=false;
    Enemy2.y=3;
    timer4 = setInterval(move,20);
    drawTeleport2();
      INZWall4();
      draw4();
}

function move() {
  if (isLevel4End){clearInterval(timer4); return;}
  if (isDead){}
  else{
  if (isEnemy1Up){ Enemy1.y-=1; draw4();}
  else {Enemy1.y+=1;draw4();}
  if (isEnemy2Up){Enemy2.y-=1; draw4();}
else {Enemy2.y+=1;draw4();}}

}

function INZWall4()  {	
        Wall[0]= new WallPart(0,8);
           Wall[1]= new WallPart(1,8);
           Wall[2]= new WallPart(2,8);
           Wall[3]= new WallPart(0,10);
           Wall[4]= new WallPart(1,10);
           Wall[5]= new WallPart(2,10);
           Wall[6]= new WallPart(3,10);
           Wall[7]= new WallPart(3,11);
           Wall[8]= new WallPart(3,12);
           Wall[9]= new WallPart(3,13);
           Wall[10]= new WallPart(3,14);
           Wall[11]= new WallPart(3,15);
           Wall[12]= new WallPart(3,8);
           Wall[13]= new WallPart(3,7);
           Wall[14]= new WallPart(3,6);
           Wall[15]= new WallPart(3,5);
           Wall[16]= new WallPart(3,4);
           Wall[17]= new WallPart(3,3);
           Wall[18]= new WallPart(3,2);
           Wall[19]= new WallPart(3,2);
           Wall[20]= new WallPart(4,2);
           Wall[21]= new WallPart(5,2);
           Wall[22]= new WallPart(6,2);
           Wall[23]= new WallPart(7,2);
           Wall[24]= new WallPart(8,2);
           Wall[25]= new WallPart(9,2);
           Wall[26]= new WallPart(10,2);
           Wall[27]= new WallPart(11,2);
           Wall[28]= new WallPart(12,2);
           Wall[29]= new WallPart(13,2);
           Wall[30]= new WallPart(14,2);
           Wall[31]= new WallPart(15,2);
           Wall[32]= new WallPart(16,2);
           Wall[33]= new WallPart(17,2);
           Wall[34]= new WallPart(18,2);
           Wall[35]= new WallPart(19,2);
           Wall[36]= new WallPart(20,2);
           Wall[37]= new WallPart(21,2);
           Wall[38]= new WallPart(22,2);
           Wall[39]= new WallPart(23,2);
           Wall[40]= new WallPart(24,2);
           Wall[41]= new WallPart(25,2);
               Wall[42]= new WallPart(26,2);
               Wall[43]= new WallPart(4,15);
               Wall[44]= new WallPart(5,15);
               Wall[45]= new WallPart(6,15);
               Wall[46]= new WallPart(7,15);
               Wall[47]= new WallPart(8,15);
               Wall[48]= new WallPart(9,15);
               Wall[49]= new WallPart(10,15);
               Wall[50]= new WallPart(11,15);
               Wall[51]= new WallPart(12,15);
               Wall[52]= new WallPart(13,15);
               Wall[53]= new WallPart(14,15);
               Wall[54]= new WallPart(15,15);
               Wall[55]= new WallPart(16,15);
               Wall[56]= new WallPart(17,15);
               Wall[57]= new WallPart(18,15);
               Wall[58]= new WallPart(19,15);
               Wall[59]= new WallPart(20,15);
               Wall[60]= new WallPart(21,15);
               Wall[61]= new WallPart(22,15);
               Wall[62]= new WallPart(23,15);
               Wall[63]= new WallPart(24,15);
               Wall[64]= new WallPart(25,15);
               Wall[65]= new WallPart(26,15);
           Wall[66]= new WallPart(26,4);
           Wall[67]= new WallPart(26,5);
           Wall[68]= new WallPart(26,6);
           Wall[69]= new WallPart(26,7);
           Wall[70]= new WallPart(26,8);
           Wall[71]= new WallPart(26,9);
           Wall[72]= new WallPart(26,10);
               Wall[73]= new WallPart(26,11);
               Wall[74]= new WallPart(26,12);
               Wall[75]= new WallPart(26,13);
               Wall[76]= new WallPart(26,14);
               Wall[77]= new WallPart(26,15);
               Wall[78]= new WallPart(26,3);
               Wall[79]= new WallPart(7,4);
               Wall[80]= new WallPart(8,4);
               Wall[81]= new WallPart(9,4);
               Wall[82]= new WallPart(10,4);
               Wall[83]= new WallPart(11,4);
               Wall[84]= new WallPart(11,4);
               Wall[85]= new WallPart(13,4);
               Wall[86]= new WallPart(14,4);
               Wall[87]= new WallPart(15,4);
               Wall[88]= new WallPart(16,4);
               Wall[89]= new WallPart(17,4);
               Wall[90]= new WallPart(18,4);
               Wall[91]= new WallPart(19,4);
               Wall[92]= new WallPart(20,4);
               Wall[93]= new WallPart(21,4);
               Wall[94]= new WallPart(22,4);
               Wall[95]= new WallPart(23,4);
               Wall[96]= new WallPart(24,4);
               Wall[97]= new WallPart(25,4);
               Wall[98]= new WallPart(26,4);
               Wall[99]= new WallPart(5,8);
               Wall[100]= new WallPart(7,8);
               Wall[101]= new WallPart(9,8);
               Wall[102]= new WallPart(10,8);
               Wall[103]= new WallPart(11,8);
               Wall[104]= new WallPart(8,8);
               Wall[105]= new WallPart(13,8);
               Wall[106]= new WallPart(14,8);
               Wall[107]= new WallPart(15,8);
               Wall[108]= new WallPart(5,10);
               Wall[109]= new WallPart(7,10);
               Wall[110]= new WallPart(8,10);
               Wall[111]= new WallPart(9,10);
               Wall[112]= new WallPart(10,10);
               Wall[113]= new WallPart(11,10);
               Wall[114]= new WallPart(13,10);
               Wall[115]= new WallPart(14,10);
               Wall[116]= new WallPart(15,10);
               Wall[117]= new WallPart(16,10);
               Wall[118]= new WallPart(17,10);
               Wall[119]= new WallPart(5,13);
               Wall[120]= new WallPart(7,13);
               Wall[121]= new WallPart(8,13);
               Wall[122]= new WallPart(9,13);
               Wall[123]= new WallPart(10,13);
   Wall[124]= new WallPart(11,13);
   Wall[125]= new WallPart(13,13);
   Wall[126]= new WallPart(14,13);
   Wall[127]= new WallPart(15,13);
   Wall[128]= new WallPart(16,13);
   Wall[129]= new WallPart(17,13);
   Wall[130]= new WallPart(18,13);
   Wall[131]= new WallPart(19,13);
   Wall[132]= new WallPart(20,13);
   Wall[133]= new WallPart(21,13);
   Wall[134]= new WallPart(22,13);
   Wall[135]= new WallPart(23,13);
   Wall[136]= new WallPart(5,5);
   Wall[137]= new WallPart(5,6);
   Wall[138]= new WallPart(5,7);
   Wall[139]= new WallPart(5,11);
   Wall[140]= new WallPart(5,12);
   Wall[141]= new WallPart(7,5);
   Wall[142]= new WallPart(7,6);
   Wall[143]= new WallPart(7,7);
   Wall[144]= new WallPart(7,11);
   Wall[145]= new WallPart(7,12);
   Wall[146]= new WallPart(11,5);
   Wall[147]= new WallPart(11,6);
   Wall[148]= new WallPart(11,7);
   Wall[149]= new WallPart(11,11);
   Wall[150]= new WallPart(11,12);
   Wall[151]= new WallPart(15,5);
   Wall[152]= new WallPart(15,6);
   Wall[153]= new WallPart(15,7);
   Wall[154]= new WallPart(17,5);
   Wall[155]= new WallPart(17,6);
   Wall[156]= new WallPart(17,7);
   Wall[157]= new WallPart(17,9);
   Wall[158]= new WallPart(17,8);
   Wall[159]= new WallPart(23,5);
   Wall[160]= new WallPart(23,6);
   Wall[161]= new WallPart(23,7);
   Wall[162]= new WallPart(23,8);
   Wall[163]= new WallPart(23,9);
   Wall[164]= new WallPart(23,10);
   Wall[165]= new WallPart(23,11);
   Wall[166]= new WallPart(23,12);
   Wall[167]= new WallPart(23,13);
   Wall[168]= new WallPart(13,5);
   Wall[169]= new WallPart(13,6);
   Wall[170]= new WallPart(13,7);
   Wall[171]= new WallPart(13,11);
   Wall[172]= new WallPart(13,12);
   Wall[173]= new WallPart(19,6);
   Wall[174]= new WallPart(19,7);
   Wall[175]= new WallPart(19,8);
   Wall[176]= new WallPart(19,9);
   Wall[177]= new WallPart(21,6);
   Wall[178]= new WallPart(21,7);
   Wall[179]= new WallPart(21,8);
   Wall[180]= new WallPart(21,9);
   Wall[181]= new WallPart(20,6);
   Wall[182]= new WallPart(20,9);
}

      
    
function draw4(){
  if (Enemy1.y==14){
    isEnemy1Up=true;
  }
  if (Enemy2.y==14){
    isEnemy2Up=true;
  }
  if (Enemy2.y==3){
    isEnemy2Up=false;
  }
  if (Enemy1.y==3){
    isEnemy1Up=false;
  }
  cx.clearRect(0,0,cv.width,cv.height-25);
  cx.strokeRect(0,0,cv.width,cv.height);
  drawFloor();
  cx.fillStyle = "black";
  for (let i =0;i<Wall.length;i++){
  cx.fillRect(Wall[i].x*CELL_SIZE,Wall[i].y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
  drawTeleport2();
  drawHero(Hero);
 
  drawExit (20,8);
  drawEnemy(Enemy1);
  drawEnemy(Enemy2);
  if (Hero.x==Enemy1.x && Hero.y==Enemy1.y || Hero.x==Enemy2.x && Hero.y==Enemy2.y){
  isDead=true;
  dead();
  }
}
    
function drawTeleport2() {
      drawPortalEnter(24,5);
      drawPortalEnter(25,5);
      drawPortalExit (16,5);
      drawPortalExit (20,7);
}	
    