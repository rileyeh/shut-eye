const express = require('express')

const cardCtrl = require('./Controllers/cards')

const app = express()
const port = 4500

app.use(express.json())


app.get('/api/cards', cardCtrl.read)
app.post('/api/cards', cardCtrl.create)
app.put('/api/cards/:id', cardCtrl.update)
app.delete('/api/cards/:id', cardCtrl.delete)

app.listen(port, () => {
    console.log(`hey there, we're on port ${port}`)
})