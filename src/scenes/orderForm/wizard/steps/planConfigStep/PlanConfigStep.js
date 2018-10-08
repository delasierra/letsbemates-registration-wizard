import React from 'react';
import { PlanConfigStepModel } from './PlanConfigStepModel';

const PlanConfigStep = props => {
  // TODO: Create buttons to add services to add logic
  console.log('PlanConfigStep', props);
  console.log('PlanConfigStep', props.internet.addToCart);

  const stepData = PlanConfigStepModel;

  // add right styles to links
  const getStateStyle = isChecked => {
    if (isChecked) {
      return 'active';
    }
  };

  const updateStepData = value => {
    console.log(updateStepData);
    stepData.products.internet = value;
    // props.onAction(stepData.products);
  };

  return (
    <div className="row">
      <h1>This is PlanConfigurator component</h1>

      {/* Internet toggle group*/}
      <div id="role" className="col-sm-12 btn-group" aria-label="Project role">
        <button
          className={'btn btn-secondary ' + getStateStyle(props.internet.addToCart)}
          type="button"
          value={props.internet.addToCart}
          checked={props.internet.addToCart}
          onClick={() => props.onAction}
        >
          I want Internet
        </button>

        <button
          className={'btn btn-secondary ' + getStateStyle(!props.internet.addToCart)}
          type="button"
          value={!props.internet.addToCart}
          checked={!props.internet.addToCart}
          onClick={() => props.onAction}
        >
          I don't want internet
        </button>
      </div>

      {/* Mobile toggle group*/}
      <div id="role" className="col-sm-12 btn-group" aria-label="Project role">
        <button
          className="btn btn-secondary "
          type="button"
          value="owner"
          onClick={() => ((props.mobile.addToCart = true), console.log(props.mobile))}
        >
          I want a mobile phone
        </button>
        <button
          className="btn btn-secondary active"
          type="button"
          value="freelancer"
          onClick={() => ((props.mobile.addToCart = false), console.log(props.mobile))}
        >
          I don't want a mobile phone
        </button>
      </div>

      <div className="col-sm-12">
        <button className="btn btn-primary btn-lg" onClick={props.onAction}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PlanConfigStep;
