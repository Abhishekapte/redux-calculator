import React, { Component } from 'react';
import Calculator from './components/Calculator';
import History from './components/History';


class App extends Component {
    render() {
      return (
        <div>
          <Calculator />
          <History />
        </div>
      );
    }
  }
  
  
  
  export default App;