class OrderFormStaticData {
  STEP_IDS = {
    abanCart: 'abandonedCart',
    plan: 'plan',
    adsl: 'adsl',
    nbn: 'nbn',
    mobile: 'mobile',
    summary: 'summary',
    checkout: 'checkout'
  };

  STEP_MENU_LABELS = {
    abanCart: 'Abandoned Cart',
    plan: 'Configure your plan',
    adsl: 'ADSL',
    nbn: 'NBN',
    mobile: 'Mobile',
    summary: 'Summary',
    checkout: 'Checkout'
  };

  steps = [
    {
      index: 0,
      id: this.STEP_IDS.plan,
      route: this.STEP_IDS.plan,
      label: this.STEP_MENU_LABELS.plan
    },
    {
      index: 1,
      id: this.STEP_IDS.abanCart,
      route: this.STEP_IDS.abanCart,
      label: this.STEP_MENU_LABELS.abanCart
    },
    {
      index: 2,
      id: this.STEP_IDS.adsl,
      route: this.STEP_IDS.adsl,
      label: this.STEP_MENU_LABELS.adsl
    },
    {
      index: 2,
      id: this.STEP_IDS.nbn,
      route: this.STEP_IDS.nbn,
      label: this.STEP_MENU_LABELS.nbn
    },
    {
      index: 3,
      id: this.STEP_IDS.mobile,
      route: this.STEP_IDS.mobile,
      label: this.STEP_MENU_LABELS.mobile
    },
    {
      index: 4,
      id: this.STEP_IDS.summary,
      route: this.STEP_IDS.summary,
      label: this.STEP_MENU_LABELS.summary
    },
    {
      index: 5,
      id: this.STEP_IDS.checkout,
      route: this.STEP_IDS.checkout,
      label: this.STEP_MENU_LABELS.checkout
    }
  ];

  getWizardSteps = userPlanConfig => {
    let wizardSteps = [];
    for (var i = 0; i < userPlanConfig.length; i++) {
      let stepId = userPlanConfig[i];
      wizardSteps.push(this.getStepById(stepId));
    }
    return wizardSteps.sort(this.sortWizardSteps);
  };

  sortWizardSteps = (a, b) => {
    if (a.index < b.index) return -1;
    if (a.index > b.index) return 1;
    return 0;
  };

  getStepById = id => {
    let step;
    for (var i = 0; i < this.steps.length; i++) {
      if (id === this.steps[i].id) {
        step = this.steps[i];
      }
    }
    return step;
  };
}

export default OrderFormStaticData;
