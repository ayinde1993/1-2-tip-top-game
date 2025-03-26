import React, { useContext, useReducer, createContext } from 'react';


export const ActionsTypes = {
  UPDATE: 'update',
  CLEAN: 'clean',
};

const defaultState = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    token: '',
    ticketCode: '',
    prize: '',
};


const GlobalStateContext = createContext(defaultState);

const GlobalDispatchContext = createContext(undefined);

const PerformanceReducer = (state, action) => {
  switch (action.type) {
    case ActionsTypes.UPDATE: {
      return {
        ...state,
        ...action.props,
      };
    }
    case ActionsTypes.CLEAN: {
      return {
        ...state,
        ...defaultState,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    PerformanceReducer,
    defaultState,
  );
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useDataState must be used within a DataProvider');
  }
  return context;
};

export const useGlobalDispatch = () => {
  const context = useContext(GlobalDispatchContext);
  if (context === undefined) {
    throw new Error('useDataDispatch must be used within a DataProvider');
  }
  return context;
};

export default GlobalProvider;

export const useGlobal = () => [
  useGlobalState(),
  useGlobalDispatch(),
];
