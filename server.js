const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to MongoAPI');
    });

    app.post("/blogpost", (req, res) => {
        res.send("This is a post request");
    });

    app.put("/blogput", (req, res) => {
        res.send("This is a put request");
    });

mongoose.
connect('mongodb+srv://Yazen:*****@pokemondatabase.bobmq.mongodb.net/Products-API?retryWrites=true&w=majority&appName=PokemonDataBase')
.then(() => {
    console.log('Connected to the PokemonDataBase!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
