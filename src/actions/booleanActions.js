import * as Actions from './../constants/actionTypes'
import * as API from './../middleware/api'

export const getBooleanLaws = () => {
    return (dispatch) => {
        dispatch({ type: 'GET_REQUEST_INITIATED' })
        API.getBooleanLaws().then(
            (res) => {
                dispatch({ type: 'GET_REQUEST_SUCCESS' })
                dispatch({ type: Actions.UPDATE_BOOLEAN_LAWS_LIST, data: JSON.parse(res.text) })
            },
            (err) => {
                dispatch({ type: 'GET_REQUEST_FAILED' })

                const response = JSON.parse(err.response.text)
                if (response.auth === false) {
                    window.alert("Unable to authenticate at this time. Please login again.")
                }
            }
        )
    }
}

export const getExpressionData = (expression) => {
    return (dispatch) => {
        dispatch({ type: 'GET_REQUEST_INITIATED' })
        API.getExpressionData(expression).then(
            (res) => {
                dispatch({ type: 'GET_REQUEST_SUCCESS' })
                dispatch({ type: Actions.UPDATE_BOOLEAN_EXPRESSION, data: JSON.parse(res.text) })
            },
            (err) => {
                dispatch({ type: 'GET_REQUEST_FAILED' })

                const response = JSON.parse(err.response.text)
                if (response.auth === false) {
                    window.alert("Unable to authenticate at this time. Please login again.")
                }
            }
        )
    }
}

export const resetExpressionData = () => {
    return (dispatch) => {
        dispatch({type: Actions.RESET_BOOLEAN_EXPRESSION })
    }
}

export const simplifyExpression = (expression) => {
    return (dispatch) => {
        dispatch({ type: 'GET_REQUEST_INITIATED' })
        API.simplifyBooleanExpression(expression).then(
            (res) => {
                dispatch({ type: 'GET_REQUEST_SUCCESS' })
                dispatch({ type: Actions.UPDATE_BOOLEAN_EXPRESSION, data: JSON.parse(res.text) })
            },
            (err) => {
                dispatch({ type: 'GET_REQUEST_FAILED' })

                const response = JSON.parse(err.response.text)
                if (response.auth === false) {
                    window.alert("Unable to authenticate at this time. Please login again.")
                }
            }
        )
    }
}

export const resetSimplifyExpressionData = () => {
    return (dispatch) => {
        dispatch({type: Actions.RESET_BOOLEAN_EXPRESSION })
    }
}
