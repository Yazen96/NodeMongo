require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000;
const Product = require('./models/productModels');
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to MongoAPI');
    });

    app.post("/blogpost", (req, res) => {
        res.send("This is a post request");
    });

    app.put("/blogput", (req, res) => {
        res.send("This is a put request");
    });

    app.delete("/blogdelete", (req, res) => {
        res.send("This is a delete request");
    });

    app.post("/api/products", async (req, res) => {

        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            console.log(error.message);
            res.status(404).send(error);
        }
    });
    
    app.get("/api/products", async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(404).json(error.message);
        }
    });

    app.get("/api/products/:id", async (req, res) => {
        try {  
            const {id} = req.params;
            const product = await Product.findById(req.params.id);
            res.status(200).json(product);

            
        } catch (error) { 
                res.status(404);
            }
          
    });

    app.put("/api/products/:id", async (req, res) => {
        try {
            const {id} = req.params;
            const product = await Product.findByIdAndUpdate(id, req .body);

                           
        
            }    catch (error) {
              res.status(404);

            if(!product){
                return res.status(400).json({message: "Product does not exist"}); 
          }  
            }
    });




mongoose.
connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to the PokemonDataBase!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');

    });
});
