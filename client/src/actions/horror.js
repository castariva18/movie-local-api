import axios from "axios";

export const GET_LIST_HORROR_MOVIE = "GET_LIST_HORROR_MOVIE";

export const getListHorrorMovie = () => {
  console.log("2. action");
  return (dispatch) => {
    dispatch({
      type: GET_LIST_HORROR_MOVIE,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/horror",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil get", response.data);
        dispatch({
          type: GET_LIST_HORROR_MOVIE,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: GET_LIST_HORROR_MOVIE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
