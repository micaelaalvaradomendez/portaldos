// validators.js
// Funciones de validación reutilizables (emails, contraseñas, etc).

export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
