import React, { Component } from 'react';
import FormOne from './forms/FormOne';
import FormTwo from './forms/FormTwo';
import FormThree from './forms/FormThree';
import { Button,Row,Col ,Container} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageone: true,
      pagetwo: false,
      pagethree: false,
     
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      repeatpassword: '',
      errors: {}
    }
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  prevPage() {
    if (this.state.pagetwo === true) {
      this.setState({ pageone: !this.state.pageone, pagetwo: !this.state.pagetwo });
    } else if (this.state.pagethree === true) {
      this.setState({ pagethree: !this.state.pagethree, pagetwo: !this.state.pagetwo });
    }
  }

  validateFormOne = data => {
    var errors = {};
    if(!data.firstname) errors.firstname = "This field Required";
    if(!data.lastname) errors.lastname = "This field Required";
    return errors;
  }

  validateFormTwo = data => {
    var errors = {};
    if(!data.email) errors.email = "This field Required";
    if(!data.phone) errors.phone = "This field Required";
    return errors;
  }
  validateFormThree = data => {
    var errors = {};
    if(!data.password) errors.password = "This field Required";
    if(!data.repeatpassword) errors.repeatpassword = "This field Required";
    return errors;
  }

  nextPage() {
    if (this.state.pageone === true) {
      var errors = this.validateFormOne(this.state);
      console.log(errors);
      console.log(Object.values(errors).length);
      if(Object.values(errors).length>0){
        alert("Please Complete the fields to continue");
      }else{
        this.setState({ pageone: !this.state.pageone, pagetwo: !this.state.pagetwo });
      }
    } else if (this.state.pagetwo === true) {
      var errors = this.validateFormTwo(this.state);
      if(Object.values(errors).length>0){
        alert("Please Complete the fields to continue");
      }else{
        this.setState({ pagetwo: !this.state.pagetwo, pagethree: !this.state.three });
      }
    }
  }

  onChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  validateField = e => {
    if (!e.target.value) this.setState({ ...this.state, errors: { ...this.state.errors, [e.target.name]: "This Field is Required" } });
  }

  hideFieldErr = e => {
    this.setState({ ...this.state, errors: { ...this.state.errors, [e.target.name]: "" } })
  }

  submitData = e => {
    e.preventDefault();
    console.log(this.state);
    var errors = this.validateFormOne(this.state);
    if(Object.values(errors).length>0){
      alert("Please Complete the fields to continue");
    }else{
      //submit data and reset the forms
      alert("no errors submit data called");

      //preview the forms
      //this.setState({ pageone: !this.state.pageone, pagethree: !this.state.pagethree });

      //or refresh the page
      window.location.href = "/";
    }
  }

  render() {

    return (
      <div>
        {this.state.pageone && <FormOne onChange={this.onChange} data={this.state} validateField={this.validateField} hideFieldErr={this.hideFieldErr}/>}
        {this.state.pagetwo && <FormTwo onChange={this.onChange} data={this.state} validateField={this.validateField} hideFieldErr={this.hideFieldErr}/>}
        {this.state.pagethree && <FormThree onChange={this.onChange} data={this.state} validateField={this.validateField} hideFieldErr={this.hideFieldErr}/>}
        <br />
        <Container>
        <Row>
          <Col sm="6"/>
          <Col sm="6" xs="12">
            <Button type="submit" color="warning" onClick={this.prevPage} disabled={this.state.pageone ? true : false}>previous</Button>{" "}
            <Button type="submit" color="info" onClick={this.nextPage} disabled={this.state.pagethree ? true : false}>next</Button>{" "}
            <Button type="submit" color="success" onClick={this.submitData} disabled={this.state.pagethree ? false : true}>finish</Button>
          </Col>
          
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
