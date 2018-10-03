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

  constructor(props) {
    super(props);
    this.service = new OrderFormService();
    this.stepIds = this.service.getStepIds();
  }

  // Lifecicle hooks
  componentWillMount() {
    // this.stateModel = new OrderFormStateModel();
    this.userPlanConfig = [
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
    this.wizardSteps = this.service.getWizardSteps(this.userPlanConfig);
  }
  // Life hooks
  // componentDidMount() {
  //   console.log('OrderForm', this.props);
  // }

  // event handlers
  onWizardUpdates = data => e => {
    console.log('onWizardUpdates', data);
    // console.log('onWizardUpdates', e.target);
    // console.log('onWizardUpdates', stepId, data);
    // console.log('Event', e);
    // switch (stepId) {
    //   case props.routes.abanCart:
    //     console.log(props.routes.abanCart, 'actions');
    //     break;
    //   case props.routes.adsl:
    //     console.log(props.routes.adsl, 'actions');
    //     break;
    //   case props.routes.mobile:
    //     console.log(props.routes.mobile, 'actions');
    //     break;
    //   case props.routes.nbn:
    //     console.log(props.routes.nbn, 'actions');
    //     break;
    //   case props.routes.summary:
    //     console.log(props.routes.summary, 'actions');
    //     break;
    //   case props.routes.checkout:
    //     console.log(props.routes.checkout, 'actions');
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
          {
            <WizardIndex
              {...this.state}
              steps={this.wizardSteps}
              stepId={this.stepIds}
              onWizardUpdates={this.onWizardUpdates}
            />
          }
        </div>
        <div className="col-sm-4">
          <ShoppingCart />
        </div>
      </div>
    );
  }
}
export default OrderForm;
