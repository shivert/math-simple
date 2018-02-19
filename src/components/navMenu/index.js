import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

class NavMenu extends Component {
    render() {
        return (
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
        )
    }
}

export default NavMenu