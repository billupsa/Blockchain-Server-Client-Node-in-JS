//create a new mock transaction and adds it to the system

const Transaction = require("../src/transaction");

function newtransaction(app){
	//create a new transaction
	app.get("/newtransaction", function (request, response){
		//create a new transaction object
		let tx = new Transaction();

		//add the transaction to the global transaction array
		global.transactions.push(tx);

		//send the response for creating a new transaction
		response
			.status(200) //http status code 200: ok
			.send(tx.prettify()); //response message
	});
}

module.exports = newtransaction;
