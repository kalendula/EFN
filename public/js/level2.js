isLevel2End=false;

function begin2(){
Wall = [];
cv = document.querySelector("canvas");
cx = cv.getContext("2d");
CELL_SIZE = 25;
T_CELL_SIZE = 8;
Hero = {};
Hero.x = 0;
Hero.y = 1;
drawTeleport();
  INZWall2();
  draw2();}
  

 

function INZWall2() {
  Wall[0]= new WallPart(1,0);
  Wall[1]= new WallPart(2,0);
  Wall[2]= new WallPart(3,0);
  Wall[3]= new WallPart(4,0);
  Wall[4]= new WallPart(5,0);
  Wall[5]= new WallPart(0,0);
  Wall[6]= new WallPart(0,2);
  Wall[7]= new WallPart(1,2);
  Wall[8]= new WallPart(2,2);
  Wall[9]= new WallPart(3,2);
  Wall[10]= new WallPart(5,1);
  Wall[11]= new WallPart(5,2);
  Wall[12]= new WallPart(5,3);
  Wall[13]= new WallPart(5,4);
  Wall[14]= new WallPart(5,5);
  Wall[15]= new WallPart(3,3);
  Wall[16]= new WallPart(3,4);
  Wall[17]= new WallPart(3,5);
  Wall[18]= new WallPart(2,6);
  Wall[19]= new WallPart(2,7);
  Wall[20]= new WallPart(2,8);
  Wall[21]= new WallPart(2,9);
  Wall[22]= new WallPart(6,6);
  Wall[23]= new WallPart(6,7);
  Wall[24]= new WallPart(6,8);
  Wall[25]= new WallPart(6,9);
  Wall[26]= new WallPart(4,7);
  Wall[27]= new WallPart(4,8);
  Wall[28]= new WallPart(3,10);
  Wall[29]= new WallPart(3,11);
  Wall[30]= new WallPart(3,12);
  Wall[31]= new WallPart(3,13);
  Wall[32]= new WallPart(3,14);
  Wall[33]= new WallPart(5,10);
  Wall[34]= new WallPart(5,11);
  Wall[35]= new WallPart(5,12);
  Wall[36]= new WallPart(6,12);
  Wall[37]= new WallPart(7,12);
  Wall[38]= new WallPart(8,12);
  Wall[39]= new WallPart(9,12);
  Wall[40]= new WallPart(10,12);
  Wall[41]= new WallPart(11,12);
  Wall[42]= new WallPart(12,12);
  Wall[43]= new WallPart(13,12);
  Wall[44]= new WallPart(4,14);
  Wall[45]= new WallPart(5,14);
  Wall[46]= new WallPart(6,14);
  Wall[47]= new WallPart(7,14);
  Wall[48]= new WallPart(7,15);
  Wall[49]= new WallPart(8,15);
  Wall[50]= new WallPart(9,15);
  Wall[51]= new WallPart(9,14);
  Wall[52]= new WallPart(10,14);
  Wall[53]= new WallPart(11,14);
  Wall[54]= new WallPart(13,13);
  Wall[55]= new WallPart(13,14);
  Wall[56]= new WallPart(13,15);
  Wall[57]= new WallPart(11,15);
  Wall[58]= new WallPart(11,16);
  Wall[59]= new WallPart(11,17);
  Wall[60]= new WallPart(14,15);
  Wall[61]= new WallPart(15,15);
  Wall[62]= new WallPart(16,15);
  Wall[63]= new WallPart(17,15);
  Wall[64]= new WallPart(18,15);
  Wall[65]= new WallPart(12,17);
  Wall[66]= new WallPart(13,17);
  Wall[67]= new WallPart(14,17);
  Wall[68]= new WallPart(15,17);
  Wall[69]= new WallPart(16,17);
  Wall[70]= new WallPart(17,17);
  Wall[71]= new WallPart(18,17);
  Wall[72]= new WallPart(19,17);
  Wall[73]= new WallPart(20,17);
  Wall[74]= new WallPart(21,17);
  Wall[75]= new WallPart(22,17);
  Wall[76]= new WallPart(23,17);
  Wall[77]= new WallPart(24,17);
  Wall[78]= new WallPart(25,17);
  Wall[79]= new WallPart(26,17);
  Wall[80]= new WallPart(27,17);
  Wall[81]= new WallPart(28,17);
  Wall[82]= new WallPart(18,14);
  Wall[83]= new WallPart(18,13);
  Wall[84]= new WallPart(19,13);
  Wall[85]= new WallPart(20,13);
  Wall[86]= new WallPart(20,14);
  Wall[87]= new WallPart(20,15);//
  Wall[88]= new WallPart(21,15);
  Wall[89]= new WallPart(22,15);
  Wall[90]= new WallPart(23,15);
  Wall[91]= new WallPart(24,15);
  Wall[92]= new WallPart(25,15);
  Wall[93]= new WallPart(26,15);
  Wall[94]= new WallPart(27,15);
  Wall[95]= new WallPart(28,15);
  Wall[96]= new WallPart(28,15);
  //1
  Wall[97]= new WallPart(3,9);
  Wall[98]= new WallPart(4,9);
  Wall[99]= new WallPart(5,9);
  //2
  Wall[100]= new WallPart(6,13);
  //3
  Wall[101]= new WallPart(12,15);
  //4
  Wall[102]= new WallPart(15,16);
  //5
  Wall[103]= new WallPart(19,15);
    }
  

function draw2(){
  cx.clearRect(0,0,cv.width,cv.height-25);
  cx.strokeRect(0,0,cv.width,cv.height);
  drawFloor();
for (let i =0;i<Wall.length;i++){
  cx.fillStyle = "black";
  cx.fillRect(Wall[i].x*CELL_SIZE,Wall[i].y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
}
drawTeleport();
drawHero(Hero);
drawExit (28,16);

}

function drawTeleport() {
  cx.fillStyle = "blue";
  drawPortalEnter(3,8);
  drawPortalEnter(5,8);
  drawPortalExit (4,10);
  drawPortalEnter(8,14);
  drawPortalExit (7,13);
  drawPortalExit (12,16);
    drawPortalExit (16,16);
    drawPortalExit (19,14);
    drawPortalEnter(5,13);
    drawPortalEnter(12,14);
  }	
