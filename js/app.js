
let currencies;
const selectFrom = document.querySelector("#select-from");
const selectTo = document.querySelector("#select-to");
const inputFrom = document.querySelector("#input-from");
const result = document.querySelector(".result");
const change = document.querySelector(".btn-change");

selectFrom.addEventListener("change", convertCurrency);
selectTo.addEventListener("change", convertCurrency);
inputFrom.addEventListener("keyup", convertCurrency);

change.addEventListener("click", (e) => {
  const prevName = selectFrom.name;
  const prevValue = selectFrom.value;

  selectFrom.name = selectTo.name;
  selectFrom.value = selectTo.value;

  selectTo.name = prevName;
  selectTo.value = prevValue;

  convertCurrency(e);
});

// Fetch api
async function main() {
  const apiCall = await (
    await fetch(
      "https://v6.exchangerate-api.com/v6/b7cae6a8af14dfb9b56f4a44/latest/USD"
    )
  ).json();
  currencies = apiCall.conversion_rates;

  fillOptions(currencies, selectFrom);
  fillOptions(currencies, selectTo);
}

function convertCurrency(e) {
  e.preventDefault();
  result.textContent = (
    (Number(inputFrom.value) / selectFrom.value) *
    selectTo.value
  ).toFixed(2);
}

function fillOptions(currencies, select) {
  for (currency in currencies) {
    const option = document.createElement("option");
    option.value = Number(currencies[currency]);
    option.name = currency;
    option.textContent = currency;
    select.appendChild(option);
  }
}

main();