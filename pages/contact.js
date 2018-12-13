import 'isomorphic-fetch';
import { Component } from 'react';

import Page from '../components/Page';
import Preface from '../components/contact/Preface';
import Form from '../components/contact/Form';

import '../styles/contact.scss';

export default class extends Component
{
    render()
    {
        return (
            <Page title='Contact'>
                <Preface />
                <Form />
            </Page>
        );
    }
}