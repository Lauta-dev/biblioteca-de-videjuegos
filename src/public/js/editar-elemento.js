const btnEnviar = document.querySelector(".btn-desactivado");
const inputGame = document.querySelector("#consola");
const inputURL = document.querySelector("#img");

function verificarInputs() {
  const inputGameValue = inputGame.value;
  const inputURLValue = inputURL.value;

  if (inputGameValue && inputURLValue) {
    btnEnviar.disabled = false; // Habilitar el botón si todos los campos tienen valor

    // Se agreagan clases cuando el boton este activo
    btnEnviar.classList.add("btn-activado");
    btnEnviar.classList.remove("btn-desactivado");
  } else {
    btnEnviar.disabled = true; // Deshabilitar el botón si algún campo está vacío

    // Se agreagan clases cuando el boton este desactivado
    btnEnviar.classList.add("btn-desactivado");
    btnEnviar.classList.remove("btn-activado");
  }
}

inputGame.addEventListener("input", verificarInputs);
inputURL.addEventListener("input", verificarInputs);

// Cuando se hace click el boton activo, se desactiva
btnEnviar.addEventListener("click", () => {
  btnEnviar.disabled = true;
  btnEnviar.classList.add("btn-desactivado");
  btnEnviar.classList.remove("btn-activado");
});
