import React, { Component } from 'react'
import '../EditCard.css'

class EditCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            duration: 0,
            timeAsleep: 0,
            timeUp: 0,
        }
    }

    render() {
        let {state} = this.props
        return (
                <div className="editor">
                    <span>date: <input 
                            type="text"
                            name="date"
                            placeholder="date"
                            onChange={this.props.handleChange}
                            value={state.date} /></span>
                        <span>fell asleep: <select
                            type="number"
                            name="timeAsleep"
                            placeholder="When did you fall asleep?"
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
                            placeholder="When did you wake up?"
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
        )
    }
}

export default EditCard