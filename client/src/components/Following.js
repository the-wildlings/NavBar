import React, { Component } from 'react';
import styles from '../user.module.css';
import FollowingIcon from './FollowingIcon.js';
import FilterArtist from './FilterArtist.js';
import Heart from './heartImg.js';

export default class Following extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFollowing: false
    };
    this.showFollowing = this.showFollowing.bind(this);
    this.hideFollowing = this.hideFollowing.bind(this);
  }
  showFollowing(e) {
    e.preventDefault();
    this.setState(
      {
        showFollowing: true
      },
      () => {
        document.addEventListener('mouseover', this.hideFollowing);
      }
    );
  }
  hideFollowing(e) {
    e.preventDefault();
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState(
        {
          showFollowing: false
        },
        () => {
          document.removeEventListener('mouseover', this.hideFollowing);
        }
      );
    }
  }
  render() {
    return (
      <div>
        <div onMouseOver={this.showFollowing}>
          {/* Following */}
          {/* <img src={require('../img/headphones.svg')} /> */}
          <div className={styles.followingIcon}>
            <FollowingIcon />
          </div>
          <span>
            <Heart className={styles.heart} />
          </span>
          <div className={styles.userBox} />
        </div>

        {this.state.showFollowing ? (
          <div
            id="following"
            className={styles.userMenu}
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <div className={styles.followingMenu}>
              <div className={styles.viewMyBeatPort}>View My Beatport</div>
              <div className={styles.followingMenuText}>
                {/* <input className={styles.filter} placeholder="FILTER" /> */}
                <FilterArtist />
                {/* <div>
                  MY ARTISTS
                  <span className={styles.addSpace}>View All</span>
                </div> */}
              </div>
              {/* <div className={styles.followingMenuText}>
                <div className={styles.artistAndLabels}>
                  MY LABELS
                  <span className={styles.addSpace}>View All</span>
                </div>
              </div> */}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
}
