import React, { Component } from 'react'
// reduxForm allows us to communicate with reduxStore (nearly identical to connect)
// Field component needs props to work (3 required pros are: type, name, and component)
import { reduxForm, Field } from 'redux-form' 
import SurveyField from './SurveyField'

class SurveyForm extends Component {

    renderFields() {
        return (
            <div>
                <Field type="text" name="title" component={SurveyField} />
            </div>
        )
    }

    render() {
        return (
            <div>
                {/* handleSubmit comes from reduxForm */}
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                {this.renderFields()}
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

// reduxForm only takes one argument
export default reduxForm({
    form: 'surveyForm'
})(SurveyForm)