import React, { Component } from 'react'
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class SignIn extends Component {
  state = {
    email: '',
    password: '',
    username: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="username" id='username' type="text" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
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
    signIn: (creds) => dispatch(signIn(ownProps.history,creds))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))