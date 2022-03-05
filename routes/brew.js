function brew(app){
	//attempt to get some coffee
	app.get("/brew",function(request,response) {
		//send the response for brewing coffee
		response
			.status(418) //HTTP status code 418: I'm a teapot
			.send("I'm a teapot, so I cannot brew coffee!"); //response message
	});
}

module.exports = brew;