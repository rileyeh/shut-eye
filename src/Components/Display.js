import React, { Component } from 'react'
import '../Display.css'
import axios from 'axios'
import Card from './Card'
import AddCard from './AddCard'
import moons from "../moons.svg"


class Display extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        axios.get('/api/cards')
        .then(res => {
            this.setState({
                cards: res.data
            })
        }).catch(err => console.log(err))
    }

    createCard = newCard => {
        axios.post('/api/cards', newCard)
        .then(res => {
            this.setState({
                cards: res.data
            })
        }).catch(err => console.log(err))
    }

    updateCard = card => {
        let id = card.id
        axios.put(`/api/cards/${id}`, card)
        .then(res => {
            console.log(res.data)
            this.setState({
                cards: res.data
            })
        }).catch(err => console.log(err))
    }

    deleteCard = id => {
        axios.delete(`/api/cards/${id}`)
        .then(res => {
            this.setState({
                cards: res.data
            })
        }).catch(err => console.log(err))
    }
 

    render() {
        return (
            <div className="display">
                <div className="adder">
                    <img src={moons} alt="moon" />
                    <AddCard 
                        createCard={this.createCard} />
                </div>

                <div className="line"></div>

                <div className="cards-container">
                    {this.state.cards.map(card => { 
                        return (
                            <Card key={card.id} 
                                card={card} 
                                deleteCard={() => this.deleteCard(card.id)}
                                updateCard={this.updateCard}/>
                        )})}
                </div>
            </div>
        )
    }
}

export default Display