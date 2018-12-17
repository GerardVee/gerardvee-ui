import React from 'react';

export default ({ activeResource, onClick }) => (
    <>
        <h2 className='admin-user-panel-resource'>Images</h2>
        <div className='admin-user-panel-resource-list'>
            <button className={ 'admin-user-panel-resource-list-button' + (activeResource === 'images' ? ' active' : '') } onClick={ onClick }>
                <i className='material-icons'>filter</i>
                Images
            </button>
        </div>
    </>
);