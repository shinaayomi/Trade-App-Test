import { ngnType } from "../actionTypes";

export const fetchNgn = () => async (dispatch) => {
  dispatch({ type: ngnType.FETCH_NGN_REQUEST });

  try {
    const data = await fetch(
      "https://api.exchangerate.host/convert?from=USD&to=NGN"
    ).then((res) => res.json());

    if (data) {
      return dispatch({ type: ngnType.FETCH_NGN_SUCCESS, payload: data });
    }
  } catch (error) {
    return dispatch({ type: ngnType.FETCH_NGN_FAILURE, payload: error });
  }
};