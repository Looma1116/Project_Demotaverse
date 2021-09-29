class Scene2 extends Phaser.Scene{
    constructor() {
        super("playGame");
    }

    create() {
        this.background = this.add.tileSprite(0, 0, 1200, 800, "background");
        this.background.setOrigin(0, 0);
        this.background.setScrollFactor(0);
        this.cameras.main.setSize(400, 300);
        
        this.men = this.physics.add.group();


        var maxMan = 4;
        for (var i = 0; i <= maxMan; i++){
            var man = this.physics.add.sprite(32, 32, "character");
            this.men.add(man);
            man.setRandomPosition(0, 0, game.config.width, game.config.height);   
            man.setVelocity(50, 50);
            man.setCollideWorldBounds(true);
            man.setBounce(1);
        }



        this.player = this.physics.add.sprite(config.width / 2, config.height / 2, "character");
        this.player.play("player_anim");
        this.player.setInteractive();

        this.cursors = this.input.keyboard.createCursorKeys();
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);




        this.cameras.main.setBounds(0, 0, game.config.width, game.config.height);
        this.cameras.main.startFollow(this.player);
    }
            

    update() {
        this.background.tilePositionY = this.cameras.main.scrollY;
        this.background.tilePositionX = this.cameras.main.scrollX;
        this.movePlayer();
    }

    emotionSmile() {
        var smiling = new Smile(this);
    }

    movePlayer() {
        if (this.cursors.left.isDown && this.player.x > 0) {
            //this.player.setVelocityX(-gameSettings.playerSpeed);
            this.player.x -= 2;
        }
        else if (this.cursors.right.isDown && this.player.x < game.config.width) {
            this.player.x += 2;
            this.player.scaleX = -1;
      
        }
        else if (this.cursors.up.isDown && this.player.y > 0) {
            this.player.y -= 2;
      
        }
        else if (this.cursors.down.isDown && this.player.y < game.config.height) {
            this.player.y += 2;
      
        }
    }
}