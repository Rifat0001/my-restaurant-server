const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json());

// show it on browser 
app.get('/', (req, res) => {
    res.send('my restaurant is running')
})

// show it on command window 
app.listen(port, () => {
    console.log(`My restaurant is running on port ${port} `);
})