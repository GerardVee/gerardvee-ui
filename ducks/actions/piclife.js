export const actionTypes =
{
    SET_ACTIVEPATH: 'PICLIFE_SET_ACTIVEPATH'
};

export const sendError = (error) => dispatch => dispatch({ type: actionTypes.SET_ERROR, error });