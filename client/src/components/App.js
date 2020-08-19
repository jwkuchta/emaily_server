import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Landing from './Landing'
import Dashboard from './Dashboard'

const NewSurvey = () => <h2>New Survey!</h2>

class App extends Component {

    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return (
            <div>
                <Router>
                    <div className="container">
                    <Header />
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/surveys' component={Dashboard} />
                    <Route path='/surveys/new' component={NewSurvey} />
                    </div>
                </Router>
            </div>
        )
    }  
}

// this assigns actions as props to App
export default connect(null, actions)(App)