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

  const getSteps = () => {
    let steps = [];
    for (let i = 0; i < props.userConfig.length; i++) {
      steps.push(getStep(i, props.userConfig[i]));
    }
    return steps;
  };

  const getStep = (index, stepId) => {
    let step;
    switch (stepId) {
      case props.routes.abanCart:
        step = new StepModel(
          index,
          props.routes.abanCart,
          props.labels.abanCart,
          <AbandonedCart onAction={() => onStepAction(stepId)} />
        );
        break;
      case props.routes.adsl:
        step = new StepModel(
          index,
          props.routes.adsl,
          props.labels.adsl,
          <AdslStep onAction={() => onStepAction(stepId)} />
        );
        break;
      case props.routes.mobile:
        step = new StepModel(
          index,
          props.routes.mobile,
          'Mobile',
          <MobileStep onAction={() => onStepAction(stepId)} />
        );
        break;
      case props.routes.nbn:
        step = new StepModel(
          index,
          props.routes.nbn,
          'NBN',
          <NbnStep onAction={() => onStepAction(stepId)} />
        );
        break;
      case props.routes.summary:
        step = new StepModel(
          index,
          props.routes.summary,
          'Summary',
          <SummaryStep onAction={() => onStepAction(stepId)} />
        );
        break;
      case props.routes.checkout:
        step = new StepModel(
          index,
          props.routes.checkout,
          'Checkout',
          <CheckoutStep onAction={() => onStepAction(stepId)} />
        );
        break;
      default:
        step = new StepModel(
          index,
          props.routes.plan,
          'Plan Configurator',
          <PlanConfigStep onAction={() => onStepAction(stepId)} />
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

  let steps = getSteps();
  // const steps = props.steps.map(step => {
  //   return (
  //     <Step key={step.id} id={step.id}>
  //       {step.component}
  //     </Step>
  //   );
  // });

  return (
    <div className="wizard-container">
      <Route
        render={({ history }) => (
          <Wizard history={history}>
            <div className="steps">
              <Steps>{getSteps().map(step => step.component)}</Steps>
            </div>
            <WizardNavigation />
          </Wizard>
        )}
      />
    </div>
  );
};

export default withRouter(WizardContainer);
