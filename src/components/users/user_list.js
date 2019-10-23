import React from 'react';
import {
    Link
  } from "react-router-dom";
export default class UserList extends React.Component {
    render(){
        return (
            <tr className="table-active">
                <th scope="row"><Link to={`/users/${this.props.user.id}`} >{this.props.user.name}</Link></th>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.phone}</td>
            </tr>
        )
    }
}

