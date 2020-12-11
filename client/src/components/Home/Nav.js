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
                        <i style={{margin:'35px'}}>HOME</i>
                        <i style={{margin:'35px'}}>SKATEBORDERS</i>
                        <i style={{margin:'35px'}}>LEARN</i>
                        <i style={{margin:'35px'}}>MY ACCOUNT</i>
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