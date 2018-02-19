import { UPDATE_BOOLEAN_LAWS_LIST } from './../constants/actionTypes';

export default function booleanLaws(state = [], action) {
    switch (action.type) {
        case UPDATE_BOOLEAN_LAWS_LIST:
            return action.data
        default:
            return []
    }
}