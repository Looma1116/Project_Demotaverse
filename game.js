var config = {
    width: 1200,
    height: 800,
    backgroundColor:0x000000,
    scene: [Scene1, Scene2],
    physics: {
        default: "arcade",
        arcade: {
            debug:false
        }
    }
}

var gameSettings = {
    playerSpeed: 200
}
window.onload = function () {
    game = new Phaser.Game(config);
}