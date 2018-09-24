class StepModel {
  constructor(id, label) {
    this.id = id;
    this.label = label;
  }
}
export default StepModel;

// const ORDER_FORM_ROUTES = {
//   abandonedCart: { id: 'abandonedCart', label: 'Abandoned Cart' },
//   plan: { id: 'plan', label: 'Abandoned Cart' },
//   adsl: { id: 'adsl', label: 'Abandoned Cart' },
//   nbn: { id: 'nbn', label: 'Abandoned Cart' },
//   mobile: { id: 'mobile', label: 'Abandoned Cart' },
//   summary: { id: 'summary', label: 'Abandoned Cart' },
//   checkout: { id: 'checkout', label: 'Abandoned Cart' },
// };
// export default ORDER_FORM_ROUTES;

// const ORDER_FORM_ROUTES = {
//   abandonedCart: { id: 'abandonedCart', menuText: 'Abandoned Cart' },
//   plan: stepsFactory('plan', ''),
//   adsl: 'adsl',
//   nbn: 'nbn',
//   mobile: 'mobile',
//   summary: 'summary',
//   checkout: 'checkout'
// };

// let stepsFactory = ({ pathname = '', text = '' }) => {
//   return {
//     pathname,
//     text
//   };
// };

// export default ORDER_FORM_ROUTES;
