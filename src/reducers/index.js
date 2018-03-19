import { combineReducers } from 'redux'
import booleanExpression from './booleanExpression'
import booleanLaws from './booleanLaws'

export default combineReducers({
    booleanExpression,
    booleanLaws
})