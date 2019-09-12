import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from '../../store/actions/userActions'
import UserDetails from './UserDetails'
import { withRouter } from 'react-router-dom';

class UserList extends Component {
  state = {
    title: '',
    content: ''
  }

  componentDidMount() {
      this.props.getAllUsers();
    }

  
  
  render() {
    const {users} = this.props;
    return (
      <div>
        <h5 className="center">Logged In Users</h5>
        <ul className="collection">
          {
            users.users && users.users.data.map(user => {
              return(
                <UserDetails user={user} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () => dispatch(getAllUsers())
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
