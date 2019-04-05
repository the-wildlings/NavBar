import React from 'react';
import styles from '../header.module.css';
import GenreMenu from './genreMenu.js';
import Search from './Search.js';
import AccountLogin from './AccountLogin.js';
import Following from './Following.js';
import Cart from './Cart';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    // this.searchValue = this.searchValue.bind(this);
  }
  // searchValue(e) {
  //   this.setState({
  //     search: e.target.value
  //   });
  // }

  render() {
    return (
      <div id="header-container" className={styles.headerContainer}>
        <div id="logo" className={styles.header}>
          beatport
        </div>
        <a href="genre" className={styles.tabs}>
          GENRES
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
        <Search id="searchBar" />
        <a href="cart" className={styles.userTabs}>
          <Cart />
        </a>
        <a href="following" className={styles.userTabs}>
          <Following />
        </a>
        <a href="account" className={styles.userTabs}>
          <AccountLogin />
        </a>
      </div>
    );
  }
}
