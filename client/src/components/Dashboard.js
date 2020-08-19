import React from 'react'
// in order to use the materialize icons we need to include a link in our root html file!

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div class="fixed-action-btn">
                <a class="btn-floating btn-large red">
                    <i class="large material-icons">add</i>
                </a>
            </div>
        </div>
    )
}

export default Dashboard