import React from 'react'
import './Header.css'
import logo from '../Pictures/logo.svg'

function Header() {
    return (
        <header className="logo">
            <img src={logo} />
        </header>
    )
}

export default Header