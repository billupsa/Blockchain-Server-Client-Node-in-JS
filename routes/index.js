const fs = require("fs"); //used for file indexing

function dynamicallyLoadRoutes(app){
	
	//read all of the filenames in the current folder, then apply function to each
	fs.readdirSync(__dirname).forEach(function(file){
		//make sure we skip this file and all non JS files
		if(
			file === "index.js" ||
			file.substr(file.lastIndexOf(".")+1) !== "js"
		)
			return;
		//getting name of the file
		let name = file.substr(0,file.indexOf("."))
		//adding the routes file to the exports
		require("./"+name)(app);
	});
}
//export this function to dynamically load routes from the files in the folder
module.exports = dynamicallyLoadRoutes; 