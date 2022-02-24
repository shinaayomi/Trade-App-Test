import { ngnType } from "../actionTypes";

const initialState = {
  pending: false,
  ngn: [],
  error: null,
};

const ngnReducer = (state = initialState, action) => {
  switch (action.type) {
    case ngnType.FETCH_NGN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case ngnType.FETCH_NGN_SUCCESS:
      return {
        ...state,
        pending: false,
        ngn: action.payload,
        error: null,
      };
    case ngnType.FETCH_NGN_FAILURE:
      return {
        ...state,
        pending: false,
        ngn: "",
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ngnReducer;