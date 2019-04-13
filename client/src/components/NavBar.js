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
      search: '',
      modal: false,
      value: '',
      carts: ['Test']
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.modalStay = this.modalStay.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleAddClick(e) {
    e.preventDefault;
    this.setState({
      modal: !this.state.modal
    });
  }
  modalStay(e) {
    e.preventDefault;
    this.setState(
      {
        modal: true
      },
      console.log(this.state.modal)
    );
  }
  handleChange(e) {
    this.setState(
      {
        value: e.target.value
      },
      () => console.log(this.state.value)
    );
  }

  handleSave(e) {
    if (this.state.value.length) {
      let newCart = this.state.carts;
      newCart.push(this.state.value);
      console.log(Array.isArray(this.state.carts));
      this.setState(
        {
          carts: newCart,
          modal: !this.state.modal
        },
        () => console.log(this.state.carts)
      );
    } else {
      this.setState({
        modal: !this.state.modal
      });
    }
  }

  render() {
    let style = {
      display: this.state.modal ? 'flex' : 'none'
    };
    return (
      <div>
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
            <a /*href="cart"*/ className={styles.userCart}>
              <Cart
                handleAddClick={this.handleAddClick}
                carts={this.state.carts}
              />
              <div className={styles.cartPrice}>1 / $1.49</div>
            </a>
          </div>
        </div>
        <div style={style} className={styles.newCartPopUp}>
          <div className={styles.modalContent}>
            <header className="modalHeader">
              <h2>NEW CART</h2>
              <span className="close" onClick={this.handleAddClick}>
                &times;
              </span>
            </header>
            <div className="contentContainer">
              {/* <p>NEW CART</p> */}
              <p>NAME</p>
              <p>
                <input
                  className={styles.modalInput}
                  onChange={this.handleChange}
                />
              </p>
              <p>Set as default cart</p>
              <button onClick={this.handleSave}>SAVE CHANGES</button>
              <button onClick={this.handleAddClick}>CANCEL</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
