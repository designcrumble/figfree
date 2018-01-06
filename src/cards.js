import React, { Component } from 'react';
import fire from './fire';


class Cards extends Component {
  constructor(props) {
    super(props);

    // let database = fire.database();

    // this.database = fire.database().ref().child('recommendation');
    this.database = fire.database().ref().child('resources');

    this.state = { 
      resources: [],
      id: null,
      recommendation: 2,
      messages: [],
      user: null // <-- user authentication
    }; // <- set up react state
  }

  componentDidMount(){
    this.database.on('value', snap => {
      // console.log(snap.val());
      this.setState({
        // recommendation : snap.val()
           // id: snap.val()
           resources: snap.val()
      })
    })
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  render() {
    return (
        <div className="row middle-xs">
            <ul className="flex-list">
              {Object.values(this.state.resources).map((resource, i) => 
                <li key={i} className="col-xs-12 col-sm-12 col-md-4 cards">
                    <figure className="card">
                      <img width="720" height="315" src={resource.thumb} alt="" className="card__image" />
                      <figcaption className="card__details">
                        <div className="card__description">
                          <h3 className="card__heading">{resource.name}</h3>
                          <div className="card__labels">{resource.category}</div>                    
                        </div>
                        <div className="card__actions">
                          <a href={resource.link} className="primary-link">Open in Figma</a>
                        </div>
                      </figcaption>
                    </figure>
                </li> 
                )}
            </ul>
        </div>
    );
  }
}

export default Cards;