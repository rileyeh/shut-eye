import React, { Component } from 'react'
import './EditCard.css'
import Moment from 'react-moment'


class EditCard extends Component {
    constructor(props) {
        super(props)

        let {date, duration, timeAsleep, timeUp} = props.card

        this.state = {
            date,
            duration,
            timeAsleep,
            timeUp,
        }
    }

    render() {
        let {state} = this.props
        const dateToFormat = this.state.date
        return (
                <div className="editor">
                    <h2><Moment
                    format="MMMM Do"
                    >{dateToFormat}</Moment></h2>
                    <div className="inputs">
                        <span>fell asleep: <select
                            type="number"
                            name="timeAsleep"
                            onChange={this.props.handleChange}
                            value={state.timeAsleep} >
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
                            onChange={this.props.handleChange}
                            value={state.timeUp} >
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
                </div>
        )
    }
}

export default EditCard