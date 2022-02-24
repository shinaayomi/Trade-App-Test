import { eurType } from "../actionTypes";

const initialState = {
  pending: false,
  eur: [],
  error: null,
};

const eurReducer = (state = initialState, action) => {
  switch (action.type) {
    case eurType.FETCH_EUR_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case eurType.FETCH_EUR_SUCCESS:
      return {
        ...state,
        pending: false,
        eur: action.payload,
        error: null,
      };
    case eurType.FETCH_EUR_FAILURE:
      return {
        ...state,
        pending: false,
        eur: "",
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default eurReducer;