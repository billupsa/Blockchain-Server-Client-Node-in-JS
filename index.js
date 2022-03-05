const express = require("express"); //imports express's class definition
const morgan = require("morgan"); //imports morgan's class definition

//initialize the express's class object
const app = express();

//tells express to use morgan when logging requests to the console
app.use(morgan("dev"));

//create the port number for the server to listen
const port = 8080;


//import from class modules 
const Blockchain = require("./src/blockchain");

//global variables
global.difficulty = 5; //difficulty to mine a particular blockchain
global.blockchain = new Blockchain(); //our copy of the blockchain
global.transactions = []; // our current transactions

//dynamically load all the routes from the ./routes folder
require("./routes")(app);

//configure our server to run
app.listen(port,() =>{
	//log that our server is running in the terminal
	console.log(`Server is listening at http://localhost:${port}/`);
});




