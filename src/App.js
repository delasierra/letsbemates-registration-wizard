import React, { Component } from 'react';
// import logo from './logo.svg';
import OrderForm from './scenes/orderForm/OrderForm';
// import { TweenMax, Elastic } from 'gsap';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <OrderForm />
      </div>
    );
  }
}

export default App;
