//Ovelhinha
var xAtor2 = 330;
var yAtor2 = 366;

function mostraAtor2(){
  image(imagemAtor2, xAtor2, yAtor2, 30, 30);
}

function movimentaAtor2(){
  if (keyIsDown(87)) {
    yAtor2 -= 3;
  }  
  
  if (keyIsDown(83)){
    if(podeSeMover2()){
     yAtor2 += 3; 
    } 
  }
}

function podeSeMover2(){
  return yAtor2 < 366;
}

function verificaColisao2(){
  for (var i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 50, 40, xAtor2, yAtor2, 15);
      if (colisao){
        voltaOvelhinha();
        somColisao.play();
      if (pontosOpMaiorQueZero()){
        pontosOponente -= 1;
      }
    }
  }
}

var pontosOponente = 0;

function incluiPontos2(){
  textAlign(CENTER);
  textSize(20);
  fill(color(46,139,87));
  text(pontosOponente, 390, 26);
  

}


function marcarPonto2(){
  if (yAtor2 <= 10){
    pontosOponente++
    somPonto.play();
    voltaOvelhinha();
  }
}

function pontosOpMaiorQueZero(){
 return pontosOponente > 0;
}

function voltaOvelhinha(){
  yAtor2 = 366;
}
