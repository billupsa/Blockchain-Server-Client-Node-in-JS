const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

const port = 8080;

require("./routes")(app);

app.listen(port,() =>{
	console.log(`Server is listening at http://localhost:${port}/`);
});

//import from class modules 
const Blockchain = require("./src/blockchain");

//global variables
global.difficulty = 5; //difficulty to mine a particular blockchain
global.blockchain = new Blockchain(); //our copy of the blockchain
global.transactions = []; // our current transactions


