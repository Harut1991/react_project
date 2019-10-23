import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions';
import { getUser } from '../../services';
import { Link } from "react-router-dom";
import { Api } from "../../env";

class User extends React.Component {

    componentDidMount() {
        getUser(this.props.match.params.id)
          .then(response => {
            this.props.add_user(response.data[0]);
          })
          .catch(error => {
            console.log(error);
          });
      }

    render(){
        return (
            <div>
                {this.props.user && 
                    <div>
                        <p>Name: {this.props.user.name}</p>
                        <p>Address: {this.props.user.address.street}</p>
                        <p>Company: {this.props.user.company.name}</p>
                        <p><Link to={`${this.props.user.id}/posts`} > Posts </Link></p>
                        <p><Link to={`${this.props.user.id}/albums`} > Albums </Link></p>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { user: state.UserReducer.user }
}
  
const mapDispatchToProps = dispatch => {
    return {
        add_user: (user) => dispatch(addUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);