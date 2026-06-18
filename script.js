
const appState = {
  userLogged: false,
  theme: "light",
  formValid: false
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Site carregado com sucesso 🚀");

  initEvents();
  initAnimations();
});

function initEvents() {
  const btn = document.querySelector("#btnClique");
  const form = document.querySelector("#formulario");

  if (btn) {
    btn.addEventListener("click", handleButtonClick);
  }

  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
}


function handleButtonClick(event) {
  console.log("Botão clicado!");

  animateButton(event.target);
  toggleTheme();
}

function initAnimations() {
  const elements = document.querySelectorAll(".animar");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("fade-in");
    }, index * 200);
  });
}

function animateButton(button) {
  button.classList.add("clicked");

  setTimeout(() => {
    button.classList.remove("clicked");
  }, 300);
}


function handleFormSubmit(event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const email = document.querySelector("#email").value.trim();

  if (validateForm(nome, email)) {
    appState.formValid = true;
    alert("Formulário enviado com sucesso!");
  } else {
    appState.formValid = false;
    alert("Preencha os campos corretamente.");
  }
}

function validateForm(nome, email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome.length < 3) return false;
  if (!emailRegex.test(email)) return false;

  return true;
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  appState.theme = appState.theme === "light" ? "dark" : "light";
}
