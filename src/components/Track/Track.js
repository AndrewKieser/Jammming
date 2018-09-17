import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor(props) {
    super(props);

    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.renderAction=this.renderAction.bind(this);
    this.handlePlayPause=this.handlePlayPause.bind(this);
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

  handlePlayPause(x) {
    var playing;
    var song = document.getElementById("spotPreview")
    playing = !playing;
    //x.classlist.toggle('fas fa-pause');
    if (!playing) {
      song.play();
    } else {
      song.pause();
    }

  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <audio id='spotPreview' src={this.props.preview}>
          </audio>
          <i onClick={this.handlePlayPause} className="fa fa-play"></i>
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    )
  }
};

export default Track;

//<i class="fa fa-stop">{this.props.track.preview}</i>