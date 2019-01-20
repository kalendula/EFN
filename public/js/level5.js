   var isStartRun;
    var is410;
    var is42;
    var is192;
    var timer5;

  
function begin5(){
isStartRun=false;
is410 = false;
is42=false;
is192=false;
  Wall = [];
  cv = document.querySelector("canvas");
  cx = cv.getContext("2d");
  CELL_SIZE = 25;
  T_CELL_SIZE = 8;
  Hero = {};
  Hero.x = 1;
  Hero.y = 14;
  Boss= {};
    Boss.x=25;
    Boss.y=10;
    timer5 = setInterval(move2,70);
    INZWall5();
    draw5();
}


function move2() {
  if (isLevel5End){ clearInterval(timer5); return;}
  if (isDead){}
  else{
  if (Boss.x==4 && Boss.y==10 && Hero.x==3 && Hero.y==10){
  Boss.x-=1; draw5();}
  if (Boss.x==4 && Boss.y==10) {is410=true; isStartRun=false;}
  if (Boss.x==4 && Boss.y==2) {is42=true; is410=false;}
  if (Boss.x==19 && Boss.y==2) {is192=true; is42=false;}
  if (isStartRun && Boss.x>4){ Boss.x-=1; draw5();}
  if (is410){Boss.y-=1; draw5();}
  if (is42){Boss.x+=1; draw5();}
  if (is192){Boss.y+=1; draw5();}
  if (Boss.x==19 && Boss.y==5) {console.log(2); clearInterval(timer5); return;}
}
}

  function draw5(){
    cx.clearRect(0,0,cv.width,cv.height-25);
    cx.strokeRect(0,0,cv.width,cv.height);
    drawFloor();
  if (Hero.x==3 && Hero.y==10){
    isStartRun=true;
    Wall[124]=new WallPart(3,11);
  }
  cx.fillStyle = "black";
  for (let i =0;i<Wall.length;i++){
    cx.fillRect(Wall[i].x*CELL_SIZE,Wall[i].y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
 drawBoss(Boss);
  drawHero(Hero);
  drawExit (19,5);
          cx.font = "20px Verdana";
          cx.strokeText("Hello,С6L! Do you remember me? My name is N4Y!",6*CELL_SIZE, 13*CELL_SIZE);
          cx.strokeText("Don't try to escape. My people will find you!",6*CELL_SIZE, 13*CELL_SIZE+21);
          cx.strokeText("You can't escape FROM ME!",6*CELL_SIZE, 13*CELL_SIZE+42);
          if (Hero.x==Boss.x && Hero.y==Boss.y ||  isDead){
            isDead=true;
            dead();
        }
  }

  function INZWall5() {
    Wall[0]= new WallPart(0,13);
  Wall[1]= new WallPart(0,14);
  Wall[2]= new WallPart(0,15);
  Wall[3]= new WallPart(1,13);
  Wall[4]= new WallPart(2,13);
  Wall[5]= new WallPart(0,15);
  Wall[6]= new WallPart(1,15);
  Wall[7]= new WallPart(2,15);
  Wall[8]= new WallPart(3,15);
  Wall[9]= new WallPart(4,15);
  Wall[10]= new WallPart(4,14);
  Wall[11]= new WallPart(4,13);
  Wall[12]= new WallPart(4,12);
  Wall[13]= new WallPart(4,11);
  Wall[14]= new WallPart(2,12);
  Wall[15]= new WallPart(2,11);
  Wall[16]= new WallPart(2,10);
  Wall[17]= new WallPart(2,9);
  Wall[18]= new WallPart(3,9);
  Wall[19]= new WallPart(5,11);
  Wall[20]= new WallPart(6,11);
  Wall[21]= new WallPart(7,11);
  Wall[22]= new WallPart(8,11);
  Wall[23]= new WallPart(9,11);
  Wall[24]= new WallPart(10,11);
  Wall[25]= new WallPart(11,11);
  Wall[26]= new WallPart(12,11);
  Wall[27]= new WallPart(13,11);
  Wall[28]= new WallPart(14,11);
  Wall[29]= new WallPart(15,11);
  Wall[30]= new WallPart(16,11);
  Wall[31]= new WallPart(17,11);
  Wall[32]= new WallPart(18,11);
  Wall[33]= new WallPart(19,11);
  Wall[34]= new WallPart(20,11);
  Wall[35]= new WallPart(21,11);
  Wall[36]= new WallPart(22,11);
  Wall[37]= new WallPart(23,11);
  Wall[38]= new WallPart(24,11);
  Wall[39]= new WallPart(25,11);
  Wall[40]= new WallPart(26,11);
  Wall[41]= new WallPart(27,11);
      Wall[42]= new WallPart(5,9);
      Wall[43]= new WallPart(6,9);
      Wall[44]= new WallPart(7,9);
      Wall[45]= new WallPart(8,9);
      Wall[46]= new WallPart(9,9);
      Wall[47]= new WallPart(10,9);
      Wall[48]= new WallPart(11,9);
      Wall[49]= new WallPart(12,9);
      Wall[50]= new WallPart(13,9);
      Wall[51]= new WallPart(14,9);
      Wall[52]= new WallPart(15,9);
      Wall[53]= new WallPart(16,9);
      Wall[54]= new WallPart(17,9);
      Wall[55]= new WallPart(18,9);
      Wall[56]= new WallPart(19,9);
      Wall[57]= new WallPart(20,9);
      Wall[58]= new WallPart(21,9);
      Wall[59]= new WallPart(22,9);
      Wall[60]= new WallPart(23,9);
      Wall[61]= new WallPart(24,9);
      Wall[62]= new WallPart(25,9);
      Wall[63]= new WallPart(26,9);
      Wall[64]= new WallPart(27,9);
      Wall[65]= new WallPart(3,8);
  Wall[66]= new WallPart(3,7);
  Wall[67]= new WallPart(3,6);
  Wall[68]= new WallPart(3,5);
  Wall[69]= new WallPart(3,4);
  Wall[70]= new WallPart(3,3);
  Wall[71]= new WallPart(3,2);
  Wall[72]= new WallPart(3,1);
      Wall[73]= new WallPart(5,7);
      Wall[74]= new WallPart(5,6);
      Wall[75]= new WallPart(5,5);
      Wall[76]= new WallPart(5,4);
      Wall[77]= new WallPart(5,3);
      Wall[78]= new WallPart(5,8);
      Wall[79]= new WallPart(5,1);
      Wall[80]= new WallPart(3,1);
      Wall[81]= new WallPart(4,1);
      Wall[82]= new WallPart(5,1);
      Wall[83]= new WallPart(6,1);
      Wall[84]= new WallPart(7,1);
      Wall[85]= new WallPart(8,1);
      Wall[86]= new WallPart(9,1);
      Wall[87]= new WallPart(10,1);
      Wall[88]= new WallPart(11,1);
      Wall[89]= new WallPart(12,1);
      Wall[90]= new WallPart(13,1);
      Wall[91]= new WallPart(14,1);
      Wall[92]= new WallPart(15,1);
      Wall[93]= new WallPart(16,1);
      Wall[94]= new WallPart(17,1);
      Wall[95]= new WallPart(18,1);
      Wall[96]= new WallPart(19,1);
      Wall[97]= new WallPart(20,1);
      Wall[98]= new WallPart(6,3);
      Wall[99]= new WallPart(7,3);
      Wall[100]= new WallPart(8,3);
      Wall[101]= new WallPart(9,3);
      Wall[102]= new WallPart(10,3);
      Wall[103]= new WallPart(11,3);
      Wall[104]= new WallPart(12,3);
      Wall[105]= new WallPart(13,3);
      Wall[106]= new WallPart(14,3);
      Wall[107]= new WallPart(15,3);
      Wall[108]= new WallPart(16,3);
      Wall[109]= new WallPart(17,3);
      Wall[110]= new WallPart(18,3);
      Wall[111]= new WallPart(18,3);
      Wall[112]= new WallPart(18,4);
      Wall[113]= new WallPart(18,5);
      Wall[114]= new WallPart(18,6);
      Wall[115]= new WallPart(20,1);
      Wall[116]= new WallPart(20,2);
      Wall[117]= new WallPart(20,3);
      Wall[118]= new WallPart(20,4);
      Wall[119]= new WallPart(20,5);
      Wall[120]= new WallPart(20,6);
      Wall[121]= new WallPart(19,6);
      Wall[122]= new WallPart(28,9);
      Wall[123]= new WallPart(28,11);
      Wall[124]= new WallPart(0,13);
}