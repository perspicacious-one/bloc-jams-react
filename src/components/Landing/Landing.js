import React from 'react';
import headphoneIcon from './../../assets/icons/ic_playlist_add_check_black_48px.svg';
import audioIcon from './../../assets/icons/ic_surround_sound_black_48px.svg';
import phoneIcon from './../../assets/icons/ic_phonelink_ring_black_48px.svg';
import './landing.css';

const Landing = () => (
<section class="main-content">
  <section className="jumbotron jumbotron-fluid">
    <h1 className="display-3">Jelly</h1>
    <h2 className="lead">Turn the music up!</h2>
  </section>
  <div id="landing-cards" className="container">
    <div className="card">
    <img src={headphoneIcon} className="icon-large" />
      <div className="card-body">
        <h3 className="point-title">Choose your music</h3>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
    </div>
    <div className="card">
    <img src={audioIcon} className="icon-large" />
      <div className="card-body">
        <h3 className="point-title">Unlimited, streaming, ad-free</h3>
        <p className="point-description">No arbitrary limits. No distractions</p>
      </div>
    </div>
    <div className="card">
    <img src={phoneIcon} className="icon-large" />
      <div className="card-body">
        <h3 className="point-title">Mobile enabled</h3>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
    </div>
    </div>
  </div>
</section>
);

export default Landing;
