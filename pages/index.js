import 'isomorphic-fetch';
import '../styles/index.scss';
import React, { Component } from 'react';
import Hello from '../components/index/Hello';
import Page from '../components/Page';
import Projects from '../components/index/Projects';
import { connect } from 'react-redux';
import { sendProjects } from '../ducks/actions/site';


const api = process.env.API;

const mapStateToProps = ({ site }) => ({ projects: site.projects });

export default connect(mapStateToProps)(class extends Component
{
    static async getInitialProps({ store })
    {
        const projectsReq = await fetch(api + 'site/projects');
        const projects = await projectsReq.json();
        store.dispatch(sendProjects(projects));
        return {};
    }

    render()
    {
        return (
            <Page title='GerardVee'>
                <Hello />
                <Projects />
            </Page>
        );
    }
});