import React, { Component } from 'react'
import './Card.css'
import EditCard from '../EditCard/EditCard'
import EditButtons from '../EditButtons/EditButtons'
import Buttons from '../Buttons/Buttons'
import Moment from 'react-moment'
import axios from 'axios'
import sunrise from '../Pictures/sunrise.svg'
import sunset from '../Pictures/sunset.svg'

class Card extends Component {
    constructor(props) {
        super(props)

        let {date, duration, timeAsleep, timeUp} = props.card

        this.state = {
            date,
            duration,
            timeAsleep,
            timeUp,
            sunrise: '',
            sunset: '',
            edit: false
        }

    }

    handleChange = async e => {
        let { value, name } = e.target
        await this.setState({
            [name]: value
        }) 
    }

    handleDuration = () => {
        let { timeAsleep, timeUp } = this.state
        timeAsleep = +timeAsleep
        timeUp = +timeUp
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
        }

    toggleEdit = () => {
        let {edit} = this.state
        this.setState({
            edit: !edit
        })
    }

    componentWillMount() {
        this.getSun()
    }

    getSun = () => {
        let date = this.state.date.substring(0,10)
        axios.get(`https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=${date}`)
            .then(response => {
                let {sunrise, sunset} = response.data.results
                this.setState({
                    sunrise,
                    sunset
                })
            })
        }

    render() {
        let { card, updateCard } = this.props
        const dateToFormat = card.date
        return (
            <div className="card-container">
                {this.state.edit
                ?
                <EditCard 
                    card={card}
                    updateCard={updateCard}
                    handleChange={this.handleChange}
                    state={this.state}
                    />
                :
                <div className="card">
                    <h2><Moment
                    format="MMMM Do"
                    >{dateToFormat}</Moment></h2>
                    <p>fell asleep: <span>{card.timeAsleep} P.M.</span></p>
                    <p>woke up: <span>{card.timeUp} A.M.</span></p>
                    <p>time asleep: <span>{card.duration} hours</span></p>
                    <div className="sunrise-sunset">
                        <div className="sunrise">
                            <img src={sunrise} alt="sun" />
                            <p>{this.state.sunrise}</p>
                        </div>
                        <div className="sunset">
                            <img src={sunset} alt="moon" />
                            <p>{this.state.sunset}</p>
                        </div>
                    </div>
                </div>
                }
                {this.state.edit
                ?
                <EditButtons
                    toggleEdit={this.toggleEdit}
                    handleUpdate={this.handleUpdate} 
                    />
                :
                <Buttons 
                    toggleEdit={this.toggleEdit}
                    deleteCard={this.props.deleteCard}
                    />
                }

            </div>
        )

    }
}

export default Card