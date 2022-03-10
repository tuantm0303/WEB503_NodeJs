import { Router } from "express";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router()
//fake data
const products = [
    {id: 1, name: "Product A"},
    {id: 2, name: "Product B"}
]

router.get('/products', checkAuth, (req, res) => {
    res.json(products)
})

router.get('/products/:id', checkAuth, (req, res) => {
    res.json(products.find(item => item.id === +req.params.id))
})

router.post('/products', checkAuth, (req, res) => {
    products.push(req.body)
    res.json(products)
})

router.delete('/products/:id', checkAuth, (req, res) => {
    res.json(products.filter(item => item.id === +req.params.id))
})

export default router