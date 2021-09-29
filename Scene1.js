class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        this.load.image("background", "assets/images/background.png");
        this.load.spritesheet("character", "assets/images/character.png", {
            frameWidth: 32,
            frameHeight: 32
        });
    }
    create() {
        this.add.text(20, 20, "Loading...");
        this.scene.start("playGame");
        this.anims.create({
            key: "player_anim",
            frames: this.anims.generateFrameNumbers("character"),
            frameRate: 10,
            repeat: -1,
        });


    }
}
