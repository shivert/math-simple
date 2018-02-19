import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from '../components/home'
import NavMenu from '../components/navMenu'
import UnderConstruction from '../components/underConstruction'
import BooleanExpression from './simplify/booleanExpression'

import '../styles/App.css'
import { Layout } from 'antd'
const { Content, Footer, Sider } = Layout


class App extends Component {
    state = {
        collapsed: false,
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed })
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

export default App
