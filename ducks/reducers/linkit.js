import { actionTypes } from '../actions/linkit';

const initialState =
{
    error: '',
    success: '',
    postOrder: 'HOT',
    user: null,
    me: null,
    posts: [],
    loggedIn: false
};

export const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case actionTypes.SET_ERROR:
            return Object.assign({}, state, { error: action.error }); // we can just pass { type: SET_ERROR, error: '' } to 'clear' the error
        case actionTypes.SET_SUCCESS:
            return Object.assign({}, state, { success: action.success });
        case actionTypes.SET_POST_ORDER:
            return Object.assign({}, state, { postOrder: action.order });
        case actionTypes.SET_USER:
            return Object.assign({}, state, { user: action.user });
        case actionTypes.SET_ME:
            return Object.assign({}, state, { me: action.me });
        case actionTypes.SET_POSTS:
            return Object.assign({}, state, { posts: action.posts });
        case actionTypes.SET_LOGIN_STATUS:
            return Object.assign({}, state, { loggedIn: action.loggedIn });
        default:
            return state;
    }
};