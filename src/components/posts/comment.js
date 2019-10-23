import React from 'react';
export default class Comment extends React.Component {
    render(){
        return (
            <div className="alert alert-dismissible alert-secondary">
                <strong>{this.props.comment.name} | {this.props.comment.email}</strong> <br/>
                {this.props.comment.body}
            </div>
        )
    }
}

