import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import Login from './components/login'

import configureStore from './utils/configureStore'

const store = configureStore()

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)