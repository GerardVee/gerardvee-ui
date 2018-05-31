import post from '../../lib/post';

const api = 'https://api.gerardvee.com/';

export const actionTypes =
{
    SET_ERROR: 'SET_ERROR',
    SET_SUCCESS: 'SET_SUCCESS',
    SET_POST_ORDER: 'SET_POST_ORDER',
    SET_USER: 'SET_USER',
    SET_ME: 'SET_ME',
    SET_POSTS: 'SET_POSTS',
    SET_LOGIN_STATUS: 'SET_LOGIN'
};

export const sendError = (error) => dispatch => dispatch({ type: actionTypes.SET_ERROR, error });
export const clearError = () => dispatch => dispatch({ type: actionTypes.SET_ERROR, error: '' });

export const sendSuccess = (success) => dispatch => dispatch({ type: actionTypes.SET_SUCCESS, success });
export const clearSuccess = () => dispatch => dispatch({ type: actionTypes.SET_SUCCESS, success: '' });

export const sendPostOrder = (order) => dispatch => dispatch({ type: actionTypes.SET_POST_ORDER, order });

export const sendUser = (user) => dispatch => dispatch({ type: actionTypes.SET_USER, user });

export const sendMe = (me) => dispatch => dispatch({ type: actionTypes.SET_ME, me });

export const sendPosts = (posts) => dispatch => dispatch({ type: actionTypes.SET_POSTS, posts });

export const sendLoggedIn = (loggedIn) => dispatch => dispatch({ type: actionTypes.SET_LOGIN_STATUS, loggedIn });

export const getPosts = (order) => dispatch =>
{
    fetch(order === 'HOT' ? api + 'linkit/posts' : api + 'linkit/posts?order?=' + order.toLowerCase())
        .then(res =>
        {
            if (!res.ok)
            {
                throw Error(res.statusText);
            }
            return res;
        })
        .then(res => res.json())
        .then(posts =>
        {
            dispatch(sendPosts(posts));
            dispatch(sendPostOrder(order));
        })
        .catch((text) =>
        {
            dispatch(sendError(text));
        });
};

export const refreshPosts = (order) => dispatch =>
{
    fetch(order === 'HOT' ? api + 'linkit/posts' : api + 'linkit/posts?order?=' + order.toLowerCase())
        .then(res =>
        {
            if (!res.ok)
            {
                throw Error(res.statusText);
            }
            return res;
        })
        .then(res => res.json())
        .then(posts =>
        {
            dispatch(sendPosts(posts));
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
        dispatch(sendLoggedIn(false));
        dispatch(sendUser(null));
        dispatch(sendMe(null));
        return;
    }
    if (!user.id)
    {
        dispatch(sendLoggedIn(false));
        dispatch(sendUser(null));
        dispatch(sendMe(null));
        return;
    }
    fetch(api + 'linkit/user/new', post({ id: user.id }))
        .then(res =>
        {
            if (!res.ok)
            {
                throw Error(res.statusText);
            }
            dispatch(sendLoggedIn(true));
            return res;
        })
        .then(res => res.json())
        .then(_ =>
        {
            dispatch(sendUser(user));
            fetch(api + 'linkit/me', post({ token: user.accessToken }))
                .then(res => res.json())
                    .then(me =>
                    {
                        dispatch(sendMe(me))
                    });
        })
        .catch((text) =>
        {
            dispatch(sendLoggedIn(false));
            dispatch(sendUser(null));
            dispatch(sendMe(null));
            dispatch(sendError(text))
        });
};