import React, { Component } from 'react'
import './Card.css'
import EditCard from '../EditCard/EditCard'
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
        this.getSunrise()
    }

    getSunrise = () => {
        axios.get('https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_astronomy&name=Salt%20Lake%20City&app_id=wdbRu3g9YpSx46j0g3Xy&app_code=5cgubcCct8EsR7GG0DgZWw')
            .then(response => {
                let res = response.data.astronomy.astronomy
                let {date} = this.state

                let index = res.findIndex(item => item.utcTime.substring(0,11) === date.substring(0,11))

                let {sunrise} = res[index]
                let {sunset} = res[index]

                this.setState({
                    sunrise: sunrise,
                    sunset: sunset
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
                    <p>fell asleep: {card.timeAsleep} P.M.</p>
                    <p>woke up: {card.timeUp} A.M.</p>
                    <p>time asleep: {card.duration} hours</p>
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
                <div className="edit-buttons">
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