document.addEventListener("DOMContentLoaded", function (event) {
  $(".amount-redeemed")
    .maskMoney({
      prefix: "R$ ",
      decimal: ",",
      thousands: ".",
      allowNegative: false,
    })
    .maskMoney("mask");

  $(".overview-input")
    .maskMoney({
      prefix: "R$ ",
      decimal: ",",
      thousands: ".",
      allowNegative: false,
    })
    .maskMoney("mask");

  $("input.amount-redeemed").prop("readonly", true);
  $("input.overview-input").prop("readonly", true);
});

function contentToRow(selectValue) {
  console.log("contentToRowCalled");
  const emptyRow = document.getElementById("section_by_type");
  const modalHeader = document.getElementById("modal-header");
  const modalFooter = document.getElementById("modal-footer");

  if (selectValue == "gain") {
    emptyRow.innerHTML = "";
    let row = document.createElement("div");

    row.innerHTML = `
    <div class="row">
        <div class="col-md-12">
        <label for="category-select">Category:</label>
        <select
            class="form-select"
            name="category-select"
            id="category-select"
            required
        >
            <option value="" selected disabled>
            Click here to select
            </option>
            <option value="salary">Salary</option>
            <option value="extra-income">Extra Income</option>
            <option value="capital-gain"> Capital Gain (Investments gains)</option>
            <option value="transfer">Transfer</option>
            <option value="other">Other gain</option>
        </select>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-md-12">
        <label for="transaction-date">Transaction date:</label>
        <input
            type="date"
            class="form-control"
            name="transaction-date"
            id="transaction-date"
            required
        />
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-md-12">
        <label for="amount">Amount (R$):</label>
        <input
            type="text"
            class="form-control"
            name="amount"
            id="amount"
            placeholder="Ex: 200,00"
            required
        />
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-md-12">
        <label for="description">Description:</label>
        <textarea
            class="form-control"
            name="description"
            id="description"
            placeholder="Ex: Transfer by son..."
        ></textarea>
        </div>
    </div>`;

    emptyRow.appendChild(row);
    if (emptyRow.classList.contains("d-none")) {
      emptyRow.classList.remove("d-none");
    }

    modalHeader.classList.add("gain");
    if (modalHeader.classList.contains("expense")) {
      modalHeader.classList.remove("expense");
    }

    modalFooter.classList.add("gain");
    if (modalFooter.classList.contains("expense")) {
      modalFooter.classList.remove("expense");
    }
  } else {
    emptyRow.innerHTML = "";
    let row = document.createElement("div");

    row.innerHTML = `
    <div class="row">
        <div class="col-md-12">
        <label for="category-select">Category:</label>
        <select
            class="form-select"
            name="category-select"
            id="category-select"
            required
        >
            <option value="" selected disabled>
            Click here to select
            </option>
            <option value="tax">Tax</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="leisure">Leisure/family</option>
            <option value="shopping">Shopping (clothing, eletronics, etc)</option>
            <option value="studies">Studies</option>
            <option value="health">doctor/Health</option>
            <option value="transfer">Transfer</option>
            <option value="emergency">Emergency</option>
            <option value="other">Other expense</option>
        </select>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-md-12">
            <label for="essential-select">Essential?:</label>
            <select
                class="form-select"
                name="essential-select"
                id="essential-select"
                required
            >
                <option value="" selected disabled>
                Click here to select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-md-12">
        <label for="transaction-date">Transaction date:</label>
        <input
            type="date"
            class="form-control"
            name="transaction-date"
            id="transaction-date"
            required
        />
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-md-12">
        <label for="amount">Amount (R$):</label>
        <input
            type="text"
            class="form-control"
            name="amount"
            id="amount"
            placeholder="Ex: 91,00"
            required
        />
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-md-12">
        <label for="description">Description:</label>
        <textarea
            class="form-control"
            name="description"
            id="description"
            placeholder="Ex: Watter tax payment..."
        ></textarea>
        </div>
    </div>`;

    emptyRow.appendChild(row);

    if (emptyRow.classList.contains("d-none")) {
      emptyRow.classList.remove("d-none");
    }

    modalHeader.classList.add("expense");
    if (modalHeader.classList.contains("gain")) {
      modalHeader.classList.remove("gain");
    }

    modalFooter.classList.add("expense");
    if (modalFooter.classList.contains("gain")) {
      modalFooter.classList.remove("gain");
    }
  }

  $("#amount").maskMoney({
    decimal: ",",
    thousands: ".",
    allowNegative: false,
  });
}
