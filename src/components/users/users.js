import React from 'react';
import { addUsers } from '../../actions';
import { connect } from 'react-redux';
import { getUsers } from '../../services';
import UserList from './user_list';

class Users extends React.Component {

  componentDidMount() {
    getUsers()
      .then(response => {
        this.props.add_users(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render(){
    return (
      <React.Fragment>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users &&
                ( 
                  this.props.users.map(res => {
                    return (
                      <UserList key={res.id} user={res} />
                    )
                  })
                )
              }
            </tbody>
          </table>
         
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.UserReducer.users }
}

const mapDispatchToProps = dispatch => {
  return {
    add_users: (users) => dispatch(addUsers(users))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);