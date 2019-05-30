import React from 'react'
import '../Header.css'
import logo from '../logo.png'

function Header() {
    return (
        <div className="logo">
            <img src={logo} />
        </div>
    )
}

export default Header