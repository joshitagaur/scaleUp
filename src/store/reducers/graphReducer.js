const initState = {
}

const graphReducer = (state = initState, action) => {
  switch(action.type){
  	case 'GRAPHDATA_SUCCESS':
      console.log('login success');
      return {
       users: action.users
      }
    default:
      return state
  	}

};

export default graphReducer;