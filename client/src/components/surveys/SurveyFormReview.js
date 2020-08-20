import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { FIELDS } from './formFields'
import * as actions from '../../actions/index'

const SurveyReview = ({ onCancel, formValues, submitSurvey }) => {

    const renderReviewFields = () => {
        return _.map(FIELDS, field => {
            return <div key={field.name}>
                <label>{field.label}</label>
                <div>{formValues[field.name]}</div>
            </div>
        })
    }

    const handleClick = () => {
        debugger
        console.log(formValues)
        submitSurvey(formValues)
    }

    return (
        <div>
            <h5>Please review the form before submitting</h5>
            {renderReviewFields()}
            <button className="yellow btn-flat darken-4" onClick={onCancel}>
                Back
            </button>
            <button 
            onClick={() => submitSurvey(formValues)}
            className="green btn-flat right white-text">
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

const mapSTP = state => {
    // console.log('state', state)
    return { formValues: state.form.surveyForm.values }
}

export default connect(mapSTP, actions)(SurveyReview)