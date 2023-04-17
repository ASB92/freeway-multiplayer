let xCarros = [600, 600, 600, -50, -50, -50];
let yCarros = [40, 96, 150, 210, 263, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(var i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40); 
    }
}

function movimentaCarro(){
  for (var i = 0; i < 3; i++){
    xCarros[i] -= velocidadeCarros[i];
  } 
  for (var i = 3; i < imagemCarros.length; i++){
    xCarros[i] += velocidadeCarros[i]
  }
}

function voltaCarro(){
  for (var i = 0; i < 3; i++){
    if(passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
    }  
  }
  for (var i = 3; i < imagemCarros.length; i++){
    if(xCarros[i] > 600){;
    xCarros[i] = -50;
    }                     
  }
} 
  
function passouTodaTela(xCarros){
    return xCarros < - 50;
}  