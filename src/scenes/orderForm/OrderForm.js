import React, { Component } from 'react';
import Timeline from './timeline/Timeline';
import ShoppingCart from '../../components/shoppingCart/ShoppingCart';
import WizardIndex from './wizard/WizardIndex';
import { STEPS, STEP_IDS, STEP_MENU_LABELS } from './OrderFormStaticData';
import OrderFormService from './OrderFormService';
import OrderFormState from './OrderFormState';
class OrderForm extends Component {
  // TODO: create this var dynamic from plan configuration (state?)
  userPlanConfiguration = []; // TODO: this should be an action
  wizardSteps = [];
  state = OrderFormState;

  constructor(props) {
    super(props);
    this.orderFormService = new OrderFormService();
  }

  // Lifecicle hooks
  componentWillMount() {
    // this.stateModel = new OrderFormStateModel();
    this.userPlanConfig = [
      // TODO: this should be updated in an action from plangConfigStep
      STEP_IDS.plan,
      STEP_IDS.abanCart,
      STEP_IDS.adsl,
      STEP_IDS.nbn,
      STEP_IDS.summary,
      STEP_IDS.mobile,
      STEP_IDS.userData,
      STEP_IDS.payment
    ];
    this.wizardSteps = this.orderFormService.getWizardSteps(this.userPlanConfig);
  }
  // Life hooks
  // componentDidMount() {
  //   console.log('OrderForm', this.props);
  // }

  // event handlers
  onStepAction = data => e => {
    // console.log('onStepAction', data.id);
    console.log('onStepAction', e.target);
    // console.log('onStepAction', stepId, data);
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
          {<WizardIndex steps={this.wizardSteps} stepId={STEPS} onStepAction={this.onStepAction} />}
        </div>
        <div className="col-sm-4">
          <ShoppingCart />
        </div>
      </div>
    );
  }
}
export default OrderForm;
