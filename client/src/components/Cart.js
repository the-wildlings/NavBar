import React, { Component } from 'react';
import styles from '../header.module.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false
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
        <div onMouseOver={this.showCart}>Cart</div>
        {this.state.showCart ? (
          <div
            id="cart"
            className={styles.menu}
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <ul>
              <li>MY CARTS SETTING</li>
              <li>Main Cart*</li>
              <li>Hold Bin</li>
              <li>NEW CART</li>
            </ul>
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
