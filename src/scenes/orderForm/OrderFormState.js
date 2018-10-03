let OrderFormState = {
  products: {
    internet: {
      addToCart: true,
      type: '',
      plan: ''
    },

    homePhone: {
      addToCart: true,
      data: []
    },

    modem: {
      addToCart: true,
      data: []
    },

    mobile: {
      addToCart: true,
      data: []
    }
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
