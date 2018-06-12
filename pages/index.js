import 'isomorphic-fetch';
import { connect } from 'react-redux';
import { Component } from 'react';
import FacebookAuth from 'react-facebook-auth';
/* only use Link if they use the same styling (import 'x.scss'), otherwise, don't */
import Link from 'next/link';
import Router from 'next/router'

import post from '../lib/post';
import Page from '../components/site/Page';
import Hello from '../components/site/Hello';
// import Projects from '../components/site/Projects';
import { sendProjects, sendImages } from '../ducks/actions/site';
import '../styles/index.scss';

const appId = process.env.FB_APP_ID;

const api = 'https://api.gerardvee.com/';

const mapStateToProps = ({ site }) => (
{
    projects: site.projects
});

const pair = (array) => array.reduce((result, _, i) =>
{
    if (i % 2 === 0)
    {
        result.push(array.slice(i, i + 2));
    }
    return result;
}, []);

class Projects extends Component
{
    pushUrl(url)
    {
        window.location.href = url;
    }

    render()
    {
        const { projects } = this.props;
        const pairs = pair(projects);
        return (
            <>
                <div className='hidden-md hidden-lg col' style={{ justifyContent: 'center' }}>
                { projects.map(project =>
                    <div>
                        <img className='responsive opacity-hover' src={ project.image } />
                        <h1 className='hidden-sm'>{ project.title }</h1>
                    </div>
                )}
                </div>
                <div className='hidden-sm col'>
                { pairs.map(project_array =>
                    <div className='row' style={{ justifyContent: 'center' }}>
                    { project_array.map(project =>
                        <div className='opacity-hover col' style={{ marginRight: '30px' }} onClick={ () => this.pushUrl(project.url) }>
                            <h1 style={{ position: 'relative', top: '35%', textAlign: 'center' }}>{ project.title }</h1>
                            <img className='responsive' src={ project.image } />
                            <div className='row halign'>
                                <p className='center' style={{ wordWrap: 'break-word', width: 300 }}>{ project.description }</p>
                            </div>
                        </div>
                    )}
                    </div>
                )}
                </div>
            </>
        );
    }
}

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
        const { projects, images } = this.props;
        return (
            <Page title='GerardVee'>
                <Projects projects={ projects } />
                {/*<Nav />
                <Hello header={ content.filter(item => item.type === 'header')[0] } cycle={ content.find(item => item.type === 'cycle') }/>
                <Projects content={ content } images={ images } />
                <Footer />*/}
            </Page>
        );
    }
});