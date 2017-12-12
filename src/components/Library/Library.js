import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../../data/albums';
import playIcon from "./play-circle.svg"
import './library.css'

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library'>
       {
        this.state.albums.map( (album, index) =>
        <div className="card" style={{backgroundImage: "url(" + album.albumCover + ")"}}>
          <div className="card-header"><h4 class="card-artist">{album.artist}</h4></div>
          <div className="card-body">
            <Link to={`/album/${album.slug}`} key={index}>
              <img className="play-icon" src={playIcon}/>
              <h3 className="card-title">{album.title}</h3>
            </Link>
          </div>
          <ul className="list-group list-group-flush">
            {album.songs.map( (song) =>
              <li className="list-group-item">{song.title}</li>
            )}
          </ul>
        </div>
        )
       }
      </section>
    );
  }
}

export default Library;
