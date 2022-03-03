//server prints out the entire blockchain

function chain(app) {

    //print out the entire blockchain
    app.get("/chain", function (request, response) {

        //formulate a response message
        let chainStr = global.blockchain.prettify();

        //send the response for printing out the blockchain
        response
            .status(200) //http status code 200: OK
            .send(chainStr); //response message
    });
}

module.exports = chain;