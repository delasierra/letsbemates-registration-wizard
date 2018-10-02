import { STEPS_INIT_DATA, STEP_IDS } from './OrderFormStaticData';

class OrderFormService {
  // Step logic
  getStepIds = () => {
    return STEP_IDS;
  };

  getStepInitData = () => {
    return STEPS_INIT_DATA;
  };

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
    for (var i = 0; i < STEPS_INIT_DATA.length; i++) {
      if (id === STEPS_INIT_DATA[i].id) {
        step = STEPS_INIT_DATA[i];
      }
    }
    return step;
  };
}

export default OrderFormService;
