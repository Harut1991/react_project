import React from 'react';
import { addPosts } from '../../actions';
import { connect } from 'react-redux';
import { getPosts } from '../../services';
import PostList from './post_list';


class Posts extends React.Component {

  componentDidMount() {
    getPosts(this.props.match.params.id)
      .then(response => {
        this.props.add_posts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render(){
    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
            </tr>
            </thead>
            <tbody>
            {this.props.posts &&
                ( 
                this.props.posts.map(res => {
                    return (
                    <PostList key={res.id} post={res} />
                    )
                })
                )
            }
            </tbody>
        </table>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.PostReducer.posts }
}

const mapDispatchToProps = dispatch => {
  return {
    add_posts: (posts) => dispatch(addPosts(posts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);