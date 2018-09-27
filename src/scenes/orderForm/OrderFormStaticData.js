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

const STEP_MENU_LABELS = {
  abanCart: 'Abandoned Cart',
  plan: 'Configure your plan',
  adsl: 'ADSL',
  nbn: 'NBN',
  mobile: 'Mobile',
  summary: 'Summary',
  userData: 'User data',
  payment: 'Payment'
};

const STEPS = [
  {
    index: 0,
    id: STEP_IDS.plan,
    route: STEP_IDS.plan,
    labels: STEP_MENU_LABELS.plan,
    inputData: {}
  },
  {
    index: 1,
    id: STEP_IDS.abanCart,
    route: STEP_IDS.abanCart,
    labels: STEP_MENU_LABELS.abanCart,
    iputData: {}
  },
  {
    index: 2,
    id: STEP_IDS.adsl,
    route: STEP_IDS.adsl,
    labels: STEP_MENU_LABELS.adsl,
    inputData: {}
  },
  {
    index: 2,
    id: STEP_IDS.nbn,
    route: STEP_IDS.nbn,
    labels: STEP_MENU_LABELS.nbn,
    inputData: {}
  },
  {
    index: 3,
    id: STEP_IDS.mobile,
    route: STEP_IDS.mobile,
    labels: STEP_MENU_LABELS.mobile,
    iputData: {}
  },
  {
    index: 4,
    id: STEP_IDS.summary,
    route: STEP_IDS.summary,
    labels: STEP_MENU_LABELS.summary,
    iputData: {}
  },
  {
    index: 5,
    id: STEP_IDS.userData,
    route: STEP_IDS.userData,
    labels: STEP_MENU_LABELS.userData,
    iputData: {}
  },
  {
    index: 6,
    id: STEP_IDS.payment,
    route: STEP_IDS.payment,
    labels: STEP_MENU_LABELS.payment,
    iputData: {}
  }
];

export { STEPS, STEP_IDS, STEP_MENU_LABELS };
