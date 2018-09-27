import { STEPS } from './OrderFormStaticData';

class OrderFormService {
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
    for (var i = 0; i < STEPS.length; i++) {
      if (id === STEPS[i].id) {
        step = STEPS[i];
      }
    }
    return step;
  };
}

export default OrderFormService;
