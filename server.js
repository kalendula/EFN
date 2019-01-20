var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var Username ="";
var app = express();
var jsonParser = bodyParser.json();
app.use(express.static(__dirname + "/public"));
app.get("/submit/1", function(req, res){
    var content = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(content);
    res.send(users);

});
app.get("/submit/attempts", function(req, res){
    var content = fs.readFileSync("attempts.json", "utf8");
    var attempts = JSON.parse(content);
    var newAttempts=[{}];
    var last = attempts[attempts.length-1].id;
    var k = 0;
    var t = 0;
    var name="";
    while (true){
        name = attempts[k].nick;
        if (name===Username){
            newAttempts[t]=attempts[k];
            t++;
            }
        if (attempts[k].id==last){
            break;
        }
        k++;
    }
    res.send(newAttempts);
});
app.get("/submit/result/:time", function(req, res){
    var time = req.params.time;
    
    console.log("ok");
    var data1 = fs.readFileSync("attempts.json", "utf8");
    var users1 = JSON.parse(data1);
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
    var user;
    var prevTime;
    for(var i=0; i<users.length; i++){
        if(users[i].nick===Username){
            user = users[i];
            var id = Math.max.apply(Math,users1.map(function(o){return o.id;}))
            user.id = id+1;
            prevTime=user.time;
            user.time = Number(time);
            users1.push(user);
            var data2 = JSON.stringify(users1);
            fs.writeFileSync("attempts.json", data2);
            break;
        }
    }
    if(user){
        if (prevTime<user.time){
        user.time = prevTime;}
        var id = Math.max.apply(Math,users.map(function(o){return o.id;}))
        user.id = id+1;
        var data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        res.send("ok");
    }
    else {
        res.status(400).send();
    }
  });

app.get("/submit/users/:id", function(req, res){
      
    var id = req.params.id; // получаем id
    var content = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(content);
    var user = null;
    // находим в массиве пользователя по id
    for(var i=0; i<users.length; i++){
        if(users[i].id==id){
            user = users[i];
            break;
        }
    }
    // отправляем пользователя
    if(user){
        res.send(user);
    }
    else{
        res.status(404).send();
    }
});

app.get("/submit", function(req, res){
    var nick = req.param('nick'); 
    if (nick=="admin"){
    res.sendFile(__dirname+"/public/admin.html");
    }
    else {
    res.sendFile(__dirname+"/public/game.html");
  
    var content = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(content);
    var user = null;
    for(var i=0; i<users.length; i++){
        if(users[i].nick===nick){
            user = users[i];
            break;
        }
    }
    if(user){
    }
    else{
        var user = {id: 1, nick: nick, time: 10000};
        var data = fs.readFileSync("users.json", "utf8");
        var users = JSON.parse(data);
        var id = Math.max.apply(Math,users.map(function(o){return o.id;}))
        user.id = id+1;
        users.push(user);
        var data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
    }
    Username=nick;}
});
app.post("/submit/users", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
    
    var nick = req.body.nick;
    var time = req.body.time;
    var user = {nick: nick, time: time};
     
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
     
    var id = Math.max.apply(Math,users.map(function(o){return o.id;}))
    user.id = id+1;
    users.push(user);
    var data = JSON.stringify(users);
    fs.writeFileSync("users.json", data);
    res.send(user);
});
app.delete("/submit/users/:id", function(req, res){
      
    var id = req.params.id;
    var nick = "";
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
    var index = -1;
    for(var i=0; i<users.length; i++){
        if(users[i].id==id){
            nick = users[i].nick;
            index=i;
            break;
        }
    }
    if(index > -1){
        var user = users.splice(index, 1)[0];
        var data1 = fs.readFileSync("attempts.json", "utf8");
        var attempts = JSON.parse(data1);
        for(let j=0; j<attempts.length; j++){
        if (deleteCascade(nick)){continue;}
        break;
    }
        var data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        res.send(user);
    }
    else{
        res.status(404).send();
    }
});
app.put("/submit/users", jsonParser, function(req, res){
      
    if(!req.body) return res.sendStatus(400);
     
    var userId = req.body.id;
    var nick = req.body.nick;
    var time = req.body.time;
     
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
    var user;
    for(var i=0; i<users.length; i++){
        if(users[i].id==userId){
            user = users[i];
            break;
        }
    }
    if(user){
        user.nick = nick;
        user.time = time;
        var data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        res.send(user);
    }
    else{
        res.status(404).send(user);
    }
});


app.get("/submit/att", function(req, res){
    var content = fs.readFileSync("attempts.json", "utf8");
    var attempts = JSON.parse(content);
    res.send(attempts);

});

app.get("/submit/attempts/:id", function(req, res){
      
    var id = req.params.id; 
    var content = fs.readFileSync("attempts.json", "utf8");
    var attempts = JSON.parse(content);
    var attempt = null;
    for(var i=0; i<attempts.length; i++){
        if(attempts[i].id==id){
            attempt = attempts[i];
            break;
        }
    }
    if(attempt){
        res.send(attempt);
    }
    else{
        res.status(404).send();
    }
});

app.post("/submit/attempts", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
    
    var nick = req.body.nick;
    var time = req.body.time;
    var attempt = {nick: nick, time: time};
     
    var data = fs.readFileSync("attempts.json", "utf8");
    var attempts = JSON.parse(data);
     
    var id = Math.max.apply(Math,attempts.map(function(o){return o.id;}))
    attempt.id = id+1;
    attempts.push(attempt);
    var data = JSON.stringify(attempts);
    fs.writeFileSync("attempts.json", data);
    res.send(attempt);
});
app.delete("/submit/attempts/:id", function(req, res){
      
    var id = req.params.id;
    var data = fs.readFileSync("attempts.json", "utf8");
    var attempts = JSON.parse(data);
    var index = -1;
    for(var i=0; i<attempts.length; i++){
        if(attempts[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        var attempt = attempts.splice(index, 1)[0];
        var data = JSON.stringify(attempts);
        fs.writeFileSync("attempts.json", data);
        res.send(attempt);
    }
    else{
        res.status(404).send();
    }
});
app.put("/submit/attempts", jsonParser, function(req, res){
      
    if(!req.body) return res.sendStatus(400);
     
    var attemptId = req.body.id;
    var nick = req.body.nick;
    var time = req.body.time;
     
    var data = fs.readFileSync("attempts.json", "utf8");
    var attempts = JSON.parse(data);
    var attempt;
    for(var i=0; i<attempts.length; i++){
        if(attempts[i].id==attemptId){
            attempt = attempts[i];
            break;
        }
    }
    if(attempt){
        attempt.nick = nick;
        attempt.time = time;
        var data = JSON.stringify(attempts);
        fs.writeFileSync("attempts.json", data);
        res.send(attempt);
    }
    else{
        res.status(404).send(attempt);
    }
});

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});

function deleteCascade(nick){
    var data = fs.readFileSync("attempts.json", "utf8");
    var attempts = JSON.parse(data);
    
    for(let j=0; j<attempts.length; j++){
        if(attempts[j].nick==nick){
        attempts.splice(j, 1)[0];
        var data13 = JSON.stringify(attempts);
        fs.writeFileSync("attempts.json", data13);
        return true;
        }
    }

    return false;
}