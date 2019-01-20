var isAbout=false;
var isLeaderBoard=false;
  
  
  function begin0(){
  Wall = [];
cv = document.querySelector("canvas");
cx = cv.getContext("2d");
Hero = {};
Boss= {};
Boss.x=30;
Boss.y=30;
Hero.x = 0;
Hero.y = 8; 
floorimg.onload = function (){  
    cx.drawImage(floorimg,0,0);
    INZWall0();
    draw0();
setTimeout(function (){draw0();},1000)};
  }

  function INZWall0() {
    Wall[0]= new WallPart(30,30);
  }
    
  function drawText(){
    cx.fillStyle="white";
    cx.strokeStyle="pink";
    cx.font = "19px Verdana bold";
    cx.fillText("P r e s s   E n t e r   t o   c h o o s e !",7*CELL_SIZE, 19*CELL_SIZE-10);
    cx.font = "30px Verdana bold";
    cx.fillStyle="pink";
    cx.fillText("E S C A P E   F R O M   N O B O D Y : T H E   G A M E ",15, 2*CELL_SIZE);
    cx.fillText("P L A Y",10*CELL_SIZE, 5*CELL_SIZE);
    cx.fillText("L E A D E R B O A R D",10*CELL_SIZE, 9*CELL_SIZE);
    cx.fillText("A B O U T",10*CELL_SIZE, 13*CELL_SIZE);
    cx.fillText("Y O U R   A T T E M P T S",10*CELL_SIZE, 17*CELL_SIZE);
    cx.strokeRect(8*CELL_SIZE,4*CELL_SIZE,30,30);
    cx.strokeRect(8*CELL_SIZE,8*CELL_SIZE,30,30);
    cx.strokeRect(8*CELL_SIZE,12*CELL_SIZE,30,30);
    cx.strokeRect(8*CELL_SIZE,16*CELL_SIZE,30,30);
  }
  function draw0(){
cx.clearRect(0,0,cv.width,cv.height-25);
cx.strokeRect(0,0,cv.width,cv.height);
drawFloor();
 drawHero(Hero);
 drawText();
  }
  
   

function drawAbout(){
    isAbout=true;
    cx.clearRect(0,0,cv.width,cv.height-25);
    cx.strokeRect(0,0,cv.width,cv.height);
    drawFloor();
    cx.fillStyle="pink";
    cx.font = "20px Verdana";
    var maxWidth = 700; 
    var lineHeight = 25;
    var marginLeft = 10;
    var marginTop = 100;
    var text = "This game is about a mysterious prisoner who was unjustly imprisoned. After some time, he finds a secret passage in his cage and decides to escape from prison."+ 
    " Mysterious man in a suit with huge green eyes hunting for prisoner and want to take him back to cage. You must help main character escape!";
    wrapText(cx, text, marginLeft, marginTop, maxWidth, lineHeight);
    cx.fillText("Developed by: Hryhorii Kirochkin ",1*CELL_SIZE, 15*CELL_SIZE);
    cx.fillText("P r e s s   E n t e r   t o   g o   b a c k ! ",1*CELL_SIZE, 1*CELL_SIZE);
}

function drawLeaderBoard(){
    isLeaderBoard=true;
    cx.clearRect(0,0,cv.width,cv.height-25);
    cx.strokeRect(0,0,cv.width,cv.height);
    drawFloor();
    cx.fillStyle="pink";
    cx.font = "19px Verdana";
    cx.fillText("P r e s s   E n t e r   t o   g o   b a c k ! ",7*CELL_SIZE, 1*CELL_SIZE);
    cx.font = "30px Verdana";
    
    var y=3;
    var x = new XMLHttpRequest();
    x.open("GET", "http://localhost:3000/submit/1", true);
    x.onload = function (){
        var users = JSON.parse(x.responseText);
        for (let i =0;i<users.length;i++){
            if (users[i].time==10000){
                users.splice(i, 1);}
        }
        users = bubbleSort(users);
        for (let i =0;i<users.length;i++){
     cx.fillText((i+1)+". "+users[i].nick+": "+users[i].time+" seconds",1*CELL_SIZE, y*CELL_SIZE);
     y+=3;
            if (i==4){
                break;
            }
        }
}
    x.send(null);
}

function drawAttempts(){
    isLeaderBoard=true;
    cx.clearRect(0,0,cv.width,cv.height-25);
    cx.strokeRect(0,0,cv.width,cv.height);
    drawFloor();
    cx.fillStyle="pink";
    cx.font = "19px Verdana";
    cx.fillText("P r e s s   E n t e r   t o   g o   b a c k ! ",7*CELL_SIZE, 1*CELL_SIZE);
    cx.font = "30px Verdana";
    var y=3;
    var x = new XMLHttpRequest();
    x.open("GET", "http://localhost:3000/submit/attempts", true);
    var users;
    x.onload = function (){
        users = JSON.parse(x.responseText);
        if (typeof users[0].time === "undefined"){
            cx.fillText("You don't have attempts!",1*CELL_SIZE, y*CELL_SIZE);
        }
        else{
        users = bubbleSort(users);
        for (let i = 0;i<users.length;i++){
            if (i>4){
                break;
            }
     cx.fillText((i+1)+". "+users[i].nick+": "+users[i].time+" seconds",1*CELL_SIZE, y*CELL_SIZE);
     y+=3;
        }
}}
    x.send(null);
}

function bubbleSort(arr) {

    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {

            if (arr[j].time > arr[j + 1].time) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }

    return arr;
}

function wrapText(cx, text, marginLeft, marginTop, maxWidth, lineHeight)
    {
        var words = text.split(" ");
        var countWords = words.length;
        var line = "";
        for (var n = 0; n < countWords; n++) {
            var testLine = line + words[n] + " ";
            var testWidth = cx.measureText(testLine).width;
            if (testWidth > maxWidth) {
                cx.fillText(line, marginLeft, marginTop);
                line = words[n] + " ";
                marginTop += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        cx.fillText(line, marginLeft, marginTop);
}