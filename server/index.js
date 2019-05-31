const express = require('express')

const cardCtrl = require('./Controllers/controller')

const app = express()
const port = 4500

app.use(express.json())


app.get('/api/cards', cardCtrl.readCards)
app.post('/api/cards', cardCtrl.createCard)
app.put('/api/cards/:id', cardCtrl.updateCard)
app.delete('/api/cards/:id', cardCtrl.deleteCard)

app.listen(port, () => {
    console.log(`hey there, we're on port ${port}`)
})