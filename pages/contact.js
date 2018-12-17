import '../styles/contact.scss';
import 'isomorphic-fetch';
import Form from '../components/contact/Form';
import Page from '../components/Page';
import Preface from '../components/contact/Preface';
import React from 'react';

export default () => (
    <Page title='Contact'>
        <Preface />
        <Form />
    </Page>
);