const API_BASE = 'http://localhost:4000'
const request = require('superagent')

export const getBooleanLaws = () => {
    return request.get(`${API_BASE}/api/simplify/boolean/laws`)
}

export const getExpressionData = (original) => {
    return request.get(`${API_BASE}/api/simplify/boolean/expressions`).query({ original })
}

export const simplifyBooleanExpression = (expression) => {
    return request.post(`${API_BASE}/api/simplify/boolean/expressions`).send({ expression })
}
