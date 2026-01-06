function updateWish(input) {
  console.log(`\nInput id: ${input.id}`);
  console.log(`\nInput check: ${input.checked}`);
  fetch("/wishlist", {
    method: "UPDATE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ wish_id: input.id, its_done: input.checked }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      window.location.href = "/wishlist";
    })
    .catch((error) => {
      console.error("Algo deu errado:", error);
    });
}

function deleteWish(button) {
  const row = button.closest(".row");
  const input = row.querySelector('input[type="checkbox"]');

  fetch("/wishlist", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ wish_id: input.id }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      window.location.href = "/wishlist";
    })
    .catch((error) => {
      console.error("Algo deu errado:", error);
    });
}
