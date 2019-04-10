import React, { Component } from 'react';
import styles from '../user.module.css';
import PlusSign from './plusSign.js';
import FileCabs from './FileCabs.js';
import Star from './Star.js';
import Settinglogo from './Settinglogo.js';
import ShoppingCart from './ShoppingCartSVG.js';
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      mainCart: [],
      HoldBin: []
    };
    this.showCart = this.showCart.bind(this);
    this.hideCart = this.hideCart.bind(this);
  }
  showCart(e) {
    e.preventDefault();
    this.setState(
      {
        showCart: true
      },
      () => {
        document.addEventListener('mouseover', this.hideCart);
      }
    );
  }
  hideCart(e) {
    e.preventDefault();
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState(
        {
          showCart: false
        },
        () => {
          document.removeEventListener('mouseover', this.hideCart);
        }
      );
    }
  }
  render() {
    return (
      <div>
        <div onMouseOver={this.showCart}>
          {/* Cart */}
          {/* <img src={require('../img/shopping-cart.svg')} /> */}
          <div className={styles.cartImg}>
            <ShoppingCart />
          </div>
          <div className={styles.userBox} />
        </div>
        {this.state.showCart ? (
          <div
            id="cart"
            className={styles.userMenu}
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <div className={styles.cartMenu}>
              <div className={styles.myCart}>
                MY CARTS <Settinglogo />
              </div>
              <div className={styles.cartText}>
                Main Cart <Star />
                <div className={styles.quantity}>
                  1 item
                  <span className={styles.addSpace}>$1.99</span>
                </div>
              </div>
              <div className={styles.cartText}>
                Hold Bin <FileCabs />
                <div className={styles.quantity}>0 items</div>
              </div>
              <div className={styles.cartText}>
                <PlusSign />
                NEW CART
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
// export default AccountLogin;

{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
}
