import * as Actions from './../constants/actionTypes'
import * as API from './../middleware/api'

export const getBooleanLaws = () => {
    return (dispatch) => {
        dispatch({ type: 'GET_REQUEST_INITIATED' });
        API.getBooleanLaws().then(
            (res) => {
                dispatch({ type: 'GET_REQUEST_SUCCESS' });
                dispatch({ type: Actions.UPDATE_BOOLEAN_LAWS_LIST, data: res.text });
            },
            (err) => {
                dispatch({ type: 'GET_REQUEST_FAILED' });
                console.log("I love Iryna and it didn't work")
            }
        )
    }
}