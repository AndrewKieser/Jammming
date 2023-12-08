import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor(props) {
    super(props);

    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.renderAction=this.renderAction.bind(this);
  }

  renderAction() {
    if(this.props.isRemoval){
      return <a className='Track-action' onClick={this.removeTrack}>-</a>
    }else{
      return <a className='Track-action' onClick={this.addTrack}>+</a>
    }
  }

  addTrack(track) {
    this.props.onAdd(this.props.track)
  }

  //removeTrack method
  removeTrack(track) {
    this.props.onRemove(this.props.track)
  }

  renderPreview() {
    const previewUrl = this.props.track.preview_url;
    console.log(previewUrl);
    if (previewUrl) {
      return (
        <div>
        <audio id='preview' controls>
          <source src={this.props.track.preview_url} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        </div>
      );
    }
    return;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderPreview()}
        {this.renderAction()}
      </div>
    )
  }
};

export default Track;