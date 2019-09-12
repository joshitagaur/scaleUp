const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
  	case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        token: action.userDetails.token,
        authError: null
      }
    case 'REGISTER_SUCCESS':
      console.log('login success');
      return {
        ...state,
        token: action.userDetails.token,
        authError: null
      }
    default:
      return state
  	}

};

export default authReducer;