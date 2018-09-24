import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

// STATELESS component
// Methods
const _getStateStyle = (stepLink, props) => {
  const currentStep = props.location.pathname;
  if ('/' + stepLink === currentStep) {
    return 'active';
  } else {
    return 'disable';
  }
};

const _showProgress = () => {
  console.log('progress');
  // TODO:
  // Diasable every of steps farder from current (work with Arrays)
};

const Timeline = props => (
  /* TODO: 
  * Dynamic content (array of stpes form props)
  * Make own structure
  * Styles
  */
  console.log('Timeline', props),
  _showProgress(),
  (
    <nav className="timeline">
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
        <div className="navbar-nav">
          <NavLink
            to={props.routes.plan.id}
            className={'nav-item nav-link ' + _getStateStyle(props.routes.plan.id, props)}
          >
            {props.routes.plan.label}
          </NavLink>

          <NavLink
            to={props.routes.abandonedCart.id}
            className="nav-item nav-link"
            className={'nav-item nav-link ' + _getStateStyle(props.routes.abandonedCart.id, props)}
          >
            {props.routes.abandonedCart.label}
          </NavLink>

          <NavLink
            to={props.routes.adsl.id}
            className="nav-item nav-link"
            className={'nav-item nav-link ' + _getStateStyle(props.routes.adsl.id, props)}
          >
            {props.routes.adsl.label}
          </NavLink>

          <NavLink
            to={props.routes.nbn.id}
            className="nav-item nav-link"
            className={'nav-item nav-link ' + _getStateStyle(props.routes.nbn.id, props)}
          >
            {props.routes.nbn.label}
          </NavLink>

          <NavLink
            to={props.routes.mobile.id}
            className="nav-item nav-link"
            className={'nav-item nav-link ' + _getStateStyle(props.routes.mobile.id, props)}
          >
            {props.routes.mobile.label}
          </NavLink>

          <NavLink
            to={props.routes.summary.id}
            className="nav-item nav-link"
            className={'nav-item nav-link ' + _getStateStyle(props.routes.summary.id, props)}
          >
            {props.routes.summary.label}
          </NavLink>

          <NavLink
            to={props.routes.checkout.id}
            className="nav-item nav-link"
            className={'nav-item nav-link ' + _getStateStyle(props.routes.checkout.id, props)}
          >
            {props.routes.checkout.label}
          </NavLink>
        </div>
      </div>
    </nav>
  )
);

// STATEFUL Component
// class Timeline extends Component {
//   /* TODO:
//   * Dynamic content (array of stpes form props)
//   * Diasable every of steps farder from current (work with Arrays)
//   * Make own structure
//   * Styles
//   */
//   routes = this.props.routes;

//   // Life ciclehooks
//   componentDidMount() {
//     console.log('Timeline', this.props);
//   }

//   // Methods
//   _getStateStyle = stepLink => {
//     const currentStep = this.props.location.pathname;
//     if ('/' + stepLink === currentStep) {
//       return 'active';
//     } else {
//       return 'disable';
//     }
//   };

//   render() {
//     return (
//       <nav className="timeline">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <NavLink
//               to={this.routes.plan}
//               className={'nav-item nav-link ' + this._getStateStyle(this.routes.plan)}
//             >
//               Plan configurator
//             </NavLink>

//             <NavLink
//               to={this.routes.abandonedCart}
//               className="nav-item nav-link"
//               className={'nav-item nav-link ' + this._getStateStyle(this.routes.abandonedCart)}
//             >
//               Abandoned cart
//             </NavLink>

//             <NavLink
//               to={this.routes.adsl}
//               className="nav-item nav-link"
//               className={'nav-item nav-link ' + this._getStateStyle(this.routes.adsl)}
//             >
//               ADSL
//             </NavLink>

//             <NavLink
//               to={this.routes.nbn}
//               className="nav-item nav-link"
//               className={'nav-item nav-link ' + this._getStateStyle(this.routes.nbn)}
//             >
//               NBN
//             </NavLink>

//             <NavLink
//               to={this.routes.mobile}
//               className="nav-item nav-link"
//               className={'nav-item nav-link ' + this._getStateStyle(this.routes.mobile)}
//             >
//               Mobile
//             </NavLink>

//             <NavLink
//               to={this.routes.summary}
//               className="nav-item nav-link"
//               className={'nav-item nav-link ' + this._getStateStyle(this.routes.summary)}
//             >
//               Summary
//             </NavLink>

//             <NavLink
//               to={this.routes.checkout}
//               className="nav-item nav-link"
//               className={'nav-item nav-link ' + this._getStateStyle(this.routes.checkout)}
//             >
//               Checkout
//             </NavLink>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

export default withRouter(Timeline);
