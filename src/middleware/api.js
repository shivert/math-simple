const API_BASE = 'http://localhost:4000'
const request = require('superagent')

export const getBooleanLaws = () => {
    return request.get(`${API_BASE}/api/simplify/boolean/laws`)
}

export const getPreComputedBooleanExpressions = () => {
    return request.get('/api/simplify/boolean/expressions')
}

export const postBooleanExpressionAlreadyComputed = () => {
    return request.get('/api/simplify/boolean/expressions')
}

export const postSimplifyBooleanExpression = () => {
    return request.get('/api/simplify/boolean/expressions')
}

export const postBooleanExpressionSimplistForm = () => {
    return request.get('/api/simplify/boolean/expressions')
}
