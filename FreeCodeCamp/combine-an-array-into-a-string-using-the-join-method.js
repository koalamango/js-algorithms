function sentensify(str) {
  // Only change code below this line
  return str.split(/[^a-z0-9]/gi).join(" ");
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
