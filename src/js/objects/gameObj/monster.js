import H from '../../utils/helpers';

export default class Monster extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.create();
    }

    create() {

    }

    update() {
    }

    esfinje(){
        const esfinje = this.esfinje = this.scene.add.image(0, 0, 'esfinje_1');
        esfinje.setPosition(1060, 250);
        esfinje.setScale(0.75);
        this.add(esfinje);
    }

    monkey(){
        const monkey = this.monkey = this.scene.add.image(0, 0, 'gorilla_body');
        monkey.setPosition(1100, 250);
        monkey.setScale(0.85);
        this.add(monkey);

        const monkey_hand = this.monkey_hand = this.scene.add.image(0, 0, 'gorilla_piedra');
        monkey_hand.setPosition(1090, 250);
        monkey_hand.setScale(0.75);
        this.add(monkey_hand);
        this.monkeyMove(monkey_hand);
    }

    monkeyChoise(choise){
        this.monkey_hand.visible = false;
        if(choise == 0){
            const monkey_choice = this.monkey_choice = this.scene.add.image(0, 0, 'gorilla_piedra');
            monkey_choice.setPosition(1090, 250);
            monkey_choice.setScale(0.75);
            this.add(monkey_choice);
        }else if(choise == 1){
            const monkey_choice = this.monkey_choice = this.scene.add.image(0, 0, 'gorilla_papel');
            monkey_choice.setPosition(1090, 250);
            monkey_choice.setScale(0.75);
            this.add(monkey_choice);
        }else{
            const monkey_choice = this.monkey_choice = this.scene.add.image(0, 0, 'gorilla_tijera');
            monkey_choice.setPosition(1090, 250);
            monkey_choice.setScale(0.75);
            this.add(monkey_choice);
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
}
