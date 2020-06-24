// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  return title.slice().toLowerCase().split(/[\W_]/gi).filter(x => x !== '').join("-");
}
urlSlug(" Winter Is  Coming !");
// Only change code above this line
