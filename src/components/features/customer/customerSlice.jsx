const initialStateCustomer = {
  fullname: "",
  nationalId: 0,
  createdAt: "",
};

export function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/craeteCustomer":
      return {
        ...state,
        fullname: action.payload.name,
        nationalId: action.payload.id,
        createdAt: new Date(Date.now()),
      };
    case "customer/updatename":
      return { ...state, fullname: action.payload };
    default:
      return state;
  }
}

export function createCustomer(name, id) {
  return { type: "customer/craeteCustomer", payload: { name, id } };
}
export function changeFullname(cname) {
  return { type: "customer/updatename", payload: cname };
}
