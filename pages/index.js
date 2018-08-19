import 'isomorphic-fetch';
import { connect } from 'react-redux';
import { Component } from 'react';

import Page from '../components/site/Page';
import Hello from '../components/site/index/Hello';
import Projects from '../components/site/index/Projects';
import { sendProjects } from '../ducks/actions/site';

import '../styles/index.scss';

// add linkit and delano farms
// check and see if material icons have icons for github, linkedin and codepen

const api = 'https://api.gerardvee.com/';

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