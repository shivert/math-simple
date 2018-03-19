import React, { Component } from 'react'
import {connect} from "react-redux"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"

import * as BooleanActions  from '../../../actions/booleanActions'
import { Input, Button, Row, Col, Card, Form } from 'antd'
const FormItem = Form.Item

class BooleanExpression extends Component {
    state = {
        input: '',
        mode: '',
        booleanLaws: [],
    }

    componentWillMount() {
        this.props.getBooleanLaws()
    }

    componentWillUnmount() {
        this.props.resetSimplifyExpressionData()
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.booleanLaws.length !== nextProps.booleanLaws.length && nextProps.booleanLaws.length !== 0) {
            this.setState({booleanLaws: nextProps.booleanLaws})
        }
    }

    validateInput = () => {
        return /^[a-zA-Z 0-1.+~()]*$/g.test(this.state.input)
    }

    render() {
        const original = this.props.booleanExpression.expression
        const simplified = this.props.booleanExpression.simplified
        const popularity = this.props.booleanExpression.popularity

        return (
            <div style={{ padding: 30, background: '#fff' }}>
                <h1>Boolean Simplifier</h1>

                <h3>The following Laws of Boolean Algebra have been implemented:</h3>
                <div style={{ textAlign: 'center', padding: '0px 25px 25px 25px' }}>
                    <Row gutter={20} type="flex" justify="center">
                    {
                        this.state.booleanLaws.map(law => (
                            <Col key={law.name} span={8}>
                                <Card style={{marginTop: 20}} title={law.name} bordered={true}>{law.rules[0]}<br/>{law.rules[1]}</Card>
                            </Col>
                        ))
                    }
                    </Row>
                </div>

                <div>
                    <h3>Enter your boolean expression below:</h3>
                    <Form>
                        <FormItem
                            validateStatus={this.validateInput() ? '' : 'error'}
                        >
                            <Input
                                value={this.state.input}
                                size="large"
                                placeholder="Enter Expression"
                                onChange={(e) => {
                                    this.setState({ input: e.target.value })
                                }}
                                onPressEnter={() => {
                                    if (this.state.input.length > 0 && this.validateInput()) {
                                        this.setState({ mode: 'simplify' })
                                        this.props.simplifyExpression(this.state.input)
                                    }
                                }}
                            />
                        </FormItem>
                    </Form>

                    <Row gutter={20} type="flex" justify="center">
                        <Col span={12}>
                            <Button
                                type="primary"
                                style={{ width: '100%', height: 40 }}
                                disabled={this.state.input === '' || !this.validateInput()}
                                onClick={() => {
                                    this.setState({ mode: 'status' })
                                    this.props.getExpressionData(this.state.input)
                                }}
                            >
                                Check Status!
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button
                                type="primary"
                                style={{ width: '100%', height: 40 }}
                                disabled={this.state.input === '' || !this.validateInput()}
                                onClick={() => {
                                    this.setState({ mode: 'simplify' })
                                    this.props.simplifyExpression(this.state.input)
                                }}
                            >
                                Simplify!
                            </Button>
                        </Col>
                    </Row>
                </div>
                {
                    this.state.mode === 'status' && (
                        <div style={{ marginTop: 40 }}>
                            <h3>Original Expression</h3>
                            <p>{original}</p>
                            <h3>Already Simplified</h3>
                            <p>{popularity > 0 ? 'true' : 'false'}</p>
                            {
                                popularity > 0 ? (
                                    <div>
                                        <h3>Simplified Expression</h3>
                                        <p>{simplified}</p>
                                        <h3>Popularity</h3>
                                        <p>{popularity}</p>
                                    </div>
                                ) : ''
                            }
                        </div>
                    )
                }
                {
                    this.state.mode === 'simplify' && (
                        <div style={{ marginTop: 40 }}>
                            <h3>Original Expression</h3>
                            <p>{original}</p>
                            <h3>Simplified Expression</h3>
                            <p>{simplified}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

BooleanExpression.propTypes = {
    simplifyExpression: PropTypes.func.isRequired,
    resetSimplifyExpressionData: PropTypes.func.isRequired,
    getExpressionData: PropTypes.func.isRequired,
    resetExpressionData: PropTypes.func.isRequired,
    getBooleanLaws: PropTypes.func.isRequired,
    booleanExpression: PropTypes.object.isRequired,
    booleanExpressionData: PropTypes.object.isRequired,
    booleanLaws: PropTypes.arrayOf(Object).isRequired
}

function mapStateToProps(state) {
    return {
        booleanLaws: state.booleanLaws,
        booleanExpression: state.booleanExpression,
        booleanExpressionData: state.booleanExpressionData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(BooleanActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(BooleanExpression)
