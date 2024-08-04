const initialState = {
  data: null,
  firebasedata: null,
  firebasetrainer:null,
  firebasettrainerlist:null,
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RETRIEVE_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case "RETRIEVE_FIREBASE_DATA_SUCCESS":
      return {
        ...state,
        firebasedata: action.payload,
        loading: false,
        error: null,
      };
      case "RETRIEVE_FIREBASE_TRAINER_DATA_SUCCESS":
        return {
          ...state,
          firebasetrainer: action.payload,
          loading: false,
          error: null,
        };
        case "RETRIEVE_FIREBASE_TRAINER_ALL_SUCCESS":
          return {
            ...state,
            firebasettrainerlist: action.payload,
            loading: false,
            error: null,
          };
    case "RETRIEVE_DATA_FAILURE":
      return {
        ...state,
        data: null,
        firebasedata: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
