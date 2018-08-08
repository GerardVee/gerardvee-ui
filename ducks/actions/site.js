import post from '../../lib/post';

const api = 'https://api.gerardvee.com/';

export const actionTypes =
{
    SET_ERROR: 'SITE_SET_ERROR',
    SET_PROJECTS: 'SITE_SET_PROJECTS',
    SET_IMAGES: 'SITE_SET_IMAGES',
    EDIT_IMAGE: 'SITE_EDIT_IMAGE',
    APPEND_IMAGE: 'SITE_APPEND_IMAGE',
    DELETE_IMAGE: 'SITE_DELETE_IMAGE',
    SET_USER: 'SITE_SET_USER',
};

export const sendError = (error) => dispatch => dispatch({ type: actionTypes.SET_ERROR, error });
export const clearError = () => dispatch => dispatch({ type: actionTypes.SET_ERROR, error: '' });

export const sendProjects = (projects) => dispatch => dispatch({ type: actionTypes.SET_PROJECTS, projects });

export const sendImages = (images) => dispatch => dispatch({ type: actionTypes.SET_IMAGES, images });
export const editImage = (imageUrl) => dispatch => dispatch({ type: actionTypes.EDIT_IMAGE, imageUrl });
export const deleteImage = (imageUrl) => dispatch => dispatch({ type: actionTypes.DELETE_IMAGE, imageUrl });
export const appendImage = (imageObject) => dispatch => dispatch({ type: actionTypes.APPEND_IMAGE, image: imageObject });

export const sendUser = (user) => dispatch => dispatch({ type: actionTypes.SET_USER, user });

export const deleteCertainImage = (imageUrl, token) => dispatch =>
{
    fetch(api + 'site/image/delete', post({ fileName: imageUrl, token }))
        .then(res =>
        {
            if (!res.ok)
            {
                throw Error(res.statusText);
            }
            return res;
        })
        .then(res => res.json())
        .then(res =>
        {
            if (res.success)
            {
                dispatch(deleteImage(imageUrl));
            }
            else
            {
                throw Error(res.error);
            }
        })
        .catch((text) =>
        {
            dispatch(sendError(text));
        });
};

export const replaceCertainImage = (data, url) => dispatch =>
{
    fetch(api + 'site/image/replace', { body: data, method: 'POST' })
        .then(res =>
        {
            if (!res.ok)
            {
                throw Error(res.statusText);
            }
            return res;
        })
        .then(res => res.json())
        .then(res =>
        {
            if (res.success)
            {
                dispatch(editImage(url));
            }
            if (!res.success)
            {
                throw Error(res.error);
            }
        })
        .catch((text) =>
        {
            dispatch(sendError(text));
        });
};

export const appendCertainImage = (data) => dispatch =>
{
    fetch(api + 'site/image/upload', { body: data, method: 'POST' })
        .then(res =>
        {
            if (!res.ok)
            {
                throw Error(res.statusText);
            }
            return res;
        })
        .then(res => res.json())
        .then(res =>
        {
            if (res.success)
            {
                dispatch(appendImage(res.image));
            }
            else
            {
                throw Error(res.error);
            }
        })
        .catch((text) =>
        {
            dispatch(sendError(text));
        });
};

export const login = (user) => dispatch =>
{
    const isDefined = !!user;
    if (!isDefined)
    {
        dispatch(sendUser(null));
        return;
    }
    if (!user.id)
    {
        dispatch(sendUser(null));
        return;
    }
    dispatch(sendUser(user));
};