import 'isomorphic-fetch';
import { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/site/admin/Header';
import UserPanel from '../components/site/admin/UserPanel';
import SelectionPanel from '../components/site/admin/SelectionPanel';
import EditPanel from '../components/site/admin/EditPanel';
import FacebookAuthenticate from '../components/site/admin/FacebookAuthenticate';
import { sendProjects, sendImages } from '../ducks/actions/site';

import '../styles/admin.scss';

const api = 'https://api.gerardvee.com/';
const superusers = process.env.FB_SUPERUSERS.split(',');

const mapStateToProps = ({ site }) =>
({
    error: site.error,
    user: site.user,
    projects: site.projects,
    images: site.images,
});

export default connect(mapStateToProps)(class extends Component
{
    state =
    {
        activeResource: '',
        activeId: null,
    };

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

    setAsActive(id)
    {
        this.setState({ activeId: id });
    }

    superuser()
    {
        const { projects, images } = this.props;
        const { activeId, activeResource } = this.state;
        const site = { projects, images };
        const activeSpecificResource = activeId ? site[activeResource].find(({ _id }) => _id === activeId) : null;
        return (
            <div className='row' style={{ padding: 0 }}>
                <Header />
                <UserPanel activeResource={ activeResource } onProjectButtonClick={ () => this.setState({ activeResource: 'projects' }) }
                    onImageButtonClick={ () => this.setState({ activeResource: 'images' }) } />
                <SelectionPanel activeResource={ activeResource } site={ site } activeId={ activeId } setAsActiveId={ (id) => this.setAsActive(id) } />
                <EditPanel activeId={ activeId } resourceCategory={ activeResource } resource={ activeSpecificResource } />
            </div>
        );
    }

    userUnknown()
    {
        return (
            <div className='col halign valign full-height full-width'>
                <FacebookAuthenticate />
                <i className='material-icons admin-no-access-icon'>visibility_off</i>
                <h1 className='admin-no-access-message'>No Access</h1>
            </div>
        );
    }

    render()
    {
        const { user } = this.props;
        if (user)
        {
            if (superusers.includes(user.email))
            {
                return this.superuser();
            }
        }
        return this.userUnknown();
    }
});