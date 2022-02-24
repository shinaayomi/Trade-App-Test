import { eurType } from "../actionTypes";

export const fetchEur = () => async (dispatch) => {
  dispatch({ type: eurType.FETCH_EUR_REQUEST });

  try {
    const data = await fetch(
      "https://api.exchangerate.host/convert?from=USD&to=EUR"
    ).then((res) => res.json());

    if (data) {
      return dispatch({ type: eurType.FETCH_EUR_SUCCESS, payload: data });
    }
  } catch (error) {
    return dispatch({ type: eurType.FETCH_EUR_FAILURE, payload: error });
  }
};