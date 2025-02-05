document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-reservaciones");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    if (nombre === "" || correo === "" || telefono === "" || fecha === "" || hora === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (!/^\d{10}$/.test(telefono)) {
      alert("Por favor, ingresa un número de teléfono válido (10 dígitos).");
      return;
    }

    alert("Reservación enviada con éxito. ¡Gracias por elegirnos!");
    formulario.reset();
  });
});
