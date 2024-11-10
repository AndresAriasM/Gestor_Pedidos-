// src/interfaces/Auth/authService.js
export const login = async (username, password) => {
    // Lógica de autenticación, por ejemplo, hacer una solicitud a la API
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Error al autenticar');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  