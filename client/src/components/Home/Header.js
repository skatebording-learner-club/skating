import React, { Component } from "react";
// import {Link,NavLink} from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-lead-in">You can be a GREAT skateboarder!</div>
                            <div className="intro-heading text-uppercase"><p> Skateboarding site was started to help everyone learn how to skateboard. With our free tutorials and our full skateboarding lesson plan, Skateboarding Made Simple, you can be a great skateboarder!
                            Here we want everyone to feel like they can progress on their board and learn to skate. This is the first version of the site of Skateboard Trick Guide.</p>
                                <p>The idea behind this is that it gives a suggested order for skateboarding tricks to learn. The guide also navigates you through all of the different videos we have available to help you learn to skateboard.</p></div>
                        </div>
                    </div>
                </header>

            </div>
        )
    }
}

export default Header