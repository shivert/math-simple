import AuthService from '../utils/authService'

const request = require('superagent')
const API_BASE = 'http://localhost:3000'

const Auth = new AuthService()

export const getBooleanLaws = () => {
    return request.get(`${API_BASE}/api/boolean-law`).set('x-access-token', Auth.getToken())
}

export const getExpressionData = (original) => {
    return request.get(`${API_BASE}/api/simplify/boolean/expressions`).query({ original }).set('x-access-token', Auth.getToken())
}

export const simplifyBooleanExpression = (expression) => {
    return request.post(`${API_BASE}/api/simplify/boolean/expressions`).send({ expression }).set('x-access-token', Auth.getToken())
}
