import 'isomorphic-fetch';
import { Component } from 'react';
import { connect } from 'react-redux';

import FacebookAuthenticate from '../components/site/admin/FacebookAuthenticate';
import ModifyImages from '../components/site/admin/Images';
import { sendProjects, sendImages } from '../ducks/actions/site';

import '../styles/admin.scss';

const api = 'https://api.gerardvee.com/';

const mapStateToProps = ({ site }) =>
({
    error: site.error,
    user: site.user,
});

export default connect(mapStateToProps)(class extends Component
{
    static async getInitialProps({ store, req })
    {
        const projectsReq = await fetch(api + 'site/projects');
        const imagesReq = await fetch(api + 'site/images');
        const projects = await projectsReq.json();
        const images = await imagesReq.json();
        store.dispatch(sendProjects(projects));
        store.dispatch(sendImages(images));
        return {};
    }

    render()
    {
        const { error, user } = this.props;
        return (
            <div className='col' style={{ padding: 0 }}>
                { !user && <>
                    <FacebookAuthenticate />
                    <img src='' />
                    <h1 className='admin-header-name'>Unknown</h1>
                    <h2>> No role</h2>
                </> }
                { !!user && <>
                    <img src={ user.picture.data.url } />
                    <h1 className='admin-header-name'>{ user.name }</h1>
                    <h2>> Admin</h2>
                </> }
                <ModifyImages />
                <p>{ JSON.stringify(error) }</p>
            </div>
        );
    }
});