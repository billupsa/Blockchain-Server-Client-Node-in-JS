//contains class definition for a blockchain

const Block = require("./block"); //class definition for a block

class Blockchain{
	constructor(){
		//chain array contains all blocks in our copy of the blockchain
		this.chain = [new Block(Array(65).join("0"))]; // create genesis block

	}

	//return the last block in the chain
	getLastBlock(){
		return this.chain[this.chain.length -1];
	}

	//return length of the chain
	getChainLength(){
		return this.chain.length;
	}
	
	//adds a new block to the chain
	addBlock(){	
		// mine a new block with the previous block's hash
		let newBlock = new Block(this.getLastBlock().hash, global.transactions);

		// let's add the new block to the chain, and make it immutable
		this.chain.push(Object.freeze(newBlock));
	}

	//validate the chain

	isChainValid(blockchain = this){
		//go over the chain, skip the genesis block 
		for(let i = 1; i < blockchain.chain.length; i++){
			const currentBlock = blockchain.chain[i];
			const prevBlock = blockchain.chain[i-1];
	

			//validate current block hash from the previous
			if(
				currentBlock.hash !== currentBlock.getHash() || //check the hash which was mined
				prevBlock.hash !== currentBlock.prevHash //check current block's prevHash matches'
			){
				return false;
			}
		
			//check hash validity
			let checkString = Array(global.difficulty + 1).join("0");
			if(!currentBlock.hash.startsWith(checkString)){
				return false;
			}
		}
	
		//all the blocks in the chain line up with hashes, so the chain is valid
		return true;
	}

	//update chain with a new blockchain
	replaceChain(newChain){
		//check length of the new chain
		if (newChain.length <= this.chain.length) return;

		//check that the new chain is valid
		if(!this.ischainValid(newChain)) return;

		//the new chain is valid and longer, so it replaces ours
		this.chain = newChain;
	}

	//returns a string representation of the blockchain
	prettify(){
		let chainStr = "";
		for(let i = 0; i< this.chain.length;i++){
			chainStr+= this.chain[i].prettify();
			chainStr+="<br><hr>";
		}

		return chainStr;
	}
}

//export to be used elsewhere
module.exports = Blockchain;

