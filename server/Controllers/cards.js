let id = 1
let cards = [
    {
        "id" : id++,
        "date" : "2019-05-27T18:00:00.000Z",
        "duration" : 7
    },
    {
        "id" : id++,
        "date" : "2019-05-28T18:00:00.000Z",
        "duration" : 8
    }
]

module.exports = {
    read: (req, res) => res.send(cards),
    create: (req, res) => {
        newCard = req.body
        newCard.id = id++

        cards.push(newCard)

        res.send(cards)
    },
    update: (req, res) => {
        let {id} = req.params
        let updatedCard = req.body
        updatedCard.id === id
        let index = cards.findIndex(card => +card.id === +id)
        cards.splice(index, 1, updatedCard)
        res.send(cards)
    },
    delete: (req, res) => {
        let {id} = req.params
        let index = cards.findIndex(card => +card.id === +id)
        cards.splice(index, 1)
        res.send(cards)
    }
}

