import React, { Component } from 'react';

import ShoppingCart from '../../components/shoppingCart/ShoppingCart';
import WizardContainer from './wizard/WizardContainer';
import Timeline from './timeline/Timeline';

const ORDER_FORM_ROUTES = {
  abandonedCart: 'abandonedCart',
  plan: 'plan',
  adsl: 'adsl',
  nbn: 'nbn',
  mobile: 'mobile',
  summary: 'summary',
  checkout: 'checkout'
};

class OrderForm extends Component {
  render() {
    return (
      <div className="row order-form">
        <div className="col-sm-12">
          <Timeline className="col-sm-12" routes={ORDER_FORM_ROUTES} />
        </div>
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
