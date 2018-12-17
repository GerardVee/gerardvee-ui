import React from 'react';

export default ({ image_id, location, activeId, onClick }) => (
    <div className={ 'row valign admin-selection-panel-selection-container' + (activeId === image_id ? ' active' : '' ) } onClick={ onClick }>
        <img className='admin-selection-panel-image-picture' src={ location } />
        <div className='col admin-selection-panel-image-info'>
            <p className='admin-selection-panel-image-id'>{ image_id }</p>
        </div>
    </div>
);