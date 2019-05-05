import H from '../../utils/helpers';

export default class Player extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.x = 100;
        this.y = 415;

        this.setScale(0.45);

        this.create();

        this.move = 0;

        this.scene.ee.on('countdown', () => {
            this.papel.visible = false;
            this.tijeras.visible = false;
        });
    }

    create() {
        const leg = this.leg = this.scene.add.image(0, 0, 'atlas', 'Frank_piernas');
        leg.setOrigin(0.5, 1);
        this.add(leg);

        const head = this.head = this.scene.add.image(-15, 0, 'atlas', 'Frank_Cabbeza');
        head.setOrigin(0.5, 1);
        this.add(head);

        const brazo_der = this.brazo_der = this.scene.add.image(0, 0, 'atlas', 'Frank_piedra');
        brazo_der.setOrigin(0.5, 1);
        
        const brazo_izq = this.brazo_izq = this.scene.add.image(0, 0, 'atlas', 'Frank_pizza');
        brazo_izq.setOrigin(0.5, 1);
        this.add(brazo_izq);
        
        const torso = this.torso = this.scene.add.image(0, 0, 'atlas', 'Frank_camiseta');

        const papel = this.papel = this.scene.add.image(0, 0, 'atlas', 'Frank_papel');

        const tijeras = this.tijeras = this.scene.add.image(0, 0, 'atlas', 'Frank_Tijeras');
        torso.setOrigin(0.5, 1);
        this.add(torso);
        this.add(brazo_der);
        this.add(this.papel);
        this.add(this.tijeras);
        
        leg.visible = false;
        head.visible = false;
        brazo_der.visible = false;
        brazo_izq.visible = false;
        papel.visible = false;
        tijeras.visible = false;
        // this.playerMove();
    }

    show(part) {
        if (part !== 'hand') this[part].visible = true;
        else {
            this.brazo_der.visible = true;
            this.brazo_izq.visible = true;
        }
    }

    update() {
        const newX = this.x + this.move;
        if (newX > 100 && newX < 900) this.x = this.x + this.move;
    }

    playerMove(){
        this.scene.tweens.add({ 
            targets: this.brazo_der, 
            angle: -5, 
            ease: 'Sine.easeInOut', 
            duration: 200, 
            delay: 500, 
            repeat: -1, 
            yoyo: true 
        });
    }

    stopMove(){
        this.scene.tweens.add({ 
            targets: this.brazo_der, 
            angle: 0, 
            ease: 'Sine.easeInOut', 
            duration: 1, 
            delay: 0, 
            repeat: -1, 
            yoyo: false 
        });
    }

    playerChoise(choise){
        this.papel.visible = false;
        this.tijeras.visible = false;
        if(choise == 1){
            this.papel.setOrigin(0.5, 1);
            this.papel.visible = true;
        }else if(choise == 2){
            this.tijeras.setOrigin(0.5, 1);
            this.tijeras.visible = true;
        }
    }
}
