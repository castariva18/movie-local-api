import { GET_LIST_HORROR_MOVIE } from "../../actions/horror";

const initialState = {
  getListUserResult: false,
  getListUserLoading: false,
  getListUserError: false,
};

const horror = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_HORROR_MOVIE:
      console.log("4. reducer");
      return {
        ...state,
        getListHorrorMovieResult: action.payload.data,
        getListHorrorMovieLoading: action.payload.loading,
        getListHorrorMovieError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default horror;
