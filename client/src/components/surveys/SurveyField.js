// contains logic to render single label and input

import React from 'react'

const SurveyField = ({ input, label }) =>  { // input comes form reduxForm

    return (
        <div>
            <label>{label}</label>
            <input {...input} /> 
        </div>
    )
}

export default SurveyField