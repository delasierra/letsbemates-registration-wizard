import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Wizard, Steps, Step } from 'react-albus';
import WizardNavigation from './wizardNavigation/WizardNavigation';

const WizardIndex = props => {
  /* TODO: 
  * Dinamic flow depending on user selection in Plan configurator Check build in functionality: https://github.com/americanexpress/react-albus#wizard
  * Add routing guard on navigations buttons
  */
  // console.log('WizardContainer', props);
  // Methods

  // console.log(props.products);
  // JSX
  // console.log(props.bussinessData);

  const steps = props.steps.map(step => {
    console.log(step);
    return (
      <Step key={step.id} id={step.id}>
        <step.component {...step.inputData} labels={step.labels} onAction={step.onStepAction} />
      </Step>
    );
  });

  return (
    <div className="wizard-container">
      <Route
        render={({ history }) => (
          <Wizard history={history}>
            <div className="steps">
              <Steps>{steps}</Steps>
            </div>
            <WizardNavigation />
          </Wizard>
        )}
      />
    </div>
  );
};

export default withRouter(WizardIndex);
