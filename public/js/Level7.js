var Enemy71={};
var Enemy72={};
var Enemy73={};
var bullet71={};
var bullet72={};
var bullet73={};
var isBullet71FlyEnd=false;
var isBullet72FlyEnd=false;
var isBullet73FlyEnd=false; 
var timer7;

function begin7(){
    Wall = [];
    cv = document.querySelector("canvas");
    cx = cv.getContext("2d");
    Hero = {};
    Hero.x = 0;
    Hero.y = 1;
    makeBullet7();
    Enemy71.x = 4;
    Enemy71.y = 15;
    Enemy72.x = 9;
    Enemy72.y = 3;
    Enemy73.x = 23;
    Enemy73.y = 16;
    timer7 = setInterval(move7,200);
      INZWall7();
      draw7();
}
      
function draw7(){
  cx.clearRect(0,0,cv.width,cv.height-25);
  cx.strokeRect(0,0,cv.width,cv.height);
  drawFloor();
        for (let i =0;i<Wall.length;i++){
          cx.fillStyle = "black";
          cx.fillRect(Wall[i].x*CELL_SIZE,Wall[i].y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
        }
        drawTeleport7();
        drawHero(Hero);
        cx.fillStyle = "red";
        cx.fillRect(Enemy71.x*CELL_SIZE,Enemy71.y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
        cx.fillRect(Enemy72.x*CELL_SIZE,Enemy72.y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
        cx.fillRect(Enemy73.x*CELL_SIZE,Enemy73.y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
        drawExit (28,13);
        if (Hero.x==28 && Hero.y==13){
          isLevel7End=true;
          level=8;
          begin8();
        }
        drawBullet(bullet73);
        drawBullet(bullet72);
        drawBullet(bullet71);
        isHeroDead7();
}
     
function drawTeleport7() {
            cx.fillStyle="blue";
            drawPortalEnter (16,4);
            drawPortalExit (16,8);
            drawPortalEnter (13,8);
            drawPortalExit (13,12);
            drawPortalEnter (19,16);
            drawPortalExit (20,4);
}	

function move7() {
              if (isLevel7End){console.log(7);clearInterval(timer7); return;}
              if (isDead){}
              else{
              if (isBullet71FlyEnd){
                isBullet71FlyEnd=false;
                bullet71.x=4;
                bullet71.y=16;}
            
              if (isBullet72FlyEnd){
                isBullet72FlyEnd=false;
                  bullet72.x=9;
                  bullet72.y=2;}
            
              if (isBullet73FlyEnd){
                isBullet73FlyEnd=false;
                    bullet73.x=23;
                    bullet73.y=17;}
            
            
              if(!isBullet71FlyEnd){
                bullet71.y-=1;
                draw7();
                if (bullet71.y<1){isBullet71FlyEnd=true;}
              }  
            
              if(!isBullet72FlyEnd){
                bullet72.y+=1;
                draw7();
                if (bullet72.y>13){isBullet72FlyEnd=true;}
              }  
            
              if(!isBullet73FlyEnd){
                bullet73.y-=1;
                draw7();
                if (bullet73.y<5){isBullet73FlyEnd=true;}
              }  
            }
}
    
function INZWall7() {
         Wall[0]= new WallPart(0,0);
        Wall[1]= new WallPart(1,0);
        Wall[2]= new WallPart(2,0);
        Wall[3]= new WallPart(3,0);
        Wall[4]= new WallPart(4,0);
        Wall[5]= new WallPart(5,0);
        Wall[6]= new WallPart(0,2);
        Wall[7]= new WallPart(1,2);
        Wall[8]= new WallPart(2,2);
        Wall[9]= new WallPart(3,2);
        Wall[10]= new WallPart(3,3);
        Wall[11]= new WallPart(3,4);
        Wall[12]= new WallPart(3,5);
        Wall[13]= new WallPart(3,6);
        Wall[14]= new WallPart(3,7);
        Wall[15]= new WallPart(3,8);
        Wall[16]= new WallPart(3,9);
        Wall[17]= new WallPart(3,10);
        Wall[18]= new WallPart(3,11);
        Wall[19]= new WallPart(3,12);
        Wall[20]= new WallPart(3,13);
        Wall[21]= new WallPart(3,14);
        Wall[22]= new WallPart(3,15);
        Wall[23]= new WallPart(3,16);
        Wall[24]= new WallPart(5,0);
        Wall[25]= new WallPart(5,1);
        Wall[26]= new WallPart(5,2);
        Wall[27]= new WallPart(5,3);
        Wall[28]= new WallPart(5,4);
        Wall[29]= new WallPart(5,5);
        Wall[30]= new WallPart(5,6);
        Wall[31]= new WallPart(6,6);
        Wall[32]= new WallPart(5,8);
        Wall[33]= new WallPart(5,9);
        Wall[34]= new WallPart(5,10);
        Wall[35]= new WallPart(5,11);
        Wall[36]= new WallPart(5,11);
        Wall[37]= new WallPart(5,14);
        Wall[38]= new WallPart(5,15);
        Wall[39]= new WallPart(5,16);
        Wall[40]= new WallPart(4,16);
        Wall[41]= new WallPart(6,12);
        Wall[42]= new WallPart(7,12);
        Wall[43]= new WallPart(8,12);
        Wall[44]= new WallPart(6,14);
        Wall[45]= new WallPart(7,14);
        Wall[46]= new WallPart(8,14);
        Wall[47]= new WallPart(9,14);
        Wall[48]= new WallPart(10,14);
        Wall[49]= new WallPart(8,11);
        Wall[50]= new WallPart(8,10);
        Wall[51]= new WallPart(7,8);
        Wall[52]= new WallPart(8,8);
        Wall[53]= new WallPart(8,7);
        Wall[54]= new WallPart(8,6);
        Wall[55]= new WallPart(8,5);
        Wall[56]= new WallPart(8,4);
        Wall[57]= new WallPart(8,3);
        Wall[58]= new WallPart(8,2);
        Wall[59]= new WallPart(8,1);
        Wall[60]= new WallPart(10,13);
        Wall[61]= new WallPart(10,12);
        Wall[62]= new WallPart(10,11);
        Wall[63]= new WallPart(10,10);
        Wall[64]= new WallPart(10,9);
        Wall[65]= new WallPart(10,8);
        Wall[66]= new WallPart(10,7);
        Wall[67]= new WallPart(10,6);
        Wall[68]= new WallPart(10,6);
        Wall[69]= new WallPart(10,3);
        Wall[70]= new WallPart(10,2);
        Wall[71]= new WallPart(10,1);
        Wall[72]= new WallPart(9,1);
        Wall[73]= new WallPart(11,5);
        Wall[74]= new WallPart(12,5);
        Wall[75]= new WallPart(13,5);
        Wall[76]= new WallPart(14,5);
        Wall[77]= new WallPart(15,5);
        Wall[78]= new WallPart(16,5);
        Wall[79]= new WallPart(17,5);
        Wall[80]= new WallPart(11,3);
        Wall[81]= new WallPart(12,3);
        Wall[82]= new WallPart(13,3);
        Wall[83]= new WallPart(14,3);
        Wall[84]= new WallPart(15,3);
        Wall[85]= new WallPart(16,3);
        Wall[86]= new WallPart(17,3);
        Wall[87]= new WallPart(17,4);
        //
        Wall[88]= new WallPart(12,7);
        Wall[89]= new WallPart(13,7);
        Wall[90]= new WallPart(14,7);
        Wall[91]= new WallPart(15,7);
        Wall[92]= new WallPart(16,7);
        Wall[93]= new WallPart(17,7);
        Wall[94]= new WallPart(12,9);
        Wall[95]= new WallPart(13,9);
        Wall[96]= new WallPart(14,9);
        Wall[97]= new WallPart(15,9);
        Wall[98]= new WallPart(16,9);
        Wall[99]= new WallPart(17,9);
        Wall[100]= new WallPart(17,8);
        Wall[101]= new WallPart(12,8);
        //
        Wall[102]= new WallPart(12,11);
        Wall[103]= new WallPart(13,11);
        Wall[104]= new WallPart(14,11);
        Wall[105]= new WallPart(15,11);
        Wall[106]= new WallPart(16,11);
        Wall[107]= new WallPart(17,11);
        Wall[108]= new WallPart(18,11);
        Wall[109]= new WallPart(19,11);
        Wall[110]= new WallPart(20,11);
        Wall[111]= new WallPart(20,12);
        Wall[112]= new WallPart(20,13);
        Wall[113]= new WallPart(20,14);
        Wall[114]= new WallPart(20,15);
        Wall[115]= new WallPart(20,16);
        Wall[116]= new WallPart(20,17);
        Wall[117]= new WallPart(12,17);
        Wall[118]= new WallPart(13,17);
        Wall[119]= new WallPart(14,17);
        Wall[120]= new WallPart(15,17);
        Wall[121]= new WallPart(16,17);
        Wall[122]= new WallPart(17,17);
        Wall[123]= new WallPart(18,17);
        Wall[124]= new WallPart(19,17);
        Wall[125]= new WallPart(12,16);
        Wall[126]= new WallPart(12,15);
        Wall[127]= new WallPart(12,14);
        Wall[128]= new WallPart(12,13);
        Wall[129]= new WallPart(12,12);
        Wall[130]= new WallPart(14,12);
        Wall[131]= new WallPart(14,13);
        Wall[132]= new WallPart(14,14);
        Wall[133]= new WallPart(14,15);
        Wall[134]= new WallPart(15,12);
        Wall[135]= new WallPart(15,13);
        Wall[136]= new WallPart(15,14);
        Wall[137]= new WallPart(15,15);
        Wall[138]= new WallPart(17,13);
        Wall[139]= new WallPart(17,14);
        Wall[140]= new WallPart(17,15);
        Wall[141]= new WallPart(17,16);
        Wall[142]= new WallPart(18,13);
        Wall[143]= new WallPart(18,14);
        Wall[144]= new WallPart(18,15);
        Wall[145]= new WallPart(18,16);
        Wall[146]= new WallPart(19,3);
        Wall[147]= new WallPart(20,3);
        Wall[148]= new WallPart(21,3);
        Wall[149]= new WallPart(22,3);
        Wall[150]= new WallPart(23,3);
        Wall[151]= new WallPart(24,3);
        Wall[152]= new WallPart(19,4);
        Wall[153]= new WallPart(19,5);
        Wall[154]= new WallPart(20,5);
        Wall[155]= new WallPart(21,5);
        Wall[156]= new WallPart(22,5);
        Wall[157]= new WallPart(22,5);
        Wall[158]= new WallPart(22,6);
        Wall[159]= new WallPart(22,7);
        Wall[160]= new WallPart(22,8);
        Wall[161]= new WallPart(22,9);
        Wall[162]= new WallPart(22,10);
        Wall[163]= new WallPart(22,11);
        Wall[164]= new WallPart(22,12);
        Wall[165]= new WallPart(22,13);
        Wall[166]= new WallPart(22,14);
        Wall[167]= new WallPart(22,15);
        Wall[168]= new WallPart(22,16);
        Wall[169]= new WallPart(22,17);
        Wall[170]= new WallPart(23,17);
        Wall[171]= new WallPart(24,3);
        Wall[172]= new WallPart(24,4);
        Wall[173]= new WallPart(24,5);
        Wall[174]= new WallPart(24,6);
        Wall[175]= new WallPart(24,7);
        Wall[176]= new WallPart(24,9);
        Wall[177]= new WallPart(24,9);
        Wall[178]= new WallPart(24,10);
        Wall[179]= new WallPart(24,11);
        Wall[180]= new WallPart(24,12);
        Wall[181]= new WallPart(24,14);
        Wall[182]= new WallPart(24,15);
        Wall[183]= new WallPart(24,16);
        Wall[184]= new WallPart(24,17);
        Wall[185]= new WallPart(25,12);
        Wall[186]= new WallPart(26,12);
        Wall[187]= new WallPart(27,12);
        Wall[188]= new WallPart(28,12);
        Wall[189]= new WallPart(25,14);
        Wall[190]= new WallPart(26,14);
        Wall[191]= new WallPart(27,14);
        Wall[192]= new WallPart(28,14);
        Wall[193]= new WallPart(7,6);
        Wall[194]= new WallPart(6,8);
        Wall[195]= new WallPart(7,8);
        Wall[196]= new WallPart(10,6);
        Wall[197]= new WallPart(25,7);
        Wall[198]= new WallPart(26,7);
        Wall[199]= new WallPart(26,8);
        Wall[200]= new WallPart(26,9);
        Wall[201]= new WallPart(25,9);
}
      
function makeBullet7(){
          bullet71.x=4;
          bullet71.y=16;
          bullet72.x=9;
          bullet72.y=3;
          bullet73.x=23;
          bullet73.y=17;
}

function isHeroDead7(){
          if (Hero.x==Enemy71.x && Hero.y==Enemy71.y){
            isDead=true;
            dead();
            clearInterval(timer7);
          }
          if (Hero.x==Enemy72.x && Hero.y==Enemy72.y){
            isDead=true;
            dead();
            clearInterval(timer7);
          }
          if (Hero.x==Enemy73.x && Hero.y==Enemy73.y){
            isDead=true;
            dead();
            clearInterval(timer7);
          }
          if (Hero.x==bullet71.x && Hero.y==bullet71.y){
            isDead=true;
            dead();
            clearInterval(timer7);
          }
          if (Hero.x==bullet72.x && Hero.y==bullet72.y){
            isDead=true;
            dead();
            clearInterval(timer7);
          }
          if (Hero.x==bullet73.x && Hero.y==bullet73.y){
            isDead=true;
            dead();
            clearInterval(timer7);
          }
}