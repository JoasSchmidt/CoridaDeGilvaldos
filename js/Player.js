class Player {
  constructor() {
    this.name = null
    this.index = null
    this.positionX = 0
    this.positionY = 0
    this.ranking = 0
    this.score = 0
    this.taCaro = 200
  }

  getCount(){
    var countRef = database.ref("playerCount")
    countRef.on("value",(data)=>{
      playerCount = data.val()
    })
  }
  updateCount(valor){
    database.ref("/").update({
      playerCount:valor
    })
  }
  
  static getPlayerInfo(){
    var infoRef = database.ref("players")
    infoRef.on("value",(data)=>{
      allPlayers = data.val()
    })
  }


update(){
  var pastaPlayer = "players/player"+this.index
  
  database.ref(pastaPlayer).update({
    positionX:this.positionX,
    positionY:this.positionY,
    ranking:this.ranking,
    score:this.score,
    taCaro: this.taCaro
  })
}
addPlayer(){
  var pastaPlayer= "players/player"+ this.index;

  if(this.index ===1){
    this.positionX = width/2-200;
  }else{
    this.positionX = width/2+100;
  }

  database.ref(pastaPlayer).set({
    name: this.name,
    positionX: this.positionX,
    positionY: this.positionY,
    ranking:this.ranking,
    score:this.score,
    taCaro: this.taCaro
  });
}
getDistance() {
  var playerDistanceRef = database.ref("players/player" + this.index);
  playerDistanceRef.on("value", data => {
    var data = data.val();
    this.positionX = data.positionX;
    this.positionY = data.positionY;
  });
}
}