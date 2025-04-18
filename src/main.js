import "./style.scss";

// Seleccionar elementos del formulario
const form = document.querySelector(".contact-form");
const formControls = document.querySelectorAll(".form-control");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");

// Función de validación de email usando regex simple
function isValidEmail(email) {
  // Regex básico para validar email (formato general)
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
}

// Manejar el submit del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevenir envío real
  let formIsValid = true;

  // Validar campo Nombre (no vacío)
  if (inputName.value.trim() === "") {
    markFieldAsError(inputName);
    formIsValid = false;
  } else {
    clearFieldError(inputName);
  }

  // Validar campo Email (no vacío y formato correcto)
  if (
    inputEmail.value.trim() === "" ||
    !isValidEmail(inputEmail.value.trim())
  ) {
    markFieldAsError(inputEmail);
    formIsValid = false;
  } else {
    clearFieldError(inputEmail);
  }

  // Validar campo Mensaje (no vacío)
  if (inputMessage.value.trim() === "") {
    markFieldAsError(inputMessage);
    formIsValid = false;
  } else {
    clearFieldError(inputMessage);
  }

  // Si todo válido, podemos “enviar” (aquí simplemente resetear formulario o dar feedback)
  if (formIsValid) {
    alert("Mensaje enviado!"); // Aquí podrías mostrar un modal de éxito en lugar de alert
    form.reset();
    // Opcional: limpiar estados de error si hubiese
    formControls.forEach((fc) => fc.classList.remove("invalid"));
  }
});

// Funciones para marcar/desmarcar errores visualmente
function markFieldAsError(inputElement) {
  const formControl = inputElement.parentElement;
  formControl.classList.add("invalid");
}

function clearFieldError(inputElement) {
  const formControl = inputElement.parentElement;
  formControl.classList.remove("invalid");
}
