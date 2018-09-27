const OrderFormState = {
  servicesContratted: {
    internet: {
      type: '',
      modem: true,
      homePhone: {}
    },
    mobile: []
  },

  userData: {
    email: '',
    name: '',
    surname: '',
    dob: '',
    mobile: '',
    whereDidYouFindUs: '',
    phone: ''
  },

  deliveryAddress: {
    gnaf_id: '',
    address: '',
    userNotes: ''
  },

  bussinessData: {
    name: '',
    abn: ''
  },

  terms: true,
  paymentData: {
    name: '',
    surname: '',
    cardNumber: '',
    cardExpiry: '',
    ccv: ''
  }
};

export default OrderFormState;
