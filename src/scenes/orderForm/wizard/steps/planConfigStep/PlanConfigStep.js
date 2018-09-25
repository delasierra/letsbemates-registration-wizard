import React from 'react';

const PlanConfiStep = props => {
  // TODO: Create buttons to add services to add logic
  console.log(props.onAction);

  return (
    <div>
      <h1>This is PlanConfigurator component</h1>
      <button className="btn btn-primary btn-lg" onClick={props.onAction}>
        Next
      </button>
    </div>
  );
};

export default PlanConfiStep;
