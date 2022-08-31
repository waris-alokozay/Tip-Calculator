const RESET_BTN = document.querySelector("#reset-btn");
const BILL_INPUT = document.querySelector("#bill-input");
const TIP_AMOUNT = document.querySelector("#tip-amount");
const TOTAL_PRICE = document.querySelector("#total-price-total");
const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");
const twintyFive = document.querySelector(".twinty-five");
const fifty = document.querySelector(".fifty");
const PEOPLE = document.querySelector("#people");
/*--------------------------------------------------------*/
let inputValue = Number(BILL_INPUT.value);
let people = Number(PEOPLE.value);

const FIVE = () => {
  let divideTipToTotal = (5 / 100) * inputValue;
  console.log(divideTipToTotal);
  let total = inputValue + divideTipToTotal;
  TIP_AMOUNT.innerHTML = "$" + divideTipToTotal.toFixed(2);
  let result = people * total;
  TOTAL_PRICE.innerHTML = "$" + result.toFixed(2);
};
const TEN = () => {
  let divideTipToTotal = (10 / 100) * inputValue;
  console.log(divideTipToTotal);
  let total = inputValue + divideTipToTotal;
  TIP_AMOUNT.innerHTML = "$" + divideTipToTotal.toFixed(2);
  let result = people * total;
  TOTAL_PRICE.innerHTML = "$" + result.toFixed(2);
};
const FIFTEEN = () => {
  let divideTipToTotal = (15 / 100) * inputValue;
  console.log(divideTipToTotal);
  let total = inputValue + divideTipToTotal;
  TIP_AMOUNT.innerHTML = "$" + divideTipToTotal.toFixed(2);
  let result = people * total;
  TOTAL_PRICE.innerHTML = "$" + result.toFixed(2);
};
const TWINTYFIVE = () => {
  let divideTipToTotal = (25 / 100) * inputValue;
  console.log(divideTipToTotal);
  let total = inputValue + divideTipToTotal;
  TIP_AMOUNT.innerHTML = "$" + divideTipToTotal.toFixed(2);
  let result = people * total;
  TOTAL_PRICE.innerHTML = "$" + result.toFixed(2);
};
const FIFTY = () => {
  let divideTipToTotal = (50 / 100) * inputValue;
  console.log(divideTipToTotal);
  let total = inputValue + divideTipToTotal;
  TIP_AMOUNT.innerHTML = "$" + divideTipToTotal.toFixed(2);
  let result = people * total;
  TOTAL_PRICE.innerHTML = "$" + result.toFixed(2);
};
five.addEventListener("click", FIVE);
ten.addEventListener("click", TEN);
fifteen.addEventListener("click", FIFTEEN);

twintyFive.addEventListener("click", TWINTYFIVE);

fifty.addEventListener("click", FIFTY);

RESET_BTN.addEventListener("click", () => {
  window.location.reload();
});
