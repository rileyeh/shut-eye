import React, { Component } from 'react'
import '../Card.css'
import EditCard from './EditCard'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            duration: 0,
            timeAsleep: 0,
            timeUp: 0,
            edit: false
        }

    }

    handleChange = async e => {
        let { value, name } = e.target
        console.log(55555, this.state)
        await this.setState({
            [name]: value
        }) 
        console.log(66666, this.state)
    }

    handleDuration = () => {
        let { timeAsleep, timeUp } = this.state
        timeAsleep = +timeAsleep
        timeUp = +timeUp
        console.log(7777, this.state)
        let duration = 12 - timeAsleep + timeUp
        this.setState({
            duration: duration
        })
    }

    handleUpdate = async () => {
        await this.handleDuration()

        let updatedCard = {...this.props.card, ...this.state}
        this.props.updateCard(updatedCard)

        this.toggleEdit()

        console.log(88888, this.state)
    }

    toggleEdit = () => {
        let {edit} = this.state
        this.setState({
            edit: !edit
        })
    }

    render() {
        let { card, updateCard } = this.props

        return (
            <div className="card-container">
                {this.state.edit
                ?
                <EditCard 
                    card={card}
                    updateCard={updateCard}
                    handleChange={this.handleChange}
                    state={this.state}
                    // edit={this.state.edit} 
                    />
                :
                <div className="card">
                    <h2>{card.date}</h2>
                    <p>{card.duration} hours</p>
                </div>
                }
                {this.state.edit
                ?
                <div className="buttons">
                    <button onClick={this.toggleEdit}>cancel</button>
                    <button onClick={this.handleUpdate}>update</button>
                </div>
                :
                <div className="buttons">
                    <button onClick={this.toggleEdit}>edit</button>
                    <button onClick={this.props.deleteCard}>delete</button>
                </div>
                }

            </div>
        )

    }
}

export default Card