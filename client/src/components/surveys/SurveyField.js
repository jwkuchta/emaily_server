// contains logic to render single label and input

import React from 'react'

const SurveyField = ({ input }) =>  {
    console.log(input) // reduxForm
    return (
        <div>
            <input {...input} />
        </div>
    )
}

export default SurveyField