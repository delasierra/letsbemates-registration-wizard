import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import OrderForm from './scenes/orderForm/OrderForm';
// import { TweenMax, Elastic } from 'gsap';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <header className="App-header" />
          <OrderForm />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
