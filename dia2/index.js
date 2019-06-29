var input = document.getElementsByClassName('input-text')[0];
var button = document.getElementsByClassName('btn-action')[0];
var output = document.getElementById('output');

var frutas = [{
    fruta: "uva",
    imagem: "uva-imagem"
  },
  {
    fruta: "banana",
    imagem: "banana-imagem"
  },
  {
    fruta: "pera",
    imagem: "pera-imagem"
  }
]
console.log()
input.addEventListener('input', function (event) {
  for (var i = 0; i < frutas.length; i++) {
    var nome = frutas[i].fruta;
    if (nome === this.value) {
      console.log('teste');
    }
    console.log(nome)
  };
  output.innerHTML = this.value;
});