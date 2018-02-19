import { combineReducers } from 'redux'
import booleanLaws from './booleanLaws'
import counter from './counter'

export default combineReducers({
    booleanLaws,
    counter
})