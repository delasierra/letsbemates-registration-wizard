import React from 'react';

const PlanConfigStep = props => {
  // TODO: Create buttons to add services to add logic
  console.log('PlanConfigStep', props);

  return (
    <div>
      <h1>This is PlanConfigurator component</h1>
      <button className="btn btn-primary btn-lg" onClick={props.onAction(props.data, 1)}>
        Next
      </button>
    </div>
  );
};

export default PlanConfigStep;
