// SurveyNew renders SurveyForm and SurveyReview
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyReview from './SurveyFormReview'

class SurveyNew extends Component {

    state = { showReview: false }

    renderContent() {
        if (this.state.showReview) {
            return <SurveyReview 
            onCancel={() => this.setState({ showReview: false })}
            />
        }
        return <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })}/>
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm' 
    // adding it here makes the form clear on cancel and anywhere else except for when we press back in SurveyForm
})(SurveyNew)