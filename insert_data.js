var faker = require('Faker');
var mysql = require('mysql');
const { VARCHAR } = require('mysql/lib/protocol/constants/types');

var connection = mysql.createConnection({
    host     :   'localhost',
    user     :   'nodejs',
    password :   '1234',
    database :   'join_us'
});
// SELECT DATA
// var q = 'SELECT * FROM users';
// //////////////////
// INSERT DATA
// 'INSERT INTO user(email) VALUES(faker.internet.email())'



connection.connect();
//for(i = 0; i < 489; i++)
//{
    // -------------------------------------------------
    // var person = [
    //     [faker.internet.email(), faker.date.past()]
    // ];

    // var q = 'INSERT INTO users VALUES ?'
    // connection.query(q, [person], function(error, results) {
    //     if (error) console.log(error);
    //     console.log(results);
    // });
    // -------------------------------------------------

    // -------------------------------------------------
    // var person = {
    //     email: faker.internet.email(), 
    //     created_at: faker.date.past()
    // };

    // var q = 'INSERT INTO users SET ?'
    // connection.query(q, person, function(error, results) {
    //     if (error) console.log(error);
    //     console.log(results);
    // });
    // -------------------------------------------------
    
    var data = [];
    for(var i = 0; i < 500; i++){
        data.push([
            faker.internet.email(),
            faker.date.past()
        ]);
    }
     
    var q = 'INSERT INTO users (email, created_at) VALUES ?';
    connection.query(q, [data], function(err, result) {
      console.log(err);
      console.log(result);
    });

//}

// -----------------------------------------------------
// var data = [
//     ['Blaah@gameil.com', '2017-05-01 03:51:37'],
//     ['Uggh@gmail.com', '2017-05-01 03:51:37']
// ];
// var q = 'INSERT INTO users VALUES ?';
// 
// connection.query(q,[data],function(error,result){
//     if(error) console.log(error);
//     console.log(reusult);
// });
// ------------------------------------------------------
connection.end();