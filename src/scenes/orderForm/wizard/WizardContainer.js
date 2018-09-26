import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Wizard, Steps, Step } from 'react-albus';
import WizardNavigation from './wizardNavigation/WizardNavigation';

import StepModel from './steps/StepModel';

import AbandonedCart from '../../../components/abandonedCart/AbandonedCart';
import AdslStep from './steps/adslStep/AdslStep';
import CheckoutStep from './steps/checkoutStep/CheckoutStep';
import MobileStep from './steps/mobileStep/MobileStep';
import NbnStep from './steps/nbnStep/NbnStep';
import PlanConfigStep from './steps/planConfigStep/PlanConfigStep';
import SummaryStep from './steps/summaryStep/SummaryStep';

const WizardContainer = props => {
  /* TODO: 
  * Dinamic flow depending on user selection in Plan configurator Check build in functionality: https://github.com/americanexpress/react-albus#wizard
  * Add routing guard on navigations buttons
  */
  // console.log('WizardContainer', props);
  // Methods

  // JSX
  const getSteps = () => {
    let steps = [];
    for (let i = 0; i < props.steps.length; i++) {
      steps.push(getStep(props.steps[i]));
    }
    return steps;
  };

  const getStep = stepData => {
    let step;
    switch (stepData.id) {
      case props.stepId.abanCart:
        step = (
          <Step id={props.stepId.abanCart}>
            <AbandonedCart onAction={() => onStepAction(stepData.id)} />
          </Step>
        );
        break;
      case props.stepId.adsl:
        step = (
          <Step id={props.stepId.adsl}>
            <AdslStep onAction={() => onStepAction(stepData.id)} />
          </Step>
        );
        break;
      case props.stepId.mobile:
        step = (
          <Step id={props.stepId.mobile}>
            <MobileStep onAction={() => onStepAction(stepData.id)} />
          </Step>
        );
        break;
      case props.stepId.nbn:
        step = (
          <Step id={props.stepId.nbn}>
            <NbnStep onAction={() => onStepAction(stepData.id)} />
          </Step>
        );
        break;
      case props.stepId.summary:
        step = (
          <Step id={props.stepId.summary}>
            <SummaryStep onAction={() => onStepAction(stepData.id)} />
          </Step>
        );
        break;
      case props.stepId.checkout:
        step = (
          <Step id={props.stepId.checkout}>
            <CheckoutStep onAction={() => onStepAction(stepData.id)} />
          </Step>
        );
        break;
      default:
        step = (
          <Step id={props.stepId.plan}>
            <PlanConfigStep onAction={() => onStepAction(stepData.id)} />
          </Step>
        );
    }
    return step;
  };

  const onStepAction = stepId => {
    switch (stepId) {
      case props.routes.abanCart:
        console.log(props.routes.abanCart, 'actions');
        break;
      case props.routes.adsl:
        console.log(props.routes.adsl, 'actions');
        break;
      case props.routes.mobile:
        console.log(props.routes.mobile, 'actions');
        break;
      case props.routes.nbn:
        console.log(props.routes.nbn, 'actions');
        break;
      case props.routes.summary:
        console.log(props.routes.summary, 'actions');
        break;
      case props.routes.checkout:
        console.log(props.routes.checkout, 'actions');
        break;
      default:
        console.log('Step general actions');
    }
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

export default withRouter(WizardContainer);
