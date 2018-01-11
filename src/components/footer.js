import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <div className="big-footer">
            <div className=" row middle-xs ">
              <a href="#" className="footer-cta col-xs-12"><h3>Try Figma For Free</h3></a>
            </div>
          </div>
          <div className="sml-footer">
            <div className="col-xs-12">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Donate via Paypal</a>
                </li>
                <li>
                  <a href="#">Submit a Freebie</a>
                </li>
              </ul>
            </div>
          </div>
      </footer>
    );
  }
}
export default Footer;