import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header>
                <div className="navbar-container">
                    <ul className = "nav-list">
                        <Link to = '/'><li>Inicio</li></Link>
                        <Link to = '/usage-mode'><li>Modo de uso</li></Link>
                        <Link to = '/contact'><li>Contacto</li></Link>
                        <Link to = '/list-pages'><li>Lista de páginas</li></Link>
                    </ul>
                </div>
        </header>
    )
}