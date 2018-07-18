import 'isomorphic-fetch';
import { Component } from 'react';
import { connect } from 'react-redux';

import ModifyImages from '../components/site/admin/Images';
import { sendProjects, sendImages } from '../ducks/actions/site';

import '../styles/admin.scss';

const api = 'https://api.gerardvee.com/';

const mapStateToProps = ({ site }) =>
({
    error: site.error
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
        const { error } = this.props;
        return (
            <div className='col' style={{ padding: 0 }}>
                <ModifyImages />
                <p className='admin-header-name'>GeeVee</p>
                <p>{ JSON.stringify(error) }</p>
            </div>
        );
    }
});