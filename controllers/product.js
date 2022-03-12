//fake data
const products = [
    {id: 1, name: "Product A"},
    {id: 2, name: "Product B"}
]

export const list = (req, res) => {
    res.json(products)
}

export const read = (req, res) => {
    res.json(products.find(item => item.id === +req.params.id))
}

export const create = (req, res) => {
    // products.push(req.body)
    const product = req.body
    res.json(product)
}

export const remove = (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id))
}

export const update = (req, res) => {
    res.json(products.map(item => item.id == req.params.id ? req.body : item));
}