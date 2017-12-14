import React, { Component } from 'react';
import albumData from './../../data/albums';
import PlayButton from './../PlayButton/PlayButton.js';
import PlayerBar from '../PlayerBar/PlayerBar.js';

import "./album.css";

class Album extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      isPlaying: false,
      volume: 0.5
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  formatTime(seconds) {
    const time = Math.floor(seconds);
    const prettySeconds = String(time % 60);
    const prettyMin = String(Math.floor((time - prettySeconds) / 60));

    return prettyMin + ":" + prettySeconds.padStart(2, "0");
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      }
    }
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song })
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    }
    else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song)
    if (currentIndex === 0) {
      this.audioElement.currentTime = 0;
      this.setState({ currentTime: 0 })
      return;
    }
    else {
      const newIndex = currentIndex - 1;
      const newSong = this.state.album.songs[newIndex]
      this.pause();
      this.setSong(newSong);
      this.play();
    }
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song)
    if (currentIndex === this.state.album.songs.length - 1) {return;}
    else {
      const newIndex = currentIndex + 1;
      const newSong = this.state.album.songs[newIndex]
      this.pause();
      this.setSong(newSong);
      this.play();
    }
  }
  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ volume: newVolume });
  }
  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  renderSongs() {
    return (
      <tbody className="list-group">
        {this.state.album.songs.map( (song, index) =>
          <tr className="song-row list-group-item" key={index.toString()}>
            <td className="col-play" onClick={ () => this.handleSongClick(song) } >
              <PlayButton isPlaying={this.state.isPlaying} currentSong={this.state.currentSong} song={song} dark={true}/>
            </td>
            <td className="col-title"><span className='song-number'>{index + 1 + ". "}</span>{song.title}</td>
            <td className="col-time">{this.formatTime(song.duration)}</td>
          </tr>
        )}
      </tbody>
    )
  }

  render() {
    return (
      <section className='album'>
        <div className="container section-container">
          <section id="album-info">
            <img id="album-cover-art" src={this.state.album.albumCover} />
            <div className="jumbotron album-jumbotron">
              <h1 id="album-title display-4">{this.state.album.title}</h1>
              <h2 className="artist lead">{this.state.album.artist}</h2>
              <div id="release-info lead">{this.state.album.releaseInfo}</div>
            </div>
          </section>
          <div className="song-container">
            <table id="song-list">
              <colgroup className="row">
                <col id="song-number-column" />
                <col id="song-title-column" />
                <col id="song-duration-column" />
              </colgroup>
              {this.renderSongs()}
            </table>
          </div>
        </div>
        <footer>
          <PlayerBar
            isPlaying={this.state.isPlaying}
            currentSong={this.state.currentSong}
            currentTime={this.audioElement.currentTime}
            duration={this.audioElement.duration}
            handleSongClick={ () => this.handleSongClick(this.state.currentSong)}
            handlePrevClick={ () => this.handlePrevClick()}
            handleNextClick={ () => this.handleNextClick()}
            handleTimeChange={(e) => this.handleTimeChange(e)}
            handleVolumeChange={(e) => this.handleVolumeChange(e)}
            formatTime={(seconds) => this.formatTime(seconds)}
            />
          <h6>A Bloc Project</h6>
        </footer>
      </section>
    );
  }
}

export default Album;
