import React, { Component } from 'react';
import twitterPng from './assets/twitter.png';
import logo from './assets/logo-new.svg';

class Header extends Component {

  render() {
    return (
        <header className="header">
          <div className="container">
            <div className="header__wrapper row start-xs middle-md">
              <div className="header__left">
                    <div className="header__logo"><a href="/"><img src={logo} alt="" /></a></div>
              </div>
              <div className="header__right">
                  <ul>
                      <li><a href="https://twitter.com/howbadeh" target="_blank" rel="noopener noreferrer"><img src={twitterPng} alt="@howbadeh" className="twitter-profile" /></a></li>
                      <li><a href="https://kshitijchoudhary.typeform.com/to/J3fUYS" className="btn btn-header">SUBMIT A FREEBIE</a></li>
                  </ul>
              </div>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;