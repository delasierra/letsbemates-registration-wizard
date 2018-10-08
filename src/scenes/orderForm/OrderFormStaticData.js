import PlanConfigStep from './wizard/steps/planConfigStep/PlanConfigStep';
import AbandonedCart from '../../components/abandonedCart/AbandonedCart';
import AdslStep from './wizard/steps/adslStep/AdslStep';
import NbnStep from './wizard/steps/nbnStep/NbnStep';
import MobileStep from './wizard/steps/mobileStep/MobileStep';
import SummaryStep from './wizard/steps/summaryStep/SummaryStep';
import UserDataStep from './wizard/steps/userDataStep/UserDataStep';
import PaymentStep from './wizard/steps/paymentStep/PaymentStep';
import {
  PLAN_STEP_MESSAGES,
  ABAN_CART_STEP_MESSAGES,
  ADSL_STEP_MESSAGES,
  NBN_STEP_MESSAGES,
  MOBILE_STEP_MESSAGES,
  USER_DATA_STEP_MESSAGES,
  PAYMENT_STEP_MESSAGES,
  SUMMARY_STEP_MESSAGES
} from './messages/StepsMessages';

// Route IDs
const STEP_IDS = {
  abanCart: 'abandonedCart',
  plan: 'plan',
  adsl: 'adsl',
  nbn: 'nbn',
  mobile: 'mobile',
  summary: 'summary',
  userData: 'userData',
  payment: 'payment'
};

// Step initial data
const STEPS_INIT_DATA = [
  {
    index: 0,
    id: STEP_IDS.plan,
    component: PlanConfigStep,
    route: STEP_IDS.plan,
    labels: { ...PLAN_STEP_MESSAGES },
    inputData: {}
  },
  {
    index: 1,
    id: STEP_IDS.abanCart,
    component: AbandonedCart,
    route: STEP_IDS.abanCart,
    labels: { ...ABAN_CART_STEP_MESSAGES },
    iputData: {}
  },
  {
    index: 2,
    id: STEP_IDS.adsl,
    component: AdslStep,
    route: STEP_IDS.adsl,
    labels: { ...ADSL_STEP_MESSAGES },
    inputData: {}
  },
  {
    index: 2,
    id: STEP_IDS.nbn,
    component: NbnStep,
    route: STEP_IDS.nbn,
    labels: { ...NBN_STEP_MESSAGES },
    inputData: {}
  },
  {
    index: 3,
    id: STEP_IDS.mobile,
    component: MobileStep,
    route: STEP_IDS.mobile,
    labels: { ...MOBILE_STEP_MESSAGES },
    iputData: {}
  },
  {
    index: 4,
    id: STEP_IDS.summary,
    component: SummaryStep,
    route: STEP_IDS.summary,
    labels: { ...SUMMARY_STEP_MESSAGES },
    iputData: {}
  },
  {
    index: 5,
    id: STEP_IDS.userData,
    component: UserDataStep,
    route: STEP_IDS.userData,
    labels: { ...USER_DATA_STEP_MESSAGES },
    iputData: {}
  },
  {
    index: 6,
    id: STEP_IDS.payment,
    component: PaymentStep,
    route: STEP_IDS.payment,
    labels: { ...PAYMENT_STEP_MESSAGES },
    iputData: {}
  }
];

export { STEPS_INIT_DATA, STEP_IDS };
