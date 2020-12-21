// Element Selectors
const billInput = document.querySelector(".input-bill");
const tipInput = document.querySelector(".input-tip");
const splitInput = document.querySelector(".input-split");
const calculateTipButton = document.querySelector(".calculate");
const totalBill = document.querySelector(".total-bill");

calculateTipButton.addEventListener("click", () => {
  let billAmount = billInput.value;
  let tipPercent = tipInput.value;
  let splitNumber = splitInput.value;
  console.log(billAmount, tipPercent, splitNumber);
  billAmount /= splitNumber;
  tipPercent /= 100;
  billAmount = billAmount + billAmount * tipPercent;
  billAmount = billAmount.toFixed(2);
  console.log(billAmount, tipPercent, splitNumber);
  totalBill.innerHTML = `$${billAmount}`;
});

// additional things you could do:
/*
- make front-end look much nicer
*/
