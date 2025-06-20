import {registerSchema} from "./schema.js";

    document.getElementById("registerForm").addEventListener("submit", (event) => {
      event.preventDefault();
      
      // Capturamos los valores ingresados
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      try {
        // PISTA: Usa el método correcto de Zod para validar el esquema.
        //registerSchema.___?___(formData);
        registerSchema.parse(formData);
        // Si la validación es exitosa, muestra un mensaje de éxito.
        document.getElementById("errors").textContent = "";
        alert("¡Registro exitoso!");
      } catch (error) {
        // PISTA: Muestra los mensajes de error en la página.
        document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
        // Si hay errores, muestra un mensaje de error.
        console.error("Errores de validación:", error.errors);
        alert("Por favor, corrige los errores en el formulario.");
      }
    });