import React, { createContext, useState, useContext } from 'react';
import { login as loginService } from './authService';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);  // Almacena el rol del usuario

  const login = async (username, password) => {
    try {
      const user = await loginService(username, password);
      setIsAuthenticated(true);
      setUserRole(user.role);  // Establece el rol del usuario
    } catch (error) {
      console.error('Error de autenticación:', error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
