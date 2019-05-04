import H from '../utils/helpers';

export default class LegsScreenCnt extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.config = {
            width: 1280,
            height: 720,
        };



        this.create();
    }

    create() {
        const bg = this.bg = this.scene.add.graphics();
        bg.fillStyle(0xffffaa, 1);
        bg.fillRect(0, 0, 1280, 720);
        
        const spider = this.scene.add.image(200 , 100, "spider");
        const blood = this.scene.add.image(200 , 100, "blood");
        const ship1 = this.scene.add.image(400 , 100, "ship");
        const ship2 = this.scene.add.image(600 , 100, "ship");
        const ship3 = this.scene.add.image(1000 , 100, "ship");
        const ship4 = this.scene.add.image(700 , 100, "ship");
        const ship5 = this.scene.add.image(300 , 100, "ship");
        ship1.alpha = 0; 
        ship2.alpha = 0; 
        ship3.alpha = 0; 
        ship4.alpha = 0; 
        ship5.alpha = 0; 
        blood.alpha = 0;
        this.spiderMove(spider);
        const _this = this
        setTimeout(function(){_this.throughtMove(ship1);}, 1500);
        setTimeout(function(){ _this.throughtMove(ship2); }, 2000);
        setTimeout(function(){ _this.throughtMove(ship3); }, 3000);
        setTimeout(function(){ _this.throughtMove(ship4); }, 4000);
        setTimeout(function(){ _this.throughtMove(ship5); }, 4600);
        setTimeout(function(){ 
            spider.alpha = 0; 
            blood.alpha = 1; 
        }, 5000);
    }

    update() {
    }

    throughtMove(ship){
        ship.alpha = 1;
        setTimeout(function(){ ship.alpha = 0; }, 1000);
        this.scene.tweens.add({ 
            targets: ship, 
            y: 400, 
            ease: 'Sine.easeInOut', 
            duration: 1000,
        });
    }

    spiderMove(spider){
        this.scene.tweens.add({ 
            targets: spider, 
            x: 900, 
            ease: 'Sine.easeInOut', 
            duration: 2000, 
            delay: 1000, 
            repeat: -1, 
            yoyo: true 
        });
    }

}
