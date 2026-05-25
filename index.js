require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./config/db');

//ket noi database
connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    })
})
.catch((error) => {
    console.error(error.message);
    process.exit(1);    
});

//tao server side

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>");
})

app.get('/about', (req, res) => {
    res.send("<h1>About Us</h1>");
})