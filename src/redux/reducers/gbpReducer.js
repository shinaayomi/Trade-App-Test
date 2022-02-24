import { gbpType } from "../actionTypes";

const initialState = {
  pending: false,
  gbp: [],
  error: null,
};

const gbpReducer = (state = initialState, action) => {
  switch (action.type) {
    case gbpType.FETCH_GBP_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case gbpType.FETCH_GBP_SUCCESS:
      return {
        ...state,
        pending: false,
        gbp: action.payload,
        error: null,
      };
    case gbpType.FETCH_GBP_FAILURE:
      return {
        ...state,
        pending: false,
        gbp: "",
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default gbpReducer;