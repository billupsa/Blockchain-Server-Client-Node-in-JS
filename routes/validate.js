//server validates the blockchain

function validate(app) {
    
    //validate the server's instance of a blockchain
    app.get("/validate", function (request, response) {

        //check if the blockchain is valid
        let isValid = global.blockchain.isChainValid();

        //formulate a response message
        let responseStr = "";

        if (isValid) {
            responseStr = "The blockchain is valid!";
        } else {
            responseStr = "The blockchain is invalid!";
        }

        //send the response for validating the blockchain
        response
            .status(200) //http status code 200: OK
            .send(responseStr); //response message
    });
}

module.exports = validate;