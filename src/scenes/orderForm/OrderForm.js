import React, { Component } from 'react';

import AbandonedCart from '../../components/abandonedCart/AbandonedCart';

class OrderForm extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <AbandonedCart />
        <button type="button" className="btn btn-danger">
          Primary
        </button>
      </div>
    );
  }
}

export default OrderForm;
