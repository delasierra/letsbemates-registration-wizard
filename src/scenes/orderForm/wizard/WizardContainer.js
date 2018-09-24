import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { Wizard, Steps, Step } from 'react-albus';

import AbandonedCart from '../../../components/abandonedCart/AbandonedCart';
import AdslStep from './steps/adslStep/AdslStep';
import CheckoutStep from './steps/checkoutStep/CheckoutStep';
import MobileStep from './steps/mobileStep/MobileStep';
import NbnStep from './steps/nbnStep/NbnStep';
import PlanConfiguratorStep from './steps/planConfiguratorStep/PlanConfiguratorStep';
import SummaryStep from './steps/summaryStep/SummaryStep';

import WizardNavigation from './wizardNavigation/WizardNavigation';

const WizardContainer = props => (
  /* TODO: 
  * Dinamic flow depending on user selection in Plan configurator Check build in functionality: https://github.com/americanexpress/react-albus#wizard
  * Create logic with Array
  * Add routing to steps
  */

  console.log('WizardContainer', props),
  (
    <div className="wizard-container">
      <Route
        render={({ history }) => (
          <Wizard history={history}>
            <div className="steps">
              <Steps>
                <Step id={props.routes.plan.id}>
                  <PlanConfiguratorStep />
                </Step>

                <Step id={props.routes.abandonedCart.id}>
                  <AbandonedCart />
                </Step>

                <Step id={props.routes.adsl.id}>
                  <AdslStep />
                </Step>

                <Step id={props.routes.nbn.id}>
                  <NbnStep />
                </Step>

                <Step id={props.routes.mobile.id}>
                  <MobileStep />
                </Step>

                <Step id={props.routes.summary.id}>
                  <SummaryStep />
                </Step>

                <Step id={props.routes.checkout.id}>
                  <CheckoutStep />
                </Step>
              </Steps>
            </div>
            <WizardNavigation />
          </Wizard>
        )}
      />
    </div>
  )
);

export default withRouter(WizardContainer);
