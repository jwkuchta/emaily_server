import _ from 'lodash'
import React, { Component } from 'react'
// reduxForm allows us to communicate with reduxStore (nearly identical to connect)
// Field component needs props to work (3 required pros are: type, name, and component)
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form' 
import SurveyField from './SurveyField'
import { validateEmails } from '../../utils/validateEmails'
import { FIELDS } from './formFields'

class SurveyForm extends Component {

    // to DRY out the renderFields function:
    renderFields = () => {
        return _.map(FIELDS, field => {
            return <Field component={SurveyField} type="text" label={field.label} name={field.name} key={field.name} />
        })
    }

    render() {
        return (
            <div>
                {/* handleSubmit comes from reduxForm */}
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <Link to="/surveys" className="red btn-flat left white-text">Cancel</Link>
                <button type="submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i>
                </button>
                </form>
            </div>
        )
    }
}

const validate = (values) => {
    const errors = {}

    errors.emails = validateEmails(values.emails || '')

    _.each(FIELDS, ({ name }) => {
        if (!values[name]) {
            errors[name] = `${name} cannot be blank`
        }
    })
    return errors
}

// reduxForm only takes one argument
export default reduxForm({
    form: 'surveyForm', // this becomes a key in the redux-form state
    validate: validate, // validate needs to return an object of errors and if all is well, it will be empty
    destroyOnUnmount: false // this will prevent the form from getting cleared when we use the "back" button
})(SurveyForm)