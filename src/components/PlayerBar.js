import React, { Component } from 'react';

const PlayerBar = function(props) {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" onClick={props.handlePrevClick}>
            <span className="ion-skip-backward"></span>
          </button>
          <button id="play-pause" onClick={props.handleSongClick}>
            <span className={props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
          </button>
          <button id="next">
            <span className="ion-skip-forward"></span>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">-:--</div>
          <input type="range" className="seek-bar" value="0" />
          <div className="total-time">-:--</div>
        </section>
        <section id="volume-control">
          <div className="icon ion-volume-low"></div>
          <input type="range" className="seek-bar" value="80" />
          <div className="icon ion-volume-high"></div>
        </section>
      </section>
    )
}

export default PlayerBar;
