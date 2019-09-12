const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USERLIST_SUCCESS':
      return {
        users: action.users
      }
  }
  return state;
};

export default userReducer;