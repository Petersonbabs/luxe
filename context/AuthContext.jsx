"use client"
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loadingAuth, setLoadingAuth] = useState(false)

  const login = (data) => {
    console.log("Login data:", data);
    setUser(data);
  };

  const signup = (data) => {
    console.log("Signup data:", data);
    setUser(data);
  };

  const value = {
    user,
    loadingAuth,
    login,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider