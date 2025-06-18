alert('¡Bienvenido al formulario de registro de eventos!');
document.getElementById('registroEvento').addEventListener('submit', function(event) {
event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;



    // Validaciones básicas
    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        console.log('Faltan campos obligatorios');
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    //validaciones adicionales
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert('El nombre solo debe contener letras y espacios.');
        return;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    if (!/^\d{10}$/.test(telefono)) {
        alert('El teléfono debe contener 10 dígitos.');
        return;
    }
    if (fecha && !/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
        alert('La fecha debe estar en formato AAAA-MM-DD.');
        return;
    }
    if (hora && !/^\d{2}:\d{2}$/.test(hora)) {
        alert('La hora debe estar en formato HH:MM.');
        return;
    }
    


    // Si todo está bien
    alert('Registro exitoso. ¡Gracias por registrarte!');
});