import { UPDATE_BOOLEAN_EXPRESSION, RESET_BOOLEAN_EXPRESSION } from './../constants/actionTypes'

const initialState = {
    expression: '',
    isSimplified: false,
    simplified: '',
    popularity: 0
}

export default function booleanExpression(state = initialState, action) {
    switch (action.type) {
        case UPDATE_BOOLEAN_EXPRESSION:
            return action.data
        case RESET_BOOLEAN_EXPRESSION:
            return initialState
        default:
            return initialState
    }
}
