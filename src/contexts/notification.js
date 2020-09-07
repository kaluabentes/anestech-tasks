import React, { createContext, useState, useContext } from "react";

const INITIAL_STATE = {
  message: "",
  isOpen: false,
};

const NotificationStateContext = createContext();
const NotificationDispatchContext = createContext();

export function NotificationProvider({ children }) {
  const [state, setState] = useState(INITIAL_STATE);

  function dispatch(nextState) {
    setState({
      ...state,
      ...nextState,
    });
  }

  return (
    <NotificationStateContext.Provider value={state}>
      <NotificationDispatchContext.Provider value={dispatch}>
        {children}
      </NotificationDispatchContext.Provider>
    </NotificationStateContext.Provider>
  );
}

export function useNotification() {
  const state = useContext(NotificationStateContext);
  const dispatch = useContext(NotificationDispatchContext);

  if (state === undefined || dispatch === undefined) {
    throw new Error(
      "useNotification must be used inside a NotificationProvider"
    );
  }

  return [state, dispatch];
}
