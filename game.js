class Game {
  constructor(parentElement, width, height) {
    this.parentElement = parentElement;
    this.width = width;
    this.height = height;
    this.mainDiv = document.querySelector(".main");
    this.road = null;
    this.moveRoadPosition = -this.height;
    this.roadSpeed = 2;
    this.startInterval;
  }

  init = () => {
    this.createStartScreen();
    this.startGame();
  };

  createStartScreen = () => {
    let gamescreen = document.createElement("div");
    gamescreen.classList.add("game");
    gamescreen.style.width = this.width + "px";
    gamescreen.style.height = this.height + "px";
    gamescreen.style.border = 1 + "px";
    gamescreen.style.borderColor = "black";
    gamescreen.style.borderStyle = "solid";

    let road = document.createElement("div");
    road.classList.add("road");
    road.style.marginTop = this.moveRoadPosition + "px";
    gamescreen.appendChild(road);
    this.road = road;

    this.mainDiv.appendChild(gamescreen);
  };

  startGame = () => {
    var startInterval = setInterval(() => {
      this.moveRoad();
      this.showRoad();
    }, 0);
  };

  moveRoad = () => {
    this.moveRoadPosition += this.roadSpeed;
  };

  showRoad = () => {
    this.road.style.marginTop = this.moveRoadPosition + "px";
    if (this.moveRoadPosition + this.roadSpeed >= 0) {
      var diff = this.roadSpeed - this.moveRoadPosition;
      this.moveRoadPosition = -800 + diff;
    }
  };
}

(function () {
  let game1 = document.querySelector(".game");
  new Game(game1, 600, 800).init();
})();
