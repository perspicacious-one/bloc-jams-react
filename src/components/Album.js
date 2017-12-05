import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

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
      isPlaying: false
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
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
    if (currentIndex === 0) {return;}
    else {
      const newIndex = currentIndex - 1;
      const newSong = this.state.album.songs[newIndex]
      this.pause();
      this.setSong(newSong);
      this.play();
    }
  }



  renderSongs() {
    return (
      <tbody>
        {this.state.album.songs.map( (song, index) =>
          <tr className="song" key={index.toString()} onClick={ () => this.handleSongClick(song) } >
            <td>
              <button>
                <span className="ion-play"></span>
              </button>
            </td>
            <td><span className='song-number'>{index + 1}</span></td>
            <td>{song.title}</td>
            <td>{song.duration}</td>
          </tr>
        )}
      </tbody>
    )
  }

  render() {
    return (
      <section className='album'>
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          {this.renderSongs()}
        </table>
        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          handleSongClick={ () => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={ () => this.handlePrevClick()}
          />
      </section>
    );
  }
}

export default Album;
