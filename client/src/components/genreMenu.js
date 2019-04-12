import React, { Component } from 'react';
import styles from '../header.module.css';

export default class GenreMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.showGenres = this.showGenres.bind(this);
    this.hideGenres = this.hideGenres.bind(this);
  }
  showGenres(e) {
    e.preventDefault();
    this.setState(
      {
        showMenu: true
      },
      () => {
        document.addEventListener('mouseover', this.hideGenres);
      }
    );
  }
  hideGenres(e) {
    e.preventDefault();
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState(
        {
          showMenu: false
        },
        () => {
          document.removeEventListener('mouseover', this.hideGenres);
        }
      );
    }
  }
  render() {
    return (
      <div>
        <div onMouseOver={this.showGenres}>
          <span className={styles.genreBox} />
          GENRES
          <i className="fa fa-caret-down" />
        </div>
        {this.state.showMenu ? (
          <div
            id="menu"
            className={styles.menu}
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <div className={styles.genreMenu}>
              <ul className={styles.highlightContainer}>
                <li className={styles.highlightsGreen}>
                  BEST NEW TRACKS
                  <div className={styles.description}>
                    This month's latest cuts
                  </div>
                </li>
                <li className={styles.highlightsGreen}>
                  PEAK HOUR TRACKS
                  <div className={styles.description}>
                    Tracks to bring down the house
                  </div>
                </li>
                <li className={styles.highlightsBlue}>
                  BEATPORT HYPE
                  <div className={styles.description}>
                    Start digging deeper now
                  </div>
                </li>
                <li className={styles.highlightsBlue}>
                  INTRODUCING BASS HOUSE
                  <div className={styles.description}>
                    Explore the sound of our new genre
                  </div>
                </li>
              </ul>
              <div id="genreList" className={styles.genreRow}>
                <ul className={styles.genreContainer}>
                  <li className={styles.genre}> AFRO HOUSE </li>
                  <li className={styles.genre}> BASS HOUSE </li>
                  <li className={styles.genre}> BIG ROOM </li>
                  <li className={styles.genre}> BREAKS </li>
                  <li className={styles.genre}> DJ TOOLS </li>
                  <li className={styles.genre}> DANCE </li>
                  <li className={styles.genre}> DEEP HOUSE </li>
                  <li className={styles.genre}> DRUM & BASS </li>
                </ul>
                <ul className={styles.genreContainer}>
                  <li className={styles.genre}> DUBSTEP </li>
                  <li className={styles.genre}> ELECTRO HOUSE </li>
                  <li className={styles.genre}> ELECTRONICA / DOWNTEMPO </li>
                  <li className={styles.genre}> FUNK / SOUL / DISCO </li>
                  <li className={styles.genre}>
                    {' '}
                    FUNKY / GROOVE/ JACKIN' HOUSE
                  </li>
                  <li className={styles.genre}> FUTURE HOUSE </li>
                  <li className={styles.genre}> GARAGE / BASSLINE / GRIME </li>
                  <li className={styles.genre}> HARD DANCE </li>
                </ul>
                <ul className={styles.genreContainer}>
                  <li className={styles.genre}> HARDCORE / HARD TECHNO </li>
                  <li className={styles.genre}> HIP-HOP / R&B </li>
                  <li className={styles.genre}> HOUSE </li>
                  <li className={styles.genre}> INDIE DANCE / NU DISCO </li>
                  <li className={styles.genre}> LEFTFIELD BASS </li>
                  <li className={styles.genre}> LEFTFIELD HOUSE & TECHNO </li>
                  <li className={styles.genre}> MELODIC HOUSE & TECHNO </li>
                  <li className={styles.genre}> MINIMAL / DEEP TECH </li>
                </ul>
                <ul className={styles.genreContainer}>
                  <li className={styles.genre}> PROGRESSIVE HOUSE </li>
                  <li className={styles.genre}> PSY-TRANCE </li>
                  <li className={styles.genre}> REGGAE / DANCEHALL / DUB </li>
                  <li className={styles.genre}> TECH HOUSE </li>
                  <li className={styles.genre}> TECHNO </li>
                  <li className={styles.genre}> TRANCE </li>
                  <li className={styles.genre}> TRAP / FUTURE BASS </li>
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
