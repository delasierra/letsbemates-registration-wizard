import React, { Component } from 'react';

import ShoppingCart from '../../components/shoppingCart/ShoppingCart';
import WizardContainer from './wizard/WizardContainer';
import Timeline from './timeline/Timeline';
import StepModel from './wizard/steps/StepModel';

import { STEP_ROUTES, STEP_LABELS } from './OrderFormData';

import AbandonedCart from '../../components/abandonedCart/AbandonedCart';
import AdslStep from './wizard/steps/adslStep/AdslStep';
import CheckoutStep from './wizard/steps/checkoutStep/CheckoutStep';
import MobileStep from './wizard/steps/mobileStep/MobileStep';
import NbnStep from './wizard/steps/nbnStep/NbnStep';
import PlanConfigStep from './wizard/steps/planConfiguratorStep/PlanConfigStep';
import SummaryStep from './wizard/steps/summaryStep/SummaryStep';

class OrderForm extends Component {
  // TODO: create this var dynamic from plan configuration
  // TODO: Add userCofing as state to update timeline and wizardcontainer
  userConfig = [
    STEP_ROUTES.plan,
    STEP_ROUTES.abanCart,
    STEP_ROUTES.adsl,
    STEP_ROUTES.mobile,
    STEP_ROUTES.nbn,
    STEP_ROUTES.summary,
    STEP_ROUTES.checkout
  ];

  // Life hooks
  componentDidMount() {
    console.log('OrderForm', this.props);
  }

  // Methods
  getSteps = () => {
    let steps = [];
    for (let i = 0; i < this.userConfig.length; i++) {
      steps.push(this.getStep(i, this.userConfig[i]));
    }
    return steps;
  };

  getStep = (index, stepId) => {
    let step;
    switch (stepId) {
      case STEP_ROUTES.abanCart:
        step = new StepModel(index, STEP_ROUTES.abanCart, STEP_LABELS.abanCart, <AbandonedCart />);
        break;
      case STEP_ROUTES.adsl:
        step = new StepModel(index, STEP_ROUTES.adsl, STEP_LABELS.adsl, <AdslStep />);
        break;
      case STEP_ROUTES.mobile:
        step = new StepModel(index, STEP_ROUTES.mobile, 'Mobile', <MobileStep />);
        break;
      case STEP_ROUTES.nbn:
        step = new StepModel(index, STEP_ROUTES.nbn, 'NBN', <NbnStep />);
        break;
      case STEP_ROUTES.summary:
        step = new StepModel(index, STEP_ROUTES.summary, 'Summary', <SummaryStep />);
        break;
      case STEP_ROUTES.checkout:
        step = new StepModel(index, STEP_ROUTES.checkout, 'Checkout', <CheckoutStep />);
        break;
      default:
        step = new StepModel(index, STEP_ROUTES.plan, 'Plan Configurator', <PlanConfigStep />);
    }
    return step;
  };

  render() {
    return (
      <div className="row order-form">
        <Timeline steps={this.getSteps()} />
        <div className="col-sm-8">
          <WizardContainer steps={this.getSteps()} />
        </div>

        <div className="col-sm-4">
          <ShoppingCart />
        </div>
      </div>
    );
  }
}
export default OrderForm;
