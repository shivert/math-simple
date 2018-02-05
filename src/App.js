import React, { Component } from 'react'
import './App.css'

import BooleanExpression from './containers/simplify/booleanExpression'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

const Home = () => (
    <div className="home-page" style={{ textAlign: 'center', padding: 24, background: '#fff', minHeight: 480 }}>
        <h1>Welcome to <span>MathSimple</span>!</h1>
        <h4>To begin, select an item from the navigation bar on the left.</h4>
    </div>
)


const UnderConstruction = () => (
    <div style={{ textAlign: 'center', padding: 24, background: '#fff', minHeight: 480 }}>
        <Icon type="frown-o" style={{ marginTop: 120, marginBottom: 40, fontSize: '96px', color: 'rgba(0, 0, 0, 0.85)'}} />
        <h1>This page is under construction.</h1>
    </div>
)

class App extends Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
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

                        <Menu theme="dark" defaultSelectedKeys={[]} mode="inline">
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="shrink" /><span>Simplify</span></span>}
                            >
                                <Menu.Item key="3"><Link to="/simplify/boolean-expressions">Boolean Expressions</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/simplify/series">Series</Link></Menu.Item>
                                <Menu.Item key="5"><Link to="/simplify/polynomials">Polynomials</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="line-chart" /><span>Graphing</span></span>}
                            >
                                <Menu.Item key="6"><Link to="/graph/functions">Functions</Link></Menu.Item>
                                <Menu.Item key="7"><Link to="/graph/equalities">Equalities</Link></Menu.Item>
                                <Menu.Item key="8"><Link to="/graph/inequalities">Inequalities</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={<span><Icon type="home" /><span>Geometry</span></span>}
                            >
                                <Menu.Item key="9"><Link to="/geometry/plane-geometry">Plane Geometry</Link></Menu.Item>
                                <Menu.Item key="10"><Link to="/geometry/coordinate-geometry">Coordinate Geometry</Link></Menu.Item>
                                <Menu.Item key="11"><Link to="/geometry/solid-geometry">Solid Geometry</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={<span><Icon type="setting" /><span>Calculus</span></span>}
                            >
                                <Menu.Item key="12"><Link to="/calculus/derivatives">Derivatives</Link></Menu.Item>
                                <Menu.Item key="13"><Link to="/calculus/integrals">Integrals</Link></Menu.Item>
                                <Menu.Item key="14"><Link to="/calculus/limits">Limits</Link></Menu.Item>
                                <Menu.Item key="15"><Link to="/calculus/series">Series</Link></Menu.Item>
                                <Menu.Item key="16"><Link to="/calculus/ode">ODE</Link></Menu.Item>
                                <Menu.Item key="17"><Link to="/calculus/laplace-transforms">Laplace Transforms</Link></Menu.Item>
                                <Menu.Item key="18"><Link to="/calculus/taylor-seriess">Taylor Series</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
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
        );
    }
}

export default App;