import React, { Component } from 'react'
import '../AddCard.css'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';
  


class AddCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            duration: 0,
            timeAsleep: 0,
            timeUp: 0
        }
    }

    handleChange = async e => {
        let { value, name } = e.target
        await this.setState({
            [name]: value
        }) 
    }

    handleDuration = async () => {
        let { timeAsleep, timeUp } = this.state
        timeAsleep = +timeAsleep
        timeUp = +timeUp
        let duration = 12 - timeAsleep + timeUp
        await this.setState({
            duration: duration
        })
    }

    handleClick = async () => {
        await this.handleDuration()
        let newCard = this.state
        this.props.createCard(newCard)
    }

    handleDateChange = (selectedDay, modifiers, dayPickerInput) => {
        this.setState({
            date: selectedDay
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

                    <div className="button">
                        <button onClick={this.handleClick}>+</button>
                    </div>

                </div>

            </div>
        )
    }
}

export default AddCard