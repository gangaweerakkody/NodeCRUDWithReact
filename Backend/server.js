const express = require('express');  //express: A web framework for Node.js to create web servers and APIs
const cors = require('cors'); //cors: Middleware for handling Cross-Origin Resource Sharing (CORS) to allow access to the server from different domains.
const mysql = require('mysql2');//mysql2: A MySQL client library for connecting to a MySQL database. Compared to mysql, it supports promises and offers better features.
const app = express();  //Creates an instance of an Express application that serves as the foundation for your API.

// Middleware
app.use(cors());    //Enables CORS for the server, allowing it to handle requests from other domains.
app.use(express.json());  //app.use(express.json()): Parses incoming JSON requests and makes the req.body available in handlers.

// Create MySQL connection
const db = mysql.createPool({    //mysql.createPool(): Creates a pool of connections to the database. A pool allows multiple connections to the database without creating/destroying them for every query, improving performance.

    host: "localhost",
    user: "root",
    password: "1234",
    database: "nodecrud"
});
// Test connection (optional)
db.getConnection((err, connection) => { //Retrieves a connection from the pool to test if the database is accessible.
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the MySQL database");
        connection.release(); // Release the connection back to the pool
    }
});

// Basic route
app.get("/", (req, res) => {
   const sql="SELECT * FROM STUDENT";
   db.query(sql, (err, data) => {   //Executes the SQL query
    if(err) return res.json("Error");
    return res.json(data);
   })

  
});

app.post('/create',(req,res) =>{
    const sql="INSERT INTO STUDENT (`Name`,`Email`) VALUES (?,?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json({message:"Student added successfully", data});
 
    })
})

// Start the server
app.listen(8082, () => {
    console.log("Server is listening on port 8082");
});
