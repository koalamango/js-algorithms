function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  Object.keys(arr).map((x) => {
    const earth = earthRadius + arr[x].avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    delete arr[x].avgAlt;
    arr[x].orbitalPeriod = orbitalPeriod;
  });
  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
