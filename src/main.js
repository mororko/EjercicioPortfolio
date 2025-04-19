import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const inputs = form.querySelectorAll("input, textarea");

  // Validacion de email
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  //Validamos un campo input
  function validateField(input) {
    const control = input.parentElement;
    const value = input.value.trim();

    //Limpiar estado previo
    control.classList.remove("valid", "invalid");

    //Comprueba si esta vacio
    if (value === "") {
      control.classList.add("invalid");
      return false;
    }

    // Si es mail, comprueba si es valido
    if (input.type === "email" && !isValidEmail(value)) {
      control.classList.add("invalid");
      return false;
    }

    // Si todo ok
    control.classList.add("valid");
    return true;
  }

  // Validacion al escribir
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      validateField(input);
    });
  });

  // Validacion al enviar el formulario
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formIsValid = true;

    //validamos los campos
    inputs.forEach((input) => {
      const valid = validateField(input);
      if (!valid) {
        formIsValid = false;
      }
    });

    if (formIsValid) {
      // Si todo es correcto
      alert("Formulario enviado correctamente");
      form.reset();
      //Limpiar todo
      inputs.forEach((input) => {
        input.parentElement.classList.remove("valid", "invalid");
      });
    }
  });
});
