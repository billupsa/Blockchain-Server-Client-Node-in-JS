//class definition for a single block

//used for encryption algorithm
const crypto = require("crypto");

//define a sha256 hash function
function SHA256(message){
	return crypto
		.createHash("sha256")//set hashing algorithm to SHA256
		.update(message)//update the hash with the message
		.digest("hex");//return the hash as a hexadecimal
}

class Block{
	constructor(prevHash = "",transactions = []){
		this.timestamp =Date.now(); //set timestamp to now
		this.transactions = transactions; //transaction list
		this.hash = this.getHash(); //current block hash
		this.prevHash = prevHash; //previous block hash
		this.nonce = 0; //some random value for mining purposes

		this.mine(); //mine the block
	}


//returns hash of current block 
getHash(){
	let txStr = "";
	for(let i =0; i< this.transactions.length;i++){
		txStr += JSON.stringify(this.transactions[i]);
	}

	//hash together
	return SHA256(
		this.prevHash + //the previous hash
		this.timestamp + //timestamp of block 
		txStr + //and all transaction,
		this.nonce //random nonce
	);

}

//mine a new block; generate hash that works
mine(){
	//looping until hash starts with a string 0...000
    //length of this string is set through difficulty(default: 1)

	let checkString = Array(global.difficulty + 1).join("0");

	let tries = 0;
	while(!this.hash.startsWith(checkString)){
		
		this.nonce++; //increase nonce for a different hash
		this.hash = this.getHash(); //recompute the entire hash
		tries++;
	}

	//see how many tries on the block
	console.log(`Block mined with ${tries} attempts. Hash: ${this.hash}`);
}

prettify() {

        // add basic block parameters
        let blockStr = `<div><b>Block</b> #${this.hash}</div>`;
        blockStr += `<div><b>Timestamp:</b> ${this.timestamp}</div>`;
        blockStr += `<div><b>Previous Hash:</b> ${this.prevHash}</div>`;
        blockStr += "<div><b>Transactions:</b></div><div>";

        // go through all transactions
        for (let i = 0; i < this.transactions.length; i++) {

            blockStr += "    " + this.transactions[i].prettify();
        }

        blockStr += "</div>";
        return blockStr;
    }
}

// export this object to be used elsewhere
module.exports = Block;
