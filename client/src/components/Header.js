import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="left brand-logo">emaily</a>
                        <ul className="right">
                            <li><a>Login with Google</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header