var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var faker = require('Faker');
var app =  express();

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
    host     :   'localhost',
    user     :   'root',
    password :   'b689041*',
    database :   'join_us'
});

app.listen(3000, function(){
    console.log('server running on port 3000!');
});

app.get("/", function(req, res){
	var q = 'SELECT COUNT(*) AS count FROM users';
	connection.query(q, function(error, results) {
	if (error) console.log(error);
    var count = results[0].count;
	var msg = "<h2>We have " + count + " users</h2>";
	//res.send(msg);
    res.render("home", {data: count});
	});
});

app.post("/register", function(req, res){
    var email = req.body.email;
    var person = {
        email: faker.internet.email()
    };
    connection.query('INSERT INTO users SET ?',person,function(error,results){
        if(error) console.log(error);
        res.redirect('/');
    });
});



app.get("/joke", function(req,res){
    var joke ='What do tou call a dog that does magic tricks? A labracadabrador.';
    res.send(joke);
    console.log('REQUESTED THE JOKE ROUTE!');
});

app.get("/random_num", function(req,res){
    var num = Math.random();
    console.log(num);
    res.send(num);
});
