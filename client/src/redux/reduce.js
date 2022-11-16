import {
  GET_DOGS,
  GET_NAME_DOGS,
  GET_DOGS_DETAIL,
  CLEAN_DETAIL,
  GET_TEMPERAMENTS,
  FILTER_TEMPERAMENT,
  FILTER_CREATE,
  ORDER_ALPHABETIC,
  ORDER_BY_WEIGHT,
  POST_DOG
} from "./actions";

const initialState = {
  dogs: [],
  dogsDetail: {},
  temperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload.sort((a, b) => a.name.localeCompare(b.name)),
        copyDogs: action.payload,
      };
    case GET_DOGS_DETAIL:
      return {
        ...state,
        dogsDetail: action.payload,
      };
    case GET_NAME_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case FILTER_TEMPERAMENT:
      const dogsTemp = state.dogs.filter((d) =>
        d.temperament?.includes(action.payload)
      );
      return {
        ...state,
        dogs: dogsTemp,
      };
    case FILTER_CREATE:
      const createdFilter =
        action.payload === "dogs from API"
          ? state.copyDogs.filter((d) => !d.createdInDb)
          : state.copyDogs.filter((d) => d.createdInDb);
      return {
        ...state,
        dogs: action.payload === "all dogs" ? state.copyDogs : createdFilter,
      };
    case ORDER_ALPHABETIC:
      const sortedArr =
        action.payload === "A-Z"
          ? state.dogs.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedArr,
      };
    case ORDER_BY_WEIGHT:
      const sortedArr2 =
        action.payload === "min weight"
          ? state.dogs.sort((a, b) => {
              if (isNaN(a.min_weight) || isNaN(b.min_weight)) {
                return -1;
              }
              if (parseInt(a.min_weight) > parseInt(b.min_weight)) {
                return 1;
              }
              if (parseInt(a.min_weight) < parseInt(b.min_weight)) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort((a, b) => {
              if (isNaN(a.max_weight) || isNaN(b.max_weight)) {
                return -1;
              }
              if (parseInt(a.max_weight) > parseInt(b.max_weight)) {
                return -1;
              }
              if (parseInt(a.max_weight) < parseInt(b.max_weight)) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedArr2,
      };
    case POST_DOG:
      return {
        ...state
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        dogsDetail: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
