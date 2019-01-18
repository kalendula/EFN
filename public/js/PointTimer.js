cv = document.querySelector("canvas");
cx = cv.getContext("2d");
var time=0;

var allTime=0;


   
function drawTimer(){
    cx.clearRect(1, 20*CELL_SIZE-25,cv.width-2,24);
    cx.fillStyle = "black";
    if (isDead){
        cx.font = "16px Verdana";
        cx.fillText("You are dead, but time can't stop",1*CELL_SIZE, 20*CELL_SIZE-5);
    }
    cx.font = "20px Verdana";
    cx.fillText(time,26*CELL_SIZE, 20*CELL_SIZE-5);
    time++;
    if (isLevel9Begin){  clearInterval(pointTimer);}
        }