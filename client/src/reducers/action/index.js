import { GET_LIST_ACTION_MOVIE } from "../../actions/action";

const initialState = {
  getListUserResult: false,
  getListUserLoading: false,
  getListUserError: false,
};

const action = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_ACTION_MOVIE:
      console.log("4. reducer");
      return {
        ...state,
        getListActionMovieResult: action.payload.data,
        getListActionMovieLoading: action.payload.loading,
        getListActionMovieError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default action;
