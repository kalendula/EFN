    var Wall;
    var CELL_SIZE=25;
    var T_CELL_SIZE=8;
    var Hero;
    var isLevel8End=false;
    var isBossMoveToHero=false;
    var isBossMoveBack=false;
    var Boss = {};
    var story = "We meet again, C6L. Say \"Goodbye\" and REST IN PEACE!               ";
    var str="";
    var isStoryEnd=false;
    var letter = 0;
    var timer8;
    
  
  
  function begin8(){

  Wall = [];
  cv = document.querySelector("canvas");
  cx = cv.getContext("2d");
  letter = 0;
  story = "We meet again, C6L. Say \"Goodbye\" and REST IN PEACE!               ";
  isBossMoveToHero=false;
  isBossMoveBack=false;
  isStoryEnd=false;
  Hero = {};
  Hero.x = 0;
  Hero.y = 9;
  Boss.x=23;
  Boss.y=9;
  letter=0;
  str="";
  isLevel8End=false;
  INZWall8();
  draw8();
  drawTeleport8();
  clearInterval(timer8);
  timer8 = setInterval(move8,160);
  }

  function move8() {
    if (isLevel8End){console.log(8); clearInterval(timer8); return;}
    if (isDead){ clearInterval(timer8);}
    else{
    if (letter==story.length){isStoryEnd=true; str="";}
    else{str+=story[letter]; letter++;}
    draw8();
    if (isStoryEnd){
    if (Hero.y==9){
      if (Hero.x>22){Boss.x+=1;isBossMoveToHero=false;}
      else {
        if (Hero.x==22 && Boss.x!=23){Boss.x+=1;}
        else {isBossMoveToHero=true; isBossMoveBack=false;} 
    }
  }
    else {
    
    if (isBossMoveToHero){
      isBossMoveBack=true; isBossMoveToHero=false;}
    }
    if (isBossMoveToHero){
    Boss.x-=1;}
    if(isBossMoveBack){
      Boss.x+=1;
      }
    
    if (isBossMoveBack && Boss.x==23){isBossMoveBack=false;}
    if (isBossMoveToHero && Boss.x==0){isBossMoveToHero=false; isBossMoveBack=true;}
  }}
}
  

  function INZWall8() {
    Wall[0]= new WallPart(0,8);
    Wall[1]= new WallPart(1,8);
    Wall[2]= new WallPart(2,8);
    Wall[3]= new WallPart(3,8);
    Wall[4]= new WallPart(0,10);
    Wall[5]= new WallPart(1,10);
    Wall[6]= new WallPart(2,10);
    Wall[7]= new WallPart(3,10);
    Wall[8]= new WallPart(3,0);
    Wall[9]= new WallPart(3,1);
    Wall[10]= new WallPart(3,2);
    Wall[11]= new WallPart(3,3);
    Wall[12]= new WallPart(3,4);
    Wall[13]= new WallPart(3,5);
    Wall[14]= new WallPart(3,6);
    Wall[15]= new WallPart(3,7);
    Wall[16]= new WallPart(3,12);
    Wall[17]= new WallPart(3,11);
    Wall[18]= new WallPart(4,0);
    Wall[19]= new WallPart(5,0);
    Wall[20]= new WallPart(6,0);
    Wall[21]= new WallPart(7,0);
    Wall[22]= new WallPart(8,0);
    Wall[23]= new WallPart(9,0);
    Wall[24]= new WallPart(10,0);
    Wall[25]= new WallPart(11,0);
    Wall[26]= new WallPart(12,0);
    Wall[27]= new WallPart(13,0);
    Wall[28]= new WallPart(14,0);
    Wall[29]= new WallPart(15,0);
    Wall[30]= new WallPart(16,0);
    Wall[31]= new WallPart(17,0);
    Wall[32]= new WallPart(18,0);
    Wall[33]= new WallPart(19,0);
    Wall[34]= new WallPart(20,0);
    Wall[35]= new WallPart(21,0);
    Wall[36]= new WallPart(22,0);
    Wall[37]= new WallPart(23,0);
    Wall[38]= new WallPart(4,12);
    Wall[39]= new WallPart(5,12);
    Wall[40]= new WallPart(6,12);
    Wall[41]= new WallPart(7,12);
    Wall[42]= new WallPart(8,12);
    Wall[43]= new WallPart(9,12);
    Wall[44]= new WallPart(10,12);
    Wall[45]= new WallPart(11,12);
    Wall[46]= new WallPart(12,12);
    Wall[47]= new WallPart(13,12);
    Wall[48]= new WallPart(14,12);
    Wall[49]= new WallPart(15,12);
    Wall[50]= new WallPart(16,12);
    Wall[51]= new WallPart(17,12);
    Wall[52]= new WallPart(18,12);
    Wall[53]= new WallPart(19,12);
    Wall[54]= new WallPart(20,12);
    Wall[55]= new WallPart(21,12);
    Wall[56]= new WallPart(22,12);
    Wall[57]= new WallPart(23,12);
    Wall[58]= new WallPart(23,0);
    Wall[59]= new WallPart(23,1);
    Wall[60]= new WallPart(23,2);
    Wall[61]= new WallPart(23,3);
    Wall[62]= new WallPart(23,4);
    Wall[63]= new WallPart(23,5);
    Wall[64]= new WallPart(23,6);
    Wall[65]= new WallPart(23,7);
    Wall[66]= new WallPart(23,8);
    Wall[67]= new WallPart(23,10);
    Wall[68]= new WallPart(23,11);
    Wall[69]= new WallPart(23,12);
    Wall[70]= new WallPart(24,8);
    Wall[71]= new WallPart(25,8);
    Wall[72]= new WallPart(26,8);
    Wall[73]= new WallPart(27,8);
    Wall[74]= new WallPart(28,8);
    Wall[75]= new WallPart(24,10);
    Wall[76]= new WallPart(25,10);
    Wall[77]= new WallPart(26,10);
    Wall[78]= new WallPart(27,10);
    Wall[79]= new WallPart(28,10);
    //
    Wall[80]= new WallPart(5,10);
    Wall[81]= new WallPart(6,10);
    Wall[82]= new WallPart(7,10);
    Wall[83]= new WallPart(8,10);
    Wall[84]= new WallPart(9,10);
    Wall[85]= new WallPart(10,10);
    Wall[86]= new WallPart(11,10);
    Wall[87]= new WallPart(12,10);
    Wall[88]= new WallPart(13,10);
    Wall[89]= new WallPart(14,10);
    Wall[90]= new WallPart(15,10);
    Wall[91]= new WallPart(16,10);
    Wall[92]= new WallPart(17,10);
    Wall[93]= new WallPart(18,10);
    Wall[94]= new WallPart(19,10);
    Wall[95]= new WallPart(20,10);
    Wall[96]= new WallPart(21,10);
    //
    Wall[97]= new WallPart(5,8);
    Wall[98]= new WallPart(6,8);
    Wall[99]= new WallPart(7,8);
    Wall[100]= new WallPart(8,8);
    Wall[101]= new WallPart(9,8);
    Wall[102]= new WallPart(10,8);
    Wall[103]= new WallPart(11,8);
    Wall[104]= new WallPart(12,8);
    Wall[105]= new WallPart(13,8);
    Wall[106]= new WallPart(14,8);
    Wall[107]= new WallPart(15,8);
    Wall[108]= new WallPart(16,8);
    Wall[109]= new WallPart(17,8);
    Wall[110]= new WallPart(18,8);
    Wall[111]= new WallPart(19,8);
    Wall[112]= new WallPart(20,8);
    Wall[113]= new WallPart(21,8);
    Wall[114]= new WallPart(5,2);
    Wall[115]= new WallPart(5,3);
    Wall[116]= new WallPart(5,4);
    Wall[117]= new WallPart(5,5);
    Wall[118]= new WallPart(5,6);
    Wall[119]= new WallPart(5,7);
    Wall[120]= new WallPart(7,2);
    Wall[121]= new WallPart(7,3);
    Wall[122]= new WallPart(7,4);
    Wall[123]= new WallPart(7,5);
    Wall[124]= new WallPart(7,6);
    Wall[125]= new WallPart(7,7);
    Wall[126]= new WallPart(9,2);
    Wall[127]= new WallPart(9,3);
    Wall[128]= new WallPart(9,4);
    Wall[129]= new WallPart(9,5);
    Wall[130]= new WallPart(9,6);
    Wall[131]= new WallPart(9,7);
    Wall[132]= new WallPart(11,2);
    Wall[133]= new WallPart(11,3);
    Wall[134]= new WallPart(11,4);
    Wall[135]= new WallPart(11,5);
    Wall[136]= new WallPart(11,6);
    Wall[137]= new WallPart(11,7);
    Wall[138]= new WallPart(13,2);
    Wall[139]= new WallPart(13,3);
    Wall[140]= new WallPart(13,4);
    Wall[141]= new WallPart(13,5);
    Wall[142]= new WallPart(13,6);
    Wall[143]= new WallPart(13,7);
    Wall[144]= new WallPart(15,2);
    Wall[145]= new WallPart(15,3);
    Wall[146]= new WallPart(15,4);
    Wall[147]= new WallPart(15,5);
    Wall[148]= new WallPart(15,6);
    Wall[149]= new WallPart(15,7);
    Wall[150]= new WallPart(17,2);
    Wall[151]= new WallPart(17,3);
    Wall[152]= new WallPart(17,4);
    Wall[153]= new WallPart(17,5);
    Wall[154]= new WallPart(17,6);
    Wall[155]= new WallPart(17,7);
    Wall[156]= new WallPart(19,2);
    Wall[157]= new WallPart(19,3);
    Wall[158]= new WallPart(19,4);
    Wall[159]= new WallPart(19,5);
    Wall[160]= new WallPart(19,6);
    Wall[161]= new WallPart(19,7);
    Wall[162]= new WallPart(21,2);
    Wall[163]= new WallPart(21,3);
    Wall[164]= new WallPart(21,4);
    Wall[165]= new WallPart(21,5);
    Wall[166]= new WallPart(21,6);
    Wall[167]= new WallPart(21,7);
    Wall[168]= new WallPart(8,2);
    Wall[169]= new WallPart(12,2);
    Wall[170]= new WallPart(16,2);
    Wall[171]= new WallPart(20,2);
    Wall[172]= new WallPart(24,9);
    Wall[173]= new WallPart(10,4);
  }
    
  
  function draw8(){
    cx.clearRect(0,0,cv.width,cv.height-25);
  cx.strokeRect(0,0,cv.width,cv.height);
  drawFloor();
  for (let i =0;i<Wall.length;i++){
    cx.fillStyle = "black";
    cx.fillRect(Wall[i].x*CELL_SIZE,Wall[i].y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
  drawTeleport8();
  drawBoss(Boss);
  drawHero(Hero);
  drawExit (28,9)
          cx.font = "20px Verdana";
          cx.strokeText(str,4*CELL_SIZE, 15*CELL_SIZE);
    
    if(Hero.x==28 && Hero.y==9){
      isLevel8End=true;
      level=9;
      begin9();
    }
    if (Hero.x==Boss.x && Hero.y==Boss.y){
      isDead=true;
      dead();
    }
  }

 function drawTeleport8() {
    cx.fillStyle="blue";
    drawPortalEnter(6,7);
    drawPortalEnter(14,7);       
    drawPortalExit (20,9);
        cx.fillStyle="pink";
        drawButton (10,7);
        drawButton (18,7);
        if (Hero.x==14 && Hero.y==7) {
        isLevel8End=true;
        level=6;
        begin6();
        }
        if (Hero.x==18 && Hero.y==7) {
          Wall[173]= new WallPart(16,2);
        }
        if (Hero.x==10 && Hero.y==7) {
          Wall[172]= new WallPart(16,2);
        }
        if (Hero.x==6 && Hero.y==7) {
            Hero.x=20;
            Hero.y=9;
            draw8();
        }
    }