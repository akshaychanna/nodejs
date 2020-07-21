const http = require('http')

//creating server

const server = http.createServer(function(request, response){
    if (request.url === '/'){
        response.write("hello welcome")
        response.end()
    }
})
server
.listen(8081)


console.log("server running at http://127.0.0.1:8081")