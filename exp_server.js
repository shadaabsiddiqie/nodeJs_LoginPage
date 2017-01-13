var express = require('express')

var app = express()

var path = require('path')

var bodyParser = require('body-parser')

var fs = require('fs')

var logindata = require(__dirname +'/dataJson/userinfo.json')

// include an external file as node is extra protective even with CSS files

// app.use(bodyParser());

// app.use(require('connect').bodyParser())
app.use(require(__dirname +'/JS/login.js'));

app.use(require(__dirname +'/JS/signUp.js'));

app.use('/API_JS',express.static(__dirname + '/JS'));

app.use('/API_data',express.static(__dirname + '/dataJson'));

app.use('/API_style',express.static(__dirname+'/style'));

// call back at required port

app.listen(8765,function(){

	console.log("listion ng at 8765 and I am  the call back");
});
// creating signUp page functionality what it should request and respond

// app.get('/signUp',function(request,response){
//
// 	//response.send("I am sending response to signUp page");
//
// 	response.sendFile('signUp.html',{root:path.join(__dirname,'/views')});
// });
// app.post('/signUp',function(request,response){
//
// 	response.end(JSON.stringify(request.body));
// });

// creating login page functionality

// app.get('/login',function(request,response) {
//
// 	//response.sendFile('login.html',{root:path.join(__dirname,'/views')});
//
// 	//response.end(JSON.stringify(request.query));
//
// 	 response.end(JSON.stringify(logindata.students));
//
//
//
// });
// 	login = false
//
// app.post('/login',function(request,response) {
//
// 	// response.end(JSON.stringify(request.query));
//
// 	//response.end(JSON.stringify(request.body));
//
// 	var loginform = request.body;
//
// 	form_name=loginform.UserName;
//
// 	form_password=loginform.Password;
//
//
//
// 	for(i=0;i<logindata.students.length;i++)
// 	{
//
// 		// console.log(i);
// 		// console.log(logindata.students[i].name);
//
// 		if(form_name==logindata.students[i].name && form_password==logindata.students[i].password)
// 		{
//
// 			//console.log(logindata.students[i].name);
//
// 			user_data=logindata.students[i];
//
// 			login = true
//
// 			break;
//
// 		}
//
// 	}
//
// 	if(i==logindata.students.length)
// 	{
// 		response.redirect('/');
//
// 		console.log("User was not present !!! SORRY !!!");
// 	}
// 	else
// 	{
//
// 		response.redirect('/sucess');
//
// 	}
//
//
// 	// response.end(JSON.stringify(logindata.students));
//
// 	// response.end(form_name +" 1111 "+ form_password)
//
// 	// if( loginform.UserName in logindata.students.name)
// 	// {
// 	// 	response.redirect('/'+logindata.students.name);
// 	// }
// 	// else
// 	// {
// 	// 	response.end(JSON.stringify(request.body));
// 	// }
//
// })
//
// app.get('/sucess',function(request,response){
// 	if(login==false){
//
// 		response.end("stupit login first")
//
// 	}
// 	else{
//
// 		response.end("hi!" + logindata.students[i].name)
//
// 	}
// })
