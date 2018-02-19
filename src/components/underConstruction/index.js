import React, { Component } from 'react'
import { Icon } from 'antd'

class UnderConstruction extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', padding: 24, background: '#fff', minHeight: 480 }}>
                <Icon type="frown-o" style={{ marginTop: 120, marginBottom: 40, fontSize: '96px', color: 'rgba(0, 0, 0, 0.85)'}} />
                <h1>This page is under construction.</h1>
            </div>
        )
    }
}

export default UnderConstruction
