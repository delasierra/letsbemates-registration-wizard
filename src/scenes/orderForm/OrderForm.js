import React, { Component } from 'react';

import ShoppingCart from '../../components/shoppingCart/ShoppingCart';
import WizardContainer from './wizard/WizardContainer';
import Timeline from './timeline/Timeline';

import { STEP_ROUTES } from './OrderFormRoutes';
import { MENU_LABELS } from './OrderFormLabels';
class OrderForm extends Component {
  // TODO: create this var dynamic from plan configuration
  userConfig = [
    // TODO: Add userCofing as state to update timeline and wizardcontainer
    STEP_ROUTES.plan,
    STEP_ROUTES.abanCart,
    STEP_ROUTES.adsl,
    STEP_ROUTES.mobile,
    STEP_ROUTES.nbn,
    STEP_ROUTES.summary,
    STEP_ROUTES.checkout
  ];

  // Life hooks
  // componentDidMount() {
  //   console.log('OrderForm', this.props);
  // }

  render() {
    return (
      <div className="row order-form">
        {/*
        <Timeline steps={this.getSteps()} />
        */}
        <div className="col-sm-8">
          <WizardContainer userConfig={this.userConfig} labels={MENU_LABELS} routes={STEP_ROUTES} />
        </div>
        <div className="col-sm-4">
          <ShoppingCart />
        </div>
      </div>
    );
  }
}
export default OrderForm;
