import React from 'react'
import '../Header.css'
import logo from '../logo.png'

function Header() {
    return (
        <header className="logo">
            <img src={logo} />
        </header>
    )
}

export default Header