import React, { Component } from 'react';
import styles from '../user.module.css';
// import { userInfo } from 'os';
import HeadphoneMan from './HeadphoneMan.js';

export default class AccountLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAccount: false
    };
    this.showAccount = this.showAccount.bind(this);
    this.hideAccount = this.hideAccount.bind(this);
  }
  showAccount(e) {
    e.preventDefault();
    this.setState(
      {
        showAccount: true
      },
      () => {
        document.addEventListener('mouseover', this.hideAccount);
      }
    );
  }
  hideAccount(e) {
    e.preventDefault();
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState(
        {
          showAccount: false
        },
        () => {
          document.removeEventListener('mouseover', this.hideAccount);
        }
      );
    }
  }

  render() {
    return (
      <div onMouseOver={this.showAccount}>
        <div>
          {/* Account */}
          <img
            // width="40"
            // height="40"
            // borderRadius="10"
            className={styles.headphoneMan}
            src={require('../img/Beatport-headphoneman.jpg')}
          />
          {/* <HeadphoneMan /> */}
        </div>
        <div className={styles.userBox} />
        {this.state.showAccount ? (
          <div
            id="accountLogin"
            className={styles.userMenu}
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <div className={styles.accountMenu}>
              <div className={styles.accountMenuText}>Account Settings</div>
              <div className={styles.accountMenuText}>My Downloads</div>
              <div className={styles.accountMenuText}>My Charts</div>
              <div className={styles.accountMenuText}>Log Out</div>
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
