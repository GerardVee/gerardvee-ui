import 'isomorphic-fetch';
import { Component } from 'react';

import Page from '../components/site/Page';
import Preface from '../components/site/contact/Preface';
import Form from '../components/site/contact/Form';

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