function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaAtor();
  verificaColisao();
  mostraAtor2();
  movimentaAtor2();
  verificaColisao2();
  mostraCarro();
  movimentaCarro();
  voltaCarro();
  incluiPontos();
  marcarPonto();
  incluiPontos2();
  marcarPonto2();
}



