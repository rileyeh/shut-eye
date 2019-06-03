let id = 2
let cards = [
    {
        id: 0,
        date: '2019-06-03T18:00:00.000Z',
        timeAsleep: 10,
        timeUp: 6,
        duration: 8,
        sunrise: '5:58 A.M.',
        sunset: '8:52 P.M'
    },
    {
        id: 1,
        date: '2019-06-04T18:00:00.000Z',
        timeAsleep: 11,
        timeUp: 6,
        duration: 7,
        sunrise: '5:58 A.M.',
        sunset: '8:53 P.M'
    }
]

module.exports = {
    readCards: (req, res) => res.send(cards),

    createCard: (req, res) => {
        const {date, timeAsleep, timeUp, duration} = req.body

        let newCard = {
            id: id++,
            date,
            timeAsleep,
            timeUp,
            duration
        }

        cards.push(newCard)

        res.send(cards)
    },

    deleteCard: (req, res) => {
        let {id} = req.params

        let index = cards.findIndex(card => +card.id === +id)

        cards.splice(index, 1)

        res.send(cards)
    },

    updateCard: (req, res) => {
        let {id} = req.params
        let updatedCard = req.body
        updatedCard.id = id

        let index = cards.findIndex(card => +card.id === +id)

        cards.splice(index, 1, updatedCard)
        res.send(cards)
    }

}

