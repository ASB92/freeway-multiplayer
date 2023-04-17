//Cenário
var imagemEstrada;
var imagemAtor;
var imagemCarro1;
var imagemCarro2;
var imagemCarro3;
var somTrilha;
var somPonto;
var somColisao;

function preload(){
  imagemEstrada = loadImage("imagem/estrada.png");
  imagemAtor = loadImage("imagem/ator-1.png");
  imagemAtor2 = loadImage("imagem/ator-2.png");
  imagemCarro1 = loadImage("imagem/carro-1.png");
  imagemCarro2 = loadImage("imagem/carro-2.png");
  imagemCarro3 = loadImage("imagem/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  somTrilha = loadSound("sons/trilha.mp3");
  somPonto = loadSound("sons/pontos.wav");
  somColisao = loadSound("sons/colidiu.mp3")
  
}