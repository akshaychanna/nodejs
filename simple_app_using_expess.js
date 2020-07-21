const express = require('express')
const app = express()
app.use(express.json())

var courses = [
	{ 'id' : 1, name:'javascript'},
	{id : 2, name: 'nodejs'},
	{'id':3,name:'react'}
]


app.get('/',function(req,res){
	res.write("hello world and welcome to express");
	res.end()
});

app.get('/api/courses', function(req,res){
	res.send(courses)
	// res.end();
})

app.get('/api/courses/:id', function(req,res){
	const course = courses.find( c => c.id === parseInt(req.params.id));
	if (!course) {
		res.status(404).send("the course with id not found")
	}
	res.send(course)
})

app.get('/api/courses/:id/:year', function(req,res){
	if (req.params.id == 5){
		res.send(`the given endpoing is ${req.params.id} and year is ${req.params.year}`)
		name = "akshay"
	}
})
	
app.post('/api/courses', function(req,res){
	const course = {
		id: courses.length +1 ,
		name : req.body.name
	};
	courses.push(course);
	res.send(course);
})

//port number assinging
const port = process.env.PORT || 3004;
console.log(`port number is : ${port}`)

app.listen(port, function(){
	console.log(`server runnung on port: ${port}`)
})
