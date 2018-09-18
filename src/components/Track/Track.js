import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor(props) {
    super(props);

    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.renderAction=this.renderAction.bind(this);
    this.handlePlayPause=this.handlePlayPause.bind(this);

    this.state = {
      playing: false
      , song: ''
    }
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

  // handlePlayPause(event) {
  //   //var song = document.getElementById('spotPreview');
  //   this.setState = {
  //     song: event.target.value
  //   } 
  //   this.state.playing = !this.state.playing;
  //   //toggler.classlist.toggle('fa fa-pause');
  //   if (this.state.playing) {
  //     this.state.song.play();
  //   } else {
  //     this.state.song.pause();
  //   }
  //   event.preventDefault();

  //   // <audio id='spotPreview'>
  //         //   <source src={this.props.track.preview_url} type="audio/mpeg" />
  //         // </audio>
  //         // <a className='Track-action' onClick={this.handlePlayPause}><i id='toggler' className="fa fa-play"></i></a>
  // }

  handlePlayPause () {
    const previewUrl = this.props.track.preview_url;
    if (previewUrl) {
      return (
        <div>
        <audio id='preview'>
          <source src={this.props.track.preview_url} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <a className='Track-action' onClick=preview.play()><i id='toggler' className="fa fa-play"></i></a>
        </div>
      );
    }
    return;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          {this.handlePlayPause()}
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    )
  }
};

export default Track;