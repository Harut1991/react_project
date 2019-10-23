import React from 'react';
import { connect } from 'react-redux';
import { addAlbums } from '../../actions';
import Albums from './albums';
import { getAlbums } from '../../services';

class AlbumsList extends React.Component {
    componentDidMount() {
        getAlbums(this.props.match.params.id)
          .then(response => {
            this.props.add_albums(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                </tr>
                </thead>
                <tbody>
                {this.props.albums &&
                    ( 
                    this.props.albums.map(res => {
                        return (
                        <Albums key={res.id} album={res} />
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
    return {albums: state.AlbumsReducer.albums}
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_albums: (albums) => dispatch(addAlbums(albums))
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(AlbumsList)