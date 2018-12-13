import 'isomorphic-fetch';
import { connect } from 'react-redux';
import { Component } from 'react';

import Page from '../components/Page';
import Hello from '../components/index/Hello';
import Projects from '../components/index/Projects';
import { sendProjects } from '../ducks/actions/site';

import '../styles/index.scss';

const api = process.env.API;

const mapStateToProps = ({ site }) => ({
    projects: site.projects,
});

export default connect(mapStateToProps)(class extends Component
{
    static async getInitialProps({ store, req })
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