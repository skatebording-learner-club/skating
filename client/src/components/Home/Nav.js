import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import './nav.css';


class Nav extends Component {
    render() {

        return (
            <div className="image__navbar">
               <div className="navbar">
                <div>logg</div>
                <div className="navbar__center">
                    <ul>
                        <i style={{margin:'35px'}}><NavLink to="/">HOME</NavLink></i>
                        <i style={{margin:'35px'}}><NavLink to="/sakters">SKATEBORDERS</NavLink></i>
                        <i style={{margin:'35px'}}><NavLink to="/learn">LEARN</NavLink></i>
                        <i style={{margin:'35px'}}><NavLink to="/myaccount">MY ACCOUNT</NavLink></i>
                    </ul>
                </div>
                <div>TWO ICONS</div>
               </div>
               <div>
                   YOU GREAT SKATE BORDER
               </div>
            </div>

        )
    }
}

export default Nav