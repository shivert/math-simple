import * as Actions from './../constants/actionTypes'
import * as API from './../middleware/api'

export const getBooleanLaws = () => {
    return (dispatch) => {
        dispatch({ type: 'GET_REQUEST_INITIATED' })
        API.getBooleanLaws().then(
            (res) => {
                dispatch({ type: 'GET_REQUEST_SUCCESS' })
                dispatch({ type: Actions.UPDATE_BOOLEAN_LAWS_LIST, data: JSON.parse(res.text).laws })
            },
            (err) => {
                dispatch({ type: 'GET_REQUEST_FAILED' })
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
                dispatch({ type: Actions.UPDATE_EXPRESSION_DATA, data: JSON.parse(res.text) })
            },
            (err) => {
                dispatch({ type: 'GET_REQUEST_FAILED' })
            }
        )
    }
}

export const resetExpressionData = () => {
    return (dispatch) => {
        dispatch({type: Actions.RESET_EXPRESSION_DATA })
    }
}

export const simplifyExpression = (expression) => {
    return (dispatch) => {
        dispatch({ type: 'GET_REQUEST_INITIATED' })
        API.simplifyBooleanExpression(expression).then(
            (res) => {
                dispatch({ type: 'GET_REQUEST_SUCCESS' })
                dispatch({ type: Actions.UPDATE_SIMPLIFIED_EXPRESSION, data: JSON.parse(res.text) })
            },
            (err) => {
                dispatch({ type: 'GET_REQUEST_FAILED' })
            }
        )
    }
}

export const resetSimplifyExpressionData = () => {
    return (dispatch) => {
        dispatch({type: Actions.RESET_SIMPLIFIED_EXPRESSION })
    }
}
