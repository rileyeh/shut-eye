let id = 1
let cards = [
    {
        "id" : id++,
        "date" : "May 27th",
        "duration" : "7 h 30 m"
    },
    {
        "id" : id++,
        "date" : "May 28th",
        "duration" : "7 h 45 m"
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

