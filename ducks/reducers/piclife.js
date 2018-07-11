import { actionTypes } from '../actions/linkit';

const initialState =
{
    activePath: '/'
};

export const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case actionTypes.SET_ACTIVEPATH:
            return Object.assign({}, state, { activePath: action.path });
        default:
            return state;
    }
};