import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();
// createContext 선언

export function UserContextProvider({ children }) {
  const [userName, setUserName] = useState(''); ////글로벌하게 관리할 state
  const [accessToken, setAccessToken] = useState('');

  const value = {
    userName,
    setUserName,
    accessToken,
    setAccessToken,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
} //다른 컴포넌트에서 context를 사용할 때 쓰임.
