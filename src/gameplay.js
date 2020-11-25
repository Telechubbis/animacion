GamePlayManager = {
    init : function () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload : function () {
        game.load.image("background", "assets/images/mario-1-1.png"); game.load.spritesheet("mario","assets/images/mario.png",65,102,2);
    },
    create : function () {
        game.add.sprite(0,0,"background");
        this.mario = game.add.sprite(0,0,"mario");
        this.mario.frame = 0;
        this.mario.x = game.width/2;
        this.mario.y = game.height/2;
        this.horse.anchor.setTo(0.5);
        
    },
    update : function () {
        var pointerX = game.input.x;
        var pointerY = game.input.y;
        
        var distX = pointerX-this.mario.x;
        var distY = pointerY-this.mario.y;
        if(distX>0){
            this.mario.scale.setTo(1,1);
        }else{
            this.mario.scale.setTo(-1,1);
        }
        
        this.mario.x +=distX * 0.02;
        this.mario.y +=distY * 0.02;
    }
};
var game = new Phaser.Game(1280, 630, Phaser.CANVAS);
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");