import DeleteImage from '../Images/DeleteImage';
import React from 'react';
import ReplaceImage from '../Images/ReplaceImage';

export default ({ resourceCategory, resource }) => (
    <>
        { (resourceCategory === 'images') && (
            <>
                <img className='admin-edit-panel-selection-image' src={ resource.location } />
                <ReplaceImage fileName={ resource.location } />
                <DeleteImage fileName={ resource.location } />
            </> )}
    </>
);