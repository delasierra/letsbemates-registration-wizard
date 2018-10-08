import React from 'react';

const PaymentStep = props => {
  // TODO: Create buttons to add services to add logic
  console.log('PaymentStep', props);

  return (
    <div>
      <h1>This is PaymentStep component</h1>
      <button className="btn btn-primary btn-lg" onClick={props.onAction}>
        Next
      </button>
    </div>
  );
};

export default PaymentStep;
