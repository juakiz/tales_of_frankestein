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

        this.buttons = [];

        this.create();
    }

    create() {
        const portrait = this.portrait = this.scene.add.image(0, 0, 'atlas', 'portrait_spider');
        portrait.setPosition(418 / 2, 298 / 2);
        portrait.setScale(0.73);
        this.add(portrait);
        portrait.setInteractive();
        portrait.on('pointerdown', () => {
            this.showed = true;
            this.head = new LegsGame(this.scene, this, 'LegsGame');
            this.parentContainer.showControls();
        });

        const part = this.part = this.scene.add.image(0, 0, 'atlas', 'boton_seleccion_piernas');
        part.setPosition(418 / 2, 298 / 2);
        part.setScale(0.5);
        this.add(part);
        part.setInteractive();
        part.on('pointerdown', () => {
            this.parentContainer.selectPart('leg');
        });

        const buttonDer = this.buttonDer = this.scene.add.image(0, 0, 'atlas', 'boton_flechaderecha');
        buttonDer.setPosition((418 / 2) + 5, 298 / 2);
        buttonDer.setScale(0.4);
        buttonDer.setOrigin(0, 0.5);
        this.add(buttonDer);
        buttonDer.setInteractive();
        buttonDer.on('pointerdown', () => {
            this.scene.player.move = 20;
            this.scene.player.scaleX = Math.abs(this.scene.player.scaleX);
            this.scene.input.on('pointerup', () => { this.scene.player.move = 0; })
        });

        const buttonIzq = this.buttonIzq = this.scene.add.image(0, 0, 'atlas', 'boton_flechaizquierda');
        buttonIzq.setPosition((418 / 2) - 5, 298 / 2);
        buttonIzq.setScale(0.4);
        buttonIzq.setOrigin(1, 0.5);
        this.add(buttonIzq);
        buttonIzq.setInteractive();
        buttonIzq.on('pointerdown', () => {
            this.scene.player.move = -20;
            this.scene.player.scaleX = Math.abs(this.scene.player.scaleX) * -1;
            this.scene.input.on('pointerup', () => { this.scene.player.move = 0; })
        });

        this.buttons.push(buttonDer);
        this.buttons.push(buttonIzq);
    }

    
    show(element) {
        this.portrait.visible = element === 'portrait';
        this.part.visible = element === 'part';
        this.buttons.forEach(el => el.visible = element === 'buttons');
    }

    hide() {
        this.portrait.visible = false;
        this.part.visible = false;
        this.buttons.forEach(el => el.visible = false);
    }

    update() {
    }
}
