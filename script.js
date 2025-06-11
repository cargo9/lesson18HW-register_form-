document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    console.log("Форма відправлена!");
  } else {
    console.log("Будь ласка, заповніть всі поля!");
  }
});

const textarea = document.getElementById("feedback");
const counter = document.getElementById("counter");

textarea.addEventListener("input", function () {
  const charCount = this.value.length;
  counter.textContent = `Символів: ${charCount}`;
});

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

confirmPasswordInput.addEventListener("input", function () {
  const password = passwordInput.value;
  const confirmPassword = this.value;

  if (password === confirmPassword) {
    console.log("Паролі співпадають!");
  } else {
    console.log("Паролі не співпадають!");
  }
});

const fields = document.querySelectorAll(".text-field");

fields.forEach((field) => {
  field.addEventListener("focus", function () {
    this.classList.add("focused-field");
  });

  field.addEventListener("blur", function () {
    this.classList.remove("focused-field");
  });
});

const citySelect = document.getElementById("city-select");

citySelect.addEventListener("change", function () {
  const selectedCity = this.value;

  if (selectedCity) {
    console.log(`Ви обрали місто: ${selectedCity}`);
  }
});
