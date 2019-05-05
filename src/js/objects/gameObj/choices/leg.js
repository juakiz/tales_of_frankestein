import H from '../../../utils/helpers';
import LegsGame from './legsGame';

export default class Leg extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        // h: 298
        // w: 418
        this.x = 13 + (418 * 2);
        this.y = 410;

        this.create();
    }

    create() {
        const portrait = this.portrait = this.scene.add.image(0, 0, 'portrait_spider');
        portrait.setPosition(418 / 2, 298 / 2);
        portrait.setScale(0.73);
        this.add(portrait);
        portrait.setInteractive();
        portrait.on('pointerdown', () => {
            this.head = new LegsGame(this.scene, this, 'LegsGame');
        });

        const part = this.part = this.scene.add.image(0, 0, 'boton_seleccion_piernas');
        part.setPosition(418 / 2, 298 / 2);
        part.setScale(0.5);
        this.add(part);

        const buttonDer = this.buttonDer = this.scene.add.image(0, 0, 'boton_flechaderecha');
        buttonDer.setPosition((418 / 2) + 5, 298 / 2);
        buttonDer.setScale(0.4);
        buttonDer.setOrigin(0, 0.5);
        this.add(buttonDer);

        const buttonIzq = this.buttonIzq = this.scene.add.image(0, 0, 'boton_flechaizquierda');
        buttonIzq.setPosition((418 / 2) - 5, 298 / 2);
        buttonIzq.setScale(0.4);
        buttonIzq.setOrigin(1, 0.5);
        this.add(buttonIzq);
    }

    update() {
    }
}
