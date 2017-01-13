var express = require('express'),
	router = express.Router();

var bodyParser = require('body-parser')

var fs = require('fs')

global.logindata = require('/home/shadaab/holyday/dataJson/userinfo.json')

router.use(bodyParser());

router.get('/login',function(request,response) {

	// response.sendFile('login.html',{root:path.join(__dirname,'/views')});
	response.sendFile('/home/shadaab/holyday/views/login.html')


	console.log("-----------------------login get---------------------" );

	//response.end(JSON.stringify(request.query));
});

login = false

router.post('/login',function(request,response) {

	// response.end("string is " + JSON.stringify(request.body));

	console.log("-----------------------login post---------------------" + JSON.stringify(request.body));

	var loginform = request.body;

	form_name=loginform.UserName;

	form_password=loginform.Password;

	for(i=0;i<logindata.students.length;i++)
	{
		if(form_name==logindata.students[i].name && form_password==logindata.students[i].password){

			//console.log(logindata.students[i].name);

			user_data=logindata.students[i];

			login = true

			break;
		}
	}

	if(i==logindata.students.length){

		response.redirect('/');

		console.log("User was not present !!! SORRY !!!");
	}
	else{

		response.redirect('/sucess');

	}

})
router.get('/sucess',function(request,response){
	if(login==false){

		response.end("stupit login first")

	}
	else{

		response.end("hi!" + logindata.students[i].name)

	}
})


module.exports = router;
