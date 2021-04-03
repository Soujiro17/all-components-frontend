require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require("path");
const port = process.env.REACT_APP_PORT || 3000;
const fs = require("fs");
const cors = require('cors');
const bodyParser = require('body-parser');
const Product = require('./src/models/Product');
const { db } = require('./src/models/Product');
require('./src/database')


// ----------------------- FUNCTIONS ----------------------//

function verifyToken(req, res, next){

    const bearerToken = req.headers['authorization'];

    if(typeof bearerToken !== 'undefined' && bearerToken !== ''){
        if(bearerToken === process.env.REACT_APP_API){
            next()
        }else{
            res.send(403)
        }
    }else{
        res.sendStatus(403)
    }


}


// ------------------------ SERVER SIDE ------------------------ //

app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
app.use(express.json());
app.use(cors());
app.set('json spaces', 2)


// ------------------------------------------------------------ //

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, `./build`, "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    res.send(data)
  });
});

app.get("/data", verifyToken, async (req, res) => {

    const products = await Product.find()

    res.json(products)

});

app.use(express.static(path.resolve(__dirname, `./build`)));

app.post("/", verifyToken, async (req, res) => {
    
    const data = req.body

    try{
        for(let x = 0; x<data.products.length; x++){
            
            const product = new Product({
                product: data.products[x],
                price: data.prices[x],
                link: data.links[x],
                stock: data.stock[x],
                fecha: data.fecha[x]
            })
            
            await product.save()
        }
        console.log("Data received")
        res.send("Data received")
    }catch(err){
        console.log(err)
        res.send("Error: data not received")
    }


    
})

app.get("/del", verifyToken, async (req, res) => {

    try{
        if(await (await db.collections.products.remove({})).result["ok"] === 1){
            console.log("Data deleted")
            return res.send("Data deleted")
        }
    }catch(err){
        console.log(err)
        return res.send("Error deleting data")
    }

    

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})