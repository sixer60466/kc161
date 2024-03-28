const express = require('express')
const cors = require('cors');
const app = express()
const db = require('./config/db')
const port = 8000;
const { getAllCategories } = require('./models/category')
const { Category, Product } = require('./models/product');

app.use('/images', express.static('upload/images'));
app.use(cors());

app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(port, () => {
    console.log(`server is running on ${port} port`)
})

