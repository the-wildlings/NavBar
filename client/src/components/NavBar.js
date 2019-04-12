import React from 'react';
import styles from '../header.module.css';
import GenreMenu from './genreMenu.js';
import Search from './Search.js';
import AccountLogin from './AccountLogin.js';
import Following from './Following.js';
import Cart from './Cart';
// import logo from '../img/Beatport-logo.svg';
// const logo = require('../img/Beatport-logo.svg');

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render() {
    return (
      <div id="header-container" className={styles.headerContainer}>
        <div id="logo" className={styles.header}>
          {/* beatport */}
          <img src={require('../img/Beatport-logo.svg')} />
        </div>
        <a href="genre" className={styles.tabs}>
          {/* GENRES */}
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
        {/* <img src={}/> */}
        <div className="searchIcon" />
        <Search id="searchBar" />
        <div className={styles.userContainer}>
          <a href="account" className={styles.userTabs}>
            <AccountLogin />
          </a>
          <a /*href="following"*/ className={styles.userTabs}>
            <Following />
          </a>
          <a href="cart" className={styles.userCart}>
            <Cart />
            <div className={styles.cartPrice}>1/1.49</div>
          </a>
        </div>
      </div>
    );
  }
}
