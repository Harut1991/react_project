import React from 'react';
import { addAlbum, addPhotos } from '../../actions';
import { connect } from 'react-redux';
import { getAlbum, getPhotos } from '../../services';
import Photo from './photo';


class Album extends React.Component {

  componentDidMount() {
     Promise.all([
        getAlbum(this.props.match.params.albumId),
        getPhotos(this.props.match.params.albumId)
     ]).then(res => {
        this.props.add_album(res[0].data[0]);
        this.props.add_photos(res[1].data);
     })   
  }

  render(){
    return (
        <React.Fragment>
             {this.props.album &&
                <div>
                    <div className="alert alert-dismissible alert-warning">
                        <h4 className="alert-heading">{this.props.album.title}</h4>
                    </div>
                    <p className="text-danger"> Photos </p>
                    {this.props.photos &&
                        this.props.photos.map(res => {
                            return (
                                <Photo key={res.id} photo={res} />
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
      album: state.AlbumsReducer.album,
      photos: state.PhotoReducer.photos
 }
}

const mapDispatchToProps = dispatch => {
  return {
    add_album: (album) => dispatch(addAlbum(album)),
    add_photos: (photos) => dispatch(addPhotos(photos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);