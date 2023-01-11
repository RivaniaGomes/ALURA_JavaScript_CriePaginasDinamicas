function TocaSomPom() {
  document.querySelector("#som_tecla_pom").play();
}

function tocaSomClap() {
  document.querySelector("#som_tecla_clap").play();
}

document.querySelector(".tecla_pom").onclick = TocaSomPom;
document.querySelector(".tecla_clap").onclick = tocaSomClap;
