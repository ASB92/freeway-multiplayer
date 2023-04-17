//Vaquinha
var xAtor = 100;
var yAtor = 366;
var colisao = false;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }  
    
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
     yAtor += 3; 
    }
    
  }
}

function verificaColisao(){
  for (var i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 50, 40, xAtor, yAtor, 15);
      if (colisao){
        voltaVaquinha();
        somColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
    
  }
}

var meusPontos = 0;

function incluiPontos(){
  textAlign(CENTER);
  textSize(20);
  fill(color(46,139,87));
  text(meusPontos, 160, 26);
  

}


function marcarPonto(){
  if (yAtor <= 10){
    meusPontos++
    somPonto.play();
    voltaVaquinha();
  }
}

function pontosMaiorQueZero(){
 return meusPontos > 0;
}

function voltaVaquinha(){
  yAtor = 366;
}

function podeSeMover(){
  return yAtor < 366;
}
  