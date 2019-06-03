import React from 'react'
import './EditButtons.css'

function EditButtons(props) {
    return (
        <div className="edit-buttons">
            <button onClick={props.toggleEdit}>cancel</button>
            <button onClick={props.handleUpdate}>update</button>
        </div>
    )
}

export default EditButtons