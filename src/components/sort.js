import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
        <div className="row middle-xs">
          <div class="row sort-row">
            <div class="sort">
              <ul>
                <li class="active">All</li>
                <li>Landing Page</li>
                <li>Portfolio</li>
                <li>Apps</li>
                <li>Blogs</li>
                <li>Misc</li>
              </ul>
              <div class="sort-action">
                Sort by : Date Added
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Sort;