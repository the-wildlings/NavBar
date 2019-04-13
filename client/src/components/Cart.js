import React, { Component } from 'react';
import styles from '../user.module.css';
import PlusSign from './plusSign.js';
import FileCabs from './FileCabs.js';
import Star from './Star.js';
import Settinglogo from './Settinglogo.js';
import ShoppingCart from './ShoppingCartSVG.js';
import NewCart from './NewCart.js';
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      mainCart: [],
      HoldBin: [],
      items: [],
      carts: props.carts,
      price: 0
    };
    // console.log(this.state.carts);
    this.showCart = this.showCart.bind(this);
    this.hideCart = this.hideCart.bind(this);
    this.inputNewCart = this.inputNewCart.bind(this);
  }
  componentDidMount() {
    this.setState({
      items: [{ 1: 'songInfo', price: 1.49 }, { 2: 'songInfo', price: 1.49 }]
    });
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

  inputNewCart(e) {
    let newCart = this.state.cart.push({ name: e.target.value });
    this.setState({
      cart: newCart
    });
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
                  {this.state.items.length} item
                  <span className={styles.addSpace}>
                    {this.state.items
                      .map(item => item.price)
                      .reduce((a, b) => a + b)}
                  </span>
                </div>
              </div>
              <div className={styles.cartText}>
                Hold Bin <FileCabs />
                <div className={styles.quantity}>
                  {this.state.HoldBin.length} items
                </div>
              </div>

              {this.state.carts.map((cart, i) => (
                // console.log(cart);
                <div className={styles.newCart} key={i}>
                  <div className={styles.cartText}>
                    {cart}
                    <span className={styles.addSpace}>0</span>
                    <div className={styles.quantity}> 0 items</div>
                  </div>
                </div>
              ))}

              {/* <NewCart /> */}
              <div
                className={styles.cartText}
                onClick={e => this.props.handleAddClick(e)}
              >
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
