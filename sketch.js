// const _width = window.screen.availWidth - 700;
// const _height = window.screen.availHeight - 540;

const _width = 600;
const _height = 400;

const fontsize = 45;
let font;
let pointSound;
let racketSound;
let themeSound;

function preload() {

  font = loadFont('assets/kenney_fontpackage/Fonts/Kenney_Blocks.ttf');
  pointSound = loadSound("assets//Pong_Sons//ponto.mp3");
  themeSound = loadSound("assets//Pong_Sons//trilha.mp3");
  racketSound = loadSound("assets//Pong_Sons//raquetada.mp3");

  // pointSound = loadSound('ponto.mp3');
  // themeSound = loadSound('trilha.mp3');
  // racketSound = loadSound('raquetada.mp3');
}

function setup() {
  createCanvas(_width, _height);
  // themeSound.loop();
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function checkBallCanvasCollide() {
  if (xBallPos > xBallLimit || xBallPos < radius) {
    xBallSpeed = -xBallSpeed;
    pointSound.play();

    // ADD ENEMY SCORE
    if(xBallPos < radius){
      enemyScore++;
      // xBallPos = _width / 2;
      // yBallPos = _height / 2;
    }
  }
  if (yBallPos > yBallLimit || yBallPos < radius) {
    yBallSpeed = -yBallSpeed;
  }
}

function moveRacket() {
  if (keyIsDown(UP_ARROW) && yRacketPos > upRacketLimit)
    yRacketPos += -yRacketSpeed;

  if (keyIsDown(DOWN_ARROW) && yRacketPos < downRacketLimit)
    yRacketPos += yRacketSpeed;
}

function moveEnemyRacket() {
  // Enemy moviment logic is here.
  _yRacketPos = yBallPos - _racketHeight / 2;
}

function moveBall() {
  xBallPos += xBallSpeed;
  yBallPos += yBallSpeed;
}

function drawBall() {
  circle(xBallPos, yBallPos, diameter);
}

function drawRacket(x, y, w, h) {
  rect(x, y, w, h);
}

function checkBallRacketCollide(
  xRect,
  yRect,
  rectW,
  rectH,
  xCircle,
  yCircle,
  d
) {
  if (collideRectCircle(xRect, yRect, rectW, rectH, xCircle, yCircle, d)){
    racketSound.play();
    xBallSpeed = -xBallSpeed;
  }
    
}

function drawScore() {
  fill(255);
  text(playerScore, width / 2 / 2, 45);
  text(enemyScore, width / 2 + width / 2 / 2, 45);
}

function draw() {
  background(0);

  drawBall();
  moveBall();

  //Ball collide whit Player Racket
  checkBallRacketCollide(
    xRacketPos,
    yRacketPos,
    racketWidth,
    racketHeight,
    xBallPos,
    yBallPos,
    diameter
  );

  //Ball collide whit PC Racket
  checkBallRacketCollide(
    _xRacketPos,
    _yRacketPos,
    _racketWidth,
    _racketHeight,
    xBallPos,
    yBallPos,
    diameter
  );

  checkBallCanvasCollide();

  drawScore();
  drawScore();

  // drawPlayerRacket
  drawRacket(xRacketPos, yRacketPos, racketWidth, racketHeight);

  // drawEnemyRacket
  drawRacket(_xRacketPos, _yRacketPos, _racketWidth, _racketHeight);

  moveRacket();
  moveEnemyRacket();
}
