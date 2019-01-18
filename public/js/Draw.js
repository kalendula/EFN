var cv = document.querySelector("canvas");
var cx = cv.getContext("2d");
var CELL_SIZE=25;
var T_CELL_SIZE=8;
var isHeroGoLeft=false;

var stairImg= new Image();
stairImg.src="img/stair.png";
var floorimg = new Image();
floorimg.src = "img/Floor-1.png";
var BossImg = new Image();
BossImg.src = "img/Boss.png";
var bulletImg = new Image();
bulletImg.src = "img/fireball.png";
var heroImg = new Image();
var heroImgLeft = new Image();
heroImgLeft.src = "img/charLeft.png";
heroImg.src = "img/char.png";
var portalImg = new Image();
portalImg.src = "img/PortalExit.png";
var portalImgEn = new Image();
portalImgEn.src = "img/PortalEnter.png";
var buttonImg = new Image();
buttonImg.src = "img/Button.png";

function drawHero (Hero){
    if (isHeroGoLeft){
        cx.drawImage(heroImgLeft, Hero.x*CELL_SIZE,Hero.y*CELL_SIZE); }
    else{
    cx.drawImage(heroImg, Hero.x*CELL_SIZE,Hero.y*CELL_SIZE);}
    }

function drawEnemy (Enemy){
    cx.drawImage(bulletImg, Enemy.x*CELL_SIZE,Enemy.y*CELL_SIZE);
}

function drawExit (x,y){
    cx.drawImage(stairImg, x*CELL_SIZE,y*CELL_SIZE);
}

function drawBullet (Bullet){
        cx.drawImage(bulletImg, Bullet.x*CELL_SIZE,Bullet.y*CELL_SIZE);
}

function drawBoss (Boss){
    cx.drawImage(BossImg, Boss.x*CELL_SIZE,Boss.y*CELL_SIZE);
}
function drawFloor (){
    cx.drawImage(floorimg,0,0);
}

function drawPortalExit (x,y){
    cx.drawImage(portalImg, x*CELL_SIZE,y*CELL_SIZE);
}
function drawPortalEnter (x,y){
    cx.drawImage(portalImgEn, x*CELL_SIZE,y*CELL_SIZE);
}
function drawButton (x,y){
    cx.drawImage(buttonImg, x*CELL_SIZE,y*CELL_SIZE);
}