import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'

// const Header = () => <h2>Header!</h2>
const Dashboard = () => <h2>Dashboard!</h2>
const Landing = () => <h2>Landing!</h2>
const NewSurvey = () => <h2>New Survey!</h2>
const Footer = () => <h2>Footer</h2>

const App = () => {
    return (
        <div>
            <Router>
                <div>
                <Header />
                <Route exact path='/' component={Landing} />
                <Route exact path='/surveys' component={Dashboard} />
                <Route path='/surveys/new' component={NewSurvey} />
                <Footer />
                </div>
            </Router>
        </div>
    )
}

export default App