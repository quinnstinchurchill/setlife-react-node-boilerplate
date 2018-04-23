import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import Base from './Base';
import Button from './Button';
import TextInput from './TextInput';

import { submitContactForm } from '../reducers/contact';

class ContactForm extends Base {
    constructor(props) {
        super(props);
        this.autoBind('handleSubmit')
    }
    handleSubmit(values) {
        this.props.submitContactForm(values)
    }
    render() {
        const { handleSubmit } = this.props

        return (
            <div className='ContactForm'>
                <form onSubmit={handleSubmit(this.handleSubmit)}>
                    <Field
                        component={TextInput}
                        name='name'
                        label='Name'
                        type='text'
                    />
                    <Field
                        component={TextInput}
                        name='email'
                        label='Email'
                        type='text'
                    />
                    <Field
                        component={TextInput}
                        name='message'
                        label='Message'
                        type='text'
                    />

                    <Button onClick={handleSubmit(this.handleSubmit)}>
                        <p>Submit</p>
                    </Button>
                </form>
            </div>
            
        );
    }
}

ContactForm = reduxForm({
    form: 'contact-form'
})(ContactForm)

const mapStateToProps = ({ contact }) => {
    return {
        ...contact
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitContactForm: (data) => dispatch(submitContactForm(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);