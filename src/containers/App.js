import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from '../components/home'
import NavMenu from '../components/navMenu'
import UnderConstruction from '../components/underConstruction'
import BooleanExpression from './simplify/booleanExpression'

import AuthService from '../utils/authService'
import withAuth from '../components/withAuth'

import '../styles/App.css'
import { Layout, Modal } from 'antd'
const { Content, Footer, Sider } = Layout

const Auth = new AuthService()

class App extends Component {
    state = {
        collapsed: false
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed })
    }

    handleLogout(){
        Auth.logout()
        this.props.history.replace('/login');
    }

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo">
                            <p><Link to="/">MathSimple</Link></p>
                        </div>
                        <NavMenu/>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '20px' }}>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/simplify/boolean-expressions" component={BooleanExpression}/>
                                <Route component={UnderConstruction}/>
                            </Switch>

                            <div className="log-out">
                                <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
                            </div>
                        </Content>

                        <Footer style={{ textAlign: 'center' }}>
                            MathSimple ©2018
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}

export default withAuth(App)
