import React from 'react'
import './Buttons.css'

function UpdateButtons(props) {
    return (
        <div className="buttons">
            <button onClick={props.toggleEdit}>edit</button>
            <button onClick={props.deleteCard}>delete</button>
        </div>
    )
}

export default UpdateButtons