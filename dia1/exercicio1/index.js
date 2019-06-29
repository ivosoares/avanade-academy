// Exercício 1 Avanade academy javascript

var sumAll = function (array) {
    if (array[0] > array[1]) {
        array.reverse();
    }
    var saida = 0
    for (i=array[0]; i <= array[1]; i++) {
        saida += i;
    }
    console.log(saida);
};

var result = sumAll([10,5]);
console.log(result);