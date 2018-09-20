import React from 'react';
import { Route } from 'react-router-dom';

import { Wizard, Steps, Step } from 'react-albus';

import AbandonedCart from '../../../components/abandonedCart/AbandonedCart';
import AdslStep from './steps/adslStep/AdslStep';
import CheckoutStep from './steps/checkoutStep/CheckoutStep';
import MobileStep from './steps/mobileStep/MobileStep';
import NbnStep from './steps/nbnStep/NbnStep';
import PlanConfiguratorStep from './steps/planConfiguratorStep/PlanConfiguratorStep';
import SummaryStep from './steps/summaryStep/SummaryStep';

import Navigation from './navigation/Navigation';

const WizardContainer = props => (
  /* TODO: 
  * Dinamic flow depending on user selection in Plan configurator Check build in functionality: https://github.com/americanexpress/react-albus#wizard
  * Create logic with Array
  * Add routing to steps
  */
  <div className="wizard-container">
    <Route
      render={({ history }) => (
        <Wizard history={history}>
          <Steps>
            <Step id={props.routes.plan}>
              <PlanConfiguratorStep />
            </Step>
            <Step id={props.routes.abandonedCart}>
              <AbandonedCart />
            </Step>
            <Step id={props.routes.adsl}>
              <AdslStep />
            </Step>
            <Step id={props.routes.nbn}>
              <NbnStep />
            </Step>
            <Step id={props.routes.mobile}>
              <MobileStep />
            </Step>
            <Step id={props.routes.summary}>
              <SummaryStep />
            </Step>
            <Step id={props.routes.checkout}>
              <CheckoutStep />
            </Step>
          </Steps>
          <Navigation />
        </Wizard>
      )}
    />
  </div>
);

export default WizardContainer;
