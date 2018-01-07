import React, { Component } from 'react';
import moment from 'moment';

class Sort extends Component {
  sortResources(type) {
    const { resources, handleResourceChange } = this.props;
    switch(type) {
      case 'date': {
        const sorted = Object.values(resources).sort((a,b) =>
          moment(a.date_created, "DD-MM-YYYY").format() > moment(b.date_created, "DD-MM-YYYY").format());
        handleResourceChange(sorted);
      }
      break;
    }
  }
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
              <div onClick={() => this.sortResources('date')} class="sort-action">
                Sort by : Date Added
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Sort;