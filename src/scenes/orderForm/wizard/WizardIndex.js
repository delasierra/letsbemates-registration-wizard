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

  // JSX
  const getSteps = () => {
    let steps = [];
    console.log(props.steps);
    for (let i = 0; i < props.steps.length; i++) {
      steps.push(getStep(props.steps[i]));
    }
    return steps;
  };

  const getStep = stepData => {
    let step;
    // console.log(stepData);
    // TODO: distribute state vars on right order to steps FROM SERVICE??
    switch (stepData.id) {
      case props.stepId.abanCart:
        step = <AbandonedCart data={stepData} onAction={props.onStepAction} />;
        break;

      case props.stepId.adsl:
        step = <AdslStep data={stepData} onAction={props.onStepAction} />;
        break;

      case props.stepId.mobile:
        step = <MobileStep data={stepData} onAction={props.onStepAction} />;
        break;
      case props.stepId.nbn:
        step = <NbnStep data={stepData} onAction={props.onStepAction} />;
        break;

      case props.stepId.summary:
        step = <SummaryStep data={stepData} onAction={props.onStepAction} />;
        break;

      case props.stepId.userData:
        step = <UserDataStep data={stepData} onAction={props.onStepAction} />;
        break;

      case props.stepId.payment:
        step = <PaymentStep data={stepData} onAction={props.onStepAction} />;
        break;

      default:
        step = <PlanConfigStep data={stepData} onAction={props.onStepAction} />;
    }
    return (
      <Step key={stepData.id} id={stepData.id}>
        {step}
      </Step>
    );
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
