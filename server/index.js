let express = require('express')
let app = express()
app.use(express.json())
port = 4500

const ctrl = require('./Controllers/controller')

app.use( express.static( `${__dirname}/../build` ) )

app.get('/api/cards', ctrl.readCards)
app.post('/api/card', ctrl.createCard)
app.delete('/api/card/:id', ctrl.deleteCard)
app.put('/api/card/:id', ctrl.updateCard)

app.listen(port, () => {
    console.log(`up and running on port ${port}`)
})
