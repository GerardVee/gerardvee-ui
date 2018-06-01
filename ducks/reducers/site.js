import { actionTypes } from '../actions/site';

const initialState =
{
    projects: [],
    images: []
};

/*
 * admin only (/admin, requires fb login to match us)
 * editing images, modifiying an exisiting image object, requires reupload which deletes the old image, 
 *  and generates a new filename (and thus url) for the "edited image"
 * adding a new image, appending a new image object, requires upload of the new image, and generates
 *  a filename (and thus url) for the new image
 * projects: alike to images
 */

export const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case actionTypes.SET_PROJECTS:
            return Object.assign({}, state, { projects: action.projects });
        case actionTypes.SET_IMAGES:
            return Object.assign({}, state, { images: action.images });
        default:
            return state;
    }
};