import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_NAME_DOGS = "GET_NAME_DOGS";
export const GET_DOGS_DETAIL = "GET_DOGS_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_TEMPERAMENT = "FILTER_TEMPERAMENT";
export const FILTER_CREATE = "FILTER_CREATE";
export const ORDER_ALPHABETIC = "ORDER_ALPHABETIC";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const POST_DOG = "POST_DOG";

export const getDogs = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/dogs");
      return dispatch({ type: GET_DOGS, payload: json.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getDogsDetail = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/dogs/${id}`);
      dispatch({ type: GET_DOGS_DETAIL, payload: json.data });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/temperaments");
      dispatch({ type: GET_TEMPERAMENTS, payload: json.data });
    } catch (error) {
      return { error: error.message };
    }
  }; 
};

export const getNameDogs = (name) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/dogs?name=${name}`);
      dispatch({ type: GET_NAME_DOGS, payload: json.data });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const postDog = (data) => {
  return async function () {
    await axios
      .post("http://localhost:3001/dog", data)
      .then((res) => alert(res.data.success))
      .catch((err) => alert(err.response.data.error));
  };
};

export const filterTemperament = (value) => {
  return function (dispatch) {
    return dispatch({ type: FILTER_TEMPERAMENT, payload: value });
  };
};

export const filterCreate = (value) => {
  return function (dispatch) {
    return dispatch({ type: FILTER_CREATE, payload: value });
  };
};

export const orderAlphabetic = (value) => {
  return function (dispatch) {
    return dispatch({ type: ORDER_ALPHABETIC, payload: value });
  };
};

export const orderByWeight = (value) => {
  return function (dispatch) {
    return dispatch({ type: ORDER_BY_WEIGHT, payload: value });
  };
};

export const cleanDetail = () => {
  return function (dispatch) {
    return dispatch({ type: CLEAN_DETAIL, payload: {} });
  };
};
