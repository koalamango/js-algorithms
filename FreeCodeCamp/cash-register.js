function checkCashRegister(price, cash, cid) {
  const insufficientFunds = "INSUFFICIENT_FUNDS";
  const closed = "CLOSED";
  const open = "OPEN";

  const currencyValues =
    [["ONE HUNDRED", 10000],
    ["TWENTY", 2000],
    ["TEN", 1000],
    ["FIVE", 500],
    ["ONE", 100],
    ["QUARTER", 25],
    ["DIME", 10],
    ["NICKEL", 5],
    ["PENNY", 1]];

  function getCashInDrawer(name, cid) {
    for (var denomination of cid) {
      if (denomination[0] === name) {
        return denomination[1] * 100;
      }
    }
  }

  var change = [];
  var status = closed;
  var changeRequired = cash * 100 - price * 100;

  for (var denomination of currencyValues) {
    var changeInDrawer = getCashInDrawer(denomination[0], cid);

    var numToReturn = 0;
    while (denomination[1] <= changeRequired && changeInDrawer > 0) {
      numToReturn ++;
      changeInDrawer = changeInDrawer - denomination[1];
      changeRequired = changeRequired - denomination[1];
    }

    if (numToReturn > 0) {
       change[change.length] = [denomination[0], numToReturn * denomination[1] / 100];
    }

    if (changeInDrawer > 0) {
      status = open;
    }
  }

  if (changeRequired > 0) {
    status = insufficientFunds;
    change = [];
  }

  if (status === closed) {
    change = cid;
  }

  return {
    status: status,
    change: change
  };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
