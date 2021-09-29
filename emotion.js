class Smile extends Phaser.GameObject.Image{
    constructor(scene) {
        var x = scene.player.x;
        var y = scene.player.y + 20;
        super(scene, x, y, "smile");
        scene.projectiles.add(this);
    }
}