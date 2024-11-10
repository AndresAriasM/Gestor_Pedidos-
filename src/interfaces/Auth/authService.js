// src/interfaces/Auth/authService.js
export const login = async (username, password) => {
  // Simulando usuarios y contraseñas
  const users = [
    { username: 'vendedor', password: 'vendedor123', role: 'vendedor' },
    { username: 'bodeguero', password: 'bodeguero123', role: 'bodeguero' },
  ];

  // Buscar el usuario en el array simulado
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    return { username: user.username, role: user.role };  // Retorna el rol si la autenticación es exitosa
  } else {
    throw new Error('Credenciales incorrectas');
  }
};
