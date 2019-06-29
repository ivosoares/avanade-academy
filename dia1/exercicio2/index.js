function destroyer() {
  var args = Array.from(arguments);
  var arr = args[0];
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var valor = arr[i];
    if (args.indexOf(valor) === -1) {
      result.push(valor);
    }
  }
  return result;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1].
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)) // deve retornar [1, 5, 1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)) // deve retornar [1].
console.log(destroyer([2, 3, 2, 3], 2, 3)) // deve retornar [].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)) // deve retornar ["hamburger"].