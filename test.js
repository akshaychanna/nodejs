// var http = require("http");
// http.createServer(function (request, response) {
//     // Send the HTTP header 
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});
    
//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
//  }).listen(8081);
 
//  // Console will print the message
//  console.log('Server running at http://127.0.0.1:8081/');

var courses = [
	{ 'id' : 1, name:'javascript'},
	{id : 2, name: 'nodejs'},
	{'id':3,name:'react'}
]
// var id = 1
// console.log(courses[0]['id'])

// if (courses[0]['id']===1){
//     console.log("done")
// }

// id = 2
// var id ;
// courses.find(function(i){ 
//     console.log(i)
//     console.log(typeof i['id'])
// })


let abc = courses.find( i => i['id'] === 1 );

console.log(abc)