var form = document.getElementById("contact-form");
async function handleSubmit(event) {
  event.preventDefault();
  var statusSuccess = document.getElementById("contact-form-success");
  var statusFailure = document.getElementById("contact-form-failure");

  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    form.classList.add("d-none");
    statusSuccess.classList.remove("d-none");
    form.reset();
  }).catch(error => {
    form.classList.add("d-none");
    statusFailure.classList.remove("d-none");
    form.reset();
  });
}
form.addEventListener("submit", handleSubmit);
