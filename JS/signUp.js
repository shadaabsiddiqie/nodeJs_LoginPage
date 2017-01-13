var express = require('express'),
	router = express.Router();

var bodyParser = require('body-parser')

var fs = require('fs')

var uuid = require('node-uuid')

// globle.logindata = require('/home/shadaab/holyday/dataJson/userinfo.json')

router.use(bodyParser());

router.get('/signUp',function(request,response){

	//response.send("I am sending response to signUp page");

	var uniquecode = uuid.v4();

	console.log("uniquecode is " + uniquecode);

	response.sendFile('/home/shadaab/holyday/views/signUp.html',uniquecode);
});
router.post('/signUp',function(request,response){

	// if()//if no error in signing up

	k=logindata.students.length

	logindata.students[k]=request.body



	fs.writeFile('/home/shadaab/holyday/dataJson/userinfo.json', JSON.stringify(logindata,null,8),function(err) {

		if(err)
			return console.log(err);
		else {
			console.log("writen to file json");
		}

		//response.redirect('/login')

	});
	response.end("signUp sucess");
});
module.exports = router;
