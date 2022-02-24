import { gbpType } from "../actionTypes";

export const fetchGbp = () => async (dispatch) => {
  dispatch({ type: gbpType.FETCH_GBP_REQUEST });

  try {
    const data = await fetch(
      "https://api.exchangerate.host/convert?from=USD&to=GBP"
    ).then((res) => res.json());

    if (data) {
      return dispatch({ type: gbpType.FETCH_GBP_SUCCESS, payload: data });
    }
  } catch (error) {
    return dispatch({ type: gbpType.FETCH_GBP_FAILURE, payload: error });
  }
};