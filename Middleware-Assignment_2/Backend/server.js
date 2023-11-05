const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stl"
})

app.post('/register', (req, res) => {
    const sql = "INSERT INTO register (`name`, `phone`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM register WHERE `email` = ? AND `password` = ? ";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error"); 
        }
        if(data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    })
});

app.get('/services', (req, res) => {
    const sql = "SELECT * FROM services"; 
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error retrieving data:", err);
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.put('/changepassword', (req, res) => {
    
    //retrieve the user from the database based on their email
    const selectUserSQL = "SELECT * FROM register WHERE email = ?";
    db.query(selectUserSQL, [req.body.email], (selectUserErr, userData) => {
        if (selectUserErr) {
            console.error("Error retrieving user data:", selectUserErr);
            return res.json("Error");
        }
        if (userData.length === 0) {
            console.error("User not found");
            return res.json("user not found");
        }

        const user = userData[0];
        // For debugging, display user.password in the console
        console.log("User's Password:", user.password);
        console.log("Current Password:", req.body.currentPassword);

        // Check if the current password matches the one stored in the database
        if (user.password !== req.body.currentPassword) {
            console.error("Current password is incorrect");
            return res.json('Current password is incorrect' );
        }

        // Update the password to the new one
        const sql = "UPDATE register SET `password`= ? WHERE email = ? ";
        db.query(sql, [req.body.newPassword, req.body.email], (err, updatedData) => {
            if (err) {
                console.error("Failed to update password:", err);
                return res.json("Failed to update password");
            } else {
                console.log("Password updated successfully");
                return res.json("Updated Password Successfully!");
            }
        });
    });

});

app.post('/activateService', (req, res) => {

    const sql = "INSERT INTO items (`serviceID`, `title`, `description`, `price`) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.id, 
        req.body.name, 
        req.body.description, 
        req.body.price
    ];

    // Log the data from the request body
    console.log("Data from Request Body:", req.body);
    console.log("serviceID:", req.body.id);
    console.log("title:", req.body.name);
    console.log("description:", req.body.description);
    console.log("price:", req.body.price);

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error activating service:", err);
            return res.status(500).json({ message: "Error activating service" });
        }
        return res.status(200).json({ message: "Service activated successfully" });
    });
});


app.get('/bills', (req, res) => {
    const sql = "SELECT * FROM bills"; 
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error retrieving data:", err);
            return res.json("Error");
        }
        return res.json(data);
    });
});

// Establish a database connection
db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database: " + err.stack);
      return;
    }
    console.log("Connected to the database");
  });

app.get("/cartitem", (req, res) => {
  const sql = "SELECT * FROM items";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching cart items:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(200).json(results);
  });
});

app.get('/items', (req, res) => {
  const sql = 'SELECT price FROM items'; // Adjust the SQL query as needed
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching items:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    return res.status(200).json(results);
  });
});

app.get('/bills', (req, res) => {
    const sql = "SELECT * FROM bills"; 
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error retrieving data:", err);
            return res.json("Error");
        }
        return res.json(data);
    });
});


app.listen(8081, ()=> {
    console.log("listening. Server is running on port 8081");
})