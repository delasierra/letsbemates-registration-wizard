import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Wizard, Steps, Step } from 'react-albus';
import WizardNavigation from './wizardNavigation/WizardNavigation';

import AbandonedCart from '../../../components/abandonedCart/AbandonedCart';
import AdslStep from './steps/adslStep/AdslStep';
import UserDataStep from './steps/userDataStep/UserDataStep';
import MobileStep from './steps/mobileStep/MobileStep';
import NbnStep from './steps/nbnStep/NbnStep';
import PlanConfigStep from './steps/planConfigStep/PlanConfigStep';
import SummaryStep from './steps/summaryStep/SummaryStep';
import PaymentStep from './steps/paymentStep/PaymentStep';

const WizardIndex = props => {
  /* TODO: 
  * Dinamic flow depending on user selection in Plan configurator Check build in functionality: https://github.com/americanexpress/react-albus#wizard
  * Add routing guard on navigations buttons
  */
  // console.log('WizardContainer', props);
  // Methods

  // console.log(props.products);
  // JSX
  console.log(props.bussinessData);
  const getSteps = () => {
    let steps = [];
    for (let i = 0; i < props.steps.length; i++) {
      steps.push(getStep(props.steps[i]));
    }
    return steps;
  };

  const getStep = stepData => {
    let DynamicStep;
    let inputData;
    // console.log('stepData', stepData);
    switch (stepData.id) {
      case props.stepId.abanCart:
        DynamicStep = AbandonedCart;
        inputData = {
          email: props.userData.email,
          name: props.userData.name,
          surname: props.userData.surname
        };
        break;

      case props.stepId.adsl:
        DynamicStep = AdslStep;
        inputData = { ...props.products.internet };
        break;

      case props.stepId.nbn:
        DynamicStep = NbnStep;
        inputData = { ...props.products.internet };
        break;

      case props.stepId.mobile:
        DynamicStep = MobileStep;
        inputData = { ...props.products.mobile };
        break;

      case props.stepId.userData:
        DynamicStep = UserDataStep;
        inputData = {
          ...props.userData,
          bussinessData: props.bussinessData,
          terms: props.terms,
          deliveryData: props.deliveryData
        };
        break;

      case props.stepId.payment:
        DynamicStep = PaymentStep;
        inputData = { ...props.payment };
        break;

      case props.stepId.summary:
        DynamicStep = SummaryStep;
        inputData = { ...props };
        break;

      default:
        DynamicStep = PlanConfigStep;
        inputData = { ...props.products };
    }

    return (
      <Step key={stepData.id} id={stepData.id}>
        <DynamicStep {...inputData} labels={stepData.labels} onAction={onStepAction} />
      </Step>
    );
  };

  const onStepAction = data => e => {
    console.log('onStepAction', e.target.value, data);
    // console.log('onStepAction', e.target);
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

  return (
    <div className="wizard-container">
      <Route
        render={({ history }) => (
          <Wizard history={history}>
            <div className="steps">
              <Steps>{getSteps()}</Steps>
            </div>
            <WizardNavigation />
          </Wizard>
        )}
      />
    </div>
  );
};

export default withRouter(WizardIndex);
