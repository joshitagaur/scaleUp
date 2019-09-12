import { userService } from '../../services/userService';


export const getGraphData = (credentials) => {
  return (dispatch, getState) => {
    
    userService.getGraphData()
    .then((users) => {
      dispatch({ type: 'GRAPHDATA_SUCCESS', users });
    }).catch((err) => {
      dispatch({ type: 'GRAPHDATA_ERROR', err });
    });

  }
}