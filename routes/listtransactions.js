//list all transactions in the system, not currently on blocks

const Transaction = require("../src/transaction");

function listtransactions(app) {
	//list all transactions
	app.get("/listtransactions", function (request, response) {

        // go through all transactions and create a response string
        let txStr = "";
        for (let i = 0; i < global.transactions.length; i++) {

            txStr += global.transactions[i].prettify();

        }

        // send the response for creating a new transaction
        response
            .status(200) // HTTP status code 200: OK
            .send(txStr); // Response message

    });
}

module.exports = listtransactions;