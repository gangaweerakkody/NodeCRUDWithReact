const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "nodecrud"
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the MySQL database");
    }
});

// Basic route
app.get("/", (req, res) => {
   const sql="SELECT * FROM STUDENT";
   db.query(sql, (err, data) => {
    if(err) return res.json("Error");
    return res.json(data);
   })

  
});

// Start the server
app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
