import React, { createContext, useState, useEffect, useContext } from "react";

const INITIAL_STATE = { token: undefined, ready: false };

const UserStateContext = createContext();
const UserDispatchContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(INITIAL_STATE);

  useEffect(() => {
    const persistedState = localStorage.getItem("user");

    if (persistedState) {
      setUser({ ...JSON.parse(persistedState), ready: true });
    } else {
      setUser({ ...user, ready: true });
    }
  }, [user]);

  function dispatch(nextState) {
    const persistedState = localStorage.getItem("user");
    let nextUser;

    if (persistedState) {
      nextUser = { ...JSON.parse(persistedState), ...nextState };
    } else {
      nextUser = { ...user, ...nextState };
    }

    setUser(nextUser);
    localStorage.setItem("user", JSON.stringify(nextUser));
  }

  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export function useUser() {
  const user = useContext(UserStateContext);
  const dispatch = useContext(UserDispatchContext);

  if (user === undefined || dispatch === undefined) {
    throw new Error("useUser must be used inside an UserProvider");
  }

  return [user, dispatch];
}
