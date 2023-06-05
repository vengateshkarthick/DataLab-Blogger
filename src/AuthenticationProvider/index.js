import React, { useEffect } from "react";

const useAutherntication = () => {
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const setAuthentication = (flag) => {
    setAuthenticated(flag);
  };
  useEffect(() => {
    if (isAuthenticated) {
      console.log("Successfully logged in");
    } else {
      console.log("Successfully logged out");
    }
  }, [isAuthenticated]);
  return {
    isAuthenticated,
    setAuthentication,
  };
};

export const AuthenticationContext = React.createContext();
export const UseAuthenticationComponent = ({ children }) => {
  const value = useAutherntication();
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
