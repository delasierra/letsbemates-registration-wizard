import React, { Component } from 'react';
import Timeline from './timeline/Timeline';
import ShoppingCart from '../../components/shoppingCart/ShoppingCart';
import WizardIndex from './wizard/WizardIndex';
import OrderFormService from './OrderFormService';
import OrderFormState from './OrderFormState';

class OrderForm extends Component {
  // TODO: create this var dynamic from plan configuration (state?)
  service;
  stepIds;
  userPlanConfiguration = []; // TODO: this should be an action
  wizardSteps = [];
  state = OrderFormState;

  // Lifecicle hooks
  componentWillMount() {
    this.service = new OrderFormService();
    this.stepIds = this.service.getStepIds();
    this.userStepsConfig = [
      // TODO: this should be updated in an action from plangConfigStep
      this.stepIds.plan,
      this.stepIds.abanCart,
      this.stepIds.adsl,
      this.stepIds.nbn,
      this.stepIds.summary,
      this.stepIds.mobile,
      this.stepIds.userData,
      this.stepIds.payment
    ];
    this.wizardSteps = this.service.getWizardSteps(this.userStepsConfig);
    // TODO: add state to step props
  }

  // Life hooks
  componentWillReceiveProps(nextProps) {
    // TODO: update props to state
    console.log('componentWillReceiveProps', nextProps);
  }

  getSteps = () => {
    let steps = [];
    for (let i = 0; i < this.wizardSteps.length; i++) {
      steps.push(this.getStep(this.wizardSteps[i]));
    }
    return steps;
  };

  getStep = stepData => {
    return { ...this.service.setStepInputData(stepData, this.state) };
  };

  onStepAction = data => e => {
    console.log('onStepAction', e.target.value, data);
    // console.log('onStepAction', e.target);
    // console.log('onStepAction', stepId, data);
    // console.log('Event', e);
    // switch (stepId) {
    //   case this.state.routes.abanCart:
    //     console.log(this.state.routes.abanCart, 'actions');
    //     break;
    //   case this.state.routes.adsl:
    //     console.log(this.state.routes.adsl, 'actions');
    //     break;
    //   case this.state.routes.mobile:
    //     console.log(this.state.routes.mobile, 'actions');
    //     break;
    //   case this.state.routes.nbn:
    //     console.log(this.state.routes.nbn, 'actions');
    //     break;
    //   case this.state.routes.summary:
    //     console.log(this.state.routes.summary, 'actions');
    //     break;
    //   case this.state.routes.checkout:
    //     console.log(this.state.routes.checkout, 'actions');
    //     break;
    //   default:
    //     console.log('Step general actions');
    // }
  };

  render() {
    // console.log(this.OrderFormService.getStepRoutes());
    return (
      <div className="row order-form">
        <Timeline steps={this.wizardSteps} />
        <div className="col-sm-8">
          {<WizardIndex {...this.state} steps={this.getSteps()} onStepAction={this.onStepAction} />}
        </div>
        <div className="col-sm-4">
          <ShoppingCart />
        </div>
      </div>
    );
  }
}
export default OrderForm;
