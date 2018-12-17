import ImageResource from './ImageResource';
import ProjectResource from './ProjectResource';
import React from 'react';

export default ({ activeResource, site, activeId, setAsActiveId }) => (
    <>
        { activeResource && (
            <div className='col admin-panel admin-selection-panel'>
                <h1 className='admin-selection-panel-selection'>{ activeResource } ({ site[activeResource].length })</h1>
                { site[activeResource].map(resource => (
                    activeResource === 'images' ?
                        <ImageResource onClick={ () => setAsActiveId(resource.image_id) } activeId={ activeId } { ...resource }  /> :
                        <ProjectResource onClick={ () => setAsActiveId(resource.project_id) } activeId={ activeId } { ...resource }  />
                ))}
            </div> )}
    </>
);