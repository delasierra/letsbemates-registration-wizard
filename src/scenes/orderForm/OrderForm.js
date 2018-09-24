import React, { Component } from 'react';

import ShoppingCart from '../../components/shoppingCart/ShoppingCart';
import WizardContainer from './wizard/WizardContainer';
import Timeline from './timeline/Timeline';

const ORDER_FORM_ROUTES = {
  abandonedCart: { id: 'abandonedCart', label: 'Abandoned Cart' },
  plan: { id: 'plan', label: 'Plan configurator' },
  adsl: { id: 'adsl', label: 'ADSL' },
  nbn: { id: 'nbn', label: 'NBN' },
  mobile: { id: 'mobile', label: 'Mobile' },
  summary: { id: 'summary', label: 'Summary' },
  checkout: { id: 'checkout', label: 'Checkout' }
};

class OrderForm extends Component {
  componentDidMount() {
    console.log('OrderForm', this.props);
  }

  render() {
    return (
      <div className="row order-form">
        <Timeline routes={ORDER_FORM_ROUTES} />
        <div className="col-sm-8">
          <WizardContainer routes={ORDER_FORM_ROUTES} />
        </div>

        <div className="col-sm-4">
          <ShoppingCart />
        </div>
      </div>
    );
  }
}
export default OrderForm;
