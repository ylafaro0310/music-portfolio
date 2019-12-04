import React from 'react'
import { Link } from 'gatsby'
import "../styles/header.css"

class Header extends React.Component {
    render(){
        const { isTopPage } = this.props;
        return (
            <header className={isTopPage ? " header-top":""}>
                <div 
                    className="header-head"
                >
                <a href="/">
                    <div className="header-title">
                        Yukigumo
                    </div>
                    {isTopPage && <div className="header-lead">
                        Bassist / Composer / Arranger
                    </div>}
                </a>
                </div>
                <nav className="header-menu">
                    <ul>
                        <li>
                            <Link to="/">top</Link>
                        </li>
                        <li>
                            <Link to="/info">info</Link>
                        </li>
                        <li>
                            <Link to="/profile">profile</Link>
                        </li>
                        <li>
                            <Link to="/works">works</Link>
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