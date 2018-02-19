import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="home-page" style={{ textAlign: 'center', padding: 24, background: '#fff', minHeight: 480 }}>
                <h1>Welcome to <span>MathSimple</span>!</h1>
                <h4>To begin, select an item from the navigation bar on the left.</h4>
            </div>
        )
    }
}

export default Home
