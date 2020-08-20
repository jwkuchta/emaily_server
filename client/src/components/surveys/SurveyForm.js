import _ from 'lodash'
import React, { Component } from 'react'
// reduxForm allows us to communicate with reduxStore (nearly identical to connect)
// Field component needs props to work (3 required pros are: type, name, and component)
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form' 
import SurveyField from './SurveyField'

const FIELDS = [
    {label: 'Survey Title', name: 'title'},
    {label: 'Subject Line', name: 'subject'},
    {label: 'Email Body', name: 'email'},
    {label: 'Recipient List', name: 'emails'}
]

class SurveyForm extends Component {

    // renderFields() {
    //     return (
    //         <div>
    //             <Field type="text" name="title" component={SurveyField} label="Survey Title"/>
    //             <Field type="text" name="subject" component={SurveyField} label="Subject Line"/>
    //             <Field type="text" name="email" component={SurveyField} label="Email Body"/>
    //             <Field type="text" name="emails" component={SurveyField} label="Recipient List"/>
    //         </div>
    //     )
    // }

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
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

// reduxForm only takes one argument
export default reduxForm({
    form: 'surveyForm'
})(SurveyForm)