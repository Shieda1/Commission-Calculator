// https://www.omnicalculator.com/finance/commission

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const commissionamountRadio = document.getElementById('commissionamountRadio');
const salepriceRadio = document.getElementById('salepriceRadio');
const commissionRadio = document.getElementById('commissionRadio');

let commissionamount;
let saleprice = v1;
let commission = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

commissionamountRadio.addEventListener('click', function() {
  variable1.textContent = 'Sale price';
  variable2.textContent = 'Commission';
  saleprice = v1;
  commission = v2;
  result.textContent = '';
});

salepriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Commission amount';
  variable2.textContent = 'Commission';
  commissionamount = v1;
  commission = v2;
  result.textContent = '';
});

commissionRadio.addEventListener('click', function() {
  variable1.textContent = 'Commission amount';
  variable2.textContent = 'Sale price';
  commissionamount = v1;
  saleprice = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(commissionamountRadio.checked)
    result.textContent = `Commission amount = ${computecommissionamount().toFixed(2)}`;

  else if(salepriceRadio.checked)
    result.textContent = `Sale price = ${computesaleprice().toFixed(2)}`;

  else if(commissionRadio.checked)
    result.textContent = `Commission = ${computecommission().toFixed(2)}`;
})

// calculation

function computecommissionamount() {
  return Number(saleprice.value) * (Number(commission.value) / 100);
}

function computesaleprice() {
  return Number(commissionamount.value) / (Number(commission.value) / 100);
}

function computecommission() {
  return (Number(commissionamount.value) / Number(saleprice.value)) * 100;
}