import React from 'react';
import { ContentContext } from '../contexts/contentContext';
import axios from "axios";
require('../style_sheets/contact.css');

class Contact extends React.Component {
  static contextType = ContentContext;
  constructor() {
    super();
    this.state = {
      contactSection: {
        opacity: 0,
        transition: "all .3s ease-in",
      },
      label: 'contact',
      color: '#FF7DEE',
      response: '.',
      showResponse: {
        opacity: 0
      },
      submitButton: true,
      answer: '',
      answerValid: false,
      submit: {
        display: 'none',
        opacity: 0
      },
      test: {
        display: 'flex',
        opacity: 1
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.testAnswer = this.testAnswer.bind(this);
  }

  componentDidMount() {
    this.context.handleLandingTitle(this.state.label, this.state.color);
    this.fadeIn();
    //handle random numbers
    let randomNumber1;
    let randomNumber2;
    randomNumber1 = Math.floor(Math.random() * 10);
    randomNumber2 = Math.floor(Math.random() * 10);
    this.setState({
      randomNumber1: randomNumber1,
      randomNumber2: randomNumber2,
    })
  }

  fadeIn() {
    setTimeout(() => {
      this.setState({
        contactSection: {
          opacity: 1,
          transition: "all .3s ease-in",
          display: 'flex',
          flexDirection: 'column',
        },
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      })
    }, 150);
  }

  handleChange(event) {
     this.setState({
       [event.target.name]: event.target.value,
     });
  }

  emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.firstName !== "" && this.state.email !== "" && this.state.message !== "") {
      if (this.emailIsValid(this.state.email)) {
        console.log('axios post');
        this.setState({submitButton: false});
        axios({
                method: "POST",
                url:"/",
                headers: [this.state.firstName, this.state.lastName, this.state.email, this.state.message],
                data: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    message: this.state.message + "\n"  + "-" + " " + this.state.firstName + " " + this.state.lastName
                }
            }).then((response)=>{
                console.log(response);
                if (response.status === 200){
                    console.log('200');
                    this.clearForm();
                    this.showResponse(response);
                }else {
                    console.log('not 200');
                    this.setState({submit: true});
                    this.showResponse(response);
                }
            }).catch((response)=>{
                console.log('error');
                console.log(response);
                this.clearForm();
                let catchResponse = {data: {message: 'Oops something went wrong'}}
                this.showResponse(catchResponse);
            })
      } else {
        var response = {data: {message: "Email format invalid"}}
        this.showResponse(response);
      }
    } else {
      let missingFieldResponse = {data: {message: "Missing field"}}
      this.showResponse(missingFieldResponse);
    }
  }

  showResponse(response) {
    this.setState({
      response: response.data.message,
      showResponse: {
        opacity: 1
      }
    })
    setTimeout(() => {
      this.removeResponse();
    }, 3000)
  }

  removeResponse() {
    this.setState({
      showResponse: {
        opacity: 0
      },
    })
  }

  clearForm() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      submitButton: true
    })
    let inputs = document.querySelectorAll('.input');
    for(let i=0; i<inputs.length; i++) {
      inputs[i].value = "";
    }
  }

  handleTestorSubmit() {
    if (!this.state.answerValid) {
      return   <div className="form-section-test">
          <div className="form-section-test-left">
            <div>{this.state.randomNumber1}</div>
            <div>+</div>
            <div>{this.state.randomNumber2}</div>
            <div>=</div>
            <div className="answer-input"><input className="input" type="text" onChange={this.handleChange} name="answer"/></div>
          </div>
          <div className="form-section-test-right">
            <div className="answer-submit submit" onClick={this.testAnswer}>yes I'm human</div>
          </div>
        </div>
    } else {
      return <div>{this.handleSubmitButton()}</div>
    }
  }

  handleSubmitButton() {
    if (!this.state.submitButton) {
      return <div className="submit sub"><div className="submit-loading"><div>.</div><div>.</div><div>.</div></div></div>
    } else {
      return <div className="submit" onClick={this.handleSubmit}>send</div>
    }
  }

  testAnswer() {
    let answer = this.state.randomNumber1 + this.state.randomNumber2;
    answer = answer.toString();
    if (this.state.answer === answer) {
      this.setState({
        answerValid: true
      })
    } else if (this.state.answer === '') {
      var response = {data: {message: "Please verify you are human"}};
      this.showResponse(response);
    } else if (this.state.answer !== answer) {
      var response = {data: {message: "Oops, wrong answer"}}
      this.clearAnswer();
      this.showResponse(response);
    }
  }

  clearAnswer() {
    this.setState({
      answer: ' '
    })
  }

  render() {
    return(
      <div className="contact-section">
        <div style={this.state.contactSection}>
          <form>
            <div className="form-section">
              <div className="form-section-inputs">
                <div className="response" style={this.state.showResponse}>{this.state.response}</div>
                <label>first name*</label>
                <input className="input" type="text" onChange={this.handleChange} name="firstName"/>
                <label>last name</label>
                <input className="input" type="text" onChange={this.handleChange} name="lastName"/>
                <label>email*</label>
                <input className="input" type="text" onChange={this.handleChange} name="email"/>
                <label>message*</label>
                <textarea className="input" onChange={this.handleChange} name="message" ows="8" cols="80"></textarea>
              </div>
              <div className="form-section-submit">
                {this.handleTestorSubmit()}
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
