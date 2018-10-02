const OrderFormState = {
  products: {
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

  deliveryData: {
    gnaf_id: '',
    address: '',
    userNotes: ''
  },

  bussinessData: {
    businessName: '',
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
