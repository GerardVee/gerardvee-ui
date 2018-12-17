import { actionTypes } from '../actions/site';

const initialState =
{
    error: '',
    projects: [],
    images: [],
    user: null,
    cognito: null
};

export const reducer = (state = initialState, action) =>
{
    switch (action.type)
    {
    case actionTypes.SET_ERROR:
        return Object.assign({}, state, { error: action.error });
    case actionTypes.SET_PROJECTS:
        return Object.assign({}, state, { projects: action.projects });
    case actionTypes.APPEND_PROJECT:
        return Object.assign({}, state, { projects: [ ...state.projects, action.project ] });
    case actionTypes.EDIT_PROJECT:
        return Object.assign({}, state, { projects: state.projects.map(project => project.project_id === action.project.project_id ? action.project : project) });
    case actionTypes.DELETE_PROJECT:
        return Object.assign({}, state, { projects: state.projects.filter(project => project.project_id !== action.project_id ) });
    case actionTypes.SET_IMAGES:
        return Object.assign({}, state, { images: action.images });
    case actionTypes.APPEND_IMAGE:
        return Object.assign({}, state, { images: [ ...state.images, action.image ] });
    case actionTypes.EDIT_IMAGE:
        return Object.assign({}, state, { images: state.images.map(image => ({ ...image, location: action.image.image_id !== image.image_id ? image.location : action.image.location + '?t=' + new Date().getTime().toString() })) });
    case actionTypes.DELETE_IMAGE:
        return Object.assign({}, state, { images: state.images.filter(image => image.image_id !== action.image_id ) });
    case actionTypes.SET_COGNITO:
        return Object.assign({}, state, { cognito: action.cognito });
    case actionTypes.SET_USER:
        return Object.assign({}, state, { user: action.user });
    default:
        return state;
    }
};