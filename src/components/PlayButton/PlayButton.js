import React, { Component } from 'react';
import playIcon from './../../assets/icons/ic_play_circle_outline_black_36px.svg';
import pauseIcon from './../../assets/icons/ic_pause_circle_outline_black_36px.svg';
import playIconWhite from './../../assets/icons/ic_play_circle_outline_white_36px.svg';
import pauseIconWhite from './../../assets/icons/ic_pause_circle_outline_white_36px.svg';
import './play-button.css';

class PlayButton extends Component {

  renderPlay() {
    if(this.props.dark) {
      return (<button className="control-button"><img className="button-icon" src={playIcon}/></button>);
    }
    else {
      return (<button className="control-button"><img className="button-icon" src={playIconWhite}/></button>);
    }
  }
  renderPause() {
    if(this.props.dark) {
      return (<button className="control-button"><img className="button-icon" src={pauseIcon}/></button>);
    }
    else {
      return (<button className="control-button"><img className="button-icon" src={pauseIconWhite}/></button>);
    }
  }

  render() {
    if(this.props.isPlaying && this.props.currentSong === this.props.song) { return (this.renderPause()) }
    else { return (this.renderPlay()) }
  }
}
export default PlayButton;
