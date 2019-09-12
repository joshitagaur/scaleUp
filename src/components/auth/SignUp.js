import React, { Component } from "react";
import { signUp } from '../../store/actions/authActions'
import { connect } from 'react-redux';

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="input-field">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" onChange={props.handleChange} />
      </div>
      <div className="input-field">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" onChange={props.handleChange} />
      </div>
    </React.Fragment>
  );
}

function Step1ReadOnly(props) {
  if (!props.readOnly) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="input-field">
        <label htmlFor="firstName" className={props.userData.firstName ? 'active': ''}>First Name</label>
        <input type="text" id="firstName" disabled value={props.userData.firstName} />
      </div>
      <div className="input-field">
        <label htmlFor="lastName" className={props.userData.lastName ? 'active': ''}>Last Name</label>
        <input type="text" id="lastName" disabled value={props.userData.lastName} />
      </div>
    </React.Fragment>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="input-field">
        <label htmlFor="username">Username</label>
        <input type="username" id='username' type="text" onChange={props.handleChange} />
      </div>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={props.handleChange} />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={props.handleChange} />
      </div>
    </React.Fragment>
  );
}

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    username: "",
    currentStep: 1,
    isReadOnly: false
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 1 ? 2 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
      isReadOnly: true
    });
  };

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 2) {
      return (
        <div className="input-field">
          <button className="btn" onClick={this.next}>
            Next
          </button>
        </div>
      );
    }
    return null;
  }

  signUpButton() {
    let currentStep = this.state.currentStep;
    if (currentStep == 2) {
      return (
        <div className="input-field">
          <button
            className="btn"
            onClick={this.handleSubmit}
          >
            Sign Up
          </button>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            
          />
          <Step1ReadOnly readOnly = {this.state.isReadOnly} userData={this.state} />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            
          />
          {this.nextButton()}
          {this.signUpButton()}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state,
    authError: state
  }
}

const mapDispatchToProps = (dispatch, ownProps)=> {
  return {
    signUp: (creds) => dispatch(signUp(ownProps.history,creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)