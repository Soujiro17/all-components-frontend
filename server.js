require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require("path");
const port = process.env.PORT;
const fs = require("fs");
var cors = require('cors');

const info = require('./routes/route');


function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(express.bodyParser({limit: '50mb'}));
app.use("/data/", info)
app.set('json spaces', 2)

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, `./build`, "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    
    res.send(data)
  });
});

app.use(express.static(path.resolve(__dirname, `./build`)));

app.post("/", (req, res) => {
    const data = req.body

    console.log(data)

    jsonReader('./data.json', (err, customer) => {
        if (err) {
            console.log('Error reading file:',err)
            return
        }

        for(let x = 0; x<data.products.length; x++){
            if(customer.products.includes(data.products[x])){
                const index = customer.products.indexOf(data.products[x])
                customer.prices[index] = data.prices[x]
                customer.stock[index] = data.stock[x]
            }else{
                customer.products.push(data.products[x]) 
                customer.prices.push(data.prices[x]) 
                customer.links.push(data.links[x]) 
                customer.stock.push(data.stock[x]) 
            }
        }
    fs.writeFile('./data.json', JSON.stringify(customer, null, 2), (err) => {
            if (err) console.log('Error writing file:', err)
        })
    })

    console.log("received")
    res.send("received")
    
})

app.post("/del", (req, res) => {
    const data = req.body

    const empty = { 
        "products": [], 
        "prices": [], 
        "links": [], 
        "stock": [] 
    }

    fs.writeFile('./data.json', JSON.stringify(empty, null, 2), (err) => {
            if (err) console.log('Error writing file:', err)
    })
    
    console.log("deleted")
    return res.send("deleted")

    
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})