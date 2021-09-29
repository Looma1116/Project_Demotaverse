class Smile extends Phaser.GameObjects.Sprite{
    constructor(scene) {

        var x = scene.player.x;
        var y = scene.player.y - 30;
        super(scene, x, y, "smile");

        this.play("smile_anim");
        scene.add.existing(this);
        scene.emotions.add(this);

        scene.physics.world.enableBody(this);
        this.body.velocity.y = -20;
    }
    update(scene) {
        this.x = scene.player.x;
        this.y = scene.player.y;
    }
}