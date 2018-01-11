import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="hero" id="hero">
        <div className="row middle-xs">
          <div className="hero">
            <div className="col-xs-6">
              <div className="about">A collection of design resources for the figma community.</div>
              <a href="#" className="col-xs-8 cta">Subscribe to our newsletter.</a>
            </div>
            <div className="col-xs-6"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;