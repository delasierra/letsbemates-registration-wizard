import React, { Component } from 'react';

import ShoppingCart from '../../components/shoppingCart/ShoppingCart';
import WizardContainer from './wizard/WizardContainer';
import Timeline from './timeline/Timeline';
import StepModel from './wizard/steps/StepModel';

import { STEP_ROUTES } from './OrderFormRoutes';
import { MENU_LABELS } from './OrderFormLabels';

import AbandonedCart from '../../components/abandonedCart/AbandonedCart';
import AdslStep from './wizard/steps/adslStep/AdslStep';
import CheckoutStep from './wizard/steps/checkoutStep/CheckoutStep';
import MobileStep from './wizard/steps/mobileStep/MobileStep';
import NbnStep from './wizard/steps/nbnStep/NbnStep';
import PlanConfigStep from './wizard/steps/planConfigStep/PlanConfigStep';
import SummaryStep from './wizard/steps/summaryStep/SummaryStep';

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
        step = new StepModel(
          index,
          STEP_ROUTES.abanCart,
          MENU_LABELS.abanCart,
          <AbandonedCart onAction={() => this.onStepAction(stepId)} />
        );
        break;
      case STEP_ROUTES.adsl:
        step = new StepModel(
          index,
          STEP_ROUTES.adsl,
          MENU_LABELS.adsl,
          <AdslStep onAction={() => this.onStepAction(stepId)} />
        );
        break;
      case STEP_ROUTES.mobile:
        step = new StepModel(
          index,
          STEP_ROUTES.mobile,
          'Mobile',
          <MobileStep onAction={() => this.onStepAction(stepId)} />
        );
        break;
      case STEP_ROUTES.nbn:
        step = new StepModel(
          index,
          STEP_ROUTES.nbn,
          'NBN',
          <NbnStep onAction={() => this.onStepAction(stepId)} />
        );
        break;
      case STEP_ROUTES.summary:
        step = new StepModel(
          index,
          STEP_ROUTES.summary,
          'Summary',
          <SummaryStep onAction={() => this.onStepAction(stepId)} />
        );
        break;
      case STEP_ROUTES.checkout:
        step = new StepModel(
          index,
          STEP_ROUTES.checkout,
          'Checkout',
          <CheckoutStep onAction={() => this.onStepAction(stepId)} />
        );
        break;
      default:
        step = new StepModel(
          index,
          STEP_ROUTES.plan,
          'Plan Configurator',
          <PlanConfigStep onAction={() => this.onStepAction(stepId)} />
        );
    }
    return step;
  };

  onStepAction = stepId => {
    switch (stepId) {
      case STEP_ROUTES.abanCart:
        console.log(STEP_ROUTES.abanCart, 'actions');
        break;
      case STEP_ROUTES.adsl:
        console.log(STEP_ROUTES.adsl, 'actions');
        break;
      case STEP_ROUTES.mobile:
        console.log(STEP_ROUTES.mobile, 'actions');
        break;
      case STEP_ROUTES.nbn:
        console.log(STEP_ROUTES.nbn, 'actions');
        break;
      case STEP_ROUTES.summary:
        console.log(STEP_ROUTES.summary, 'actions');
        break;
      case STEP_ROUTES.checkout:
        console.log(STEP_ROUTES.checkout, 'actions');
        break;
      default:
        console.log('Step general actions');
    }
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
