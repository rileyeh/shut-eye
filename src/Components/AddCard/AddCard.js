import React, { Component } from 'react'
import axios from 'axios'
import './AddCard.css'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment'

class AddCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            timeAsleep: 0,
            timeUp: 0,
            duration: 0,
            sunrise: '',
            sunset: ''
        }
    }

    handleDateChange = (selectedDay, modifiers, dayPickerInput) => {
        this.setState({
            date: selectedDay
        }) 
    }

    handleChange = e => {
        let {value, name} = e.target

        this.setState({
            [name]: value
        })
    }
    
    handleDuration() {
        let { timeAsleep, timeUp } = this.state
        timeAsleep = +timeAsleep
        timeUp = +timeUp
        let duration = 12 - timeAsleep + timeUp
        this.setState({
            duration: duration
        })
    }

    handleClick = async e => {
        await this.handleDuration()
    
        const { date, timeAsleep, timeUp, duration, sunrise, sunset } = this.state;
        let newCard = {
          date,
          timeAsleep,
          timeUp,
          duration,
          sunrise, 
          sunset
        }
    
        this.props.createCard(newCard)
    
        this.setState({
            date: '',
            timeAsleep: 0,
            timeUp: 0,
            duration: 0
        })
    }

    getSunrise = () => {
        axios.get('https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_astronomy&name=Salt%20Lake%20City&app_id=wdbRu3g9YpSx46j0g3Xy&app_code=5cgubcCct8EsR7GG0DgZWw')
            .then(async response => {
                let res = response.data.astronomy.astronomy
                let {date} = this.state

                let index = await res.findIndex(item => item.utcTime.substring(0,11) === date.substring(0,11))

                let {sunrise} = res[index]
                let {sunset} = res[index]

                this.setState({
                    sunrise: sunrise,
                    sunset: sunset
                })
            })
        }

    render() {
        return (
            <div className="add-card">
                <div className="green-banner">
                    <h2>enter your sleep data here</h2>
                </div>

                <div className="interactive">

                    <div className="inputs">
                        <span>date: <DayPickerInput
                            className="day-picker-input"
                            formatDate={formatDate} 
                            parseDate={parseDate}
                            format="MMMM Do"
                            type="text"
                            name="date"
                            placeholder="date"
                            onDayChange={this.handleDateChange}
                            value={this.state.date} 
                            /></span>
                        <span>fell asleep: <select
                            type="number"
                            name="timeAsleep"
                            placeholder="When did you fall asleep?"
                            onChange={this.handleChange}
                            value={this.state.timeAsleep} >
                                <option>time</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select> </span>
                        <span>woke up: <select
                            type="number"
                            name="timeUp"
                            placeholder="When did you wake up?"
                            onChange={this.handleChange}
                            value={this.state.timeUp} >
                                <option>time</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select></span>
                    </div>

                    <div className="add-button">
                        <button onClick={this.handleClick}>+</button>
                    </div>

                </div>

            </div>
        )
    }
}

export default AddCard