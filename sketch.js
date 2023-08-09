let musica;
/*let move = 20;*/
let volumeInicial = 0.01; //volume inicial desejado
let volumePassos = 0.1; // volume dos passos
let passos;

let personagem;
let espaco;

let tamanho = 64;

let andarX = 0;
let andarY = 0;

let botao;

/*let img = []
let contador=0;*/

// Carrega as musicas
function preload() {
  musica = loadSound('fundo.ogg');
  passos = loadSound('passos.ogg');
  /*img [1]= loadImage ('passo1.png');
  img [2]= loadImage ('passo2.png');
  img [3]= loadImage ('passo3.png');
  img [4]= loadImage ('passo4.png');*/
}


// é executado uma vez quando o programa é iniciado
function setup() {
  createCanvas(576, 576);
  personagem = loadImage('passo1.png');
  espaco = loadImage('espaco.jpg');
  portal = loadImage('portal.png');
  musica.play();
  musica.setVolume(volumeInicial);
  passos.play();
  passos.setVolume(volumePassos);
  musica.loop();
  passos.loop();
}

// fica rodando até que o programa seja encerrado
function draw() {
  background(220);

  if (andarX < 0) {
    andarX = 0;
  }

  if (andarY < 0) {
    andarY = 0;
  }

  if (andarX > tamanho * 8) {
    andarX = tamanho * 8;
  }

  if (andarY > tamanho * 8) {
    andarY = tamanho * 8;
  }

  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      image(espaco, x * tamanho, y * tamanho, tamanho, tamanho);
    }
  }

  image(personagem, andarX, andarY, tamanho, tamanho);
  image(portal, 512, 512, tamanho, tamanho);

  if (andarX === tamanho * 8 && andarY === tamanho * 8) {
    //criar um retangulo
    rect(175, 175, 200, 189);

    //escrever um texto 'Parabens'
    textSize(35);
    text("Parabens", 200, 300);

    //criar um botão
    /*text("Pressione R para reiniciar", 330, 280);*/
    botao = createButton("Reiniciar");

    //resetar o jogo
    botao.mousePressed(reset);

    //parar o jogo
    noLoop();
  }
}
function reset() {
  andarX = 0;
  andarY = 0;
  botao.remove();
  loop();
}


//executado uma vez,toda vez que há um evento de teclado
function keyPressed() {
  if (keyIsDown(DOWN_ARROW)) {
    andarY += 64;
  }

  if (keyIsDown(UP_ARROW)) {
    andarY -= 64;
  }

  if (keyIsDown(LEFT_ARROW)) {
    andarX -= 64;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    andarX += 64;
  }
}