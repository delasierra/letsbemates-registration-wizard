import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ORDER_FORM_ROUTES } from '../OrderFormModel';

const Timeline = props => (
  /* TODO: 
  * Make own structure
  * Styles
  * Dynamic content
  * 
  */

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    {console.log(props.routes.abandonedCart)}
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
        <Link to={props.routes.plan} className="nav-item nav-link active">
          Plan configurator <span className="sr-only">(current)</span>
        </Link>
        <Link to={props.routes.abandonedCart} className="nav-item nav-link">
          Abandoned cart
        </Link>
        <Link to={props.routes.adsl} className="nav-item nav-link">
          ADSL
        </Link>
        <Link to={props.routes.nbn} className="nav-item nav-link">
          NBN
        </Link>
        <Link to={props.routes.mobile} className="nav-item nav-link">
          Mobile
        </Link>
        <Link to={props.routes.summary} className="nav-item nav-link">
          Summary
        </Link>
        <Link to={props.routes.checkout} className="nav-item nav-link">
          Checkout
        </Link>
      </div>
    </div>
  </nav>
);

export default Timeline;
