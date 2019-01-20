function begin3(){
    isButton1=false;
    isButton2=false;
    Wall = [];
    cv = document.querySelector("canvas");
    cx = cv.getContext("2d");
    CELL_SIZE = 25;
    T_CELL_SIZE = 8;
    Hero = {};
    Hero.x =27;
    Hero.y = 0;
      INZWall3();
      draw3();
}
      
function INZWall3() {
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
        Wall[15]= new WallPart(5,1);
        Wall[16]= new WallPart(5,2);
        Wall[17]= new WallPart(1,7);
        Wall[18]= new WallPart(1,7);
        Wall[19]= new WallPart(0,7);
        Wall[20]= new WallPart(0,8);
        Wall[21]= new WallPart(0,9);
        Wall[22]= new WallPart(0,10);
        Wall[23]= new WallPart(0,11);
        Wall[24]= new WallPart(0,12);
        Wall[25]= new WallPart(0,13);
        Wall[26]= new WallPart(0,14);
        Wall[27]= new WallPart(0,15);
        Wall[28]= new WallPart(1,15);
        Wall[29]= new WallPart(2,15);
        Wall[30]= new WallPart(2,14);
        Wall[31]= new WallPart(2,13);
        Wall[32]= new WallPart(2,12);
        Wall[33]= new WallPart(2,11);
        Wall[34]= new WallPart(2,10);
        Wall[35]= new WallPart(2,9);
        Wall[36]= new WallPart(3,14);
        Wall[37]= new WallPart(3,13);
        Wall[38]= new WallPart(3,12);
        Wall[39]= new WallPart(3,11);
        Wall[40]= new WallPart(3,10);
        Wall[41]= new WallPart(3,9);
        Wall[42]= new WallPart(4,15);
        Wall[43]= new WallPart(5,15);
        Wall[44]= new WallPart(5,14);
        Wall[45]= new WallPart(5,13);
        Wall[46]= new WallPart(5,12);
        Wall[47]= new WallPart(5,11);
        Wall[48]= new WallPart(5,10);
        Wall[49]= new WallPart(5,9);
        Wall[50]= new WallPart(5,8);
        Wall[51]= new WallPart(5,7);
        Wall[52]= new WallPart(5,6);
        Wall[53]= new WallPart(5,5);
        Wall[54]= new WallPart(5,4);
        Wall[55]= new WallPart(6,4);
        Wall[56]= new WallPart(7,4);
        Wall[57]= new WallPart(8,4);
        Wall[58]= new WallPart(9,4);
        Wall[59]= new WallPart(10,4);
        Wall[60]= new WallPart(11,4);
        Wall[61]= new WallPart(6,2);
        Wall[62]= new WallPart(7,2);
        Wall[63]= new WallPart(8,2);
        Wall[64]= new WallPart(9,2);
        Wall[65]= new WallPart(10,2);
        Wall[66]= new WallPart(11,2);
        Wall[67]= new WallPart(12,2);
        Wall[68]= new WallPart(13,2);
        Wall[69]= new WallPart(7,6);
        Wall[70]= new WallPart(8,6);
        Wall[71]= new WallPart(9,6);
        Wall[72]= new WallPart(10,6);
        Wall[73]= new WallPart(10,7);
        Wall[74]= new WallPart(10,8);
        Wall[75]= new WallPart(9,8);
        Wall[76]= new WallPart(8,8);
        Wall[77]= new WallPart(7,8);
        Wall[78]= new WallPart(11,5);
        Wall[79]= new WallPart(11,6);
        Wall[80]= new WallPart(11,7);
        Wall[81]= new WallPart(11,8);
        Wall[82]= new WallPart(11,9);
        Wall[83]= new WallPart(11,10);
        Wall[84]= new WallPart(13,3);
        Wall[85]= new WallPart(13,4);
        Wall[86]= new WallPart(13,5);
        Wall[87]= new WallPart(13,6);
        Wall[88]= new WallPart(13,7);
        Wall[89]= new WallPart(13,8);
        Wall[90]= new WallPart(13,9);
        Wall[91]= new WallPart(13,10);
        Wall[92]= new WallPart(13,11);
        Wall[93]= new WallPart(13,12);
        Wall[94]= new WallPart(10,10);
        Wall[95]= new WallPart(9,10);
        Wall[96]= new WallPart(8,10);
        Wall[97]= new WallPart(12,12);
        Wall[98]= new WallPart(11,12);
        Wall[99]= new WallPart(10,12);
        Wall[100]= new WallPart(8,11);
        Wall[101]= new WallPart(8,12);
        Wall[102]= new WallPart(8,13);
        Wall[103]= new WallPart(8,14);
        Wall[104]= new WallPart(8,15);
        Wall[105]= new WallPart(8,16);
        Wall[106]= new WallPart(8,17);
        Wall[107]= new WallPart(10,13);
        Wall[108]= new WallPart(10,14);
        Wall[109]= new WallPart(10,15);
        Wall[110]= new WallPart(9,17);
        Wall[111]= new WallPart(10,17);
        Wall[112]= new WallPart(11,17);
        Wall[113]= new WallPart(12,17);
        Wall[114]= new WallPart(13,17);
        Wall[115]= new WallPart(14,17);
        Wall[116]= new WallPart(15,17);
        Wall[117]= new WallPart(16,17);
        Wall[118]= new WallPart(11,15);
        Wall[119]= new WallPart(12,15);
        Wall[120]= new WallPart(13,15);
        Wall[121]= new WallPart(14,15);
        Wall[122]= new WallPart(16,16);
        Wall[123]= new WallPart(16,15);
        Wall[124]= new WallPart(16,14);
        Wall[125]= new WallPart(16,13);
        Wall[126]= new WallPart(16,12);
        Wall[127]= new WallPart(16,11);
        Wall[128]= new WallPart(16,10);
        Wall[129]= new WallPart(16,9);
        Wall[130]= new WallPart(16,7);
        Wall[131]= new WallPart(16,6);
        Wall[132]= new WallPart(16,5);
        Wall[133]= new WallPart(16,4);
        Wall[134]= new WallPart(16,3);
        Wall[135]= new WallPart(16,2);
        Wall[136]= new WallPart(14,14);
        Wall[137]= new WallPart(14,13);
        Wall[138]= new WallPart(14,12);
        Wall[139]= new WallPart(14,11);
        Wall[140]= new WallPart(14,10);
        Wall[141]= new WallPart(14,9);
        Wall[142]= new WallPart(14,8);
        Wall[143]= new WallPart(14,7);
        Wall[144]= new WallPart(14,6);
        Wall[145]= new WallPart(14,5);
        Wall[146]= new WallPart(14,4);
        Wall[147]= new WallPart(14,3);
        Wall[148]= new WallPart(14,2);
        Wall[149]= new WallPart(14,1);
        Wall[150]= new WallPart(14,0);
        Wall[151]= new WallPart(15,0);
        Wall[152]= new WallPart(16,0);
        Wall[153]= new WallPart(17,0);
        Wall[154]= new WallPart(18,0);
        Wall[155]= new WallPart(19,0);
        Wall[156]= new WallPart(20,0);
        Wall[157]= new WallPart(21,0);
        Wall[158]= new WallPart(22,0);
        Wall[159]= new WallPart(23,0);
        Wall[160]= new WallPart(24,0);
        Wall[161]= new WallPart(25,0);
        Wall[162]= new WallPart(26,0);
        Wall[163]= new WallPart(26,1);
        Wall[164]= new WallPart(26,2);
        Wall[165]= new WallPart(25,2);
        Wall[166]= new WallPart(25,2);
        Wall[167]= new WallPart(25,4);
        Wall[168]= new WallPart(25,5);
        Wall[169]= new WallPart(25,6);
        Wall[170]= new WallPart(25,7);
        Wall[171]= new WallPart(25,8);
        Wall[172]= new WallPart(25,9);
        Wall[173]= new WallPart(25,10);
        Wall[174]= new WallPart(25,11);
        Wall[175]= new WallPart(25,12);
        Wall[176]= new WallPart(25,13);
        Wall[177]= new WallPart(24,13);
        Wall[178]= new WallPart(23,13);
        Wall[179]= new WallPart(23,2);
        Wall[180]= new WallPart(23,3);
        Wall[181]= new WallPart(23,4);
        Wall[182]= new WallPart(23,5);
        Wall[183]= new WallPart(23,6);
        Wall[184]= new WallPart(23,7);
        Wall[185]= new WallPart(23,8);
        Wall[186]= new WallPart(23,9);
        Wall[187]= new WallPart(23,10);
        Wall[188]= new WallPart(23,11);
        Wall[189]= new WallPart(23,12);
        Wall[190]= new WallPart(17,2);
        Wall[191]= new WallPart(18,2);
        Wall[192]= new WallPart(19,2);
        Wall[193]= new WallPart(20,2);
        Wall[194]= new WallPart(21,2);
        Wall[195]= new WallPart(22,2);
        Wall[196]= new WallPart(17,7);
        Wall[197]= new WallPart(18,7);
        Wall[198]= new WallPart(19,7);
        Wall[199]= new WallPart(20,7);
        Wall[200]= new WallPart(21,7);
        Wall[201]= new WallPart(17,9);
        Wall[202]= new WallPart(18,9);
        Wall[203]= new WallPart(19,9);
        Wall[204]= new WallPart(19,10);
        Wall[205]= new WallPart(19,11);
        Wall[206]= new WallPart(19,13);
        Wall[207]= new WallPart(19,13);
        Wall[208]= new WallPart(19,14);
        Wall[209]= new WallPart(19,15);
        Wall[210]= new WallPart(19,16);
        Wall[211]= new WallPart(19,17);
        Wall[212]= new WallPart(21,8);
        Wall[213]= new WallPart(21,9);
        Wall[214]= new WallPart(21,10);
        Wall[215]= new WallPart(21,11);
        Wall[216]= new WallPart(21,12);
        Wall[217]= new WallPart(21,13);
        Wall[218]= new WallPart(21,14);
        Wall[219]= new WallPart(21,15);
        Wall[220]= new WallPart(20,17);
        Wall[221]= new WallPart(21,17);
        Wall[222]= new WallPart(22,17);
        Wall[223]= new WallPart(23,17);
        Wall[224]= new WallPart(24,17);
        Wall[225]= new WallPart(22,15);
        Wall[226]= new WallPart(23,15);
        Wall[227]= new WallPart(24,15);
        Wall[228]= new WallPart(25,15);
        Wall[229]= new WallPart(25,17);
        Wall[230]= new WallPart(26,17);
        Wall[231]= new WallPart(27,17);
        Wall[232]= new WallPart(26,15);
        Wall[233]= new WallPart(28,16);
        Wall[234]= new WallPart(27,15);
        Wall[235]= new WallPart(28,17);
        Wall[236]= new WallPart(28,15);
        Wall[237]= new WallPart(3,15);
        if (isButton1) {
            Wall[238]= new WallPart(3,15);
            Wall[239]= new WallPart(3,15);
        }
        else {
            Wall[238]= new WallPart(19,12);
            Wall[239]= new WallPart(2,7);
            
        }
        if (isButton2) {
            Wall[240]= new WallPart(3,15);
        }
            else {
                Wall[240]= new WallPart(25,3);
    
            }
}

function draw3(){
        if (Hero.x== 2 && Hero.y== 4) {
            isButton1 = true;
            INZWall3();}
            if (Hero.x== 17 && Hero.y== 3) {
                isButton2 = true;
                INZWall3();}
                cx.clearRect(0,0,cv.width,cv.height-25);
                cx.strokeRect(0,0,cv.width,cv.height);
                drawFloor();
    for (let i =0;i<Wall.length;i++){
      cx.fillStyle = "black";
      cx.fillRect(Wall[i].x*CELL_SIZE,Wall[i].y*CELL_SIZE,CELL_SIZE,CELL_SIZE);
    }
    drawTeleport1();
    drawHero(Hero);
    drawExit (9,7);
    if (Hero.x==9 && Hero.y==7){
        level=4;
        begin4();
    }
}
    
function drawTeleport1() {
      drawPortalExit (0,4);
      drawPortalExit (1,14);
      drawPortalEnter(4,14);
      drawPortalEnter(24,12);
      drawPortalEnter(27,16);
      drawPortalExit (25,1);
      drawButton (2,4);
      drawButton (17,3);
}	
      