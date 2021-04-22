const account = [
  { month: 10, income: 150 },
  { month: 1, income: 200, expense: 50 },
  { month: 3, income: 450, expense: 200 },
  { month: 7, expense: 50 },
  { month: 2, income: 50 },
  { month: 5, income: 150, expense: 50 },
  { month: 9, income: 700, expense: 400 },
  { month: 4, income: 10, expense: 300 },
  { month: 6, expense: 50 },
  { month: 11, income: 150, expense: 30 },
  { month: 8, income: 450, expense: 120 },
  { month: 12, expense: 200 },
];
const mo = [
  "sausis",
  "vasaris",
  "kovas",
  "baandis",
  "geguze",
  "birzelis",
  "birzelis",
  "birzelis",
  "birzelis",
  "birzelis",
  "birzelis",
  "birzelis",
];

account.sort(function (a, b) {
  return a.month - b.month;
});

// const newState = account.map((obj) =>
//   obj.month === 1 ? { ...obj, month: mo[0] } : obj
// );

const result = account.map(function (obj) {
  return obj.month === 2 ? { ...obj, month: mo[2] } : obj;
});

export { account, mo, result };
