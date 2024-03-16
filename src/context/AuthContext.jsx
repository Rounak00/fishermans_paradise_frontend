import { createContext, useEffect, useReducer } from "react";

const storedUser = JSON.parse(localStorage.getItem("user"));

const INITIAL_STATE = {
  user: {
    name: storedUser && storedUser.name ? storedUser.name : null,
    role: storedUser && storedUser.role ? storedUser.role : null,
    accessToken:
      storedUser && storedUser.accessToken ? storedUser.accessToken : null,
  },
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);
const AuthReducer = (state, action) => {
  console.log("Action.payload", action.payload);
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: {
          name: null,
          role: null,
          accessToken: null,
        },
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: {
          name: null,
          role: null,
          accessToken: null,
        },
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: {
          name: null,
          role: null,
          accessToken: null,
        },
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};