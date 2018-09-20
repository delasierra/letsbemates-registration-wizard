import React from 'react';
import { WithWizard } from 'react-albus';

const Navigation = () => (
  <WithWizard
    render={({ next, previous, step, steps }) => (
      <div className="example-buttons">
        {steps.indexOf(step) > 0 && (
          <button className="btn btn-danger" onClick={previous}>
            Back
          </button>
        )}

        {steps.indexOf(step) < steps.length - 1 && (
          <button className="btn btn-primary" onClick={next}>
            Next
          </button>
        )}
      </div>
    )}
  />
);

export default Navigation;
