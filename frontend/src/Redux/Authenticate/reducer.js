import { REQUEST_SUCCESS, REQUEST_FAILURE, LOGIN, LOGOUT } from "./actionType";

const initialState = {
  isAuth: false,
  isLoading: "",
  isError: false,
  errorMessage: "",
  userID: localStorage.getItem("userID") || "",
  token: localStorage.getItem("token") || "",
  totalXP:0,
  userData:{}
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_SUCCESS: {
      return { ...state, isLoading: true };
    }

    case REQUEST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
        errorMessage: payload,
      };
    }

    case LOGIN: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        userID: localStorage.getItem("userID") || payload.userID,
        totalXP: payload.totalXP,
        userData: payload.userData
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        userID: "",
        totalXP:0,
        userData:{}
      };
    }

    default: {
      return state;
    }
  }
};
