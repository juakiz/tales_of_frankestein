import H from '../../../utils/helpers';

export default class LegsGame extends Phaser.GameObjects.Container {
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
        const spider = this.scene.add.container();
        spider.setPosition(200 , 70);
        // spider.setScale(0.6);
        const cabeza = this.scene.add.image(0 , 0, 'atlas', "Aranya_cabeza");
        spider.patasDer = this.scene.add.image(0 , 0, 'atlas', "Aranya_pierna_der");
        spider.patasIzq = this.scene.add.image(0 , 0, 'atlas', "Aranya_pierna_izq");
        spider.add(cabeza);
        spider.add(spider.patasDer);
        spider.add(spider.patasIzq);
        const blood = this.scene.add.image(200 , 70, 'atlas', "blood");
        const ship1 = this.scene.add.image(400 , 70, 'atlas', "tela_aranya");
        const ship2 = this.scene.add.image(600 , 70, 'atlas', "tela_aranya");
        const ship3 = this.scene.add.image(1000 , 70, 'atlas', "tela_aranya");
        const ship4 = this.scene.add.image(700 , 70, 'atlas', "tela_aranya");
        const ship5 = this.scene.add.image(300 , 70, 'atlas', "tela_aranya");
        
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
        setTimeout(function(){ spider.alpha = 0; blood.alpha = 1; }, 5000);

        const back = this.scene.add.image(60 , 650, 'atlas', "back");
        back.setScale(0.2);
        back.setInteractive();
        back.on('pointerdown', () => {
            this.scene.scene.restart('GameScene');
        });
    }

    update() {
    }

    throughtMove(ship){
        ship.alpha = 1;
        setTimeout(function(){ ship.alpha = 0; }, 1000);
        this.scene.tweens.add({ 
            targets: ship, 
            y: 350, 
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
        this.scene.tweens.add({
            targets: [spider.patasDer, spider.patasIzq], 
            angle: -15, 
            ease: 'Sine.easeInOut', 
            duration: 80, 
            delay: 1000, 
            repeat: -1, 
            yoyo: true 
        });
    }

}
