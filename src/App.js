import React, { Component } from 'react';
import fire from './fire';
import Header from './header';
import Cards from './cards';
import Sort from './components/sort';
import './App.css'; // Tell Webpack that App.js uses these styles

class App extends Component {
  constructor(props) {
    super(props);
        // let database = fire.database();

    // this.database = fire.database().ref().child('recommendation');
    this.database = fire.database().ref().child('resources');

    this.state = { 
      resources: {},
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

  handleResourceChange(resources) {
    this.setState({ resources });
  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }

  componentWillUnmount() { 
    this.firebaseRef.off();
  }

  render() {
    const { resources } = this.state;
    return (
      <div className="body">
        <Header />
        <div className="main">
          <div className="container">
            <Sort handleResourceChange={this.handleResourceChange.bind(this)} resources={resources} />
            <Cards resources={resources} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;