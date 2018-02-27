import { UPDATE_EXPRESSION_DATA, RESET_EXPRESSION_DATA } from './../constants/actionTypes'

const initialState = {
    alreadySimplified: false,
    originalExpression: '',
    simplifiedExpression: '',
    popularity: ''
}

export default function booleanExpressionData(state = initialState, action) {
    switch (action.type) {
        case UPDATE_EXPRESSION_DATA:
            return action.data
        case RESET_EXPRESSION_DATA:
            return initialState
        default:
            return initialState
    }
}
