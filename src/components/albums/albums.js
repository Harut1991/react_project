import React from 'react';
import { Link } from "react-router-dom";

export default class Albums extends React.Component {
    render(){
        return (
            <tr className="table-success">
                <th scope="row">{this.props.album.id}</th>
                <th scope="row"><Link to={`albums/${this.props.album.id}`} >{this.props.album.title}</Link></th>
            </tr>
        )
    }
}

