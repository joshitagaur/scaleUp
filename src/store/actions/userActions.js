import { userService } from '../../services/userService';


export const getAllUsers = (credentials) => {
  return (dispatch, getState) => {
    
    userService.getAllUsers()
    .then((users) => {
      dispatch({ type: 'USERLIST_SUCCESS', users });
    }).catch((err) => {
      dispatch({ type: 'USERLIST_ERROR', err });
    });

  }
}