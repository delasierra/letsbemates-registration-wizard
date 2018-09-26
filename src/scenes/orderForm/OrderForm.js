import React, { Component } from 'react';
import Timeline from './timeline/Timeline';
import ShoppingCart from '../../components/shoppingCart/ShoppingCart';
import WizardContainer from './wizard/WizardContainer';
import OrderFormStaticData from './OrderFormStaticData';
class OrderForm extends Component {
  // TODO: create this var dynamic from plan configuration (state?)
  data;
  userPlanConfiguration = []; // TODO: this should be an action
  wizardSteps = [];
  constructor(props) {
    super(props);
    this.localDataService = new OrderFormStaticData();
  }

  // Lifecicle hooks
  componentWillMount() {
    this.userPlanConfig = [
      // TODO: this should be updated in an action from plangConfigStep
      this.localDataService.STEP_IDS.plan,
      this.localDataService.STEP_IDS.abanCart,
      this.localDataService.STEP_IDS.adsl,
      this.localDataService.STEP_IDS.nbn,
      this.localDataService.STEP_IDS.summary,
      this.localDataService.STEP_IDS.mobile,
      this.localDataService.STEP_IDS.checkout
    ];
    this.wizardSteps = this.localDataService.getWizardSteps(this.userPlanConfig);
  }
  // Life hooks
  // componentDidMount() {
  //   console.log('OrderForm', this.props);
  // }

  render() {
    // console.log(this.localDataService.getStepRoutes());
    return (
      <div className="row order-form">
        <Timeline steps={this.wizardSteps} />
        <div className="col-sm-8">{<WizardContainer steps={this.wizardSteps} />}</div>
        <div className="col-sm-4">
          <ShoppingCart />
        </div>
      </div>
    );
  }
}
export default OrderForm;
