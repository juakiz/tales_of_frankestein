import H from '../../../utils/helpers';
import HeadGame from './headGame';
import Monster from '../monster';

export default class Head extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        // h: 298
        // w: 418
        this.x = 13 + 418;
        this.y = 410;

        this.buttons = [];

        this.create();
    }

    create() {
        const portrait = this.portrait = this.scene.add.image(0, 0, 'portrait_effigie');
        portrait.setPosition(418 / 2, 298 / 2);
        portrait.setScale(0.73);
        this.add(portrait);

        portrait.setInteractive();
        portrait.on('pointerdown', () => {
            this.head = new HeadGame(this.scene, this, 'HeadGame');
            this.parentContainer.showControls();
            this.scene.monster.esfinje();
        });
        
        const part = this.part = this.scene.add.image(0, 0, 'boton_seleccion_cabeza');
        part.setPosition(418 / 2, 298 / 2);
        part.setScale(0.5);
        this.add(part);
        part.setInteractive();
        part.on('pointerdown', () => {
            this.parentContainer.selectPart('head');
        });

        const button1 = this.button1 = this.scene.add.image(0, 0, 'marco');
        button1.setScale(0.3, 1);
        button1.setPosition((418 / 2), (298 / 3) - (button1.displayWidth / 1.5));
        button1.angle = 90;
        this.add(button1);
        button1.setInteractive();
        button1.on('pointerdown', () => {
        });

        const button2 = this.button2 = this.scene.add.image(0, 0, 'marco');
        button2.setScale(0.3, 1);
        button2.setPosition((418 / 2), ((298 / 3) * 2) - (button1.displayWidth / 1.5));
        button2.angle = 90;
        this.add(button2);
        button2.setInteractive();
        button2.on('pointerdown', () => {
        });

        const button3 = this.button3 = this.scene.add.image(0, 0, 'marco');
        button3.setScale(0.3, 1);
        button3.setPosition((418 / 2), ((298 / 3) * 3) - (button1.displayWidth / 1.5));
        button3.angle = 90;
        this.add(button3);
        button3.setInteractive();
        button3.on('pointerdown', () => {
        });

        this.buttons.push(button1);
        this.buttons.push(button2);
        this.buttons.push(button3);
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
