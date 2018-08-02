import React, { Component } from 'react';
import {Container,Form,FormGroup,FormFeedback,Label,Input,Row,Col,Button} from 'reactstrap';

class FormTwo extends Component {
  
    render() { 
        return ( 
            <Container>
                <br/><br/>
                <Row>
                    <Col sm="3"/>
                    <Col sm="6" xs="12">
                        <h4>Form Two</h4><br/>
                        <Form >
                            <FormGroup>
                                <Label>Email Id</Label>
                                <Input 
                                invalid={this.props.data.errors.email ? true : false}
                                 type="text"
                                 name="email"
                                 value={this.props.data.email}
                                 onChange={this.props.onChange}
                                 onBlur={this.props.validateField}
                                 onFocus={this.props.hideFieldErr}
                                 />
                                 {this.props.data.errors.email && <FormFeedback>{this.props.data.errors.email}</FormFeedback>}
                            </FormGroup>
                            <FormGroup>
                                <Label>Phone Number</Label>
                                <Input 
                                invalid={this.props.data.errors.phone ? true : false}
                                 type="text"
                                 name="phone"
                                 value={this.props.data.phone}
                                 onChange={this.props.onChange}
                                 onBlur={this.props.validateField}
                                 onFocus={this.props.hideFieldErr}
                                 />
                                 {this.props.data.errors.phone && <FormFeedback>{this.props.data.errors.phone}</FormFeedback>}
                            </FormGroup>
                           
                        </Form>
                    </Col>
                    <Col sm="3"/>
                </Row>
            </Container>
         );
    }
}
 
export default FormTwo;