import React from 'react'
import './index.scss'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Router>
                <div className="navbar-container">
                    <ul className = "nav-list">
                        <Link to = '/'><li>Inicio</li></Link>
                        <Link to = '/usage-mode'><li>Modo de uso</li></Link>
                    </ul>
                </div>
            </Router>
        </header>
    )
}
