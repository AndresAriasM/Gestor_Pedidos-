import React, { createContext, useState, useContext, useEffect } from 'react';
import { login as loginService } from './authService';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Efecto para mantener la autenticación al recargar la página
  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    const storedAuth = localStorage.getItem('isAuthenticated') === 'true';

    if (storedAuth && storedRole) {
      setIsAuthenticated(true);
      setUserRole(storedRole);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const user = await loginService(username, password);
      setIsAuthenticated(true);
      setUserRole(user.role);

      // Almacenar la autenticación y el rol en el almacenamiento local
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', user.role);
    } catch (error) {
      console.error('Error de autenticación:', error);
      throw new Error('Credenciales inválidas'); // Lanzar error para manejar mensajes en la UI
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);

    // Limpiar datos del almacenamiento local al cerrar sesión
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
