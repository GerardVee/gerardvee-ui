import React from 'react';

export default ({ activeResource, onClick }) => (
    <>
        <h2 className='admin-user-panel-resource'>Projects</h2>
        <div className='admin-user-panel-resource-list'>
            <button className={ 'admin-user-panel-resource-list-button' + (activeResource === 'projects' ? ' active' : '' ) } onClick={ onClick }>
                <i className='material-icons'>folder</i>
                Projects
            </button>
        </div>
    </>
);