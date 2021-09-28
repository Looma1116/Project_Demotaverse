class Scene2 extends Phaser.Scene{
    constructor() {
        super("playGame");
    }
    
    preload() {
        this.load.image("background", "/assets/images/background.png");    
        this.load.image("character", "/assets/images/character.png");    
    }

    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.add.text(20, 20, "Playing~", { font: "25px Arial", fill: "yellow" });
        this.player = this.add.image(config.width / 2, config.height / 2, "character");
    }

    movePlayer(player, direction) {
        if (direction == "up") {
            player.y -= 5;
        }
        if (direction == "down") {
            player.y += 5;
        }
        if (direction == "left"){
            player.x -= 5;
        }
        if (direction == "right") {
            player.x += 5;
        }
    }

    update() {
        this.movePlayer(this.player, "up");
        this.movePlayer(this.player, "left");
        this.movePlayer(this.player, "down");
        this.movePlayer(this.player, "right");
    }

}