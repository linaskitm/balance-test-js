import { account } from "./data.js";
import {
  switchMonths,
  maxEarn,
  minEarn,
  maxExpence,
  minExpence,
} from "./functions.js";
const displayContent = document.getElementById("display-content");
const displayInc = document.getElementById("inc");
const displayExp = document.getElementById("exp");
const displayBalance = document.getElementById("balance");
const displayMaxIncome = document.getElementById("maxIncome");
const displayMinIncome = document.getElementById("minIncome");
const displayMaxExpence = document.getElementById("maxExpense");
const displayMinExpence = document.getElementById("minExpense");

let incSum = 0;
let expSum = 0;
let balanceSum = 0;

const data = account.map((item, index) => {
  let inc = item.income ? item.income : 0;
  let exp = item.expense ? item.expense : 0;
  let balance = inc - exp;

  incSum += inc;
  expSum += exp;
  balanceSum += balance;

  return `
            <div class="table-row">
                <div class="cell">${index + 1}</div>
                <div class="cell">${switchMonths(item.month)}</div>
                <div class="cell">${inc.toFixed(2)}</div>
                <div class="cell">${exp.toFixed(2)}</div>
                <div class="cell">${balance.toFixed(2)} Eur</div>
            </div>
    `;
});

displayContent.innerHTML = data;

displayInc.append(`${incSum.toFixed(2)} Eur`);
displayExp.append(`${expSum.toFixed(2)} Eur`);
displayBalance.append(`${balanceSum.toFixed(2)} Eur`);

displayMaxIncome.append(maxEarn());
displayMinIncome.append(minEarn());
displayMaxExpence.append(maxExpence());
displayMinExpence.append(minExpence());
