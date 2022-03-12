//express
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import productRouter from '../router/product'

const app = express()
//middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json()) //express.json() là middleware

app.use('/api', productRouter)

//cổng chạy
const PORT = 3001;
app.listen(PORT, () => {
    console.log('server running port', PORT);
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




/**
 * npm i -g json-server: cai dat module vao o he thong
 * npm i --save express:
 * su dung npm i thi tu cai dat luon
 * bat buoc phai co module nay thi moi chay project
 * devDependencies: { "express:" 1.2.3 }
 * npm i --save-dev nodemon:
 */