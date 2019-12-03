import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
    render(){
        return (
            <header>
                <div 
                    className="header-head"
                >
                    <div className="header-title">
                        Yukigumo
                    </div>
                    <div className="header-lead">
                        Bassist / Song Writer / Arranger
                    </div>
                </div>
                <nav className="header-menu">
                    <ul>
                        <li>
                            <Link to="/info">info</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/discography">discography</Link>
                        </li>
                        <li>
                            <Link to="/live">live</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header