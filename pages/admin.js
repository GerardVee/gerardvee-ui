import 'isomorphic-fetch';
import { Component } from 'react';
import { connect } from 'react-redux';
import Switch from 'react-switch';

import FacebookAuthenticate from '../components/site/admin/FacebookAuthenticate';
import UploadImage from '../components/site/admin/Images/UploadImage';
import ReplaceImage from '../components/site/admin/Images/ReplaceImage';
import DeleteImage from '../components/site/admin/Images/DeleteImage';
import { sendProjects, sendImages, appendCertainProject, replaceCertainProject, deleteCertainProject } from '../ducks/actions/site';

import '../styles/admin.scss';

// clean this nasty up

const api = 'https://api.gerardvee.com/';
const superusers = process.env.FB_SUPERUSERS.split(',');
const noProfile = 'https://transhumane-partei.de/wp-content/uploads/2016/04/blank-profile-picture-973461_960_720.png';
const prod = true;

const mapStateToProps = ({ site }) =>
({
    error: site.error,
    user: site.user,
    projects: site.projects,
    images: site.images,
});

const mapDispatchToProps = (dispatch) =>
({
    addProject: (token, project) => dispatch(appendCertainProject(project, token)),
    editProject: (token, project) => dispatch(replaceCertainProject(project, token)),
    deleteProject: (token, id) => dispatch(deleteCertainProject(id, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    state =
    {
        activeResource: '',
        activeId: null,
        editedProject: {},
        newProject: {},
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

    editProjectState(e)
    {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const editedProject = Object.assign({}, this.state.editedProject, { [name]: value });
        this.setState({ editedProject });
    }

    editNewProjectState(e)
    {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const newProject = Object.assign({}, this.state.newProject, { [name]: value });
        this.setState({ newProject });
    }

    setAsActive(id)
    {
        this.setState({ activeId: id }, () =>
        {
            const { projects } = this.props;
            const { activeId, activeResource } = this.state;
            if (activeResource === 'projects')
            {
                this.setState({ editedProject: projects.find(({ _id }) => _id === activeId) });
            }
        });
    }

    projectResource({ _id, image, title, description, url, finished })
    {
        const { activeId } = this.state;
        return (
            <div className={ 'row valign admin-selection-panel-selection-container' + (activeId === _id ? ' active' : '' ) }
                onClick={ () => this.setAsActive(_id) }>
                <img className='admin-selection-panel-project-picture' src={ image } />
                <div className='col admin-selection-panel-project-info'>
                    <span className={ 'admin-selection-panel-project-circle' + (finished ? ' active' : '') } />
                    <p className='admin-selection-panel-project-title'>{ title }</p>
                    <p className='admin-selection-panel-project-id'>{ _id }</p>
                </div>
            </div>
        );
    }

    imageResource({ _id, location })
    {
        const { activeId } = this.state;
        return (
            <div className={ 'row valign admin-selection-panel-selection-container' + (activeId === _id ? ' active' : '' ) }
                onClick={ () => this.setAsActive(_id) }>
                <img className='admin-selection-panel-image-picture' src={ location } />
                <div className='col admin-selection-panel-image-info'>
                    <p className='admin-selection-panel-image-id'>{ _id }</p>
                </div>
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

    development()
    {
        return this.ui(noProfile, 'Unknown', 'None');
    }

    superuser()
    {
        const { user } = this.props;
        return this.ui(user.picture.data.url, user.name, 'Admin');
    }

    newProjectInput(labelName, name, value)
    {
        const { newProject } = this.state;
        return (
            <label className='col admin-edit-panel-selection-project-input-group'>
                <h1 className='admin-edit-panel-selection-project-label'>{ labelName }</h1>
                <input className='admin-edit-panel-selection-project-input' type='text' name={ name } value={ newProject[value] } onChange={ (e) => this.editNewProjectState(e) } />
            </label>
        );
    }

    projectInput(labelName, name, value)
    {
        const { editedProject } = this.state;
        return (
            <label className='col admin-edit-panel-selection-project-input-group'>
                <h1 className='admin-edit-panel-selection-project-label'>{ labelName }</h1>
                <input className='admin-edit-panel-selection-project-input' type='text' name={ name } value={ editedProject[value] } onChange={ (e) => this.editProjectState(e) } />
            </label>
        );
    }

    uploadProject()
    {
        const { newProject } = this.state;
        const { user } = this.props;
        const token = !!user ? user.accessToken : '';
        this.props.addProject(token, newProject);
        this.setState({ newProject: { finished: false } });
    }

    updateProject()
    {
        const { editedProject } = this.state;
        const { user } = this.props;
        const token = !!user ? user.accessToken : '';
        this.props.editProject(token, editedProject);
    }

    deleteProject()
    {
        const { editedProject } = this.state;
        const { user } = this.props;
        const token = !!user ? user.accessToken : '';
        this.props.deleteProject(token, editedProject._id);
        this.setState({ editedProject: {} });
    }

    ui(photo, name, role)
    {
        const { error, projects, images } = this.props;
        const { activeId, activeResource, editedProject, newProject } = this.state;
        const site = { projects, images };
        const activeSpecificResource = activeId ? site[activeResource].find(({ _id }) => _id === activeId) : null;
        return (
            <div className='row' style={{ padding: 0 }}>
                <div className='col admin-panel admin-user-panel'>
                    <div className='row valign'>
                        <img className='admin-user-panel-picture' src={ photo } />
                        <div className='col'>
                            <h1 className='admin-user-panel-name'>{ name }</h1>
                            <h2 className='admin-user-panel-role'>> { role }</h2>
                        </div>
                    </div>
                    <h2 className='admin-user-panel-resource'>Projects</h2>
                    <div className='admin-user-panel-resource-list'>
                        <button className={ 'admin-user-panel-resource-list-button' + (activeResource === 'projects' ? ' active' : '' ) }
                            onClick={ () => this.setState({ activeResource: 'projects' }) }>
                            <i className='material-icons'>folder</i>
                            Projects
                        </button>
                    </div>
                    <h2 className='admin-user-panel-resource'>Images</h2>
                    <div className='admin-user-panel-resource-list'>
                        <button className={ 'admin-user-panel-resource-list-button' + (activeResource === 'images' ? ' active' : '') }
                        onClick={ () => this.setState({ activeResource: 'images' }) }>
                            <i className='material-icons'>filter</i>
                            Images
                        </button>
                    </div>
                </div>
                { activeResource && <>
                    <div className='col admin-panel admin-selection-panel'>
                        <h1 className='admin-selection-panel-selection'>{ activeResource } ({ site[activeResource].length })</h1>
                        { site[activeResource].map(resource => (
                            activeResource === 'images' ? this.imageResource(resource) : this.projectResource(resource)
                        ))}
                    </div>
                </>}
                { activeSpecificResource && <>
                    <div className='col admin-panel admin-edit-panel'>
                        <div className='row halign'>
                            <h1 className='admin-edit-panel-selection'>{ activeResource === 'images' ? activeSpecificResource._id : activeSpecificResource.title }</h1>
                            { (activeResource === 'images') && <UploadImage /> }
                            { (activeResource === 'projects' && Object.keys(newProject).length == 0) && <button className='admin-edit-panel-selection-new-button' onClick={ () => this.setState({ newProject: { finished: false } }) }>New</button>}
                        </div>
                        { (activeResource === 'projects' && Object.keys(newProject).length > 0) && <>
                            <div className='row halign valign valign-children admin-edit-panel-selection-project-active-group'>
                                <h1 className='admin-edit-panel-selection-project-active'>Active</h1>
                                <Switch className='admin-edit-panel-selection-project-active-checkbox' checked={ newProject.finished ? newProject.finished : false }
                                    onChange={ (finished) => this.setState({ newProject: Object.assign({}, newProject, { finished })  })  } 
                                    uncheckedIcon={ false } checkedIcon={ false } handleDiameter={ 30 } boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)' onHandleColor='#FFFFFF' onColor='#2CC841' />
                            </div>
                            { this.newProjectInput('Title', 'title', 'title') }
                            { this.newProjectInput('Image Url', 'image', 'image') }
                            { this.newProjectInput('Project Url', 'url', 'url') }
                            <label className='col admin-edit-panel-selection-project-input-group'>
                                <h1 className='admin-edit-panel-selection-project-label'>Description</h1>
                                <textarea rows={ 4 } className='admin-edit-panel-selection-project-textarea' name='description'
                                    value={ newProject.description } onChange={ (e) => this.editNewProjectState(e) } />
                            </label>
                            <div className='row admin-edit-panel-selection-project-button-group'>
                                <button className='admin-edit-panel-selection-new-button' onClick={ () => this.uploadProject() }>Create</button>
                                <button className='admin-edit-panel-selection-delete-button' onClick={ () => this.setState({ newProject: {} }) }>Discard</button>
                            </div>
                        </> }
                        { (activeResource === 'projects' && Object.keys(newProject).length == 0) && <>
                            <div className='row halign valign valign-children admin-edit-panel-selection-project-active-group'>
                                <h1 className='admin-edit-panel-selection-project-active'>Active</h1>
                                <Switch className='admin-edit-panel-selection-project-active-checkbox' checked={ editedProject.finished }
                                    onChange={ (finished) => this.setState({ editedProject: Object.assign({}, editedProject, { finished })  })  } 
                                    uncheckedIcon={ false } checkedIcon={ false } handleDiameter={ 30 } boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)' onHandleColor='#FFFFFF' onColor='#2CC841' />
                            </div>
                            { this.projectInput('Title', 'title', 'title') }
                            { this.projectInput('Image Url', 'image', 'image') }
                            { this.projectInput('Project Url', 'url', 'url') }
                            <label className='col admin-edit-panel-selection-project-input-group'>
                                <h1 className='admin-edit-panel-selection-project-label'>Description</h1>
                                <textarea rows={ 4 } className='admin-edit-panel-selection-project-textarea' name='description'
                                    value={ editedProject.description } onChange={ (e) => this.editProjectState(e) } />
                            </label>
                            <div className='row admin-edit-panel-selection-project-button-group'>
                                <button className='admin-edit-panel-selection-new-button' onClick={ () => this.updateProject() }>Save</button>
                                <button className='admin-edit-panel-selection-delete-button' onClick={ () => this.deleteProject() }>Delete</button>
                            </div>
                        </> }
                        { (activeResource === 'images') && <>
                            <img className='admin-edit-panel-selection-image' src={ activeSpecificResource.location } />
                            <ReplaceImage fileName={ activeSpecificResource.location } />
                            <DeleteImage fileName={ activeSpecificResource.location } />
                        </> }
                    </div>
                </>}
                {/*<p>{ JSON.stringify(error) }</p>*/}
            </div>
        );
    }

    render()
    {
        const { user } = this.props;
        if (!prod)
        {
            return this.development();
        }
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