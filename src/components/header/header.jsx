import React, { useContext } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import AuthContext from '../authcontext/AuthContext';

export default function Header() {

    const { loggedIn } = useContext(AuthContext);

    return (
        <header>
                <div className="navbar-container">
                    <ul className = "nav-list">
                        <Link to = '/'><li>Inicio</li></Link>
                        <Link to = '/usage-mode'><li>Modo de uso</li></Link>
                        <Link to = '/contact'><li>Contacto</li></Link>
                        <Link to = '/list-pages'><li>Lista de páginas</li></Link>
                        <Link to = '/admin'><li>Admin</li></Link>
                        {
                            loggedIn? <><Link to = '/dashboard'><li>Dashboard</li></Link></> : ''
                        }
                    </ul>
                </div>
        </header>
    )
}