import post from '../../lib/post';

const api = 'https://api.gerardvee.com/';

export const actionTypes =
{
    SET_PROJECTS: 'SITE_SET_PROJECTS',
    SET_IMAGES: 'SITE_SET_IMAGES'
};

export const sendProjects = (projects) => dispatch => dispatch({ type: actionTypes.SET_PROJECTS, projects });

export const sendImages = (images) => dispatch => dispatch({ type: actionTypes.SET_IMAGES, images });