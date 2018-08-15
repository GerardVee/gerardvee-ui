import { actionTypes } from '../actions/site';

const apiImageLocation = 'https://api.gerardvee.com/public/images/';

const initialState =
{
    error: '',
    projects: [],
    images: [],
    user: null,
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
        case actionTypes.SET_ERROR:
            return Object.assign({}, state, { error: action.error });
        case actionTypes.SET_PROJECTS:
            return Object.assign({}, state, { projects: action.projects });
        case actionTypes.APPEND_PROJECT:
            return Object.assign({}, state, { projects: [ ...state.projects, action.project ] });
        case actionTypes.EDIT_PROJECT:
            return Object.assign({}, state, { images: state.projects.map(project => project._id === action.project._id ? action.project : project) });
        case actionTypes.DELETE_PROJECT:
            return Object.assign({}, state, { projects: state.projects.filter(project => project._id !== action.id ) });
        case actionTypes.SET_IMAGES:
            return Object.assign({}, state, { images: action.images });
        case actionTypes.APPEND_IMAGE:
            return Object.assign({}, state, { images: [ ...state.images, action.image ] });
        case actionTypes.EDIT_IMAGE:
            return Object.assign({}, state, { images: state.images.map(image =>
                ({ ...image, location: image.location.split('?')[0] === action.imageUrl ? action.imageUrl + '?t=' + new Date().getTime().toString() : image.location }))});
        case actionTypes.DELETE_IMAGE:
            return Object.assign({}, state, { images: state.images.filter(image => image.location !== apiImageLocation + action.imageUrl ) });
        case actionTypes.SET_USER:
            return Object.assign({}, state, { user: action.user });
        default:
            return state;
    }
};