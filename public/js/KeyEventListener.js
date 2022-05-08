
var level=0;
begin0();
var isDead=false;
document.addEventListener('keydown', function(event) {
    var isWall=false;
    var futStep=0;
    //enter
    if (event.keyCode==13){
      if (level==0){
        
        if (Hero.x == 8 && Hero.y == 4){ level=1; begin1();}
        if (Hero.x == 8 && Hero.y == 8){
          if (!isLeaderBoard) {isDead=true; drawLeaderBoard();}
          else {isDead=false; isLeaderBoard=false; draw0();}
        }
        if (Hero.x == 8 && Hero.y == 12){ 
          if (!isAbout) {isDead=true; drawAbout();}
          else {isDead=false; isAbout=false; draw0();}
          
        }
        if (Hero.x == 8 && Hero.y == 16){
          if (!isLeaderBoard) {isDead=true; drawAttempts();}
          else {isDead=false; isLeaderBoard=false; draw0();}
        }
        
    }
    if (level==9){
        if (storyEnd && !isEnter){
        var x = new XMLHttpRequest();
        x.open("GET", "http://localhost:3000/submit/result/"+time, true);
        x.onload = function (){isEnter=true;}
        x.send(null);
        }
      }
    }
    //r
    if (event.keyCode==82){

      if (level==9){
        if (storyEnd){
          isLevel9Begin=false;
          isEnter=false;
        clearInterval(timer9);
        time=0;
        level=0;
        begin0();
        draw0();}
      }

      if (level==8){
        clearInterval(timer8);
        isDead=false;
        isStoryEnd=false;
    begin8();
      }

      if (level==7){
        clearInterval(timer7);
        Hero.x = 0;
        Hero.y = 1;
        makeBullet7();
        isDead=false;
    timer7 = setInterval(move7,200);
      }

      if (level==6){
        Hero.x = 0;
        Hero.y = 8;
        makeBullet();
        isDead=false;
      }   

      if (level == 1 || level==2){Hero.x=0; Hero.y=1; isDead=false;}
    if (level==6) draw6();

    if (level==1) draw1();

    if (level==2) draw2();

    if (level==3) {
    Hero.x =27;
    Hero.y = 0;
    isButton1=false;
    isButton2=false;
    draw3();
    isDead=false;
    }

    if (level==4){
      Hero.x = 0;
      Hero.y = 9;
      isDead=false;
      draw4();
    }

    if (level==5){
  isStartRun=false;
  is410 = false;
  is42=false;
  is192=false;
  isLevel5End = false;
  Hero.x = 1;
  Hero.y = 14;
  Boss.x=25;
  Boss.y=10;
  Wall[124]= new WallPart(0,13);
  isDead=false;
  draw5();}

      

    }
    //right
    if (event.keyCode==39 || event.keyCode==68){
      if (isDead){}
      else{
        isHeroGoLeft=false;
      futStep = Hero.x+1;
      if (futStep<cv.width/CELL_SIZE){
        for (let i =0;i<Wall.length;i++){
        if (futStep==Wall[i].x && Hero.y==Wall[i].y) isWall=true;}
        if(!isWall){
            Hero.x=futStep;

            if (level==7) {
              if (Hero.x== 16 && Hero.y== 4) {
                Hero.x=16;
                Hero.y=8;
              }  
              draw7();
            }

            if (level==8) draw8();

            if (level==6) draw6();

            if (level == 5)draw5();

             if (level == 4)draw4();

            if (level==3) {
              if (Hero.x== 27 && Hero.y== 16){
                Hero.x=0;
                Hero.y=4;
              }
            
            draw3();
            }

            if (level == 0) {if (!isLeaderBoard)draw0();}

            if (level==2){

            if (Hero.x== 5 && Hero.y== 13){
					Hero.x=19;
					Hero.y=14;
				}
        if (Hero.x==28){
          level=3;
          begin3();
                     }
      else{
          draw2();}
            }

            if (level==1){
              if (Hero.x==19 && Hero.y==16) {
              dead();
              isDead=true;
              }
             else{ 
            if (Hero.x==28){
                level=2;
                begin2();
                           }
            else{
                draw1();}
                        }}}

}}}
//left
    if (event.keyCode==37 || event.keyCode == 65){
      if (isDead){}
      else {
        isHeroGoLeft=true;
      futStep=Hero.x-1;
      if (futStep>=0){
        for (let i =0;i<Wall.length;i++){
          if (futStep==Wall[i].x && Hero.y==Wall[i].y) isWall=true;}
          if(!isWall){
        Hero.x=futStep;

        if (level==7) {
          if (Hero.x== 13 && Hero.y== 8) {
            Hero.x=13;
            Hero.y=12;
          }
          draw7();}

          if (level == 0) {if (!isLeaderBoard)draw0();}

          if (level==8) draw8();

        if (level==6) draw6();

        if (level == 5)draw5();
        
        if (level == 4)draw4();

        if (level == 3)draw3();

        if (level == 1)draw1();

        if (level==2)draw2();


        }}}}

        //down
    if (event.keyCode==40 || event.keyCode == 83){
      if (isDead){}
      else{
      futStep=Hero.y+1;
      if (futStep<(cv.height-25)/CELL_SIZE){
        for (let i =0;i<Wall.length;i++){
          if (Hero.x==Wall[i].x && futStep==Wall[i].y) isWall=true;}
          if(!isWall){
            Hero.y=futStep;

            if (level==8) draw8();

            if (level==7) {
              if (Hero.x== 19 && Hero.y== 16) {
                Hero.x=20;
                Hero.y=4;
              }
              draw7();}

              if (level == 0) {if (!isLeaderBoard)draw0();}

            if (level==6) draw6();

            if (level == 5){
              draw5();
              if (Hero.x==19 && Hero.y==5){
                isLevel5End=true;
                level=6;
                begin6();
              }}

            if (level==4)  {
            draw4();
            if (Hero.x==20 && Hero.y==8){
             isLevel4End=true;
            level=5;
            begin5();
            }}

            if (level == 3){
              if (Hero.x== 4 && Hero.y== 14){
                Hero.x=25;
                Hero.y=1;
              }
              if (Hero.x== 24 && Hero.y== 12){
                Hero.x=1;
                Hero.y=14;
              }
              draw3();
            }

            if (level == 1) draw1();
        
            if (level == 2) {
                if (Hero.x== 3 && Hero.y== 8){
                    Hero.x=4;
                    Hero.y=10;
                  }
                  if (Hero.x== 5 && Hero.y== 8) {
                    Hero.x=7;
                    Hero.y=13;
                  }
                  if (Hero.x== 8 && Hero.y== 14) {
                    Hero.x=16;
                    Hero.y=16;
                  }
                  if (Hero.x== 12 && Hero.y== 14) {
                    Hero.x=12;
                    Hero.y=16;
                  }
                  draw2();
            }

        }}}}


        //up
    if (event.keyCode==38 || event.keyCode == 87){
      if (isDead){}
      else{
      futStep=Hero.y-1;
      if (futStep>=0){
        for (let i =0;i<Wall.length;i++){
        if (Hero.x==Wall[i].x && futStep==Wall[i].y) isWall=true;}
        if(!isWall){
                Hero.y=futStep;
                if (level == 0) {if (!isLeaderBoard)draw0();}

                if (level==8) draw8();

                if (level==7) draw7();

                if (level==6) draw6();

                if (level == 5){draw5();}

                if (level == 4) {
                  if (Hero.x ==24 && Hero.y == 5) {
                    Hero.x=16;
                    Hero.y=5;
                  }
                  if (Hero.x ==25 && Hero.y == 5) {
                    Hero.x=20;
                    Hero.y=7;
                  }
                  draw4();}

                if (level == 3) draw3();

                if (level == 1) draw1();

                if (level == 2) draw2();
              


            }}}}
}, false);


function dead() {
  cx.clearRect(0,0,cv.width,cv.height);
  cx.strokeRect(0,0,cv.width,cv.height);
  drawFloor();
//d
  cx.fillStyle="red";
  for (let i=2;i<12;i++){
  cx.fillRect(2*CELL_SIZE,i*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
cx.fillRect(3*CELL_SIZE,2*CELL_SIZE,CELL_SIZE,CELL_SIZE);
cx.fillRect(4*CELL_SIZE,3*CELL_SIZE,CELL_SIZE,CELL_SIZE);
cx.fillRect(3*CELL_SIZE,11*CELL_SIZE,CELL_SIZE,CELL_SIZE);
cx.fillRect(4*CELL_SIZE,10*CELL_SIZE,CELL_SIZE,CELL_SIZE);
for (let i=4;i<10;i++){
  cx.fillRect(5*CELL_SIZE,i*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
//e
for (let i=2;i<12;i++){
  cx.fillRect(7*CELL_SIZE,i*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
for (let i=8;i<11;i++){
  cx.fillRect(i*CELL_SIZE,2*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
for (let i=8;i<11;i++){
  cx.fillRect(i*CELL_SIZE,7*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
for (let i=8;i<11;i++){
  cx.fillRect(i*CELL_SIZE,11*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
//a
for (let i=4;i<12;i++){
  cx.fillRect(12*CELL_SIZE,i*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
for (let i=4;i<12;i++){
  cx.fillRect(15*CELL_SIZE,i*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
cx.fillRect(13*CELL_SIZE,7*CELL_SIZE,CELL_SIZE,CELL_SIZE);
cx.fillRect(14*CELL_SIZE,7*CELL_SIZE,CELL_SIZE,CELL_SIZE);
cx.fillRect(13*CELL_SIZE,2*CELL_SIZE,CELL_SIZE,CELL_SIZE);
cx.fillRect(13*CELL_SIZE,3*CELL_SIZE,CELL_SIZE,CELL_SIZE);
cx.fillRect(14*CELL_SIZE,3*CELL_SIZE,CELL_SIZE,CELL_SIZE);
cx.fillRect(14*CELL_SIZE,2*CELL_SIZE,CELL_SIZE,CELL_SIZE);
//d
for (let i=2;i<12;i++){
  cx.fillRect(17*CELL_SIZE,i*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
cx.fillRect(18*CELL_SIZE,2*CELL_SIZE,CELL_SIZE,CELL_SIZE);
cx.fillRect(19*CELL_SIZE,3*CELL_SIZE,CELL_SIZE,CELL_SIZE);
cx.fillRect(18*CELL_SIZE,11*CELL_SIZE,CELL_SIZE,CELL_SIZE);
cx.fillRect(19*CELL_SIZE,10*CELL_SIZE,CELL_SIZE,CELL_SIZE);
for (let i=4;i<10;i++){
  cx.fillRect(20*CELL_SIZE,i*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
//!
for (let i=2;i<10;i++){
  cx.fillRect(22*CELL_SIZE,i*CELL_SIZE,CELL_SIZE,CELL_SIZE);
  }
cx.fillRect(22*CELL_SIZE,11*CELL_SIZE,CELL_SIZE,CELL_SIZE);

cx.font = "25px Verdana";
cx.strokeText("P r e s s   R   t o  r e s t a r t !",6*CELL_SIZE, 14*CELL_SIZE);
cx.strokeText("P r e s s   R   t o  r e s t a r t !",6*CELL_SIZE, 14*CELL_SIZE);
}