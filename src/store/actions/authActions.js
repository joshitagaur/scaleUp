import { userService } from '../../services/userService';


export const signIn = (history, credentials) => {
  return (dispatch, getState) => {
    
    userService.login(credentials.email, credentials.password)
    .then((userDetails) => {
      dispatch({ type: 'LOGIN_SUCCESS', userDetails });
      history.push('/users');
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
}

export const signUp = (history, credentials) => {
  return (dispatch, getState) => {
    
    userService.register(credentials.email, credentials.password)
    .then((userDetails) => {
      dispatch({ type: 'REGISTER_SUCCESS', userDetails });
      history.push('/users');
    }).catch((err) => {
      dispatch({ type: 'REGISTER_ERROR', err });
    });

  }
}