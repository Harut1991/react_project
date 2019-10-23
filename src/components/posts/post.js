import React from 'react';
import { addPost, addComments } from '../../actions';
import { connect } from 'react-redux';
import { getPost, getComments } from '../../services';
import Comment from './comment';


class Post extends React.Component {

  componentDidMount() {
     Promise.all([
        getPost(this.props.match.params.postId),
        getComments(this.props.match.params.postId)
     ]).then(res => {
        this.props.add_post(res[0].data[0]);
        this.props.add_comments(res[1].data);
     })   
  }

  render(){
    return (
        <React.Fragment>
             {this.props.post &&
                <div>
                    <div className="alert alert-dismissible alert-warning">
                        <h4 className="alert-heading">{this.props.post.title}</h4>
                        <p className="mb-0">{this.props.post.body}</p>
                    </div>
                    <p className="text-danger"> Comments </p>
                    {this.props.comments &&
                        this.props.comments.map(res => {
                            return (
                                <Comment key={res.id} comment={res} />
                            )
                        })
                    }
                </div>
             }
        </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
      post: state.PostReducer.post,
      comments: state.CommentReducer.comments
 }
}

const mapDispatchToProps = dispatch => {
  return {
    add_post: (post) => dispatch(addPost(post)),
    add_comments: (comments) => dispatch(addComments(comments))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);