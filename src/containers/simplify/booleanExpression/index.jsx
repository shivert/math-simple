import React, { Component } from 'react'
import { Input, Button, Row, Col, Card, Form } from 'antd';
import { simplifyExpression } from './../../../actions/simplifyActions'

const FormItem = Form.Item

class BooleanExpression extends Component {
    state = {
        input: '',
        original: '',
        simplified: ''
    };

    componentWillUnmount() {
        this.setState({
            input: '',
            original: '',
            simplified: ''
        })
    }

    validInput = () => {
        return /^[a-zA-Z 0-1.+()]*$/g.test(this.state.input)
    }

    render() {

        return (
            <div style={{ padding: 30, background: '#fff' }}>
                <h1>Boolean Expression Simplifier</h1>

                <h3>The following Laws of Boolean Algebra have been implemented:</h3>
                <div style={{ textAlign: 'center', padding: '10px 25px 25px 25px' }}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Card title="Annulment Law" bordered={true}>A . 0 = 0 <br/> A + 1 = 1</Card>
                        </Col>
                        <Col span={12}>
                            <Card title="Identity Law" bordered={true}>A + 0 = A <br/> A . 1 = A</Card>
                        </Col>
                    </Row>
                    <Row gutter={20} type="flex" justify="center" style={{ marginTop: 20 }}>
                        <Col span={12}>
                            <Card title="Idempotent Law" bordered={true}>A + A = A <br/> A . A = A</Card>
                        </Col>
                        <Col span={12}>
                            <Card title="Complement Law" bordered={true}>A . ~A = 0 <br/> A + ~A = 1</Card>
                        </Col>
                    </Row>
                </div>

                <div>
                    <h3>Enter your boolean expression below:</h3>
                    <Form>
                        <FormItem
                            validateStatus={this.validInput() ? '' : 'error'}
                        >
                            <Input
                                value={this.state.input}
                                size="large"
                                placeholder="Enter Expression"
                                onChange={(e) => {
                                    this.setState({ input: e.target.value })
                                }}
                                onPressEnter={() => {
                                    if (this.state.input.length > 0 && this.validInput()) {
                                        this.setState({
                                            original: this.state.input,
                                            simplified: simplifyExpression(this.state.input)
                                        })
                                    }
                                }}
                            />
                        </FormItem>
                    </Form>
                    <Button
                        type="primary"
                        style={{ width: '100%', height: 40 }}
                        disabled={this.state.input === '' || !this.validInput()}
                        onClick={() => {
                            this.setState({
                                original: this.state.input,
                                simplified: simplifyExpression(this.state.input)
                            })
                        }}
                    >
                        Simplify!
                    </Button>
                </div>

                {
                    this.state.simplified !== '' && (
                        <div style={{ marginTop: 40 }}>
                            <h3>Original Expression</h3>
                            <p>{this.state.original}</p>
                            <h3>Simplified Expression</h3>
                            <p>{this.state.simplified}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default BooleanExpression;
