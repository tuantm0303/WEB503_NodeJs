// const http = require('http');
//express
const express = require('express')

const app = express()

//middleware

const check = ((req, res, next) => {
    const status = true
    if(status){
        console.log('hello')
        next()
    }else{
        console.log('anh la ai?')
    }
})

app.get('/api/products', check, (req, res) => {
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ]
    res.json(products)
})



// const server = http.createServer((req, res) => {
//     console.log("url", req.url);
//     if(req.url === '/'){
//         res.setHeader('Content-Type',"text/html")
//         res.write('<html><body><h1>Home</h1></body></html>')
//         res.end()
//     }else if(req.url === '/api/products'){
//         const products =[
//             {id: 1, name: "Product A"},
//             {id: 2, name: "Product B"}
//         ]
//         res.end(JSON.stringify(products))
//     }else{
//         console.log('hi')
//         res.end()
//     }
// })

//cổng chạy
const PORT = 3001;
app.listen(PORT, () => {
    console.log('server running port', PORT);
})



/**
 * npm i -g json-server: cai dat module vao o he thong
 * npm i --save express:
 * su dung npm i thi tu cai dat luon
 * bat buoc phai co module nay thi moi chay project
 * devDependencies: { "express:" 1.2.3 }
 * npm i --save-dev nodemon:
 */