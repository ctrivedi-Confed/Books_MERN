const express = require('express');
const app = express();
const connectDB = require('./config/db');
const routes = require('./routes/api/Books');
const bodyParser = require('body-parser');

// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: true })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

app.use('/api', routes);

connectDB();

app.get('/', (req, res)=> {
    res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));