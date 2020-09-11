import React, { Component } from 'react'
import "./Header.css"

export class Header extends Component {
    render() {
        return (
            <div className = 'header'>
                <div className="header__left">
                    <a href="#">
                    <h3>Matt Craig</h3>
                    </a>
                </div>

                <div className="header__right">
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>    
                </div>
            </div>
        )
    }
}

export default Header
