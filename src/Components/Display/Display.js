import React, { Component } from 'react'
import './Display.css'
import axios from 'axios';
import AddCard from '../AddCard/AddCard'
import Card from '../Card/Card'
import moons from '../Pictures/orangemoons.svg'

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
        })
        .catch(err => console.log(err))
    }

    createCard = card => {
        axios.post('/api/card', card)
        .then(res => {
            this.setState({
                cards: res.data
            })
        })
        .catch(err => console.log(err))
    }

    deleteCard = id => {
        axios.delete(`/api/card/${id}`)
        .then(res => {
            this.setState({
                cards: res.data
            })
        })
        .catch(err => console.log(err))
    }

    updateCard = card => {
        axios.put(`/api/card/${card.id}`, card)
        .then(res => {
            this.setState({
                cards: res.data
            })
        })
    }

    render() {
        return (
            <div className="display">
                <div className="adder">
                    <img src={moons} alt="moon" />
                    <AddCard 
                        createCard={this.createCard}/>
                </div>

                <div className="line"></div>

                {this.state.cards[0]
                    ?
                    <section className="cards-container">
                        {this.state.cards.map(card => { 
                            return (
                                <Card 
                                    key={card.id} 
                                    card={card} 
                                    cards={this.state.cards}
                                    deleteCard={() => this.deleteCard(card.id)}
                                    updateCard={this.updateCard}
                                    getSunrise={this.getSunrise}/>
                            )})}
                    </section>
                    :
                    <div className="placeholder">
                        <img src={moons} alt="moon" className="moon-rise"/>
                        <h1>start tracking!</h1>
                    </div>
                }
                
            </div>
        )
    }
}

export default Display