import 'isomorphic-fetch';
import React, { Component } from 'react';
import post from '../../lib/post';

const api = process.env.API;

const validObject = (obj) =>
{
    for (const key in obj)
    {
        if (obj[key] === null || obj[key] === '' || obj[key] === undefined)
        {
            return false;
        }
    }
    return true;
};

// https://stackoverflow.com/questions/46155/how-to-validate-an-email (OregonTrail)
const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const intialState =
{
    details:
    {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        query: '',
    },
};

export default class extends Component
{
    state = intialState;

    updateDetails(e)
    {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const details = Object.assign({}, this.state.details, { [name]: value });
        this.setState({ details });
    }

    async submitContactDetails()
    {
        const { details } = this.state;
        if (!(validObject(details)))
        {
            alert('One or more property is incomplete!');
            return;
        }
        if (!(isEmail(details.email)))
        {
            alert('Invalid email!');
            return;
        }
        const res = await fetch(api + 'site/contact', post({ details }));
        const sentMail = await res.json();
        if (sentMail.success)
        {
            alert('Mail sent! Please wait for a response in 1-2 business days.');
        }
        else
        {
            alert(sentMail.error);
        }
        if (sentMail.success)
        {
            this.setState(intialState);
        }
    }

    render()
    {
        const { details: { firstName, lastName, email, subject, query } } = this.state;
        return (
            <>
                <div className='col halign center'>
                    <div className='halign center site-contact-form-pair-input'>
                        <input className='site-contact-form-input-base' placeholder='First Name'
                            name='firstName' value={ firstName } onChange={ (e) => this.updateDetails(e) }
                        />
                        <input className='site-contact-form-input-base site-contact-form-input-pair-last' placeholder='Last Name'
                            name='lastName' value={ lastName } onChange={ (e) => this.updateDetails(e) }
                        />
                    </div>
                    <input className='site-contact-form-input-base' placeholder='Email'
                        name='email' value={ email } onChange={ (e) => this.updateDetails(e) }
                    />
                    <input className='site-contact-form-input-base' placeholder='Subject'
                        name='subject' value={ subject } onChange={ (e) => this.updateDetails(e) }
                    />
                    <textarea className='site-contact-form-input-base' placeholder='Message' rows={ 3 }
                        name='query' value={ query } onChange={ (e) => this.updateDetails(e) }
                    />
                </div>
                <div className='row halign'>
                    <button className='site-contact-form-submit' onClick={ () => this.submitContactDetails() }>Submit</button>
                </div>
            </>
        );
    }
}