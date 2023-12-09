[1, 2, 3].map((x) => x * x);

function storeOrder({ id, currency }) {
  // destructuring
  localStorage.setItem("id", id);
  localStorage.setItem("currency", currency);
}
