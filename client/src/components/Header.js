import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Still deciding'
            case false:
                return 'You are not logged in'
            default:
                return 'You are logged int'
        }
    }
    
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="left brand-logo">emaily</a>
                        <ul className="right">
                        {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

// const mapSTP = state => {
//     return {
//         auth: state.auth
//     }
// }

const mapSTP = ({ auth }) => {
    return { auth }
}

export default connect(mapSTP)(Header)