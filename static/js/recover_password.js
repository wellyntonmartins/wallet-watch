document.addEventListener("DOMContentLoaded", function (event) {
  const btnRecover = document.getElementById("btn-recover");
  if (btnRecover.classList.contains("click")) {
    clickAndFill(btnRecover);
  }
});

function clickAndFill(btn) {
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const btnModal = document.getElementById("btn-modal");
  const form = document.getElementById("form-recover");

  modalTitle.innerHTML = "Enter the recovery code (📬 CHECK IF IT'S ON SPAM)";
  modalBody.innerHTML = `
        <p>
            ✉️ We sent you a recovery code on your email. To have sure it's you, please enter the sent code below:
        </p>
        <input
            type="text"
            class="form-control"
            name="code"
            id="code"
        />

    `;
  form.action = "/verify_code";
  btnModal.innerHTML = "Verify Code";
  btn.click();
}
