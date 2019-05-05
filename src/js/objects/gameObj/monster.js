import H from '../../utils/helpers';

export default class Monster extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.scene.ee.on('countdown', () => {
            this.esfinje.visible = false;
            this.monkey.visible = false;
            this.monkey_hand.visible = false;
            this.monkey_papel.visible = false;
            this.monkey_tijera.visible = false;
        });

        this.create();
    }

    create() {

    }

    update() {
    }

    esfinje(){
        const esfinje = this.esfinje = this.scene.add.image(0, 0, 'atlas', 'esfinje_1');
        esfinje.setPosition(1060, 250);
        esfinje.setScale(0.75);
        this.add(esfinje);
    }

    monkey(){
        const monkey = this.monkey = this.scene.add.image(0, 0, 'atlas', 'gorilla_body');
        monkey.setPosition(1100, 250);
        monkey.setScale(0.85);
        this.add(monkey);

        const monkey_hand = this.monkey_hand = this.scene.add.image(0, 0, 'atlas', 'gorilla_piedra');
        monkey_hand.setPosition(1090, 250);
        monkey_hand.setScale(0.75);
        this.add(monkey_hand);
        this.monkeyMove(monkey_hand);

        const monkey_papel = this.monkey_papel = this.scene.add.image(0, 0, 'atlas', 'gorilla_papel');
        monkey_papel.setPosition(1090, 250);
        monkey_papel.setScale(0.75);
        this.add(monkey_papel);

        const monkey_tijera = this.monkey_tijera = this.scene.add.image(0, 0, 'atlas', 'gorilla_tijera');
        monkey_tijera.setPosition(1090, 250);
        monkey_tijera.setScale(0.75);
        this.add(monkey_tijera);

        monkey_papel.visible = false;
        monkey_tijera.visible = false;
        
    }

    monkeyChoise(choise){
        this.stopMove(this.monkey_hand);
        this.monkey_hand.visible = false;
        this.monkey_papel.visible = false;
        this.monkey_tijera.visible = false;
        if(choise == 0){
            this.monkey_hand.visible = true;
        }else if(choise == 1){
            this.monkey_papel.visible = true;
        }else if(choise == 2){
            this.monkey_tijera.visible = true;
        }
    }

    monkeyMove(monkey_hand){
        this.scene.tweens.add({ 
            targets: monkey_hand, 
            angle: 5, 
            ease: 'Sine.easeInOut', 
            duration: 200, 
            delay: 500, 
            repeat: -1, 
            yoyo: true 
        });
    }

    stopMove(monkey_hand){
        this.scene.tweens.add({ 
            targets: monkey_hand, 
            angle: 5, 
            ease: 'Sine.easeInOut', 
            duration: 1, 
            delay: 0, 
            repeat: -1, 
            yoyo: false 
        });
    }

    hideMonster(){
        this.monkey.visible = false;
        this.monkey_hand.visible = false;
        this.monkey_papel.visible = false;
        this.monkey_tijera.visible = false;
        this.esfinje.visible = false;
    }

}
