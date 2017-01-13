var http = require('http');

var server = http.createServer(engine);

server.listen(8080,

	function() {

		console.log("I am happy to listen from port 3090 I will be watching it alwase");

	}
);

function engine(request,response) {

	response.writeHead(200,{'Content-Type':'text/plain','name':'person_name','email':'*.email.iiit.ac.in'});

	response.end('from the server to play in END END of response');

	console.log(response);

	console.log("HI THIS IS RESPONSE----------------------------------------------------------------");

	console.log(request);

	


}
