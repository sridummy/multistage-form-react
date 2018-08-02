import React, { Component } from 'react';
import {Container,Form,FormGroup,FormFeedback,Label,Input,Row,Col,Button} from 'reactstrap';

class FormOne extends Component {
 
    render() { 
        console.log(this.props);
        return ( 
            <Container>
                <br/><br/>
                <Row>
                    <Col sm="3"/>
                    <Col sm="6" xs="12">
                        <h4>Form One</h4><br/>
                        <Form>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input 
                                invalid={this.props.data.errors.firstname ? true : false}
                                 type="text"
                                 name="firstname"
                                 value={this.props.data.firstname}
                                 onChange={this.props.onChange}
                                 onBlur={this.props.validateField}
                                 onFocus={this.props.hideFieldErr}
                                 />
                                 {this.props.data.errors.firstname && <FormFeedback>{this.props.data.errors.firstname}</FormFeedback>}
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input
                                invalid={this.props.data.errors.lastname ? true : false} 
                                 type="text"
                                 name="lastname"
                                 value={this.props.data.lastname}
                                 onChange={this.props.onChange}
                                 onBlur={this.props.validateField}
                                 onFocus={this.props.hideFieldErr}
                                 />
                                 {this.props.data.errors.lastname && <FormFeedback>{this.props.data.errors.lastname}</FormFeedback>}
                            </FormGroup>
                          
                        </Form>
                    </Col>
                    <Col sm="3"/>
                </Row>
            </Container>
         );
    }
}
 
export default FormOne;