var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,game;
var playerCount,gameState;
var allPlayers;
var car1,car2,cars;
var car1Img,car2Img,piesta;
var taCaro, taCaroImg;
var carcoin, carcoinImg;
var life, lifeImg;
var obstacle1Image,obstacle2Image
var obstacles; 

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  piesta = loadImage("./assets/track.jpg");
  taCaroImg = loadImage("./assets/fuel.png");
  carcoinImg = loadImage("./assets/goldCoin.png");
  lifeImg = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  if(playerCount===2){
    game.updateState(1)
  }
  if(gameState===1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
