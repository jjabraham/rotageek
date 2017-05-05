import React, { Component } from 'react';
import './pure-min.css';
import './style.css';

import ContactForm from './contact/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactForm />
      </div>
    );
  }
}


export default App;
