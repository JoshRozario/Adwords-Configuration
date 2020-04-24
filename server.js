const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser")
const Router = express.Router();

var app = express()


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

app.use(bodyParser.json());


app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    next();
  
  });

//ASSUMES that there is a database called metigy
var db = mysql.createConnection({
    host: "mydb",
    user: "root",
    password : "3005",
    database : "metigy",
    multipleStatements : true
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait() {
    console.log('waiting for mysql server');
    await sleep(15000);
    console.log('Server ready connect to site via http://localhost:3000/');
    db.connect((err)=>{
        if(err){
            throw err;
        }
        console.log("connected")
    })
    
}

try{
    wait();
}catch(err){
    console.log(err)
}

app.get('/createdb', (req,res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS metigy';
    db.query(sql, (err,result) => {
        if (err){
            throw err;
        }
            (console.log(err))
            res.send('Table created..');
    });
});

app.get('/createkeywordstable', (req,res) => {
    let sql = 'CREATE TABLE IF NOT EXISTS keywords ( id VARCHAR(255) , word VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err,result) => {
        if (err){
            throw err;
        }
            (console.log(err))
            res.send('Table created..');
    });
});

app.get('/createsitestable', (req,res) => {
    let sql = 'CREATE TABLE IF NOT EXISTS sites ( id VARCHAR(255) , word VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err,result) => {
        if (err){
            throw err;
        }
            (console.log(err))
            res.send('Table created..');
    });
});

//Can be used to populate table with pre set keywords
app.get('/addkwords', (req,res) => {
    let word = [
        [
             '1',
             'Shoes'
        ],
        [
             '13',
             'Shoes carnival'
        ],
        [
             '2',
             'Shoes palace'
        ],
        [
             '3',
             'Shoes stores near me '
        ],
        [
           '4',
           'Shoes for crew'
        ],
        [
           '5',
           'Shoes station'
        ],
        [
           '6',
           'Shoes repair'
        ],
        [
           '7',
           'Shoes store'
        ],
        [
           '8',
           'Shoes for women'
        ],
        [
           '9',
           'Shoes fashion week'
        ],
        [
          '10',
           'Shoes instagram'
        ],
        [
           '11',
           'Shoes stories'
        ],
        [
           '12',
           'Shoes show'
        ],
    ]
    var query = db.query('INSERT IGNORE INTO keywords(id,word) VALUES ?', [word],
        function(error, results, fields) {
        if (error) throw error;
        res.send('added..');
    });
});

//Can be used to populate table with pre set sites

app.get('/addsites', (req,res) => {
    let site = [
        [
             '1asd',
             'www.dockers.com'
        ],
        [
             '2asd',
             'www.adidas.com'
        ],
        [
           '3asd',
           'www.nike.com'
        ],
        [
             '4asd',
             'www.underarmour.com'
        ],
        [
           '5asd',
           'www.newbalance.com'
        ],
        [
           '6asd',
           'www.puma.com'
        ],
        [
           '7asd',
           'www.prada.com'
        ],
        [
           '8asd',
           'www.fredperry.com'
        ],
        [
           '9asd',
           'www.caterpillar.com'
        ],
        [
           'as10asd',
           'www.gucci.com'
        ],
        [
           'a11asd',
           'www.allendmonds.com'
        ],
        [
           'b12asd',
           'www.brunomagli.com'
        ],
        [
           'c13asd',
           'www.diesel.com'
        ],
    ]
    var query = db.query('INSERT IGNORE INTO sites(id,word) VALUES ?', [site],
        function(error, results, fields) {
        if (error) throw error;
        res.send('added..');
    });
});

app.get('/getkwords', (req, res) =>{
    let sql = 'SELECT * FROM keywords';
    let query = db.query(sql,(err,results) => {
        if(err) throw err;
        console.log(results)
        res.send(results);
    });
});

app.get('/getsites', (req, res) =>{
    let sql = 'SELECT * FROM sites';
    let query = db.query(sql,(err,results) => {
        if(err) throw err;
        console.log(results)
        res.send(results);
    });
});

app.get('/deletekword/:id', (req,res) => {
    let sql = `DELETE FROM keywords WHERE id = "${req.params.id}"`;
    let query = db.query(sql,(err,results) => {
        if(err) throw err;
        console.log(results)
        res.send("deleted");
    });
});

app.get('/deletesite/:id', (req,res) => {
    let sql = `DELETE FROM sites WHERE id = "${req.params.id}"`;
    let query = db.query(sql,(err,results) => {
        if(err) throw err;
        console.log(results)
        res.send("deleted");
    });
});

app.get('/addkword/:word', (req,res) => {
    let sql = `INSERT INTO keywords (id, word) VALUES ('${makeid(5)}','${req.params.word}')`;
    let query = db.query(sql,(err,results) => {
        if(err) throw err;
        console.log(results)
        res.send("Addedword");
    });
});

app.get('/addsite/:word', (req,res) => {
    let sql = `INSERT INTO sites (id, word) VALUES ('${makeid(5)}','${req.params.word}')`;
    let query = db.query(sql,(err,results) => {
        if(err) throw err;
        console.log(results)
        res.send("Addedsite");
    });
});

app.listen(3005);


