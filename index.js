// console.log("Welcome to the world of Backend");
// const os = require('os')
// console.log(os.cpus())
// console.log(os.hostname())
// console.log(os.machine())
// console.log(os.networkInterfaces())
// console.log(os.uptime())
// console.log(os.availableParallelism())
// console.log(os.arch())

// const fs = require('fs')
// fs.readFile('./Sample.txt','utf-8',(error,data)=>{  
//     if(error)
//     {
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// })
// let data=fs.readFileSync('./Sample.txt','utf-8')
// console.log('Sync', data)
// fs.writeFile('./Sample2.txt','This is a new file','utf-8',(error)=>{
//     if(error)
//     {
//         console.log(error)
//     }
//     else{
//         console.log("File Write Sucessful")
//     }
// })

// const http = require('http')
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         "Content-Type":"text/html"
//     })
//     res.end("The Server is listening")
// })
// server.listen(8000,()=>console.log("Server is listening port 8000"))

// const fs = require('fs')
// const http = require('http')
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{
//         "Content-Type":"multipart/form-data"
//     })
//     const readStream =fs.createReadStream('./Sample.txt')
//     readStream.pipe(res)
// })
// server.listen(8000,()=>console.log("Server is listening port 8000"))

const fs = require('fs')
const http = require('http')
const server = http.createServer((req,res)=>{
    try {
        let date = new Date()
        fs.writeFileSync(`${+date}`,date.toISOString())
        let data = fs.readFileSync(`${+date}`,'utf-8')
        res.writeHead(200,{
            "Content-Type":"text/html"
        })
        res.end(data)  
    } catch (error) {
        console.log(error)
    }
    res.end()
})
server.listen(8000,()=>console.log("Server is listening port 8000"))