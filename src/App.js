import React, { Component } from 'react';
import fire from './fire';
import Header from './header';
import Cards from './cards';
import './App.css'; // Tell Webpack that App.js uses these styles

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      messages: []
    }; 
  }

  handleChange(e) {
    /* ... */
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

  render() {
    return (
      <div className="body">
        <Header />
        <div className="main">
          <div className="container">
            <Cards />
          </div>
        </div>
      </div>
    );
  }
}

export default App;