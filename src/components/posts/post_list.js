import React from 'react';
import { Link } from "react-router-dom";
export default class PostList extends React.Component {
    render(){
        return (
            <tr className="table-success">
                <th scope="row"><Link to={`posts/${this.props.post.id}`} >{this.props.post.title}</Link></th>
                <th scope="row">{this.props.post.body}</th>
            </tr>
        )
    }
}

