import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Timeline = props => {
  /* TODO: 
  * Make real UI
  */
  // Getting the index to show all the steps previus to the active
  const getStepIndex = stepId => {
    for (let i = 0; i < props.steps.length; i++) {
      if (stepId === props.steps[i].id) {
        return props.steps[i].index;
      }
    }
    return 0;
  };

  // add right styles to links
  const getStateStyle = (stepIndex, props) => {
    const currentStepId = props.location.pathname.substr(1);
    const activeStepIndex = getStepIndex(currentStepId);
    if (stepIndex <= activeStepIndex) {
      return 'active';
    } else {
      return 'disabled';
    }
  };

  // JSX
  const stepLinks = props.steps.map(step => {
    return (
      <NavLink
        key={step.id}
        to={step.id}
        className={'nav-item nav-link ' + getStateStyle(step.index, props)}
      >
        {step.label}
      </NavLink>
    );
  });

  return (
    <nav className="timeline">
      {console.log(props.steps)}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">{stepLinks}</div>
      </div>
    </nav>
  );
};
export default withRouter(Timeline);
