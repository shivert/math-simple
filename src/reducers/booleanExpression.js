import { UPDATE_SIMPLIFIED_EXPRESSION, RESET_SIMPLIFIED_EXPRESSION } from './../constants/actionTypes'

const initialState = {
    originalExpression: '',
    simplifiedExpression: '',
    saveStatus: ''
}

export default function booleanExpression(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SIMPLIFIED_EXPRESSION:
            return action.data
        case RESET_SIMPLIFIED_EXPRESSION:
            return initialState
        default:
            return initialState
    }
}
