import React from 'react';
import headphoneIcon from './headphones-8x.webp';
import audioIcon from './audio-spectrum-8x.webp';
import phoneIcon from './phone-8x.webp';
import './landing.css';

const Landing = () => (
<section class="main-content">
  <section className="jumbotron jumbotron-fluid">
    <h1 className="display-3">Bloc Jams</h1>
    <h2 className="lead">Turn the music up!</h2>
  </section>
  <div id="landing-cards" className="container">
    <div className="card">
      <div className="card-body">
        <img src={headphoneIcon} className="icon-large" />
        <h3 className="point-title">Choose your music</h3>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <img src={audioIcon} className="icon-large" />
        <h3 className="point-title">Unlimited, streaming, ad-free</h3>
        <p className="point-description">No arbitrary limits. No distractions</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <img src={phoneIcon} className="icon-large" />
        <h3 className="point-title">Mobile enabled</h3>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
    </div>
    </div>
  </div>
</section>
);

export default Landing;
