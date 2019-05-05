import H from '../../../utils/helpers';
import ArmGame from './armGame';

export default class Head extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        // h: 298
        // w: 418
        this.x = 13 + 418;
        this.y = 410;

        this.create();
    }

    create() {
        const portrait = this.portrait = this.scene.add.image(0, 0, 'portrait_effigie');
        portrait.setPosition(418 / 2, 298 / 2);
        portrait.setScale(0.73);
        this.add(portrait);

        portrait.setInteractive();
        portrait.on('pointerdown', () => {
            this.head = new ArmGame(this.scene, this, 'ArmGame');
        });
        
        const part = this.part = this.scene.add.image(0, 0, 'boton_seleccion_cabeza');
        part.setPosition(418 / 2, 298 / 2);
        part.setScale(0.5);
        this.add(part);

        const button1 = this.button1 = this.scene.add.image(0, 0, 'marco');
        button1.setScale(0.3, 1);
        button1.setPosition((418 / 2), (298 / 3) - (button1.displayWidth / 1.5));
        button1.angle = 90;
        this.add(button1);

        const button2 = this.button2 = this.scene.add.image(0, 0, 'marco');
        button2.setScale(0.3, 1);
        button2.setPosition((418 / 2), ((298 / 3) * 2) - (button1.displayWidth / 1.5));
        button2.angle = 90;
        this.add(button2);

        const button3 = this.button3 = this.scene.add.image(0, 0, 'marco');
        button3.setScale(0.3, 1);
        button3.setPosition((418 / 2), ((298 / 3) * 3) - (button1.displayWidth / 1.5));
        button3.angle = 90;
        this.add(button3);
    }

    update() {
    }
}
