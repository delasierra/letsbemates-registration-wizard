import React from 'react';
import { WithWizard } from 'react-albus';

const WizardNavigation = () => (
  <WithWizard
    render={({ next, previous, step, steps }) => (
      <div className="wizard-navigation">
        {steps.indexOf(step) > 0 && (
          <button className="btn btn-danger btn-lg" onClick={previous}>
            Back
          </button>
        )}

        {steps.indexOf(step) < steps.length - 1 && (
          <button className="btn btn-primary btn-lg" onClick={next}>
            Next
          </button>
        )}
      </div>
    )}
  />
);

export default WizardNavigation;
