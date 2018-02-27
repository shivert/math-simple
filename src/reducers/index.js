import { combineReducers } from 'redux'
import booleanExpression from './booleanExpression'
import booleanExpressionData from './booleanExpressionData'
import booleanLaws from './booleanLaws'
import counter from './counter'

export default combineReducers({
    booleanExpression,
    booleanExpressionData,
    booleanLaws,
    counter
})