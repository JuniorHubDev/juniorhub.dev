export function disableForm(form) {
  const btn = form.querySelector("button");
  btn.disabled = true;
  btn.style.opacity = "0.5";
  btn.textContent = "Submitting...";

  const inputs = Array.from(form.querySelectorAll(".form__input"));
  inputs.map(input => {
      input.disabled = true;
  });
}

export function resetForm(form) {
  const btn = form.querySelector("button");
  btn.disabled = false;
  btn.style.opacity = "1";
  btn.textContent = "Submit";

  const inputs = Array.from(form.querySelectorAll(".form__input"));
  inputs.map(input => {
      input.disabled = false;
      input.value = "";
    });
  
}
