import React, { Component } from 'react';
import styles from '../header.module.css';

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
        <div onMouseOver={this.showFollowing}>Following</div>
        {this.state.showFollowing ? (
          <div
            id="following"
            className={styles.menu}
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <ul>
              <li>
                View My Beatport
                <input placeholder="FILTER" />
              </li>
              <li>
                MY ARTISTS
                <span>View All</span>
              </li>
              <li>
                MY LABELS
                <span>View All</span>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
}
