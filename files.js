const fs = require('fs')

// REading file asynchronously
fs.readFile('test.txt','utf8',function(err,data){
    console.log(data)
})


// /writing into file
arr = "done done done"
fs.appendFile('test.txt',arr,function(err){
    if (err){
        console.log("in callback")
        console.log(`data is : ${data}`)
    }
    console.log("no error")

    
})
console.log("bye")