// alura midi
function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

//usando o While como contador

// let contador = 0;

// while (contador < listaDeTeclas.length) {
//   const tecla = listaDeTeclas[contador];
//   const instrumento = tecla.classList[1];
//   const idAudio = `#som_${instrumento}`;

//   tecla.onclick = function () {
//     tocaSom(idAudio);
//   };
//   contador++;
// }

//usando o For como contador

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    // console.log(evento.code)

    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

// alura fone

const listaDeTeclasTel = document.querySelectorAll("input[type=button]");
const inputTel = document.querySelector("input[type=tel]");

for (indice = 0; indice < listaDeTeclasTel.length; indice++) {
  const tecla = listaDeTeclasTel[indice];

  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  };
  tecla.onkeydown = function (evento) {
    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}