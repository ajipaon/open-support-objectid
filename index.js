const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/getId', (req, res) => {
    const { ObjectId } = require('mongodb');
    res.send({
        id: new ObjectId().toString()
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})