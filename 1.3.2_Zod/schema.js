// Importamos Zod
const { z } = window.Zod;

    // Esquema para validar los datos del formulario
    export const registerSchema = z.object({
      // PISTA: Define que el nombre debe ser una cadena no vacía.
      name: z.string()
      .min(3, {message: 'La longitud del nombre debe ser de al menos 3 caracteres'})
      .max(100, {message: 'La longitud del nombre debe ser de máximo 100 caracteres'})
      .nonempty({message: 'El nombre es obligatorio'}),

      // PISTA: Valida que el correo tenga el formato correcto.
        email: z.string()
        .email({message: 'El correo electrónico no es válido'}),

      // PISTA: La contraseña debe tener al menos 6 caracteres.
        password: z.string()
        .min(6, {message: 'La contraseña debe tener al menos 6 caracteres'}),

    });