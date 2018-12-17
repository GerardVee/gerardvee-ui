import React, { Component } from 'react';
import { deleteCertainProject, replaceCertainProject } from '../../../ducks/actions/site';
import Switch from 'react-switch';
import { connect } from 'react-redux';

const inputs =
[
    { label: 'Title', value: 'title' },
    { label: 'Image Url', value: 'image' },
    { label: 'Project Url', value: 'url' },
];

const Input = ({ label, value, editedProject, onChange }) => (
    <label className='col admin-edit-panel-selection-project-input-group'>
        <h1 className='admin-edit-panel-selection-project-label'>{ label }</h1>
        <input className='admin-edit-panel-selection-project-input' type='text' name={ value } value={ editedProject[value] } onChange={ (e) => onChange(e) } />
    </label>
);

const mapStateToProps = ({ site }) => ({
    user: site.user,
    projects: site.projects,
    cognito: site.cognito
});

const mapDispatchToProps = (dispatch) => ({
    editProject: (cognito, project) => dispatch(replaceCertainProject(cognito, project)),
    deleteProject: (cognito, project_id) => dispatch(deleteCertainProject(cognito, project_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { editedProject: this.props.projects.find(({ project_id }) => project_id === this.props.activeId) };
    }

    componentDidUpdate(oldProps)
    {
        const { activeId, resourceCategory, projects } = this.props;
        if (resourceCategory === 'projects')
        {
            if (activeId !== oldProps.activeId)
            {
                this.setState({ editedProject: projects.find(({ project_id }) => project_id === activeId) });
            }
        }
    }

    editProjectState(e)
    {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const editedProject = Object.assign({}, this.state.editedProject, { [name]: value });
        this.setState({ editedProject });
    }

    deleteProject()
    {
        const { editedProject } = this.state;
        const { cognito } = this.props;
        this.props.deleteProject(cognito, editedProject.project_id);
        this.setState({ editedProject: {} });
    }

    updateProject()
    {
        const { editedProject } = this.state;
        const { cognito } = this.props;
        this.props.editProject(cognito, editedProject);
    }

    render()
    {
        const { editedProject } = this.state;
        const { resourceCategory, isNewProject } = this.props;
        return (
            <>
                { (resourceCategory === 'projects' && (!isNewProject)) && (
                    <>
                        <div className='row halign valign valign-children admin-edit-panel-selection-project-active-group'>
                            <h1 className='admin-edit-panel-selection-project-active'>Active</h1>
                            <Switch className='admin-edit-panel-selection-project-active-checkbox' checked={ editedProject.finished }
                                onChange={ (finished) => this.setState({ editedProject: Object.assign({}, editedProject, { finished })  }) }
                                uncheckedIcon={ false } checkedIcon={ false } handleDiameter={ 30 } boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)' onHandleColor='#FFFFFF' onColor='#2CC841'
                            />
                        </div>
                        { inputs.map((props) => (
                            <Input key={ props.label } onChange={ (e) => this.editProjectState(e) } editedProject={ editedProject } { ...props } />
                        ))}
                        <label className='col admin-edit-panel-selection-project-input-group'>
                            <h1 className='admin-edit-panel-selection-project-label'>Description</h1>
                            <textarea rows={ 4 } className='admin-edit-panel-selection-project-textarea' name='description'
                                value={ editedProject.description } onChange={ (e) => this.editProjectState(e) }
                            />
                        </label>
                        <div className='row admin-edit-panel-selection-project-button-group'>
                            <button className='admin-edit-panel-selection-new-button' onClick={ () => this.updateProject() }>Save</button>
                            <button className='admin-edit-panel-selection-delete-button' onClick={ () => this.deleteProject() }>Delete</button>
                        </div>
                    </> )}
            </>
        );
    }
});