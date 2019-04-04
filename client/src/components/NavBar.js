import React from 'react';
// import styles from '../../dist/button.module.css';
import styles from '../header.module.css';
import GenreMenu from './genreMenu.js';
import Search from './Search.js';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.searchValue = this.searchValue.bind(this);
  }
  searchValue(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    return (
      <div id="header-container" className={styles.headerContainer}>
        <div id="logo" className={styles.header}>
          beatport
        </div>
        <a href="logo" className={styles.tabs}>
          <GenreMenu />
        </a>
        <a href="tracks" className={styles.tabs}>
          TRACKS
        </a>
        <a href="releases" className={styles.tabs}>
          RELEASES
        </a>
        <a href="charts" className={styles.tabs}>
          CHARTS
        </a>
        <a href="stems" className={styles.tabs}>
          STEMS
        </a>
        <a href="sounds" className={styles.tabs}>
          SOUNDS
        </a>
        {/* <input
          id="searchBar"
          className={styles.search}
          onChange={this.searchValue}
        /> */}
        <Search id="searchBar" className={styles.search} />
        <a href="account" className={styles.userTabs}>
          account
        </a>
        <a href="following" className={styles.userTabs}>
          following
        </a>
        <a href="cart" className={styles.userTabs}>
          cart
        </a>
      </div>
    );
  }
}
