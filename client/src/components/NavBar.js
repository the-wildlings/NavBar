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
      carts: []
      // itemInCart: props.mainCart
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
    this.setState({
      modal: true
    });
  }
  handleChange(e) {
    e.preventDefault;
    this.setState({
      value: e.target.value
    });
  }

  handleSave(e) {
    e.preventDefault;
    if (this.state.value.length) {
      let newCart = this.state.carts;
      newCart.push(this.state.value);
      this.setState(
        {
          carts: newCart,
          modal: !this.state.modal
        },
        document.getElementById('newCartForm').reset()
      );
    } else {
      this.setState({
        modal: !this.state.modal
      });
    }
  }

  // handleCartAdd(e) {
  //   e.preventDefault;
  //   this.setState({
  //     itemInCart: []
  //   });
  // }

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
          <div className={styles.tabs}>
            {/* GENRES */}
            <GenreMenu />
          </div>
          <div className={styles.tabs}>TRACKS</div>
          <div className={styles.tabs}>RELEASES</div>
          <div className={styles.tabs}>CHARTS</div>
          <div className={styles.tabs}>STEMS</div>
          <div className={styles.tabs}>SOUNDS</div>
          {/* <img src={}/> */}
          <div className="searchIcon" />
          <Search id="searchBar" />
          <div className={styles.userContainer}>
            <div className={styles.userTabs}>
              <AccountLogin />
            </div>
            <div /*href="following"*/ className={styles.userTabs}>
              <Following />
            </div>
            <div /*href="cart"*/ className={styles.userCart}>
              <Cart
                handleAddClick={this.handleAddClick}
                carts={this.state.carts}
                // handleCartAdd={this.handleCartAdd}
              />
              <div className={styles.cartPrice}>2 / $2.98</div>
            </div>
          </div>
        </div>
        <div style={style} className={styles.newCartPopUp}>
          <div className={styles.modalContent}>
            <header className={styles.modalHeader}>
              <h2>
                NEW CART{' '}
                <span
                  className={styles.closeButton}
                  onClick={this.handleAddClick}
                >
                  &times;
                </span>
              </h2>
            </header>
            <div className="contentContainer">
              {/* <p>NEW CART</p> */}
              <form id="newCartForm" className={styles.modalForm}>
                <p>NAME</p>
                <p>
                  <input
                    className={styles.modalInput}
                    onChange={this.handleChange}
                  />
                </p>
                <p>
                  <input type="checkbox" />
                  Set as default cart
                </p>
                <div
                  className={styles.saveButton}
                  onClick={e => this.handleSave(e)}
                >
                  SAVE CHANGES
                </div>
                <div
                  className={styles.cancelButton}
                  onClick={this.handleAddClick}
                >
                  CANCEL
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
