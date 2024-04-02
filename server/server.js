const express = require('express')
const cors = require('cors');
const app = express()
const db = require('./config/db')
const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')


app.use('/images', express.static('./upload/images'));
app.use(express.json()); // application/json
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded

// 跨域存取
app.use(cors());

app.use('/category', categoryRoutes);
app.use('/product', productRoutes)

app.get('/', (req, res) => {
    res.send('hi')
})



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`)
})

