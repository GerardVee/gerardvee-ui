import AWS from 'aws-sdk';
import aws4 from 'aws4';

import { post, patch, deleteR } from '../../lib/methods';

const api = process.env.API;

export const actionTypes =
{
    SET_ERROR: 'SITE_SET_ERROR',
    SET_PROJECTS: 'SITE_SET_PROJECTS',
    EDIT_PROJECT: 'SITE_EDIT_PROJECT',
    APPEND_PROJECT: 'SITE_APPEND_PROJECT',
    DELETE_PROJECT: 'SITE_DELETE_PROJECT',
    SET_IMAGES: 'SITE_SET_IMAGES',
    EDIT_IMAGE: 'SITE_EDIT_IMAGE',
    APPEND_IMAGE: 'SITE_APPEND_IMAGE',
    DELETE_IMAGE: 'SITE_DELETE_IMAGE',
    SET_COGNITO: 'SITE_SET_COGNITO',
    SET_USER: 'SITE_SET_USER',
};

const superusers = process.env.FB_SUPERUSERS.split(',');

export const sendError = (error) => dispatch => dispatch({ type: actionTypes.SET_ERROR, error });
export const clearError = () => dispatch => dispatch({ type: actionTypes.SET_ERROR, error: '' });

export const sendProjects = (projects) => dispatch => dispatch({ type: actionTypes.SET_PROJECTS, projects });
export const appendProject = (project) => dispatch => dispatch({ type: actionTypes.APPEND_PROJECT, project });
export const editProject = (project) => dispatch => dispatch({ type: actionTypes.EDIT_PROJECT, project });
export const deleteProject = (id) => dispatch => dispatch({ type: actionTypes.DELETE_PROJECT, id });

export const sendImages = (images) => dispatch => dispatch({ type: actionTypes.SET_IMAGES, images });
export const appendImage = (image) => dispatch => dispatch({ type: actionTypes.APPEND_IMAGE, image });
export const editImage = (image) => dispatch => dispatch({ type: actionTypes.EDIT_IMAGE, image });
export const deleteImage = (image) => dispatch => dispatch({ type: actionTypes.DELETE_IMAGE, image });

export const sendCognitoInfo = (cognito) => dispatch => dispatch({ type: actionTypes.SET_COGNITO, cognito });
export const sendUser = (user) => dispatch => dispatch({ type: actionTypes.SET_USER, user });

export const appendCertainProject = (project, token) => dispatch =>
{
    fetch(api + 'site/project/upload', post({ project, token }))
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
                dispatch(appendProject(res.project));
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

export const replaceCertainProject = (project, token) => dispatch =>
{
    fetch(api + 'site/project/replace', post({ project, token }))
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
                dispatch(editProject(res.project));
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

export const deleteCertainProject = (id, token) => dispatch =>
{
    fetch(api + 'site/project/delete', post({ id, token }))
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
                dispatch(deleteProject(id));
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

export const appendCertainImage = (cognito, location) => dispatch =>
{
    var params = post({ location }, '/gerardvee/site/image');
    aws4.sign(params, cognito);
    fetch(api + 'site/image', params)
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

export const replaceCertainImage = (cognito, location, old_location) => dispatch =>
{
    var params = patch({ location, old_location }, '/gerardvee/site/image');
    aws4.sign(params, cognito);
    fetch(api + 'site/image', params)
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
                dispatch(editImage(res.image));
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

export const deleteCertainImage = (cognito, location) => dispatch =>
{
    var params = deleteR({ location }, '/gerardvee/site/image');
    aws4.sign(params, cognito);
    fetch(api + 'site/image', params)
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
                dispatch(deleteImage(res.image_id));
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
    if (superusers.includes(user.email))
    {
        // huge thanks to
        // https://interworks.com.mk/amazon-cognito-and-api-gateway-aws-iam-authorization/,
        // https://forums.aws.amazon.com/thread.jspa?messageID=730090
        dispatch(sendUser(user));
        AWS.config.region = 'us-east-1';
        AWS.config.credentials = new AWS.CognitoIdentityCredentials(
        {
            IdentityPoolId: process.env.COGNITO_POOL_ID,
            Logins:
            {
                'graph.facebook.com': user.accessToken,
            }
        });
        AWS.config.credentials.get((err, data) =>
        {
            if (!err)
            {
                const cognito =
                {
                    accessKeyId: AWS.config.credentials.accessKeyId,
                    secretAccessKey: AWS.config.credentials.secretAccessKey,
                    sessionToken: AWS.config.credentials.sessionToken,
                };
                dispatch(sendCognitoInfo(cognito));
            }
        })
    }
    else
    {
        dispatch(sendUser(null));
    }
};