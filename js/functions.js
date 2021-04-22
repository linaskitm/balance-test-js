import { account } from "./data.js";

function switchMonths(key) {
  let month = "";
  switch (key) {
    case 1:
      month = "Sausis";
      break;
    case 2:
      month = "Vasaris";
      break;
    case 3:
      month = "Kovas";
      break;
    case 4:
      month = "Balandis";
      break;
    case 5:
      month = "Geguze ";
      break;
    case 6:
      month = "Birzeis ";
      break;
    case 7:
      month = "Liepa ";
      break;
    case 8:
      month = "Rugpjutis ";
      break;
    case 9:
      month = "Rugsejis ";
      break;
    case 10:
      month = "Spalis ";
      break;
    case 11:
      month = "Lapkritis ";
      break;
    default:
      month = "Gruodis ";
  }
  return month;
}

function maxEarn() {
  let maxInc = 0;
  let monthDigit = 0;
  account.map((item) => {
    if (item.income > maxInc) {
      maxInc = item.income;
      monthDigit = item.month;
    }
  });
  return switchMonths(monthDigit);
}
function minEarn() {
  let maxInc = 1000000000;
  let monthDigit = 0;
  account.map((item) => {
    if (item.income < maxInc && item.income != 0) {
      maxInc = item.income;
      monthDigit = item.month;
    }
  });
  return switchMonths(monthDigit);
}
function maxExpence() {
  let maxExp = 0;
  let monthDigit = 0;
  account.map((item) => {
    if (item.expense > maxExp) {
      maxExp = item.expense;
      monthDigit = item.month;
    }
  });
  return switchMonths(monthDigit);
}
function minExpence() {
  let maxExp = 1000000000;
  let monthDigit = 0;
  account.map((item) => {
    if (item.expense < maxExp && item.expense != 0) {
      maxExp = item.expense;
      monthDigit = item.month;
    }
  });
  return `
  ${switchMonths(monthDigit)} ${maxExp}
  `;
}
export { switchMonths, maxEarn, minEarn, maxExpence, minExpence };
