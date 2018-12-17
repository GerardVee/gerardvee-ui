import React, { Component } from 'react';
import EditImage from './EditImage';
import EditProject from './EditProject';
import NewProject from './NewProject';

export default class extends Component
{
    state = { isNewProject: false };

    setAsNewProject(bool)
    {
        this.setState({ isNewProject: bool });
    }

    render()
    {
        const { resourceCategory, resource, activeId } = this.props;
        const { isNewProject } = this.state;
        return (
            <>
                { resource && (
                    <>
                        <div className='col admin-panel admin-edit-panel'>
                            <NewProject resourceCategory={ resourceCategory } resource={ resource } setAsNewProject={ (bool) => this.setAsNewProject(bool) } />
                            <EditProject activeId={ activeId } resourceCategory={ resourceCategory } isNewProject={ isNewProject } />
                            <EditImage resourceCategory={ resourceCategory } resource={ resource } />
                        </div>
                    </> )}
            </>
        );
    }
}