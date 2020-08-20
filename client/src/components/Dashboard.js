import React from 'react'
// in order to use the materialize icons we need to include a link in our root html file!
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div class="fixed-action-btn">
                <Link to="/surveys/new" class="btn-floating btn-large red">
                    <i class="large material-icons">add</i>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard