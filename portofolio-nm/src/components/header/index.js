import React from "react"
import {Link} from "react-router-dom"
import "./header.css"


function Header() {
    return (
            <div className="header">
                <div className="profil"></div>
                <div className="name">
                    <p>Naïma</p>
                    <p>Mansour</p>
                </div>
                    <ul className="onglets">
                        <li className="link"><Link to="/" >Home</Link></li>
                        <li className="link"><Link to="/about" >About</Link></li>
                        <li className="link"><Link to="/contact" >Contact</Link></li>
                    </ul>              
            </div>
    )
}
export default Header;