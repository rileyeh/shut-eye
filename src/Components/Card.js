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
                    edit={this.state.edit}
                    handleClick={this.handleClick}
                    handleDuration={this.handleDuration}/>
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
                    <button onClick={this.props.handleClick}>update</button>
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