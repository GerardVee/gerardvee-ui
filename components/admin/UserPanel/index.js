import ImageResource from './ImageResource';
import ProjectResource from './ProjectResource';
import React from 'react';
import UserInfo from './UserInfo';

export default ({ activeResource, onProjectButtonClick, onImageButtonClick }) => (
    <div className='col admin-panel admin-user-panel'>
        <UserInfo />
        <ProjectResource activeResource={ activeResource } onClick={ onProjectButtonClick } />
        <ImageResource activeResource={ activeResource } onClick={ onImageButtonClick } />
    </div>
);