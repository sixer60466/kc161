const express = require('express')
const app = express()
const port = 8000;

app.use('/images', express.static('upload/images'))

app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(port, () => {
    console.log(`server is running on ${port} port`)
})