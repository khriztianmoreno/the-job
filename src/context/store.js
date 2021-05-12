import React from 'react';

import { GET_ALL_JOBS, GET_JOB, REGISTER_USER, SET_LOADING } from './constant';

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

const initialState = {
  jobDetail: {},
  jobs: [],
  user: {},
  isLoading: true,
};

function AppReducer(state, action) {
  switch (action.type) {
    case GET_ALL_JOBS: {
      return {
        ...state,
        jobs: action.payload,
      };
    }
    case GET_JOB: {
      return {
        ...state,
        jobDetail: action.payload,
      };
    }
    case REGISTER_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

/* eslint-disable */
function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }
  return context;
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }
  return context;
}

export { AppProvider, useAppState, useAppDispatch };
