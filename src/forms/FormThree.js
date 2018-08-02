import React, { Component } from 'react';
import {Container,Form,FormGroup,FormFeedback,Label,Input,Row,Col,Button} from 'reactstrap';

class FormThree extends Component {
 
    render() { 
        return ( 
            <Container>
                <br/><br/>
                <Row>
                    <Col sm="3"/>
                    <Col sm="6" xs="12">
                        <h4>Form Three</h4><br/>
                        <Form>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input 
                                invalid={this.props.data.errors.password ? true : false}
                                 type="text"
                                 name="password"
                                 value={this.props.data.password}
                                 onChange={this.props.onChange}
                                 onBlur={this.props.validateField}
                                 onFocus={this.props.hideFieldErr}
                                 />
                                 {this.props.data.errors.password && <FormFeedback>{this.props.data.errors.password}</FormFeedback>}
                            </FormGroup>
                            <FormGroup>
                                <Label>Repeat Password</Label>
                                <Input 
                                invalid={this.props.data.errors.repeatpassword ? true : false}
                                 type="text"
                                 name="repeatpassword"
                                 value={this.props.data.repeatpassword}
                                 onChange={this.props.onChange}
                                 onBlur={this.props.validateField}
                                 onFocus={this.props.hideFieldErr}
                                 />
                                 {this.props.data.errors.repeatpassword && <FormFeedback>{this.props.data.errors.repeatpassword}</FormFeedback>}
                            </FormGroup>
                          
                        </Form>
                    </Col>
                    <Col sm="3"/>
                </Row>
            </Container>
         );
    }
}
 
export default FormThree;