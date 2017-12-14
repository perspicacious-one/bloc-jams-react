import React, { Component } from 'react';
import PlayButton from './../PlayButton/PlayButton.js';
import skipIcon from "./../../assets/icons/ic_skip_next_white_36px.svg";
import previousIcon from "./../../assets/icons/ic_skip_previous_white_36px.svg";
import './player-bar.css';

class PlayerBar extends Component {

render() {
    return (
      <section className="player-bar">
        <div className="control-container">
          <section id="buttons">
            <button id="previous" className="control-button" onClick={this.props.handlePrevClick}>
              <img className="button-icon" src={previousIcon}/>
            </button>
            <span onClick={this.props.handleSongClick}>
              <PlayButton isPlaying={this.props.isPlaying} currentSong={this.props.currentSong} song={this.props.currentSong} />
            </span>
            <button id="next" className="control-button" onClick={this.props.handleNextClick}>
              <img className="button-icon" src={skipIcon}/>
            </button>
          </section>
          <section id="time-control">
            <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
            <input
              type="range"
              className="seek-bar progress-bar"
              value={(this.props.currentTime / this.props.duration) || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
            <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
          </section>
          <section id="volume-control">
            <div className ="icon ion-volume-low"></div>
              <input
                  type="range"
                  className="seek-bar"
                  value={this.props.volume}
                  max="1"
                  min="0"
                  step="0.1"
                  onChange={this.props.handleVolumeChange}
              />
            <div className ="icon ion-volume-high"></div>
          </section>
        </div>
      </section>
    )
  }
}

export default PlayerBar;
