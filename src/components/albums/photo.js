import React from 'react';
export default class Photo extends React.Component {
    render(){
        return (
            <div className="alert alert-dismissible alert-secondary">
                <img src={this.props.photo.thumbnailUrl} />
                {this.props.photo.title}
            </div>
        )
    }
}

