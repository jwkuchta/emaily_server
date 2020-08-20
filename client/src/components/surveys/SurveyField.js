// contains logic to render single label and input

import React from 'react'
                                    // meta destructured
const SurveyField = ({ input, label, meta: { error, touched} }) =>  { // input comes form reduxForm

    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }}/> 
            <div className="red-text" style={{ marginBottom: '20px' }}>
            {touched && error}
            </div>
        </div>
    )
}

export default SurveyField