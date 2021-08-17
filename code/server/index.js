const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Bibbib22@",
    database: "wecan"
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

/*app.post("/api/register", (req, res) => {
    const sqlInsert = "INSERT INTO users (username, password, email, startDay) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [req.body.username, req.body.password, req.body.email, req.body.startDay],(err, result) => {
        res.send(res)
    })
})*/

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM users;";
    db.query(sqlSelect, (err, result) =>{
        res.send(result);
    });
});
app.post("/api/insert", (req, res) => {
    const sqlInsert = "INSERT INTO users (username, password, email, startDay) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [req.body.username, req.body.password, req.body.email, req.body.startDay], (err, result) =>{
        res.send(result);
    });
});
app.listen(3001, () => {
    console.log("running")
});