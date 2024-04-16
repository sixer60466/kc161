require('dotenv').config()
const express = require('express')
const cors = require('cors');
const app = express()
const db = require('./config/db')
const cookieParser = require('cookie-parser');

const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')


app.use('/images', express.static('./upload/images'));
app.use(express.json()); // application/json
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
})); // 跨域存取
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded



app.use('/category', categoryRoutes);
app.use('/product', productRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send('hi')
})



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`)
})

