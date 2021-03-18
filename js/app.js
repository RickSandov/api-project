let currencies = {
  USD: "1",
  AED: "3.6725",
  AFN: "77.9425",
  ALL: "103.2703",
  AMD: "527.3404",
  ANG: "1.79",
  AOA: "620.2161",
  ARS: "91.1043",
  AUD: "1.2896",
  AWG: "1.79",
  AZN: "1.6985",
  BAM: "1.6352",
  BBD: "2",
  BDT: "84.8372",
  BGN: "1.6378",
  BHD: "0.376",
  BIF: "1944.2386",
  BMD: "1",
  BND: "1.3444",
  BOB: "6.8952",
  BRL: "5.6413",
  BSD: "1",
  BTN: "72.5787",
  BWP: "11.0395",
  BYN: "2.5977",
  BZD: "2",
  CAD: "1.2432",
  CDF: "1977.3756",
  CHF: "0.9255",
  CLP: "726.7926",
  CNY: "6.5028",
  COP: "3574.0092",
  CRC: "609.9388",
  CUC: "1",
  CUP: "25.75",
  CVE: "92.1898",
  CZK: "21.9577",
  DJF: "177.721",
  DKK: "6.2374",
  DOP: "57.3462",
  DZD: "133.6474",
  EGP: "15.7016",
  ERN: "15",
  ETB: "40.6495",
  EUR: "0.8362",
  FJD: "2.0296",
  FKP: "0.7175",
  FOK: "6.2374",
  GBP: "0.7176",
  GEL: "3.3215",
  GGP: "0.7175",
  GHS: "5.7369",
  GIP: "0.7175",
  GMD: "51.82",
  GNF: "10093.3924",
  GTQ: "7.7155",
  GYD: "211.5519",
  HKD: "7.7699",
  HNL: "24.034",
  HRK: "6.2994",
  HTG: "77.7476",
  HUF: "309.036",
  IDR: "14461.4976",
  ILS: "3.3009",
  IMP: "0.7175",
  INR: "72.579",
  IQD: "1457.1313",
  IRR: "42110.4857",
  ISK: "127.1937",
  JMD: "146.1792",
  JOD: "0.709",
  JPY: "109.0921",
  KES: "109.828",
  KGS: "84.808",
  KHR: "4043.6917",
  KID: "1.2897",
  KMF: "411.322",
  KRW: "1129.6873",
  KWD: "0.2996",
  KYD: "0.8333",
  KZT: "418.7052",
  LAK: "9362.2003",
  LBP: "1507.5",
  LKR: "199.8114",
  LRD: "171.9484",
  LSL: "14.7805",
  LYD: "4.494",
  MAD: "9.001",
  MDL: "17.7051",
  MGA: "3790.7013",
  MKD: "51.719",
  MMK: "1410.6568",
  MNT: "2846.6637",
  MOP: "8.003",
  MRU: "35.8939",
  MUR: "40.2101",
  MVR: "15.4286",
  MWK: "782.6445",
  MXN: "20.5852",
  MYR: "4.1214",
  MZN: "73.0182",
  NAD: "14.7805",
  NGN: "393.0771",
  NIO: "34.9034",
  NOK: "8.4696",
  NPR: "116.1259",
  NZD: "1.3894",
  OMR: "0.3845",
  PAB: "1",
  PEN: "3.6985",
  PGK: "3.5199",
  PHP: "48.7412",
  PKR: "156.0711",
  PLN: "3.8638",
  PYG: "6595.1252",
  QAR: "3.64",
  RON: "4.1013",
  RSD: "98.7439",
  RUB: "73.5746",
  RWF: "986.2455",
  SAR: "3.75",
  SBD: "7.9774",
  SCR: "21.1379",
  SDG: "378.997",
  SEK: "8.4948",
  SGD: "1.3445",
  SHP: "0.7175",
  SLL: "10146.376",
  SOS: "577.5839",
  SRD: "14.1293",
  SSP: "177.605",
  STN: "20.4838",
  SYP: "700.8",
  SZL: "14.7805",
  THB: "30.8023",
  TJS: "11.3367",
  TMT: "3.4958",
  TND: "2.7426",
  TOP: "2.2415",
  TRY: "7.5152",
  TTD: "6.7814",
  TVD: "1.2897",
  TWD: "28.2796",
  TZS: "2316.4473",
  UAH: "27.6872",
  UGX: "3664.3989",
  UYU: "44.4821",
  UZS: "10544.0622",
  VES: "1809722.9064",
  VND: "23174.0427",
  VUV: "108.6149",
  WST: "2.4942",
  XAF: "548.4293",
  XCD: "2.7",
  XDR: "0.7001",
  XOF: "548.4293",
  XPF: "99.7705",
  YER: "251.1444",
  ZAR: "14.7819",
  ZMW: "22.0409",
};

// async function main() {
//   const apiCall = await (
//     await fetch(
//       "https://v6.exchangerate-api.com/v6/b7cae6a8af14dfb9b56f4a44/latest/USD"
//     )
//   ).json();
//   currencies = apiCall.conversion_rates;

//   fillOptions(currencies);
// }

const selectFrom = document.querySelector("#select-from");
const selectTo = document.querySelector("#select-to");
const inputFrom = document.querySelector('#input-from');
const result = document.querySelector('.result');
const change = document.querySelector('.btn-change');

selectFrom.addEventListener('change', convertCurrency);
selectTo.addEventListener('change', convertCurrency);
inputFrom.addEventListener('keyup', convertCurrency);

change.addEventListener('click', e => {
    const prevName = selectFrom.name;
    const prevValue = selectFrom.value;

    selectFrom.name = selectTo.name;
    selectFrom.value = selectTo.value;

    selectTo.name = prevName;
    selectTo.value = prevValue;

    convertCurrency(e);
});

function convertCurrency(e) {
    e.preventDefault();
    result.textContent = `Result: ${((Number(inputFrom.value)/selectFrom.value) * selectTo.value).toFixed(2)}`;
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

// main();
fillOptions(currencies, selectFrom);
fillOptions(currencies, selectTo);


// let currencies;
// const selectFrom = document.querySelector("#select-from");
// const selectTo = document.querySelector("#select-to");
// const inputFrom = document.querySelector("#input-from");
// const result = document.querySelector(".result");
// const change = document.querySelector(".btn-change");

// selectFrom.addEventListener("change", convertCurrency);
// selectTo.addEventListener("change", convertCurrency);
// inputFrom.addEventListener("keyup", convertCurrency);

// change.addEventListener("click", (e) => {
//   const prevName = selectFrom.name;
//   const prevValue = selectFrom.value;

//   selectFrom.name = selectTo.name;
//   selectFrom.value = selectTo.value;

//   selectTo.name = prevName;
//   selectTo.value = prevValue;

//   convertCurrency(e);
// });

// // Fetch api
// async function main() {
//   const apiCall = await (
//     await fetch(
//       "https://v6.exchangerate-api.com/v6/b7cae6a8af14dfb9b56f4a44/latest/USD"
//     )
//   ).json();
//   currencies = apiCall.conversion_rates;

//   fillOptions(currencies, selectFrom);
//   fillOptions(currencies, selectTo);
// }

// function convertCurrency(e) {
//   e.preventDefault();
//   result.textContent = (
//     (Number(inputFrom.value) / selectFrom.value) *
//     selectTo.value
//   ).toFixed(2);
// }

// function fillOptions(currencies, select) {
//   for (currency in currencies) {
//     const option = document.createElement("option");
//     option.value = Number(currencies[currency]);
//     option.name = currency;
//     option.textContent = currency;
//     select.appendChild(option);
//   }
// }

// main();