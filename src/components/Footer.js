import React from "react"
import { Link } from "gatsby"
import "../styles/footer.css"

const Footer = () => (
    <footer>
        <div 
            className="footer-head"
        >
            <div className="footer-title">
                Yukigumo
            </div>
            <div className="footer-lead">
                Bassist / Song Writer / Arranger
            </div>
        </div>
        <nav className="footer-menu">
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
    </footer>
)

export default Footer